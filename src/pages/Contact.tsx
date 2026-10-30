import React, { useState } from 'react';
import { 
  Mail, 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  Clock, 
  ShieldCheck, 
  Building2,
  HelpCircle,
  Loader2
} from 'lucide-react';
import { organizationData } from '../data/organization';
import type { 
  ContactFormData, 
  ContactValidationErrors 
} from '../services/contact';
import { 
  validateContactForm, 
  submitContactForm 
} from '../services/contact';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState<ContactValidationErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | 'unavailable' | null;
    message: string;
  }>({ type: null, message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear field-level error on change
    if (errors[name as keyof ContactValidationErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Reset status notification
    setSubmitStatus({ type: null, message: '' });

    // Client-side validation
    const validationErrors = validateContactForm(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      // Focus first error field for accessibility
      const firstErrorKey = Object.keys(validationErrors)[0];
      const element = document.getElementById(firstErrorKey);
      element?.focus();
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    try {
      const response = await submitContactForm(formData);

      if (response.success) {
        setSubmitStatus({
          type: 'success',
          message: response.message
        });
        // Clear form upon actual verified success
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        });
      } else if (response.isEndpointMissing) {
        setSubmitStatus({
          type: 'unavailable',
          message: response.message
        });
      } else {
        setSubmitStatus({
          type: 'error',
          message: response.message
        });
      }
    } catch {
      setSubmitStatus({
        type: 'error',
        message: 'An unexpected connection issue occurred. Your message has been retained. Please try again.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col">
      {/* Header Banner */}
      <section className="pt-14 pb-16 md:pt-20 md:pb-24 bg-[#F4EFE6] border-b border-[#E8E1D5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-[#E8E1D5] mb-4">
              <span className="w-2 h-2 rounded-full bg-[#C85A32]" aria-hidden="true" />
              <span className="text-xs uppercase tracking-widest font-semibold text-[#142C20]">
                Communications & Inquiries
              </span>
            </div>
            <h1 className="font-editorial text-4xl sm:text-5xl lg:text-6xl text-[#142C20] font-semibold tracking-tight leading-tight mb-6">
              Contact FAIRCLAIM FOUNDATION
            </h1>
            <p className="text-lg sm:text-xl text-[#365342] leading-relaxed">
              We welcome dialogue with community organizers, civic partners, and individuals seeking informational guidance regarding procedural fairness.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Area: Form & Contact Details */}
      <section className="py-16 sm:py-24 border-b border-[#E8E1D5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left: Contact Enquiry Form */}
            <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-10 border border-[#E8E1D5] shadow-xs">
              <div className="mb-8">
                <h2 className="font-editorial text-2xl sm:text-3xl font-semibold text-[#142C20] mb-2">
                  Submit an Inquiry
                </h2>
                <p className="text-sm text-[#465F50]">
                  Please complete the form below. Required fields are clearly marked.
                </p>
              </div>

              {/* Status Notifications */}
              {submitStatus.type === 'success' && (
                <div 
                  role="alert" 
                  className="mb-8 p-5 rounded-2xl bg-[#EAF4ED] border border-[#204533]/30 text-[#142C20] flex items-start gap-3.5"
                >
                  <CheckCircle2 className="w-5 h-5 text-[#204533] shrink-0 mt-0.5" />
                  <div className="text-sm leading-relaxed">
                    <p className="font-semibold mb-1">Enquiry Successfully Dispatched</p>
                    <p>{submitStatus.message}</p>
                  </div>
                </div>
              )}

              {submitStatus.type === 'error' && (
                <div 
                  role="alert" 
                  className="mb-8 p-5 rounded-2xl bg-[#FDF2F0] border border-[#C85A32]/40 text-[#9C381B] flex items-start gap-3.5"
                >
                  <AlertCircle className="w-5 h-5 text-[#C85A32] shrink-0 mt-0.5" />
                  <div className="text-sm leading-relaxed">
                    <p className="font-semibold mb-1">Submission Could Not Be Completed</p>
                    <p>{submitStatus.message}</p>
                  </div>
                </div>
              )}

              {submitStatus.type === 'unavailable' && (
                <div 
                  role="alert" 
                  className="mb-8 p-5 rounded-2xl bg-[#F4EFE6] border border-[#D5CBBC] text-[#142C20] flex items-start gap-3.5"
                >
                  <HelpCircle className="w-5 h-5 text-[#C85A32] shrink-0 mt-0.5" />
                  <div className="text-sm leading-relaxed">
                    <p className="font-semibold mb-1">Direct Communication Channel</p>
                    <p className="mb-2">{submitStatus.message}</p>
                    {organizationData.contact.email && (
                      <p>
                        Official Email:{' '}
                        <a 
                          href={`mailto:${organizationData.contact.email}`} 
                          className="font-bold underline text-[#C85A32]"
                        >
                          {organizationData.contact.email}
                        </a>
                      </p>
                    )}
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} noValidate className="space-y-6">
                {/* Full Name */}
                <div>
                  <label 
                    htmlFor="fullName" 
                    className="block text-sm font-semibold text-[#142C20] mb-2"
                  >
                    Full Name <span className="text-[#C85A32]" aria-hidden="true">*</span>
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    aria-required="true"
                    aria-invalid={!!errors.fullName}
                    aria-describedby={errors.fullName ? "fullName-error" : undefined}
                    placeholder="e.g. Jane Doe"
                    disabled={isSubmitting}
                    className={`w-full px-4 py-3 rounded-xl border text-sm text-[#142C20] bg-[#FAF8F5] transition-colors focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#C85A32] ${
                      errors.fullName ? 'border-[#C85A32] bg-[#FDF2F0]' : 'border-[#E8E1D5]'
                    }`}
                  />
                  {errors.fullName && (
                    <p id="fullName-error" className="mt-1.5 text-xs text-[#C85A32] flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.fullName}</span>
                    </p>
                  )}
                </div>

                {/* Email Address */}
                <div>
                  <label 
                    htmlFor="email" 
                    className="block text-sm font-semibold text-[#142C20] mb-2"
                  >
                    Email Address <span className="text-[#C85A32]" aria-hidden="true">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    aria-required="true"
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? "email-error" : undefined}
                    placeholder="name@example.org"
                    disabled={isSubmitting}
                    className={`w-full px-4 py-3 rounded-xl border text-sm text-[#142C20] bg-[#FAF8F5] transition-colors focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#C85A32] ${
                      errors.email ? 'border-[#C85A32] bg-[#FDF2F0]' : 'border-[#E8E1D5]'
                    }`}
                  />
                  {errors.email && (
                    <p id="email-error" className="mt-1.5 text-xs text-[#C85A32] flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.email}</span>
                    </p>
                  )}
                </div>

                {/* Phone Number (Optional) */}
                <div>
                  <label 
                    htmlFor="phone" 
                    className="block text-sm font-semibold text-[#142C20] mb-2"
                  >
                    Phone Number <span className="text-xs font-normal text-[#8C7A68]">(Optional)</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+1 (555) 000-0000"
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 rounded-xl border border-[#E8E1D5] text-sm text-[#142C20] bg-[#FAF8F5] transition-colors focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#C85A32]"
                  />
                </div>

                {/* Subject (Optional) */}
                <div>
                  <label 
                    htmlFor="subject" 
                    className="block text-sm font-semibold text-[#142C20] mb-2"
                  >
                    Subject of Inquiry <span className="text-xs font-normal text-[#8C7A68]">(Optional)</span>
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="e.g. Community Dialogue Inquiry"
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 rounded-xl border border-[#E8E1D5] text-sm text-[#142C20] bg-[#FAF8F5] transition-colors focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#C85A32]"
                  />
                </div>

                {/* Message */}
                <div>
                  <label 
                    htmlFor="message" 
                    className="block text-sm font-semibold text-[#142C20] mb-2"
                  >
                    Message or Details <span className="text-[#C85A32]" aria-hidden="true">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    aria-required="true"
                    aria-invalid={!!errors.message}
                    aria-describedby={errors.message ? "message-error" : undefined}
                    placeholder="Please outline the nature of your inquiry or proposed collaboration..."
                    disabled={isSubmitting}
                    className={`w-full px-4 py-3 rounded-xl border text-sm text-[#142C20] bg-[#FAF8F5] transition-colors focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#C85A32] resize-y ${
                      errors.message ? 'border-[#C85A32] bg-[#FDF2F0]' : 'border-[#E8E1D5]'
                    }`}
                  />
                  {errors.message && (
                    <p id="message-error" className="mt-1.5 text-xs text-[#C85A32] flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.message}</span>
                    </p>
                  )}
                </div>

                {/* Privacy & Anti-Spam Notice */}
                <p className="text-xs text-[#8C7A68] leading-relaxed">
                  Your submitted details will be held in strict confidence and utilized solely to respond to your specific inquiry. We do not transmit or sell information to third parties.
                </p>

                {/* Submit Action Button */}
                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-[#142C20] hover:bg-[#204533] disabled:bg-[#8C7A68] text-[#FAF8F5] text-sm font-semibold shadow-md transition-all focus-visible:ring-2 focus-visible:ring-[#C85A32] cursor-pointer disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin text-[#C85A32]" />
                        <span>Sending Enquiry...</span>
                      </>
                    ) : (
                      <>
                        <span>Submit Enquiry</span>
                        <Send className="w-4 h-4 text-[#C85A32]" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>

            {/* Right: Institutional Information Cards */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Direct Channels Card */}
              <div className="bg-[#FAF8F5] rounded-3xl p-8 border border-[#E8E1D5]">
                <h3 className="font-editorial text-xl font-bold text-[#142C20] mb-4">
                  Official Channels
                </h3>

                <div className="space-y-4">
                  {organizationData.contact.email && (
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-xl bg-white border border-[#E8E1D5] flex items-center justify-center text-[#142C20] shrink-0">
                        <Mail className="w-5 h-5 text-[#C85A32]" />
                      </div>
                      <div>
                        <div className="text-xs uppercase font-semibold text-[#8C7A68]">
                          Email Inquiry
                        </div>
                        <a 
                          href={`mailto:${organizationData.contact.email}`}
                          className="text-sm font-semibold text-[#142C20] hover:text-[#C85A32] underline underline-offset-4 decoration-[#E8E1D5] break-all"
                        >
                          {organizationData.contact.email}
                        </a>
                      </div>
                    </div>
                  )}

                  {organizationData.contact.operatingHours && (
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-xl bg-white border border-[#E8E1D5] flex items-center justify-center text-[#142C20] shrink-0">
                        <Clock className="w-5 h-5 text-[#204533]" />
                      </div>
                      <div>
                        <div className="text-xs uppercase font-semibold text-[#8C7A68]">
                          Review Hours
                        </div>
                        <div className="text-sm text-[#365342]">
                          {organizationData.contact.operatingHours}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Physical Office Disclosure Note */}
              <div className="bg-white rounded-3xl p-8 border border-[#E8E1D5]">
                <div className="flex items-center gap-3 mb-3">
                  <Building2 className="w-5 h-5 text-[#8C7A68]" />
                  <h4 className="font-editorial font-bold text-base text-[#142C20]">
                    Administrative Location
                  </h4>
                </div>
                <p className="text-xs sm:text-sm text-[#465F50] leading-relaxed mb-3">
                  {organizationData.contact.addressNote}
                </p>
                <div className="text-[11px] text-[#8C7A68] italic border-t border-[#E8E1D5] pt-3">
                  In accordance with content integrity guidelines, an unverified street address or placeholder map is not displayed prior to formal registration publication.
                </div>
              </div>

              {/* Security & Confidentiality */}
              <div className="bg-white rounded-3xl p-8 border border-[#E8E1D5]">
                <div className="flex items-center gap-3 mb-3">
                  <ShieldCheck className="w-5 h-5 text-[#C85A32]" />
                  <h4 className="font-editorial font-bold text-base text-[#142C20]">
                    Inquiry Neutrality
                  </h4>
                </div>
                <p className="text-xs sm:text-sm text-[#465F50] leading-relaxed">
                  FAIRCLAIM FOUNDATION treats all incoming enquiries with impartiality. Communications are reviewed objectively by our civic coordination team.
                </p>
              </div>

            </div>

          </div>
        </div>
      </section>
    </div>
  );
};
