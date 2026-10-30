/**
 * Contact Form Integration Boundary Service
 * 
 * Supports external form submission services (e.g. Formspree, Basin, Web3Forms,
 * or custom HTTPS webhook endpoints).
 * 
 * Request payload sent as JSON:
 * {
 *   "fullName": string,
 *   "email": string,
 *   "phone": string,
 *   "subject": string,
 *   "message": string
 * }
 * 
 * Expected response: HTTP 200-299 status code.
 */

export interface ContactFormData {
  fullName: string;
  email: string;
  phone?: string;
  subject?: string;
  message: string;
}

export interface ContactValidationErrors {
  fullName?: string;
  email?: string;
  phone?: string;
  subject?: string;
  message?: string;
}

export interface SubmissionResponse {
  success: boolean;
  message: string;
  isEndpointMissing?: boolean;
}

/**
 * Validates the contact form fields according to accessibility and integrity rules.
 */
export function validateContactForm(data: ContactFormData): ContactValidationErrors {
  const errors: ContactValidationErrors = {};

  const trimmedName = data.fullName.trim();
  if (!trimmedName) {
    errors.fullName = "Please enter your full name.";
  } else if (trimmedName.length < 2) {
    errors.fullName = "Name must be at least 2 characters.";
  }

  const trimmedEmail = data.email.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!trimmedEmail) {
    errors.email = "Please provide your email address.";
  } else if (!emailRegex.test(trimmedEmail)) {
    errors.email = "Please enter a valid email address (e.g., name@example.org).";
  }

  const trimmedMessage = data.message.trim();
  if (!trimmedMessage) {
    errors.message = "Please write your message or enquiry.";
  } else if (trimmedMessage.length < 10) {
    errors.message = "Message must be at least 10 characters so we can understand your enquiry.";
  }

  return errors;
}

/**
 * Submits the form data to the external endpoint configured via VITE_CONTACT_FORM_ENDPOINT.
 * If no endpoint is configured, returns a clean non-technical fallback notice.
 */
export async function submitContactForm(data: ContactFormData): Promise<SubmissionResponse> {
  const endpoint = import.meta.env.VITE_CONTACT_FORM_ENDPOINT?.trim();

  // Graceful degradation when no external form provider has been wired up
  if (!endpoint) {
    return {
      success: false,
      isEndpointMissing: true,
      message: "Online enquiries are currently unavailable. Please reach us directly via our official email address."
    };
  }

  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        fullName: data.fullName.trim(),
        email: data.email.trim(),
        phone: data.phone?.trim() || "",
        subject: data.subject?.trim() || "General Inquiry",
        message: data.message.trim(),
        submittedAt: new Date().toISOString()
      })
    });

    if (response.ok) {
      return {
        success: true,
        message: "Thank you for reaching out. Your enquiry has been received by FAIRCLAIM FOUNDATION."
      };
    } else {
      let serverError = "Unable to deliver your message at this time. Please try again shortly or contact us by email.";
      try {
        const result = await response.json();
        if (result && typeof result.message === "string") {
          serverError = result.message;
        } else if (result && typeof result.error === "string") {
          serverError = result.error;
        }
      } catch {
        // Fall back to serverError
      }
      return {
        success: false,
        message: serverError
      };
    }
  } catch {
    return {
      success: false,
      message: "A network connectivity issue prevented message delivery. Your text has been preserved—please try again in a moment."
    };
  }
}
