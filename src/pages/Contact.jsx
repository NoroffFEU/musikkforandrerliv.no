import ErrorBoundary from '../components/ErrorBoundary.jsx';
import ContactForm from '../components/contactPage/ContactForm.jsx';
import { ContactInfo } from '../components/contactPage/ContactInfo.jsx';
import MissionStatement from '../components/contactPage/MissionStatement.jsx';

function Contact() {
  return (
    <ErrorBoundary>
      <div className="pt-[199px] w-full flex flex-col items-center">
        <h1 className="text-6xl font-justAnotherHand text-center my-10">
          Contact Us
        </h1>
        <MissionStatement />
        <section className="p-10 bg-[var(--color-mint-green)] mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 border-1 rounded-sm m-10 w-11/12 max-w-[1200px] md:divide-x">
          <div className="order-2 md:order-1">
            <ContactInfo />
          </div>
          <div className="order-1 md:order-2">
            <ContactForm />
          </div>
        </section>
      </div>
    </ErrorBoundary>
  );
}

export default Contact;
