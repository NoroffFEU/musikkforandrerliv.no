import ErrorBoundary from '../components/ErrorBoundary';
import EventHeader from '../components/event/EventHeader';
import EventVisuals from '../components/event/EventVisuals';
import ReasonsToAttend from '../components/event/ReasonsToAttend';

// Placeholder components – will be replaced later
// const EventHeader = () => <div>EventHeader placeholder</div>;
// WhyAttend = () => <div>WhyAttend placeholder</div>;
const SupportSection = () => <div>SupportSection placeholder</div>;

export default function Event() {
  return (
    <ErrorBoundary>
      <div className="min-h-screen container mt-64 mx-auto px-8">
        <section>
          <EventHeader />
          <EventVisuals />
        </section>
        <section>
          <ReasonsToAttend />
        </section>
        <section>
          <SupportSection />
        </section>
      </div>
    </ErrorBoundary>
  );
}
