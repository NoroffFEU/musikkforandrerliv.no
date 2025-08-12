import { useEffect, useState } from 'react';

import ErrorBoundary from '../components/ErrorBoundary';

export default function PrivacyPolicy() {
  const [navOffset, setNavOffset] = useState(199); // fallback matches your h-[199px] for navbar
  const GAP = 12;

  useEffect(() => {
    const update = () => {
      const nav = document.querySelector('nav');
      if (nav) setNavOffset(nav.offsetHeight || 199);
    };
    update();
    window.addEventListener('resize', update, { passive: true });
    // fonts/layout might change after load; this catches it
    document.fonts?.ready?.then(update);
    return () => window.removeEventListener('resize', update);
  }, []);

  return (
    <ErrorBoundary>
      <main
        id="pp-content"
        role="main"
        aria-labelledby="pp-title"
        style={{ paddingTop: navOffset + GAP }}
        className="mx-auto max-w-3xl px-4 sm:px-6 md:px-8 pb-10 sm:pb-12 md:pb-16 space-y-12 md:space-y-16"
      >
        <header>
          <h1
            id="pp-title"
            style={{ scrollMarginTop: navOffset + GAP }}
            className="text-3xl sm:text-4xl font-semibold leading-tight text-center"
          >
            Privacy Policy
          </h1>
          <p className='text-center justify-center text-sm pt-9 '>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            sodales lorem in eros elementum tristique. Duis congue nibh a nibh
            viverra posuere. Nullam sit amet diam volutpat, luctus velit non,
            luctus lorem. Lorem ipsum dolor sit amet, consectetur.
          </p>
        </header>

        {/* Sections as placeholders – teammates will fill in / add expand-collapse */}
        <section id="scope" className="space-y-4" aria-labelledby="scope-title">
          <h2 id="scope-title" className="text-2xl font-semibold leading-snug">
            SCOPE
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            sodales lorem in eros elementum tristique. Duis congue nibh a nibh
            viverra posuere. Nullam sit amet diam volutpat, luctus velit non,
            luctus lorem. Lorem ipsum dolor sit amet, consectetur.
          </p>
        </section>

        <section
          id="data-collection"
          className="space-y-4"
          aria-labelledby="collect-title"
        >
          <h2
            id="collect-title"
            className="text-2xl font-semibold leading-snug"
          >
            DATA WE COLLECT
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            sodales lorem in eros elementum tristique. Duis congue nibh a nibh
            viverra posuere. Nullam sit amet diam volutpat, luctus velit non,
            luctus lorem. Lorem ipsum dolor sit amet, consectetur.
          </p>
        </section>

        <section
          id="data-we-dont-collect"
          className="space-y-4"
          aria-labelledby="data-we-dont-collect-title"
        >
          <h2
            id="data-we-dont-collect"
            className="text-2xl font-semibold leading-snug"
          >
            DATA WE DON&apos;T COLLECT
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            sodales lorem in eros elementum tristique. Duis congue nibh a nibh
            viverra posuere. Nullam sit amet diam volutpat, luctus velit non,
            luctus lorem. Lorem ipsum dolor sit amet, consectetur.
          </p>
        </section>
        <section
          id="use-of-information"
          className="space-y-4"
          aria-labelledby="use-of-information-title"
        >
          <h2
            id="use-of-information-title"
            className="text-2xl font-semibold leading-snug"
          >
            USE OF INFORMATION
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            sodales lorem in eros elementum tristique. Duis congue nibh a nibh
            viverra posuere. Nullam sit amet diam volutpat, luctus velit non,
            luctus lorem. Lorem ipsum dolor sit amet, consectetur.
          </p>
        </section>

        <section
          id="data-security"
          className="space-y-4"
          aria-labelledby="data-security-title"
        >
          <h2
            id="data-security-title"
            className="text-2xl font-semibold leading-snug"
          >
            DATA SECURITY
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            sodales lorem in eros elementum tristique. Duis congue nibh a nibh
            viverra posuere. Nullam sit amet diam volutpat, luctus velit non,
            luctus lorem. Lorem ipsum dolor sit amet, consectetur.
          </p>
        </section>

        <section
          id="third-party-links"
          className="space-y-4"
          aria-labelledby="third-party-links-title"
        >
          <h2
            id="third-party-links-title"
            className="text-2xl font-semibold leading-snug"
          >
            THIRD PARTY LINKS
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            sodales lorem in eros elementum tristique. Duis congue nibh a nibh
            viverra posuere. Nullam sit amet diam volutpat, luctus velit non,
            luctus lorem. Lorem ipsum dolor sit amet, consectetur.
          </p>
        </section>
        <section
          id="childrens-privacy"
          className="space-y-4"
          aria-labelledby="childrens-privacy-title"
        >
          <h2
            id="childrens-privacy-title"
            className="text-2xl font-semibold leading-snug"
          >
            CHILDREN&apos;S PRIVACY
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            sodales lorem in eros elementum tristique. Duis congue nibh a nibh
            viverra posuere. Nullam sit amet diam volutpat, luctus velit non,
            luctus lorem. Lorem ipsum dolor sit amet, consectetur.
          </p>
        </section>

        <section
          id="changes-to-our-privacy"
          className="space-y-4"
          aria-labelledby="changes-to-our-privacy-title"
        >
          <h2
            id="changes-to-our-privacy-title"
            className="text-2xl font-semibold leading-snug"
          >
            CHANGES TO OUR PRIVACY
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            sodales lorem in eros elementum tristique. Duis congue nibh a nibh
            viverra posuere. Nullam sit amet diam volutpat, luctus velit non,
            luctus lorem. Lorem ipsum dolor sit amet, consectetur.
          </p>
        </section>

        <section
          id="governing-law"
          className="space-y-4"
          aria-labelledby="governing-law-title"
        >
          <h2
            id="governing-law-title"
            className="text-2xl font-semibold leading-snug"
          >
            GOVERNING LAW
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            sodales lorem in eros elementum tristique. Duis congue nibh a nibh
            viverra posuere. Nullam sit amet diam volutpat, luctus velit non,
            luctus lorem. Lorem ipsum dolor sit amet, consectetur.
          </p>
        </section>
        <div className="text-sm  ">
          <small>Updated: 00/00/00</small>
        </div>
      </main>
    </ErrorBoundary>
  );
}
