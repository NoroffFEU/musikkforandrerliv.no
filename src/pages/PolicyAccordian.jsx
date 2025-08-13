import { useEffect, useRef, useState } from 'react';

// tiny chevron (no extra deps)
function Chevron({ open }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 20 20"
      className={`h-4 w-4 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
    >
      <path d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 10.17l3.71-2.94a.75.75 0 1 1 .94 1.17l-4.24 3.37a.75.75 0 0 1-.94 0L5.21 8.4a.75.75 0 0 1 .02-1.18Z" />
    </svg>
  );
}

// smooth height transition (0 <-> content), then settle on 'auto'
function useAutoHeight(open) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    el.style.overflow = 'hidden';
    el.style.transitionProperty = 'height';
    el.style.transitionDuration = '300ms';

    if (open) {
      el.style.height = '0px';
      requestAnimationFrame(() => {
        el.style.height = `${el.scrollHeight}px`;
      });
      const onEnd = () => (el.style.height = 'auto');
      el.addEventListener('transitionend', onEnd, { once: true });
      return () => el.removeEventListener('transitionend', onEnd);
    } else {
      const h = el.getBoundingClientRect().height;
      el.style.height = `${h}px`;
      requestAnimationFrame(() => {
        el.style.height = '0px';
      });
    }
  }, [open]);

  return ref;
}

/**
 * Usage:
 * <PolicyAccordian sectionId="scope" titleId="scope-title" title="SCOPE">
 *   <p>…content…</p>
 * </PolicyAccordian>
 *
 * Keeps your existing ids + aria-labelledby.
 * Multiple sections can be open at once (meets AC). If you later want
 * "one open at a time", manage open state in the parent.
 */
export default function PolicyAccordian({
  sectionId,
  titleId,
  title,
  children,
  defaultOpen = false,
}) {
  const [open, setOpen] = useState(defaultOpen);
  const panelId = `${sectionId}-panel`;
  const panelRef = useAutoHeight(open);

  return (
    <section id={sectionId} className="space-y-0" aria-labelledby={titleId}>
      <h2 id={titleId} className="text-2xl font-semibold leading-snug">
        <button
          type="button"
          aria-controls={panelId}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="w-full py-6 flex items-center justify-between text-left uppercase focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-black cursor-pointer"
        >
          <span className="text-lg sm:text-xl">{title}</span>
          <Chevron open={open} />
        </button>
      </h2>

      <div
        id={panelId}
        role="region"
        aria-labelledby={titleId}
        ref={panelRef}
        style={{ height: 0 }}
        className="will-change-[height]"
      >
        <div className="pb-6 pt-1 text-sm sm:text-base text-neutral-700">
          {children}
        </div>
      </div>
    </section>
  );
}
