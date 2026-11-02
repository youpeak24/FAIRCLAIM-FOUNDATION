import { Link } from 'react-router-dom';
import { Emblem } from './Emblem';

interface BrandLogoProps {
  /** Light text for navy surfaces */
  onDark?: boolean;
  className?: string;
}

/**
 * Compact emblem on a white disc, with a readable text wordmark beside it.
 * The wordmark carries the organization name at small sizes.
 */
export function BrandLogo({ onDark = false, className = '' }: BrandLogoProps) {
  return (
    <Link
      to="/"
      className={`group inline-flex items-center gap-3 rounded-[var(--radius-ui)] py-1 pr-1 ${className}`}
      aria-label="Fairclaim Foundation, home"
    >
      <span className="medallion grid h-11 w-11 shrink-0 place-items-center rounded-full bg-white p-[3px] shadow-[0_0_0_1px_rgb(7_31_70/0.08)] transition-transform duration-200 group-hover:scale-[1.04] sm:h-12 sm:w-12">
        <Emblem size="small" decorative priority />
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={`font-serif text-[1.3rem] font-semibold tracking-[0.07em] sm:text-[1.45rem] ${
            onDark ? 'text-on-navy' : 'text-navy'
          }`}
        >
          FAIRCLAIM
        </span>
        <span
          className={`mt-1.5 text-[0.625rem] font-semibold tracking-[0.36em] sm:text-[0.6875rem] ${
            onDark ? 'text-gold' : 'text-gold-ink'
          }`}
        >
          FOUNDATION
        </span>
      </span>
    </Link>
  );
}
