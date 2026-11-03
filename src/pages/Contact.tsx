import { cloneElement, useRef, useState } from 'react';
import type { ChangeEvent, FormEvent, ReactElement, ReactNode } from 'react';
import { Check, TriangleAlert } from 'lucide-react';
import { PageHead } from '../components/ui';
import { idx } from '../lib/stagger';
import { hasConfirmedContact, organization } from '../data/organization';
import {
  AREAS_OF_INTEREST,
  submitContactForm,
  validateContactForm,
  validateField,
} from '../services/contact';
import type { ContactErrors, ContactFormData } from '../services/contact';

const EMPTY: ContactFormData = { fullName: '', email: '', areaOfInterest: '', organization: '', message: '', website: '' };

const VALIDATED = new Set<string>(['fullName', 'email', 'areaOfInterest', 'message']);

type Phase = 'idle' | 'sending' | 'sent' | 'failed';

export function Contact() {
  const [values, setValues] = useState<ContactFormData>(EMPTY);
  const [errors, setErrors] = useState<ContactErrors>({});
  const [phase, setPhase] = useState<Phase>('idle');
  const [failure, setFailure] = useState('');
  const successRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    const next = { ...values, [name]: value };
    setValues(next);
    // Clear an error as soon as the field becomes valid
    if (errors[name as keyof ContactErrors] && !validateField(name as keyof ContactErrors, next)) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const onBlur = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const name = e.target.name as keyof ContactErrors;
    if (!VALIDATED.has(name)) return;
    if (!values[name].trim()) return; // don't scold fields the visitor has only tabbed through
    setErrors((prev) => ({ ...prev, [name]: validateField(name, values) }));
  };

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (phase === 'sending') return;

    const found = validateContactForm(values);
    setErrors(found);
    const firstInvalid = (['fullName', 'email', 'areaOfInterest', 'message'] as const).find((k) => found[k]);
    if (firstInvalid) {
      formRef.current?.querySelector<HTMLElement>(`[name="${firstInvalid}"]`)?.focus();
      return;
    }

    setPhase('sending');
    setFailure('');
    const result = await submitContactForm(values);
    if (result.status === 'sent') {
      setPhase('sent');
      setValues(EMPTY);
      requestAnimationFrame(() => successRef.current?.focus());
    } else {
      setPhase('failed');
      setFailure(result.message);
    }
  };

  const errorCount = Object.values(errors).filter(Boolean).length;

  return (
    <>
      <PageHead
        eyebrow="Contact"
        title="Let’s begin a meaningful conversation."
        intro="Share a question, an idea, or an interest in collaborating."
      />

      <section aria-label="Contact form" className="bg-white pb-[4.25rem] pt-12 md:pb-24 md:pt-16 lg:pb-[7.5rem]">
        <div className="container-x grid gap-12 lg:grid-cols-12 lg:gap-10">
          <aside className="lg:col-span-4" aria-label="Before you write">
            <div data-reveal>
              <h2 className="font-serif text-[1.75rem] leading-tight">Before you write</h2>
              <ul className="mt-5 space-y-4 text-ink-soft">
                <li className="flex gap-3">
                  <span aria-hidden="true" className="mt-[0.7em] h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                  <span>A few lines is plenty: what you’re interested in and a brief introduction.</span>
                </li>
                <li className="flex gap-3">
                  <span aria-hidden="true" className="mt-[0.7em] h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                  <span>
                    Please don’t include sensitive case documents or personal details beyond what’s needed to reply.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span aria-hidden="true" className="mt-[0.7em] h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                  <span>
                    Sending an enquiry does not open a legal case or guarantee assistance, and nothing here is legal
                    advice.
                  </span>
                </li>
              </ul>
            </div>

            {hasConfirmedContact && (
              <div className="mt-10 border-t border-line pt-8" data-reveal style={idx(1)}>
                <h2 className="font-serif text-[1.5rem] leading-tight">Direct contact</h2>
                <ul className="mt-4 space-y-2 text-ink-soft">
                  {organization.contact.email && (
                    <li>
                      <a className="link-underline font-semibold text-brand" href={`mailto:${organization.contact.email}`}>
                        {organization.contact.email}
                      </a>
                    </li>
                  )}
                  {organization.contact.phone && <li>{organization.contact.phone}</li>}
                  {organization.contact.address && <li>{organization.contact.address}</li>}
                </ul>
              </div>
            )}
          </aside>

          <div className="lg:col-span-7 lg:col-start-6" data-reveal="fade">
            <div className="rounded-[6px] border border-line bg-ivory p-6 shadow-[var(--shadow-soft)] sm:p-10">
              {phase === 'sent' ? (
                <div
                  ref={successRef}
                  tabIndex={-1}
                  role="status"
                  className="py-6 text-center outline-none sm:py-10"
                >
                  <span className="mx-auto grid h-14 w-14 place-items-center rounded-full border border-gold bg-gold-pale text-navy">
                    <Check className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <h2 className="mt-6 font-serif text-[2rem] leading-tight">Thank you. Your message was sent.</h2>
                  <p className="mx-auto mt-3 max-w-md text-ink-soft">
                    We appreciate you taking the time to share your perspective.
                  </p>
                  <button type="button" className="btn btn-ghost mt-8" onClick={() => setPhase('idle')}>
                    Send another message
                  </button>
                </div>
              ) : (
                <form ref={formRef} onSubmit={onSubmit} noValidate aria-describedby="form-status">
                  <div id="form-status" aria-live="polite" className="empty:hidden">
                    {phase === 'failed' && (
                      <div className="mb-8 flex gap-3 rounded-[6px] border border-[#b3261e]/40 bg-[#fdf1ef] p-4 text-[0.9375rem] text-[#7a1a14]" role="alert">
                        <TriangleAlert className="mt-0.5 h-5 w-5 shrink-0" aria-hidden="true" />
                        <p>{failure}</p>
                      </div>
                    )}
                    {errorCount > 0 && phase !== 'failed' && (
                      <p className="mb-8 text-[0.9375rem] font-semibold text-[#7a1a14]">
                        Please check {errorCount === 1 ? 'the highlighted field' : `the ${errorCount} highlighted fields`} below.
                      </p>
                    )}
                  </div>

                  {/* Honeypot: invisible to people and assistive tech, tempting to bots. */}
                  <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
                    <label>
                      Leave this field empty
                      <input
                        type="text"
                        name="website"
                        tabIndex={-1}
                        autoComplete="off"
                        value={values.website}
                        onChange={onChange}
                      />
                    </label>
                  </div>

                  <div className="grid gap-6 sm:grid-cols-2">
                    <Field label="Full name" name="fullName" error={errors.fullName} required>
                      <input
                        type="text"
                        name="fullName"
                        autoComplete="name"
                        value={values.fullName}
                        onChange={onChange}
                        onBlur={onBlur}
                        className="field-input"
                      />
                    </Field>
                    <Field label="Email address" name="email" error={errors.email} required>
                      <input
                        type="email"
                        name="email"
                        autoComplete="email"
                        inputMode="email"
                        value={values.email}
                        onChange={onChange}
                        onBlur={onBlur}
                        className="field-input"
                      />
                    </Field>
                    <Field label="Area of interest" name="areaOfInterest" error={errors.areaOfInterest} required>
                      <select
                        name="areaOfInterest"
                        value={values.areaOfInterest}
                        onChange={onChange}
                        onBlur={onBlur}
                        className="field-input"
                      >
                        <option value="" disabled>
                          Select an area
                        </option>
                        {AREAS_OF_INTEREST.map((a) => (
                          <option key={a} value={a}>
                            {a}
                          </option>
                        ))}
                      </select>
                    </Field>
                    <Field label="Organization" name="organization" hint="Optional">
                      <input
                        type="text"
                        name="organization"
                        autoComplete="organization"
                        value={values.organization}
                        onChange={onChange}
                        className="field-input"
                      />
                    </Field>
                    <div className="sm:col-span-2">
                      <Field label="Message" name="message" error={errors.message} required>
                        <textarea
                          name="message"
                          rows={6}
                          value={values.message}
                          onChange={onChange}
                          onBlur={onBlur}
                          className="field-input resize-y"
                        />
                      </Field>
                    </div>
                  </div>

                  <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <button type="submit" className="btn btn-primary" disabled={phase === 'sending'}>
                      {phase === 'sending' ? 'Sending…' : 'Send message'}
                    </button>
                    <p className="text-[0.8125rem] text-ink-soft">Fields marked * are required.</p>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

interface FieldProps {
  label: string;
  name: string;
  error?: string;
  required?: boolean;
  hint?: string;
  children: ReactNode;
}

/** Permanent label, error message and hint wired to the control via aria attributes. */
function Field({ label, name, error, required, hint, children }: FieldProps) {
  const id = `field-${name}`;
  const errId = `${id}-error`;
  return (
    <div>
      <label htmlFor={id} className="mb-2 flex items-baseline justify-between text-[0.9375rem] font-semibold text-navy">
        <span>
          {label}
          {required && (
            <span aria-hidden="true" className="ml-0.5 text-gold-ink">
              *
            </span>
          )}
        </span>
        {hint && <span className="text-[0.8125rem] font-normal text-ink-soft">{hint}</span>}
      </label>
      {cloneElement(children as ReactElement<Record<string, unknown>>, {
        id,
        required,
        'aria-invalid': error ? true : undefined,
        'aria-describedby': error ? errId : undefined,
      })}
      {error && (
        <p id={errId} className="mt-2 flex items-start gap-2 text-[0.875rem] font-medium text-[#a1241b]">
          <TriangleAlert className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
          {error}
        </p>
      )}
    </div>
  );
}
