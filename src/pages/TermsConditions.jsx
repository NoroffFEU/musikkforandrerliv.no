import ErrorBoundary from '../components/ErrorBoundary';

function TermsConditions() {
  return (
    <ErrorBoundary>
      <div className="pt-[199px] w-full flex flex-col items-center">
        <h1 className="text-5xl font-sans text-center my-10">
          Our Terms And Conditions
        </h1>
        <p className="text-lg font-sans w-10/12 m-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim in eros elementum tristique. Duis cursus, mi quis viverra
          ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
          Lorem ipsum dolor sit amet, consectetur
        </p>
        <section>
          {/* Collapsable component goes here  */}
          {/* Governing law component goes here */}
        </section>
      </div>
    </ErrorBoundary>
  );
}

export default TermsConditions;
