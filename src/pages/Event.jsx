import ErrorBoundary from "../components/ErrorBoundary";

// Placeholder components – will be replaced later
const EventHeader = () => <div>EventHeader placeholder</div>;
const WhyAttend = () => <div>WhyAttend placeholder</div>;
const SupportSection = () => <div>SupportSection placeholder</div>;

export default function Event() {
  return (
    <ErrorBoundary>
      <main className="px-4 py-8 max-w-5xl mx-auto">
        <section>
          <EventHeader />
        </section>
        <section>
          <WhyAttend />
        </section>
        <section>
          <SupportSection />
        </section>
      </main>
    </ErrorBoundary>
  );
}
