/**
 * Contact form integration boundary.
 *
 * Submissions are POSTed as JSON to the Vercel serverless function at
 * /api/contact (api/contact.ts), which emails them to the owner with
 * nodemailer. Success is reported only when that function answers with a
 * 2xx status.
 *
 * Payload:
 * {
 *   fullName, email, areaOfInterest, organization, message, website
 * }
 * `website` is a honeypot that must stay empty.
 */

export const AREAS_OF_INTEREST = ['General enquiry', 'Proposed initiatives', 'Collaboration', 'Other'] as const;
export type AreaOfInterest = (typeof AREAS_OF_INTEREST)[number];

export interface ContactFormData {
  fullName: string;
  email: string;
  areaOfInterest: string;
  organization: string;
  message: string;
  /** Honeypot: hidden from people, filled in by bots. */
  website: string;
}

export type ContactErrors = Partial<Record<'fullName' | 'email' | 'areaOfInterest' | 'message', string>>;

export type SubmissionResult =
  | { status: 'sent' }
  | { status: 'failed'; message: string };

const endpoint = '/api/contact';

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export function validateField(name: keyof ContactErrors, data: ContactFormData): string | undefined {
  switch (name) {
    case 'fullName': {
      const v = data.fullName.trim();
      if (!v) return 'Please enter your full name.';
      if (v.length < 2) return 'Your name should be at least 2 characters.';
      return undefined;
    }
    case 'email': {
      const v = data.email.trim();
      if (!v) return 'Please enter your email address so we can reply.';
      if (!EMAIL_PATTERN.test(v)) return 'That email address doesn’t look right. It should look like name@example.org.';
      return undefined;
    }
    case 'areaOfInterest':
      return (AREAS_OF_INTEREST as readonly string[]).includes(data.areaOfInterest)
        ? undefined
        : 'Please choose the area that fits best.';
    case 'message': {
      const v = data.message.trim();
      if (!v) return 'Please write a short message.';
      if (v.length < 10) return 'Please add a little more detail (at least 10 characters).';
      if (v.length > 4000) return 'Please keep your message under 4,000 characters.';
      return undefined;
    }
  }
}

export function validateContactForm(data: ContactFormData): ContactErrors {
  const errors: ContactErrors = {};
  for (const key of ['fullName', 'email', 'areaOfInterest', 'message'] as const) {
    const error = validateField(key, data);
    if (error) errors[key] = error;
  }
  return errors;
}

export async function submitContactForm(data: ContactFormData): Promise<SubmissionResult> {
  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({
        fullName: data.fullName.trim(),
        email: data.email.trim(),
        areaOfInterest: data.areaOfInterest,
        organization: data.organization.trim(),
        message: data.message.trim(),
        website: data.website,
      }),
    });

    if (response.ok) return { status: 'sent' };

    let message = 'Your message could not be delivered. Please try again in a little while.';
    try {
      const body = await response.json();
      if (typeof body?.message === 'string') message = body.message;
      else if (typeof body?.error === 'string') message = body.error;
    } catch {
      /* keep the default message */
    }
    return { status: 'failed', message };
  } catch {
    return {
      status: 'failed',
      message: 'We couldn’t reach the server, so your message was not sent. Your text is still here. Please check your connection and try again.',
    };
  }
}
