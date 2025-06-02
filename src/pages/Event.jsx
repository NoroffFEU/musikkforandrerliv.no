import ErrorBoundary from '../components/ErrorBoundary';
import SupportUsSection from '../components/SupportUsSection';
import EventHeader from '../components/event/EventHeader';
import EventVisuals from '../components/event/EventVisuals';
import ReasonsToAttend from '../components/event/ReasonsToAttend';
import EventBreadcrumb from "../components/event/EventBreadcrumb";
import EventNavigation from "../components/event/EventNavigation";


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
          <SupportUsSection />
        </section>
        <EventNavigation />
      </div>
    </ErrorBoundary>
  );
}
