import { useEffect, useState } from 'react';

import ErrorBoundary from '../components/ErrorBoundary';
import PolicyAccordion from './PolicyAccordian';

// same folder as this file

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
        className="mx-auto max-w-3xl px-4 sm:px-6 md:px-8 pb-10 sm:pb-12 md:pb-16 space-y-0"
      >
        <header className="mb-8 sm:mb-10 md:mb-12">
          <h1
            id="pp-title"
            style={{ scrollMarginTop: navOffset + GAP }}
            className="text-3xl sm:text-4xl font-semibold leading-tight text-center"
          >
            Our Privacy Policy
          </h1>
          <p className="text-center justify-center text-sm pt-9">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            sodales lorem in eros elementum tristique. Duis congue nibh a nibh
            viverra posuere. Nullam sit amet diam volutpat, luctus velit non,
            luctus lorem. Lorem ipsum dolor sit amet, consectetur.
          </p>
        </header>

        {/* Accordion sections (IDs + aria-labelledby preserved) */}
        <PolicyAccordion sectionId="scope" titleId="scope-title" title="SCOPE">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            sodales lorem in eros elementum tristique. Duis congue nibh a nibh
            viverra posuere. Nullam sit amet diam volutpat, luctus velit non,
            luctus lorem. Lorem ipsum dolor sit amet, consectetur.
          </p>
        </PolicyAccordion>

        <PolicyAccordion
          sectionId="data-collection"
          titleId="collect-title"
          title="DATA WE COLLECT"
        >
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            sodales lorem in eros elementum tristique. Duis congue nibh a nibh
            viverra posuere. Nullam sit amet diam volutpat, luctus velit non,
            luctus lorem. Lorem ipsum dolor sit amet, consectetur.
          </p>
        </PolicyAccordion>

        <PolicyAccordion
          sectionId="data-we-dont-collect"
          titleId="data-we-dont-collect-title"
          title={"DATA WE DON'T COLLECT"}
        >
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            sodales lorem in eros elementum tristique. Duis congue nibh a nibh
            viverra posuere. Nullam sit amet diam volutpat, luctus velit non,
            luctus lorem. Lorem ipsum dolor sit amet, consectetur.
          </p>
        </PolicyAccordion>

        <PolicyAccordion
          sectionId="use-of-information"
          titleId="use-of-information-title"
          title="USE OF INFORMATION"
        >
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            sodales lorem in eros elementum tristique. Duis congue nibh a nibh
            viverra posuere. Nullam sit amet diam volutpat, luctus velit non,
            luctus lorem. Lorem ipsum dolor sit amet, consectetur.
          </p>
        </PolicyAccordion>

        <PolicyAccordion
          sectionId="data-security"
          titleId="data-security-title"
          title="DATA SECURITY"
        >
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            sodales lorem in eros elementum tristique. Duis congue nibh a nibh
            viverra posuere. Nullam sit amet diam volutpat, luctus velit non,
            luctus lorem. Lorem ipsum dolor sit amet, consectetur.
          </p>
        </PolicyAccordion>

        <PolicyAccordion
          sectionId="third-party-links"
          titleId="third-party-links-title"
          title="THIRD PARTY LINKS"
        >
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            sodales lorem in eros elementum tristique. Duis congue nibh a nibh
            viverra posuere. Nullam sit amet diam volutpat, luctus velit non,
            luctus lorem. Lorem ipsum dolor sit amet, consectetur.
          </p>
        </PolicyAccordion>

        <PolicyAccordion
          sectionId="childrens-privacy"
          titleId="childrens-privacy-title"
          title={"CHILDREN'S PRIVACY"}
        >
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            sodales lorem in eros elementum tristique. Duis congue nibh a nibh
            viverra posuere. Nullam sit amet diam volutpat, luctus velit non,
            luctus lorem. Lorem ipsum dolor sit amet, consectetur.
          </p>
        </PolicyAccordion>

        <PolicyAccordion
          sectionId="changes-to-our-privacy"
          titleId="changes-to-our-privacy-title"
          title="CHANGES TO OUR PRIVACY"
        >
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            sodales lorem in eros elementum tristique. Duis congue nibh a nibh
            viverra posuere. Nullam sit amet diam volutpat, luctus velit non,
            luctus lorem. Lorem ipsum dolor sit amet, consectetur.
          </p>
        </PolicyAccordion>

        <PolicyAccordion
          sectionId="governing-law"
          titleId="governing-law-title"
          title="GOVERNING LAW"
        >
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            sodales lorem in eros elementum tristique. Duis congue nibh a nibh
            viverra posuere. Nullam sit amet diam volutpat, luctus velit non,
            luctus lorem. Lorem ipsum dolor sit amet, consectetur.
          </p>
        </PolicyAccordion>

        <div className="text-sm pt-6">
          <small>Updated: 00/00/00</small>
        </div>
      </main>
    </ErrorBoundary>
  );
}
