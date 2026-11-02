import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Info } from 'lucide-react';
import { PageHead } from './ui';

export interface PolicySection {
  title: string;
  body: ReactNode;
}

interface PolicyPageProps {
  eyebrow: string;
  title: string;
  intro: string;
  draftNotice: string;
  sections: PolicySection[];
}

/** Restrained, readable layout for legal pages. Preserves their draft status. */
export function PolicyPage({ eyebrow, title, intro, draftNotice, sections }: PolicyPageProps) {
  return (
    <>
      <PageHead eyebrow={eyebrow} title={title} intro={intro} />
      <section aria-label={`${title} text`} className="bg-white pb-[4.25rem] pt-10 md:pb-24 md:pt-14">
        <div className="container-x">
          <div className="mx-auto max-w-3xl">
            <div className="flex gap-3.5 rounded-[6px] border border-gold/60 bg-gold-pale/55 p-5 text-[0.9375rem] text-ink">
              <Info className="mt-0.5 h-5 w-5 shrink-0 text-gold-ink" aria-hidden="true" />
              <p>
                <strong className="font-semibold text-navy">Draft status. </strong>
                {draftNotice}
              </p>
            </div>

            <div className="mt-12 space-y-12">
              {sections.map((s, i) => (
                <section key={s.title} aria-labelledby={`policy-${i}`}>
                  <h2 id={`policy-${i}`} className="font-serif text-[1.65rem] leading-tight sm:text-[1.9rem]">
                    <span aria-hidden="true" className="mr-3 text-gold-ink">
                      {i + 1}.
                    </span>
                    {s.title}
                  </h2>
                  <div className="mt-4 space-y-4 text-ink-soft [&_li]:pl-1 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-6 [&_ul]:marker:text-gold">
                    {s.body}
                  </div>
                </section>
              ))}
            </div>

            <div className="mt-16 border-t border-line pt-8">
              <Link to="/" className="group inline-flex min-h-11 items-center gap-2 font-semibold text-brand">
                <ArrowLeft className="h-4 w-4 transition-transform duration-200 group-hover:-translate-x-1" aria-hidden="true" />
                Return home
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export const ContactPageLink = () => (
  <Link to="/contact" className="link-underline font-semibold text-brand">
    contact page
  </Link>
);
