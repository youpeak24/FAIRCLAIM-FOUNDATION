import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { SunriseOnNavy } from '../components/Geometry';
import { ButtonLink, PageHead } from '../components/ui';
import { idx } from '../lib/stagger';
import { focusAreas } from '../data/initiatives';
import { mission, vision } from '../data/organization';

const missionPoints = [
  { title: 'Advance understanding of fairness', text: 'Help people see what fair treatment looks like, and why it matters.' },
  { title: 'Encourage constructive dialogue', text: 'Make room for people to share perspectives respectfully.' },
  { title: 'Support informed participation', text: 'Offer clearer information so people can take part with confidence.' },
];

const visionPoints = [
  { title: 'To be heard', text: 'Every person has a real chance to share their perspective.' },
  { title: 'To understand their options', text: 'Information is clear enough to act on.' },
  { title: 'To be treated with dignity', text: 'Respect is part of every process, not an extra.' },
];

export function MissionVision() {
  return (
    <>
      <PageHead
        eyebrow="Mission & vision"
        title={
          <>
            <span className="block">A clear purpose.</span>
            <span className="block italic text-brand">A more equitable possibility.</span>
          </>
        }
        intro="What Fairclaim Foundation is working toward, and the future it hopes to help bring closer, in plain language."
      />

      {/* Mission: light, grounded */}
      <section aria-labelledby="mission-title" className="section-y bg-white">
        <div className="container-x grid gap-10 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5">
            <p className="eyebrow" data-reveal>
              Our mission
            </p>
            <h2 id="mission-title" className="text-section mt-6" data-reveal style={idx(1)}>
              What we set out to do.
            </h2>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <p
              className="border-l-2 border-gold pl-6 font-serif text-[1.55rem] leading-[1.4] text-navy sm:text-[1.9rem]"
              data-reveal
              style={idx(2)}
            >
              {mission}
            </p>
            <h3 className="mt-14 text-sm font-semibold uppercase tracking-[0.18em] !font-sans text-gold-ink" data-reveal>
              In plain language
            </h3>
            <ul className="mt-4">
              {missionPoints.map((p, i) => (
                <li key={p.title} className="border-t border-line py-6" data-reveal style={idx(i)}>
                  <p className="font-serif text-[1.45rem] leading-snug text-navy">{p.title}</p>
                  <p className="mt-1.5 text-ink-soft">{p.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Vision: navy, aspirational */}
      <section
        aria-labelledby="vision-title"
        className="on-navy relative isolate overflow-hidden bg-navy py-[4.25rem] text-on-navy md:py-24 lg:py-[7.5rem]"
      >
        <div
          data-parallax
          className="parallax pointer-events-none absolute -bottom-72 -left-64 -z-10 w-[44rem] max-w-none opacity-80 lg:-bottom-96 lg:-left-48 lg:w-[54rem]"
        >
          <SunriseOnNavy className="h-full w-full" />
        </div>
        <div className="container-x grid gap-10 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-6 lg:col-start-6">
            <p className="eyebrow" data-reveal>
              Our vision
            </p>
            <h2 id="vision-title" className="text-section mt-6 text-on-navy" data-reveal style={idx(1)}>
              The future we hope to help bring into view.
            </h2>
            <p className="mt-8 font-serif text-[1.55rem] leading-[1.4] text-on-navy sm:text-[1.9rem]" data-reveal style={idx(2)}>
              {vision}
            </p>
            <ul className="mt-12">
              {visionPoints.map((p, i) => (
                <li key={p.title} className="border-t border-white/15 py-6" data-reveal style={idx(i)}>
                  <p className="font-serif text-[1.45rem] leading-snug text-gold">{p.title}</p>
                  <p className="mt-1.5 text-on-navy-soft">{p.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Route to initiatives */}
      <section aria-labelledby="route-title" className="section-y bg-ivory">
        <div className="container-x grid gap-10 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5">
            <p className="eyebrow" data-reveal>
              From purpose to possibility
            </p>
            <h2 id="route-title" className="text-section mt-6" data-reveal style={idx(1)}>
              Where the mission could take shape.
            </h2>
            <p className="mt-6 max-w-md text-ink-soft" data-reveal style={idx(2)}>
              Four proposed focus areas express the mission in practice. They are proposals, not programs already in
              operation.
            </p>
            <div className="mt-8" data-reveal style={idx(3)}>
              <ButtonLink to="/initiatives">See the proposed initiatives</ButtonLink>
            </div>
          </div>
          <ul className="lg:col-span-6 lg:col-start-7">
            {focusAreas.map((a, i) => (
              <li key={a.id} className="border-t border-line first:border-t-0" data-reveal style={idx(i)}>
                <Link to={`/initiatives#${a.id}`} className="group flex min-h-[4.5rem] items-center justify-between gap-6 py-5">
                  <span className="flex items-baseline gap-5">
                    <span aria-hidden="true" className="font-serif text-lg text-gold-ink">
                      {a.number}
                    </span>
                    <span className="font-serif text-[1.35rem] leading-snug text-navy transition-colors group-hover:text-brand sm:text-[1.6rem]">
                      {a.title}
                    </span>
                  </span>
                  <ArrowRight
                    className="h-5 w-5 shrink-0 text-brand transition-transform duration-200 group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
