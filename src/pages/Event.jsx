import ErrorBoundary from '../components/ErrorBoundary';
import SupportUsSection from '../components/SupportUsSection';
import EventBreadcrumb from '../components/event/EventBreadcrumb';
import EventHeader from '../components/event/EventHeader';
import EventNavigation from '../components/event/EventNavigation';
import EventVisuals from '../components/event/EventVisuals';
import WhyAttend from '../components/event/WhyAttend';

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
          <WhyAttend />
        </section>
        <EventNavigation />
        <section>
          <SupportUsSection />
        </section>
      </div>
    </ErrorBoundary>
  );
}
