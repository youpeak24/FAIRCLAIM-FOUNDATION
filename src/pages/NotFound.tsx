import { Link } from 'react-router-dom';
import { RingAccent } from '../components/Geometry';
import { ButtonLink } from '../components/ui';
import { idx } from '../lib/stagger';
import { mainNav } from '../data/navigation';

export function NotFound() {
  return (
    <section className="relative isolate overflow-hidden bg-ivory py-20 sm:py-28 lg:py-36">
      <RingAccent className="pointer-events-none absolute -right-40 top-1/2 -z-10 h-[34rem] w-[34rem] -translate-y-1/2 opacity-70 lg:right-10 lg:h-[40rem] lg:w-[40rem]" />
      <div className="container-x">
        <p className="eyebrow enter" style={idx(0)}>
          Error 404
        </p>
        <h1 className="text-page enter mt-6 max-w-3xl" style={idx(1)}>
          This page <span className="italic text-brand">isn’t here.</span>
        </h1>
        <p className="text-lead enter mt-7 max-w-xl text-ink-soft" style={idx(2)}>
          The link may be out of date, or the address may have been typed a little differently. The way back is short.
        </p>
        <div className="enter mt-9" style={idx(3)}>
          <ButtonLink to="/">Return to the homepage</ButtonLink>
        </div>
        <nav aria-label="Pages" className="enter mt-14 max-w-md" style={idx(4)}>
          <p className="text-[0.75rem] font-semibold uppercase tracking-[0.18em] text-gold-ink">Or go to</p>
          <ul className="mt-3">
            {mainNav
              .filter((n) => n.href !== '/')
              .map((n) => (
                <li key={n.href} className="border-t border-line first:border-t-0">
                  <Link to={n.href} className="group flex min-h-12 items-center font-serif text-[1.35rem] text-navy hover:text-brand">
                    {n.name}
                  </Link>
                </li>
              ))}
          </ul>
        </nav>
      </div>
    </section>
  );
}
