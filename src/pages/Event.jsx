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
          <div className="flex flex-col-reverse lg:flex-col gap-8">
            <EventHeader />           
            <EventVisuals />
          </div>
        </section>
        <section>
          <ReasonsToAttend />
        </section>
        <EventNavigation />
        <section>
          <SupportUsSection />
        </section>   
      </div>
    </ErrorBoundary>
  );
}
