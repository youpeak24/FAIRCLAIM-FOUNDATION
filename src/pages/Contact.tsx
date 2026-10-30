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
  Loader2,
  Copy,
  Check
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

const INQUIRY_TOPICS = [
  "General Inquiry",
  "Community Partnership",
  "Civic Rights Education",
  "Dispute Mediation Framework",
  "Research & Policy Collaboration"
];

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
  const [isEmailCopied, setIsEmailCopied] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | 'unavailable' | null;
    message: string;
  }>({ type: null, message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof ContactValidationErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSelectTopic = (topic: string) => {
    setFormData((prev) => ({ ...prev, subject: topic }));
  };

  const handleCopyEmail = async () => {
    if (!organizationData.contact.email) return;
    try {
      await navigator.clipboard.writeText(organizationData.contact.email);
      setIsEmailCopied(true);
      setTimeout(() => setIsEmailCopied(false), 2500);
    } catch {
      // Fallback if clipboard API blocked
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitStatus({ type: null, message: '' });

    const validationErrors = validateContactForm(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
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
      <section className="pt-16 pb-20 md:pt-24 md:pb-28 bg-[#F4EFE6] border-b border-[#E8E1D5] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E8E1D5] mb-6 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#C85A32]" aria-hidden="true" />
              <span className="text-[11px] font-mono uppercase tracking-widest font-semibold text-[#142C20]">
                Communications & Dialogue
              </span>
            </div>
            <h1 className="font-editorial text-4xl sm:text-6xl text-[#142C20] font-semibold tracking-tight leading-[1.1] mb-6">
              Contact FAIRCLAIM FOUNDATION
            </h1>
            <p className="text-lg sm:text-xl text-[#365342] leading-relaxed">
              We welcome dialogue with community organizers, civic partners, and individuals seeking informational guidance regarding procedural fairness and dispute mitigation.
            </p>
          </div>
        </div>
      </section>

      {/* Main Form & Information Area */}
      <section className="py-20 sm:py-28 border-b border-[#E8E1D5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left: Interactive Enquiry Form */}
            <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-12 border border-[#E8E1D5] shadow-xs">
              <div className="mb-8">
                <span className="text-xs font-mono font-semibold uppercase tracking-[0.2em] text-[#C85A32] block mb-2">
                  Direct Inquiries
                </span>
                <h2 className="font-editorial text-2xl sm:text-3xl font-semibold text-[#142C20] mb-2">
                  Send a Formal Message
                </h2>
                <p className="text-sm text-[#465F50]">
                  Please complete the form below. Required fields are clearly identified.
                </p>
              </div>

              {/* Status Notifications */}
              {submitStatus.type === 'success' && (
                <div 
                  role="alert" 
                  className="mb-8 p-6 rounded-2xl bg-[#EAF4ED] border border-[#204533]/30 text-[#142C20] flex items-start gap-4"
                >
                  <CheckCircle2 className="w-6 h-6 text-[#204533] shrink-0 mt-0.5" />
                  <div className="text-sm leading-relaxed">
                    <p className="font-bold text-base mb-1">Enquiry Successfully Dispatched</p>
                    <p>{submitStatus.message}</p>
                  </div>
                </div>
              )}

              {submitStatus.type === 'error' && (
                <div 
                  role="alert" 
                  className="mb-8 p-6 rounded-2xl bg-[#FDF2F0] border border-[#C85A32]/40 text-[#9C381B] flex items-start gap-4"
                >
                  <AlertCircle className="w-6 h-6 text-[#C85A32] shrink-0 mt-0.5" />
                  <div className="text-sm leading-relaxed">
                    <p className="font-bold text-base mb-1">Submission Could Not Be Completed</p>
                    <p>{submitStatus.message}</p>
                  </div>
                </div>
              )}

              {submitStatus.type === 'unavailable' && (
                <div 
                  role="alert" 
                  className="mb-8 p-6 rounded-2xl bg-[#F4EFE6] border border-[#D5CBBC] text-[#142C20] flex items-start gap-4"
                >
                  <HelpCircle className="w-6 h-6 text-[#C85A32] shrink-0 mt-0.5" />
                  <div className="text-sm leading-relaxed">
                    <p className="font-bold text-base mb-1">Direct Correspondence Channel</p>
                    <p className="mb-2">{submitStatus.message}</p>
                    {organizationData.contact.email && (
                      <p>
                        Official Routing Email:{' '}
                        <button
                          type="button"
                          onClick={handleCopyEmail}
                          className="font-bold underline text-[#C85A32] hover:text-[#A54421] inline-flex items-center gap-1 cursor-pointer"
                        >
                          <span>{organizationData.contact.email}</span>
                          <Copy className="w-3.5 h-3.5" />
                        </button>
                      </p>
                    )}
                  </div>
                </div>
              )}

              {/* Topic Selector Chips */}
              <div className="mb-8">
                <label className="block text-xs font-mono font-semibold uppercase tracking-wider text-[#8C7A68] mb-3">
                  Select Topic of Inquiry:
                </label>
                <div className="flex flex-wrap gap-2">
                  {INQUIRY_TOPICS.map((topic) => {
                    const isSelected = formData.subject === topic;
                    return (
                      <button
                        key={topic}
                        type="button"
                        onClick={() => handleSelectTopic(topic)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-150 cursor-pointer focus-visible:ring-2 focus-visible:ring-[#C85A32] ${
                          isSelected
                            ? 'bg-[#142C20] text-[#FAF8F5] shadow-xs'
                            : 'bg-[#FAF8F5] text-[#365342] border border-[#E8E1D5] hover:bg-[#F4EFE6]'
                        }`}
                      >
                        {topic}
                      </button>
                    );
                  })}
                </div>
              </div>

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
                    className={`w-full px-4 py-3.5 rounded-2xl border text-sm text-[#142C20] bg-[#FAF8F5] transition-colors focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#C85A32] ${
                      errors.fullName ? 'border-[#C85A32] bg-[#FDF2F0]' : 'border-[#E8E1D5]'
                    }`}
                  />
                  {errors.fullName && (
                    <p id="fullName-error" className="mt-1.5 text-xs text-[#C85A32] flex items-center gap-1 font-medium">
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
                    className={`w-full px-4 py-3.5 rounded-2xl border text-sm text-[#142C20] bg-[#FAF8F5] transition-colors focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#C85A32] ${
                      errors.email ? 'border-[#C85A32] bg-[#FDF2F0]' : 'border-[#E8E1D5]'
                    }`}
                  />
                  {errors.email && (
                    <p id="email-error" className="mt-1.5 text-xs text-[#C85A32] flex items-center gap-1 font-medium">
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
                    className="w-full px-4 py-3.5 rounded-2xl border border-[#E8E1D5] text-sm text-[#142C20] bg-[#FAF8F5] transition-colors focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#C85A32]"
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
                    className="w-full px-4 py-3.5 rounded-2xl border border-[#E8E1D5] text-sm text-[#142C20] bg-[#FAF8F5] transition-colors focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#C85A32]"
                  />
                </div>

                {/* Message */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label 
                      htmlFor="message" 
                      className="block text-sm font-semibold text-[#142C20]"
                    >
                      Message or Inquiry Details <span className="text-[#C85A32]" aria-hidden="true">*</span>
                    </label>
                    <span className="text-xs text-[#8C7A68] font-mono">
                      {formData.message.length} chars
                    </span>
                  </div>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    aria-required="true"
                    aria-invalid={!!errors.message}
                    aria-describedby={errors.message ? "message-error" : undefined}
                    placeholder="Please outline the nature of your inquiry, community group details, or proposed collaboration..."
                    disabled={isSubmitting}
                    className={`w-full px-4 py-3.5 rounded-2xl border text-sm text-[#142C20] bg-[#FAF8F5] transition-colors focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#C85A32] resize-y ${
                      errors.message ? 'border-[#C85A32] bg-[#FDF2F0]' : 'border-[#E8E1D5]'
                    }`}
                  />
                  {errors.message && (
                    <p id="message-error" className="mt-1.5 text-xs text-[#C85A32] flex items-center gap-1 font-medium">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.message}</span>
                    </p>
                  )}
                </div>

                {/* Privacy Notice */}
                <p className="text-xs text-[#8C7A68] leading-relaxed">
                  Your submitted details will be held in strict confidence and utilized solely to respond to your specific communication. We do not transmit or sell information to commercial third parties.
                </p>

                {/* Submit Action Button */}
                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-2xl bg-[#142C20] hover:bg-[#204533] disabled:bg-[#8C7A68] text-[#FAF8F5] text-sm font-semibold shadow-md hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200 focus-visible:ring-2 focus-visible:ring-[#C85A32] cursor-pointer disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin text-[#C85A32]" />
                        <span>Transmitting Enquiry...</span>
                      </>
                    ) : (
                      <>
                        <span>Submit Formal Enquiry</span>
                        <Send className="w-4 h-4 text-[#C85A32]" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>

            {/* Right: Institutional Channels & SLA Cards */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Direct Channels Card with One-Click Copy */}
              <div className="bg-[#FAF8F5] rounded-3xl p-8 border border-[#E8E1D5] shadow-xs">
                <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-[#C85A32] block mb-1">
                  Official Communication
                </span>
                <h3 className="font-editorial text-2xl font-bold text-[#142C20] mb-6">
                  Direct Correspondence
                </h3>

                <div className="space-y-5">
                  {organizationData.contact.email && (
                    <div className="flex items-start gap-4">
                      <div className="w-11 h-11 rounded-2xl bg-white border border-[#E8E1D5] flex items-center justify-center text-[#142C20] shrink-0 shadow-xs">
                        <Mail className="w-5 h-5 text-[#C85A32]" />
                      </div>
                      <div className="flex-1">
                        <div className="text-xs font-mono uppercase font-semibold text-[#8C7A68]">
                          Email Routing
                        </div>
                        <div className="flex items-center gap-2 mt-1">
                          <a 
                            href={`mailto:${organizationData.contact.email}`}
                            className="text-sm font-semibold text-[#142C20] hover:text-[#C85A32] underline underline-offset-4 decoration-[#E8E1D5] break-all"
                          >
                            {organizationData.contact.email}
                          </a>
                          <button
                            type="button"
                            onClick={handleCopyEmail}
                            title="Copy email address"
                            className="p-1 rounded-md text-[#8C7A68] hover:text-[#142C20] hover:bg-[#E8E1D5] transition-colors cursor-pointer"
                            aria-label="Copy email address"
                          >
                            {isEmailCopied ? (
                              <Check className="w-3.5 h-3.5 text-green-600" />
                            ) : (
                              <Copy className="w-3.5 h-3.5" />
                            )}
                          </button>
                        </div>
                        {isEmailCopied && (
                          <span className="text-[10px] text-green-700 font-medium block mt-1">
                            Email copied to clipboard!
                          </span>
                        )}
                      </div>
                    </div>
                  )}

                  {organizationData.contact.operatingHours && (
                    <div className="flex items-start gap-4">
                      <div className="w-11 h-11 rounded-2xl bg-white border border-[#E8E1D5] flex items-center justify-center text-[#142C20] shrink-0 shadow-xs">
                        <Clock className="w-5 h-5 text-[#204533]" />
                      </div>
                      <div>
                        <div className="text-xs font-mono uppercase font-semibold text-[#8C7A68]">
                          Review Hours & Response Commitment
                        </div>
                        <div className="text-sm text-[#365342] mt-1 font-medium">
                          {organizationData.contact.operatingHours}
                        </div>
                        <div className="text-xs text-[#8C7A68] mt-0.5">
                          Inquiries reviewed within 2 business days.
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Physical Office Disclosure Note */}
              <div className="bg-white rounded-3xl p-8 border border-[#E8E1D5] shadow-xs">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-xl bg-[#F4EFE6] flex items-center justify-center text-[#8C7A68]">
                    <Building2 className="w-5 h-5 text-[#8C7A68]" />
                  </div>
                  <h4 className="font-editorial font-bold text-lg text-[#142C20]">
                    Administrative Location
                  </h4>
                </div>
                <p className="text-xs sm:text-sm text-[#465F50] leading-relaxed mb-4">
                  {organizationData.contact.addressNote}
                </p>
                <div className="text-[11px] text-[#8C7A68] italic border-t border-[#E8E1D5] pt-3">
                  In compliance with content integrity standards, unverified street addresses or simulated map coordinates are not published prior to official administrative confirmation.
                </div>
              </div>

              {/* Impartiality & Neutrality Pledge */}
              <div className="bg-white rounded-3xl p-8 border border-[#E8E1D5] shadow-xs">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-xl bg-[#F4EFE6] flex items-center justify-center text-[#C85A32]">
                    <ShieldCheck className="w-5 h-5 text-[#C85A32]" />
                  </div>
                  <h4 className="font-editorial font-bold text-lg text-[#142C20]">
                    Inquiry Neutrality
                  </h4>
                </div>
                <p className="text-xs sm:text-sm text-[#465F50] leading-relaxed">
                  FAIRCLAIM FOUNDATION handles all incoming inquiries with impartiality. Submissions are reviewed objectively by our civic coordination desk.
                </p>
              </div>

            </div>

          </div>
        </div>
      </section>
    </div>
  );
};
