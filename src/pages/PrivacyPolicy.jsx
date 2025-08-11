import ErrorBoundary from "../components/ErrorBoundary";

export default function PrivacyPolicy() {
  return (
    <ErrorBoundary>
      <main
        id="pp-content"
        role="main"
        aria-labelledby="pp-title"
        className="mx-auto max-w-3xl px-4 sm:px-6 md:px-8 py-10 sm:py-12 md:py-16 space-y-12 md:space-y-16"
      >
        <header>
          <h1 id="pp-title" className="text-3xl sm:text-4xl font-semibold leading-tight">
            Privacy Policy
          </h1>
          <p className="mt-2 text-sm text-gray-600">Last updated: August 2025</p>
        </header>

        {/* Sections as placeholders – teammates will fill in / add expand-collapse */}
        <section id="introduction" className="space-y-4" aria-labelledby="intro-title">
          <h2 id="intro-title" className="text-2xl font-semibold leading-snug">Introduction</h2>
          <p>Placeholder content. Final copy and interactions will be added later.</p>
        </section>

        <section id="data-collection" className="space-y-4" aria-labelledby="collect-title">
          <h2 id="collect-title" className="text-2xl font-semibold leading-snug">Data we collect</h2>
          <p>Placeholder.</p>
        </section>

        <section id="contact" className="space-y-4" aria-labelledby="contact-title">
          <h2 id="contact-title" className="text-2xl font-semibold leading-snug">Contact</h2>
          <p>Placeholder.</p>
        </section>
      </main>
    </ErrorBoundary>
  );
}
