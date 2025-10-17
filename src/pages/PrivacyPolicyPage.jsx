import data from '@/data/privacyPolicy.json';

import ErrorBoundary from '../components/ErrorBoundary.jsx';
import PrivacyPolicySection from '../components/PrivacyPolicySection/index.jsx';

export default function PrivacyPolicyPage() {
  return (
    <ErrorBoundary>
      <section className="mt-50 mx-auto px-10 mb-[32px] md:mb-[60px] lg:mb-[80px]">
        <div className="text-center mb-4">
          <h1>Our Privacy Policy</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique. Duis cursus, mi quis
            viverra ornare, eros dolor interdum nulla, ut commodo diam libero
            vitae erat. Lorem ipsum dolor sit amet.
          </p>
        </div>

        <div>
          {data.sections.map((section, index) => (
            <PrivacyPolicySection key={index} title={section.title}>
              <p>{section.content}</p>
            </PrivacyPolicySection>
          ))}

          <p>Updated: {data.lastUpdated}</p>
        </div>
      </section>
    </ErrorBoundary>
  );
}
