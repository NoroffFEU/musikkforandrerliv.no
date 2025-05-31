import ErrorBoundary from '../components/ErrorBoundary';
import EventHeader from '../components/event/EventHeader';
import EventVisuals from '../components/event/EventVisuals';
import ReasonsToAttend from '../components/event/ReasonsToAttend';
import SupportUsSection from '../components/event/SupportUsSection';

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
          <SupportUsSection />
        </section>
      </div>
    </ErrorBoundary>
  );
}
