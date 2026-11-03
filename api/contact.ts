/**
 * Vercel serverless function: POST /api/contact
 *
 * Validates a contact-form submission and emails it to the foundation's owner
 * through SMTP using nodemailer. All configuration comes from environment
 * variables (see .env.example); nothing secret is ever sent to the browser.
 */
import nodemailer from 'nodemailer';

// Minimal shape of the request/response objects Vercel hands to Node functions.
interface ApiRequest {
  method?: string;
  body?: unknown;
}
interface ApiResponse {
  status(code: number): ApiResponse;
  setHeader(name: string, value: string): void;
  json(body: unknown): void;
}

// Keep in step with src/services/contact.ts
const AREAS_OF_INTEREST = ['General enquiry', 'Proposed initiatives', 'Collaboration', 'Other'];
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

const env = (name: string) => process.env[name]?.trim() ?? '';

/** Collapse to a single line so user input can never inject extra mail headers. */
const oneLine = (value: string) => value.replace(/[\r\n]+/g, ' ').trim();

const escapeHtml = (value: string) =>
  value.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]!);

const asString = (value: unknown) => (typeof value === 'string' ? value : '');

function parseBody(body: unknown): Record<string, unknown> {
  if (typeof body === 'string') {
    try {
      const parsed: unknown = JSON.parse(body);
      return parsed && typeof parsed === 'object' ? (parsed as Record<string, unknown>) : {};
    } catch {
      return {};
    }
  }
  return body && typeof body === 'object' ? (body as Record<string, unknown>) : {};
}

export default async function handler(req: ApiRequest, res: ApiResponse) {
  res.setHeader('Cache-Control', 'no-store');

  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ message: 'Method not allowed.' });
  }

  const body = parseBody(req.body);

  // Honeypot: real visitors never see or fill this field. Pretend success so bots move on.
  if (asString(body.website).trim()) {
    return res.status(200).json({ ok: true });
  }

  const fullName = oneLine(asString(body.fullName));
  const email = oneLine(asString(body.email));
  const areaOfInterest = oneLine(asString(body.areaOfInterest));
  const organization = oneLine(asString(body.organization));
  const message = asString(body.message).trim();

  if (fullName.length < 2 || fullName.length > 120) {
    return res.status(400).json({ message: 'Please enter your full name.' });
  }
  if (!EMAIL_PATTERN.test(email) || email.length > 254) {
    return res.status(400).json({ message: 'Please enter a valid email address.' });
  }
  if (!AREAS_OF_INTEREST.includes(areaOfInterest)) {
    return res.status(400).json({ message: 'Please choose an area of interest.' });
  }
  if (organization.length > 160) {
    return res.status(400).json({ message: 'Organization name is too long.' });
  }
  if (message.length < 10 || message.length > 4000) {
    return res.status(400).json({ message: 'Please write a message between 10 and 4,000 characters.' });
  }

  const host = env('SMTP_HOST');
  const user = env('SMTP_USER');
  const pass = env('SMTP_PASS');
  const to = env('CONTACT_TO_EMAIL') || user;
  const port = Number(env('SMTP_PORT')) || 465;
  const secure = env('SMTP_SECURE') ? env('SMTP_SECURE').toLowerCase() === 'true' : port === 465;
  const from = env('CONTACT_FROM_EMAIL') || user;

  if (!host || !user || !pass || !to) {
    console.error('Contact form: SMTP_HOST, SMTP_USER, SMTP_PASS and CONTACT_TO_EMAIL must be set.');
    return res.status(503).json({ message: 'Online enquiries are not available right now. Please try again later.' });
  }

  const submittedAt = new Date().toUTCString();
  const text = [
    'New enquiry from the FAIRCLAIM FOUNDATION website',
    '',
    `Name:             ${fullName}`,
    `Email:            ${email}`,
    `Area of interest: ${areaOfInterest}`,
    `Organization:     ${organization || '-'}`,
    `Received:         ${submittedAt}`,
    '',
    'Message:',
    message,
  ].join('\n');

  const row = (label: string, value: string) =>
    `<tr><td style="padding:6px 16px 6px 0;color:#555;white-space:nowrap;vertical-align:top">${label}</td><td style="padding:6px 0">${value}</td></tr>`;
  const html = `
    <div style="font-family:Arial,Helvetica,sans-serif;font-size:15px;line-height:1.6;color:#111">
      <h2 style="margin:0 0 16px;font-size:18px">New enquiry from the FAIRCLAIM FOUNDATION website</h2>
      <table style="border-collapse:collapse">
        ${row('Name', escapeHtml(fullName))}
        ${row('Email', `<a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a>`)}
        ${row('Area of interest', escapeHtml(areaOfInterest))}
        ${row('Organization', escapeHtml(organization) || '-')}
        ${row('Received', escapeHtml(submittedAt))}
      </table>
      <h3 style="margin:24px 0 8px;font-size:15px">Message</h3>
      <div style="white-space:pre-wrap;border-left:3px solid #c9a24b;padding-left:14px">${escapeHtml(message)}</div>
    </div>`;

  try {
    const transporter = nodemailer.createTransport({ host, port, secure, auth: { user, pass } });
    await transporter.sendMail({
      from: `"FAIRCLAIM FOUNDATION Website" <${from}>`,
      to,
      replyTo: `"${fullName.replace(/["<>]/g, '')}" <${email}>`,
      subject: `[Website enquiry] ${areaOfInterest} - ${fullName}`,
      text,
      html,
    });
    return res.status(200).json({ ok: true });
  } catch (error) {
    console.error('Contact form: sending failed', error);
    return res.status(502).json({ message: 'Your message could not be delivered. Please try again in a little while.' });
  }
}
