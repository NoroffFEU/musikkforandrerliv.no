import ErrorBoundary from '../components/ErrorBoundary.jsx';

function Contact() {
  return (
    <ErrorBoundary>
      <div className="h-screen w-full flex justify-center items-center flex-col">
        <h1 className="text-2xl font-extrabold">Contact</h1>
        <p>Get in touch with us to learn more about how music changes lives.</p>
      </div>
    </ErrorBoundary>
  );
}

export default Contact;
