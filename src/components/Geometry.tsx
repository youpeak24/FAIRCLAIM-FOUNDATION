import type { CSSProperties } from 'react';

/**
 * Brand geometry. Everything here is decorative (aria-hidden) and drawn from
 * the emblem's circular seal and sunrise: fine arcs, horizons and rays.
 */

interface ArcsProps {
  className?: string;
  /** Tone of the strokes: for light or navy surfaces */
  tone?: 'light' | 'navy';
  animated?: boolean;
}

/** Concentric sunrise arcs, a quiet halo for the hero medallion. */
export function SunriseArcs({ className = '', animated = false }: ArcsProps) {
  const arc = (i: number): CSSProperties => ({ ['--i' as string]: i });
  const cls = animated ? 'enter-arc' : '';
  return (
    <svg viewBox="0 0 600 600" fill="none" aria-hidden="true" focusable="false" className={className}>
      <g strokeLinecap="round">
        {/* navy arcs */}
        <path
          className={cls}
          style={arc(0)}
          d="M 70 395 A 250 250 0 0 1 458 83"
          stroke="#071F46"
          strokeWidth="1.4"
          opacity="0.55"
        />
        <path
          className={cls}
          style={arc(2)}
          d="M 548 235 A 270 270 0 0 1 300 570"
          stroke="#071F46"
          strokeWidth="1"
          opacity="0.32"
        />
        {/* gold arcs */}
        <path
          className={cls}
          style={arc(1)}
          d="M 36 318 A 280 280 0 0 1 292 22"
          stroke="#D4A62A"
          strokeWidth="1.6"
        />
        <path
          className={cls}
          style={arc(3)}
          d="M 520 392 A 232 232 0 0 1 150 536"
          stroke="#D4A62A"
          strokeWidth="1.2"
          opacity="0.85"
        />
        <circle className={cls} style={arc(2)} cx="458" cy="83" r="3.2" fill="#D4A62A" stroke="none" />
      </g>
    </svg>
  );
}

/** Large, faint rising-sun arcs for navy surfaces. Keep clear of text. */
export function SunriseOnNavy({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 800 800" fill="none" aria-hidden="true" focusable="false" className={className}>
      <defs>
        <radialGradient id="sun-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0" stopColor="#009FE3" stopOpacity="0.34" />
          <stop offset="0.55" stopColor="#075DA8" stopOpacity="0.16" />
          <stop offset="1" stopColor="#075DA8" stopOpacity="0" />
        </radialGradient>
      </defs>
      <circle cx="400" cy="400" r="400" fill="url(#sun-glow)" />
      <g stroke="#D4A62A" strokeLinecap="round">
        <circle cx="400" cy="400" r="150" strokeWidth="1.2" opacity="0.5" />
        <circle cx="400" cy="400" r="230" strokeWidth="1" opacity="0.34" />
        <circle cx="400" cy="400" r="310" strokeWidth="1" opacity="0.22" />
        <circle cx="400" cy="400" r="390" strokeWidth="1" opacity="0.14" />
      </g>
    </svg>
  );
}

interface CurveEdgeProps {
  /** Colour filling the area below the curve */
  fill: string;
  /** 'up' arches upward like a horizon; 'down' dips like a bowl */
  direction?: 'up' | 'down';
  className?: string;
}

/**
 * A static, quiet boundary between sections: a gentle curve with a fine gold
 * line, echoing the seal's circular outline. Sits at the bottom of the section above.
 */
export function CurveEdge({ fill, direction = 'up', className = '' }: CurveEdgeProps) {
  const up = direction === 'up';
  const curve = up ? 'M0 64 Q720 -16 1440 64' : 'M0 14 Q720 94 1440 14';
  const area = up ? 'M0 80 L0 64 Q720 -16 1440 64 L1440 80 Z' : 'M0 0 L0 14 Q720 94 1440 14 L1440 0 Z';
  return (
    <svg
      viewBox="0 0 1440 80"
      preserveAspectRatio="none"
      aria-hidden="true"
      focusable="false"
      className={`block h-[34px] w-full sm:h-[52px] lg:h-[72px] ${className}`}
    >
      <path d={area} fill={fill} />
      <path d={curve} stroke="#D4A62A" strokeWidth="1.2" vectorEffect="non-scaling-stroke" fill="none" />
    </svg>
  );
}

/** Soft ring accents for the closing panel and inner-page heads. */
export function RingAccent({ className = '', tone = 'navy' }: { className?: string; tone?: 'navy' | 'gold' }) {
  const main = tone === 'navy' ? '#071F46' : '#D4A62A';
  return (
    <svg viewBox="0 0 520 520" fill="none" aria-hidden="true" focusable="false" className={className}>
      <circle cx="260" cy="260" r="250" stroke={main} strokeOpacity="0.2" strokeWidth="1" />
      <circle cx="260" cy="260" r="190" stroke="#D4A62A" strokeWidth="1.2" strokeOpacity="0.8" />
      <circle cx="260" cy="260" r="130" stroke={main} strokeOpacity="0.14" strokeWidth="1" />
      <path d="M 70 260 A 190 190 0 0 1 260 70" stroke="#D4A62A" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}
