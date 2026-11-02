import type { ReactNode } from 'react';
import { idx } from '../lib/stagger';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { RingAccent } from './Geometry';

type Variant = 'primary' | 'ghost' | 'gold' | 'ghost-light';

interface ButtonLinkProps {
  to: string;
  children: ReactNode;
  variant?: Variant;
  arrow?: boolean;
  className?: string;
}

export function ButtonLink({ to, children, variant = 'primary', arrow = true, className = '' }: ButtonLinkProps) {
  return (
    <Link to={to} className={`btn btn-${variant} ${className}`}>
      <span>{children}</span>
      {arrow && <ArrowRight className="arrow h-4 w-4 shrink-0" aria-hidden="true" />}
    </Link>
  );
}

interface PageHeadProps {
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  children?: ReactNode;
}

/** Shared head for inner pages: ivory surface, soft sunrise glow and a quiet ring. */
export function PageHead({ eyebrow, title, intro, children }: PageHeadProps) {
  return (
    <section className="relative isolate overflow-hidden bg-ivory pb-14 pt-12 sm:pb-20 sm:pt-16 lg:pb-24 lg:pt-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-40 -z-10 h-[34rem] w-[34rem] rounded-full bg-[radial-gradient(closest-side,rgb(0_159_227/0.14),rgb(0_159_227/0.05)_55%,transparent)]"
      />
      <RingAccent className="pointer-events-none absolute -right-28 top-4 -z-10 hidden h-[26rem] w-[26rem] opacity-70 sm:block lg:right-6 lg:h-[30rem] lg:w-[30rem]" />
      <div className="container-x">
        <p className="eyebrow enter" style={idx(0)}>
          {eyebrow}
        </p>
        <h1 className="text-page enter mt-6 max-w-4xl" style={idx(1)}>
          {title}
        </h1>
        {intro && (
          <p className="text-lead enter mt-7 max-w-2xl text-ink-soft" style={idx(2)}>
            {intro}
          </p>
        )}
        {children && (
          <div className="enter mt-9" style={idx(3)}>
            {children}
          </div>
        )}
      </div>
    </section>
  );
}

/** Fine rule with a short gold segment, used to divide principles and rows */
export function Rule({ className = '' }: { className?: string }) {
  return (
    <div className={`relative h-px bg-line ${className}`} aria-hidden="true">
      <span className="absolute left-0 top-0 h-px w-12 bg-gold" />
    </div>
  );
}
