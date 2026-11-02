/**
 * Contact form integration boundary.
 *
 * Submissions are POSTed as JSON to the HTTPS endpoint in
 * VITE_CONTACT_FORM_ENDPOINT (Formspree, Basin, Web3Forms, or a custom
 * webhook). Success is reported only when that endpoint answers with a
 * 2xx status. With no endpoint configured the form reports itself as
 * unavailable rather than pretending to send.
 *
 * Payload:
 * {
 *   fullName, email, areaOfInterest, organization, message, submittedAt
 * }
 */

export const AREAS_OF_INTEREST = ['General enquiry', 'Proposed initiatives', 'Collaboration', 'Other'] as const;
export type AreaOfInterest = (typeof AREAS_OF_INTEREST)[number];

export interface ContactFormData {
  fullName: string;
  email: string;
  areaOfInterest: string;
  organization: string;
  message: string;
}

export type ContactErrors = Partial<Record<'fullName' | 'email' | 'areaOfInterest' | 'message', string>>;

export type SubmissionResult =
  | { status: 'sent' }
  | { status: 'failed'; message: string };

const endpoint = (import.meta.env.VITE_CONTACT_FORM_ENDPOINT as string | undefined)?.trim() ?? '';

/** True when a submission endpoint has been configured for this build. */
export const isContactFormAvailable = endpoint.length > 0;

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
  if (!isContactFormAvailable) {
    return { status: 'failed', message: 'Online enquiries are not available yet.' };
  }

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
        submittedAt: new Date().toISOString(),
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
