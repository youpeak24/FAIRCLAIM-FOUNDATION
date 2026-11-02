import type { CSSProperties } from 'react';

/** Stagger index for scroll reveals and entrances (read by CSS as --i). */
export const idx = (i: number): CSSProperties => ({ ['--i' as string]: i }) as CSSProperties;
