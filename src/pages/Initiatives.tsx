import { Link } from 'react-router-dom';
import { ArrowDown } from 'lucide-react';
import { ButtonLink, PageHead } from '../components/ui';
import { idx } from '../lib/stagger';
import { focusAreas } from '../data/initiatives';

export function Initiatives() {
  return (
    <>
      <PageHead
        eyebrow="Proposed focus areas"
        title="Purpose, taking shape."
        intro="Explore the proposed focus areas that express Fairclaim Foundation’s commitment to fairness, understanding, and constructive participation."
      >
        <nav aria-label="Focus areas on this page">
          <ul className="flex flex-col gap-1 sm:flex-row sm:flex-wrap sm:gap-x-8">
            {focusAreas.map((a) => (
              <li key={a.id}>
                <a href={`#${a.id}`} className="group inline-flex min-h-11 items-center gap-2.5 font-semibold text-navy hover:text-brand">
                  <span aria-hidden="true" className="font-serif text-base font-normal text-gold-ink">
                    {a.number}
                  </span>
                  <span className="link-underline">{a.title}</span>
                  <ArrowDown className="h-4 w-4 text-brand transition-transform duration-200 group-hover:translate-y-0.5" aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </PageHead>

      <section aria-label="Status of these focus areas" className="bg-white py-8 md:py-10">
        <div className="container-x">
          <p className="max-w-3xl border-l-2 border-gold pl-5 text-[0.9375rem] text-ink-soft" data-reveal>
            <strong className="font-semibold text-navy">All four areas are proposed.</strong> They describe where
            Fairclaim Foundation intends to contribute. None is presented here as an operating service, and the
            contributions described are intentions rather than measured results. Information shared here is general
            and is not legal advice.
          </p>
        </div>
      </section>

      {focusAreas.map((area, i) => (
        <section
          key={area.id}
          id={area.id}
          aria-labelledby={`${area.id}-title`}
          className={`section-y ${i % 2 === 0 ? 'bg-white' : 'bg-ivory'} ${i === 0 ? '!pt-8 md:!pt-10' : ''}`}
        >
          <div className="container-x grid gap-10 lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-5">
              <div className="lg:sticky lg:top-32">
                <p data-reveal className="font-serif text-[3.5rem] leading-none text-gold-ink sm:text-[4.5rem]" aria-hidden="true">
                  {area.number}
                </p>
                <h2 id={`${area.id}-title`} className="text-section mt-4 !text-[clamp(1.85rem,1.2rem+2.2vw,3rem)]" data-reveal style={idx(1)}>
                  {area.title}
                </h2>
                <p className="mt-5 flex items-center gap-2.5 text-[0.8125rem] font-medium text-ink-soft" data-reveal style={idx(2)}>
                  <span aria-hidden="true" className="h-2.5 w-2.5 rounded-full border-[1.5px] border-gold bg-gold-pale" />
                  {area.status}
                </p>
              </div>
            </div>

            <div className="lg:col-span-6 lg:col-start-7">
              <p className="text-lead text-ink-soft" data-reveal style={idx(1)}>
                {area.description}
              </p>

              <h3 className="mt-12 !font-sans text-[0.75rem] font-semibold uppercase tracking-[0.18em] text-gold-ink" data-reveal>
                Proposed activities
              </h3>
              <ul className="mt-4">
                {area.proposedActivities.map((a, j) => (
                  <li
                    key={a}
                    className="flex gap-4 border-t border-line py-4 text-ink"
                    data-reveal
                    style={idx(j)}
                  >
                    <span aria-hidden="true" className="mt-[0.7em] h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                    <span>{a}</span>
                  </li>
                ))}
                <li className="border-t border-line" aria-hidden="true" />
              </ul>

              <div className="mt-10 rounded-[6px] border border-gold/40 bg-gold-pale/45 p-6 sm:p-8" data-reveal>
                <h3 className="!font-sans text-[0.75rem] font-semibold uppercase tracking-[0.18em] text-gold-ink">
                  Intended contribution
                </h3>
                <p className="mt-3 font-serif text-[1.3rem] leading-snug text-navy sm:text-[1.5rem]">
                  {area.intendedContribution}
                </p>
                <p className="mt-3 text-[0.8125rem] text-ink-soft">
                  An aim for this proposed area, not a measured result.
                </p>
              </div>
            </div>
          </div>
        </section>
      ))}

      <section aria-labelledby="init-cta-title" className="bg-navy on-navy py-[4.25rem] text-on-navy md:py-24">
        <div className="container-x flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="eyebrow" data-reveal>
              Shape what comes next
            </p>
            <h2 id="init-cta-title" className="text-section mt-6 max-w-2xl text-on-navy" data-reveal style={idx(1)}>
              Interested in one of these areas?
            </h2>
            <p className="mt-5 max-w-xl text-on-navy-soft" data-reveal style={idx(2)}>
              Tell us which area interests you and a little about yourself.{' '}
              <Link to="/mission-vision" className="link-underline text-on-navy hover:!text-gold">
                Read the mission &amp; vision
              </Link>{' '}
              for the bigger picture.
            </p>
          </div>
          <div data-reveal style={idx(3)}>
            <ButtonLink to="/contact" variant="gold">
              Start a conversation
            </ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}
