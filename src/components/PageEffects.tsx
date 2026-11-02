import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { notFoundMeta, pageMeta } from '../data/pageMeta';

const reducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/** Unique <title> and meta description per route. */
export function DocumentMeta() {
  const { pathname } = useLocation();

  useEffect(() => {
    const meta = pageMeta[pathname] ?? notFoundMeta;
    document.title = meta.title;
    const set = (selector: string, attr: string, key: string, value: string) => {
      let el = document.head.querySelector<HTMLMetaElement>(selector);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attr, key);
        document.head.appendChild(el);
      }
      el.setAttribute('content', value);
    };
    set('meta[name="description"]', 'name', 'description', meta.description);
    set('meta[property="og:title"]', 'property', 'og:title', meta.title);
    set('meta[property="og:description"]', 'property', 'og:description', meta.description);
  }, [pathname]);

  return null;
}

/**
 * Scroll and focus handling after navigation:
 *  - new page: scroll to top and move focus to <main> so assistive tech lands on the new content
 *  - hash link: scroll to the target (below the sticky header) and focus it
 */
export function ScrollManager() {
  const { pathname, hash, key } = useLocation();
  const first = useRef(true);

  useEffect(() => {
    const isFirst = first.current;
    first.current = false;

    const raf = requestAnimationFrame(() => {
      if (hash) {
        const target = document.getElementById(decodeURIComponent(hash.slice(1)));
        if (target) {
          target.scrollIntoView({ behavior: reducedMotion() || isFirst ? 'auto' : 'smooth', block: 'start' });
          if (!target.hasAttribute('tabindex')) target.setAttribute('tabindex', '-1');
          target.focus({ preventScroll: true });
          return;
        }
      }
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      if (!isFirst) document.getElementById('main-content')?.focus({ preventScroll: true });
    });
    return () => cancelAnimationFrame(raf);
  }, [pathname, hash, key]);

  return null;
}

/**
 * Scroll-triggered reveals. Elements marked [data-reveal] / [data-draw] are
 * only hidden once this controller has confirmed IntersectionObserver is
 * working; anything already in view is shown immediately. If setup fails, or
 * the visitor prefers reduced motion, nothing is ever hidden.
 */
export function MotionController() {
  const { pathname } = useLocation();

  useEffect(() => {
    const root = document.documentElement;
    if (reducedMotion() || !('IntersectionObserver' in window)) {
      delete root.dataset.motion;
      return;
    }

    let io: IntersectionObserver | undefined;
    try {
      const targets = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal],[data-draw]'));
      const vh = window.innerHeight;

      io = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-in');
              io?.unobserve(entry.target);
            }
          }
        },
        { rootMargin: '0px 0px -12% 0px', threshold: 0.08 },
      );

      for (const el of targets) {
        if (el.getBoundingClientRect().top < vh * 0.9) el.classList.add('is-in');
        else io.observe(el);
      }
      root.dataset.motion = 'on';
    } catch {
      delete root.dataset.motion;
      document.querySelectorAll('[data-reveal],[data-draw]').forEach((el) => el.classList.add('is-in'));
    }

    return () => io?.disconnect();
  }, [pathname]);

  /* Extremely subtle desktop-only parallax for decorative arcs */
  useEffect(() => {
    const desktop = window.matchMedia('(min-width: 1024px)');
    if (reducedMotion() || !desktop.matches) return;
    const els = Array.from(document.querySelectorAll<HTMLElement>('[data-parallax]'));
    if (!els.length) return;
    let frame = 0;
    const update = () => {
      frame = 0;
      const vh = window.innerHeight;
      for (const el of els) {
        const rect = el.parentElement?.getBoundingClientRect();
        if (!rect || rect.bottom < -vh || rect.top > vh * 2) continue;
        const p = Math.max(-1, Math.min(1, (rect.top + rect.height / 2 - vh / 2) / vh));
        el.style.setProperty('--p', p.toFixed(3));
      }
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [pathname]);

  return null;
}
