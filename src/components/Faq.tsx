import { useId, useRef, useState } from 'react';
import type { KeyboardEvent } from 'react';
import { Link } from 'react-router-dom';
import { Plus } from 'lucide-react';
import type { Faq as FaqItem } from '../data/organization';

/**
 * Accessible disclosure list built from native buttons.
 * Arrow Up/Down, Home and End move between questions.
 */
export function Faq({ items }: { items: FaqItem[] }) {
  const base = useId();
  const [open, setOpen] = useState<number | null>(0);
  const buttons = useRef<(HTMLButtonElement | null)[]>([]);

  const onKeyDown = (e: KeyboardEvent<HTMLButtonElement>, i: number) => {
    const last = items.length - 1;
    const next =
      e.key === 'ArrowDown' ? (i === last ? 0 : i + 1)
      : e.key === 'ArrowUp' ? (i === 0 ? last : i - 1)
      : e.key === 'Home' ? 0
      : e.key === 'End' ? last
      : null;
    if (next === null) return;
    e.preventDefault();
    buttons.current[next]?.focus();
  };

  return (
    <div className="border-t border-line">
      {items.map((item, i) => {
        const isOpen = open === i;
        const buttonId = `${base}-q${i}`;
        const panelId = `${base}-a${i}`;
        return (
          <div key={item.question} className="border-b border-line">
            <h3 className="!font-sans text-base">
              <button
                ref={(el) => {
                  buttons.current[i] = el;
                }}
                id={buttonId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen(isOpen ? null : i)}
                onKeyDown={(e) => onKeyDown(e, i)}
                className="group flex min-h-[4rem] w-full items-center justify-between gap-6 py-4 text-left"
              >
                <span className="font-serif text-[1.3rem] leading-snug text-navy transition-colors group-hover:text-brand sm:text-[1.5rem]">
                  {item.question}
                </span>
                <span
                  aria-hidden="true"
                  className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-navy/20 text-navy transition-colors duration-200 group-hover:border-brand group-hover:text-brand"
                >
                  <Plus
                    className={`h-4 w-4 transition-transform duration-300 ease-[var(--ease-out)] ${isOpen ? 'rotate-45' : ''}`}
                  />
                </span>
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              className={`grid transition-[grid-template-rows,visibility] duration-300 ease-[var(--ease-out)] ${
                isOpen ? 'visible grid-rows-[1fr]' : 'invisible grid-rows-[0fr]'
              }`}
            >
              <div className="overflow-hidden">
                <div className="max-w-2xl pb-7 pr-12 text-ink-soft">
                  <p>{item.answer}</p>
                  {item.links && (
                    <p className="mt-4 flex flex-wrap gap-x-6 gap-y-1">
                      {item.links.map((l) => (
                        <Link key={l.to} to={l.to} className="link-underline inline-flex min-h-11 items-center font-semibold text-brand">
                          {l.label}
                        </Link>
                      ))}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
