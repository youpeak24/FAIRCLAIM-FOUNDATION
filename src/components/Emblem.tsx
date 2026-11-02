import type { CSSProperties } from 'react';

/** Natural pixel size of the emblem assets (preserves the artwork's proportions). */
const FULL = { src: '/brand/fairclaim-emblem.png', width: 648, height: 644 };
const SMALL = { src: '/brand/fairclaim-emblem-sm.png', width: 176, height: 174 };

interface EmblemProps {
  size?: 'small' | 'full';
  className?: string;
  style?: CSSProperties;
  priority?: boolean;
  decorative?: boolean;
}

/**
 * The supplied FAIRCLAIM emblem, shown untouched. Always render it on a white
 * surface (see `.medallion`). The artwork keeps its own proportions via
 * object-fit: contain.
 */
export function Emblem({ size = 'full', className = '', style, priority = false, decorative = false }: EmblemProps) {
  const asset = size === 'small' ? SMALL : FULL;
  return (
    <img
      src={asset.src}
      width={asset.width}
      height={asset.height}
      alt={decorative ? '' : 'Fairclaim Foundation emblem: a handshake beneath a sunrise, above an FCF shield, inside a circular seal'}
      aria-hidden={decorative || undefined}
      className={`block h-full w-full object-contain ${className}`}
      style={style}
      decoding="async"
      loading={priority ? 'eager' : 'lazy'}
      fetchPriority={priority ? 'high' : undefined}
      draggable={false}
    />
  );
}
