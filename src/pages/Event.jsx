import ErrorBoundary from '../components/ErrorBoundary';
import ReasonsToAttend from '../components/ReasonsToAttend';
import EventHeader from '../components/event/EventHeader';
import EventVisuals from '../components/event/EventVisuals';

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
          <EventVisuals />
        </section>
        <section>
          <WhyAttend />
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
