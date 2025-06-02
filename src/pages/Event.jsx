import ErrorBoundary from '../components/ErrorBoundary';
import EventHeader from '../components/event/EventHeader';
import EventVisuals from '../components/event/EventVisuals';
import ReasonsToAttend from '../components/event/ReasonsToAttend';
import EventBreadcrumb from "../components/event/EventBreadcrumb";
import EventNavigation from "../components/event/EventNavigation";


// Placeholder components – will be replaced later
// const EventHeader = () => <div>EventHeader placeholder</div>;
// WhyAttend = () => <div>WhyAttend placeholder</div>;
const SupportSection = () => <div>SupportSection placeholder</div>;

export default function Event() {
  return (
    <ErrorBoundary>
      <div className="min-h-screen container mt-64 mx-auto px-8">
        <section>
          <EventBreadcrumb />
          <EventHeader />
          <EventVisuals />
        </section>
        <section>
          <ReasonsToAttend />
        </section>
        <section>
          <SupportSection />
        </section>
        <EventNavigation />
      </div>
    </ErrorBoundary>
  );
}
