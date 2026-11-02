import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { ButtonLink, PageHead } from '../components/ui';
import { idx } from '../lib/stagger';
import { focusAreas } from '../data/initiatives';
import { guidingPrinciples, organization } from '../data/organization';

export function About() {
  return (
    <>
      <PageHead
        eyebrow="About the foundation"
        title="Fairness is a shared responsibility."
        intro="Fairclaim Foundation is built around a simple idea: people are better able to take part in fair processes when those processes are understandable, respectful, and open to dialogue."
      />

      {/* Purpose */}
      <section aria-labelledby="purpose-title" className="section-y bg-white">
        <div className="container-x grid gap-10 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5">
            <p className="eyebrow" data-reveal>
              Our purpose
            </p>
            <h2 id="purpose-title" className="text-section mt-6" data-reveal style={idx(1)}>
              Why this work matters.
            </h2>
          </div>
          <div className="space-y-6 text-lead text-ink-soft lg:col-span-6 lg:col-start-7">
            <p data-reveal style={idx(2)}>
              Fairclaim Foundation’s stated purpose centers on fairness, civic understanding, constructive dialogue,
              and equitable participation.
            </p>
            <p data-reveal style={idx(3)}>
              The processes that shape everyday life—administrative, civic, or within a community—can be hard to
              follow. When people cannot tell what is happening, what their options are, or how to be heard, fairness
              becomes harder to reach.
            </p>
            <p data-reveal style={idx(4)}>
              The foundation’s aim is to help close that gap: to make fairness easier to understand and pursue, with
              respect for every person’s dignity along the way.
            </p>
          </div>
        </div>
      </section>

      {/* Statement */}
      <section aria-label="In a sentence" className="relative isolate overflow-hidden bg-navy py-20 text-on-navy md:py-28">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-full -z-10 h-[34rem] w-[34rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(closest-side,rgb(0_159_227/0.28),rgb(7_93_168/0.1)_55%,transparent)]"
        />
        <div className="container-x on-navy text-center">
          <span aria-hidden="true" className="mx-auto block h-px w-12 bg-gold" data-reveal="fade" />
          <p
            className="mx-auto mt-10 max-w-3xl font-serif text-[1.75rem] leading-[1.3] text-on-navy sm:text-[2.35rem] lg:text-[2.75rem]"
            data-reveal
          >
            A process people cannot understand is a process they cannot fully take part in.
          </p>
        </div>
      </section>

      {/* Values */}
      <section aria-labelledby="values-title" className="section-y bg-ivory">
        <div className="container-x">
          <p className="eyebrow" data-reveal>
            Guiding values
          </p>
          <h2 id="values-title" className="text-section mt-6 max-w-2xl" data-reveal style={idx(1)}>
            What we hold to.
          </h2>
          <ol className="mt-12 grid md:mt-16 md:grid-cols-2 md:gap-x-16">
            {guidingPrinciples.map((p, i) => (
              <li key={p.title} className="border-t border-line py-8 md:py-10" data-reveal style={idx(i % 2)}>
                <span aria-hidden="true" className="font-serif text-[1.5rem] text-gold-ink">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="mt-2 font-serif text-[1.75rem] leading-tight sm:text-[2rem]">{p.title}</h3>
                <p className="mt-3 max-w-md text-ink-soft">{p.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Direction */}
      <section aria-labelledby="direction-title" className="section-y bg-white">
        <div className="container-x grid gap-10 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5">
            <p className="eyebrow" data-reveal>
              Intended direction
            </p>
            <h2 id="direction-title" className="text-section mt-6" data-reveal style={idx(1)}>
              Where the foundation hopes to go.
            </h2>
            <p className="mt-6 max-w-md text-ink-soft" data-reveal style={idx(2)}>
              The foundation has outlined four proposed focus areas. They describe where it intends to contribute, not
              programs that are already running.
            </p>
          </div>
          <ul className="lg:col-span-6 lg:col-start-7">
            {focusAreas.map((a, i) => (
              <li key={a.id} className="border-t border-line first:border-t-0" data-reveal style={idx(i)}>
                <Link
                  to={`/initiatives#${a.id}`}
                  className="group flex min-h-[4.5rem] items-center justify-between gap-6 py-5"
                >
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

      {/* Status and invitation */}
      <section aria-labelledby="status-title" className="section-y bg-ivory">
        <div className="container-x grid gap-10 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5" data-reveal>
            <h2 id="status-title" className="font-serif text-[1.75rem] leading-tight sm:text-[2rem]">
              A note on what is confirmed.
            </h2>
          </div>
          <div className="lg:col-span-6 lg:col-start-7" data-reveal style={idx(1)}>
            <p className="border-l-2 border-gold pl-5 text-ink-soft">{organization.statusNote}</p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:gap-4">
              <ButtonLink to="/contact">Start a conversation</ButtonLink>
              <ButtonLink to="/mission-vision" variant="ghost" arrow={false}>
                Read our mission &amp; vision
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
