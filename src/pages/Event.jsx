import ErrorBoundary from '../components/ErrorBoundary';
import EventHeader from '../components/event/EventHeader';

// Placeholder components – will be replaced later
// const EventHeader = () => <div>EventHeader placeholder</div>;
const WhyAttend = () => <div>WhyAttend placeholder</div>;
const SupportSection = () => <div>SupportSection placeholder</div>;

export default function Event() {
  return (
    <ErrorBoundary>
      <div className="min-h-screen container mt-64 mx-auto px-8">
        <section>
          <EventHeader />
        </section>
        <section>
          <WhyAttend />
        </section>
        <section>
          <SupportSection />
        </section>
      </div>
    </ErrorBoundary>
  );
}
