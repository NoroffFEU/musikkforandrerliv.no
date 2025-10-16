import ErrorBoundary from '../components/ErrorBoundary.jsx';

function TermsPage() {
    return (
        <ErrorBoundary>
            <section className="min-h-screen container mt-50 mx-auto px-8 text-center">
                <h1 className="font-semibold text-3xl mb-20">Our Terms and Conditions</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus libero minima explicabo minus deleniti molestias accusamus facere neque? Quas, harum id nemo aspernatur quo ratione blanditiis commodi maiores reiciendis vero?</p>
            </section>
        </ErrorBoundary>
    )
}

export default TermsPage;
import TermsAccordion from '../components/TermsAccordion/TermsAccordion';

const sections = [
  {
    title: 'Acceptance of Terms',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Lorem ipsum dolor sit amet.',
  },
  {
    title: 'Use of Website',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Lorem ipsum dolor sit amet.',
  },
  {
    title: 'Links to Other Websites',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Lorem ipsum dolor sit ameta.',
  },
  {
    title: 'Disclaimer of Warranties',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Lorem ipsum dolor sit amet.',
  },
  {
    title: 'Limitation of Liability',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Lorem ipsum dolor sit amet.',
  },
  {
    title: 'Indemnification',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Lorem ipsum dolor sit amet.',
  },
  {
    title: 'Applicable Law',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Lorem ipsum dolor sit amet.',
  },
  {
    title: 'Changes',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Lorem ipsum dolor sit amet.',
  },
  {
    title: 'Governing Law',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Lorem ipsum dolor sit amet.',
  },
];

const governingLaw = {
  title: 'Governing Law',
  content:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Lorem ipsum dolor sit amet.',
};

const lastUpdated = new Date().toLocaleDateString('en-GB', {
  day: '2-digit',
  month: '2-digit',
  year: 'numeric',
});

export const TermsPage = () => (
  <div className="terms-page mt-64 px-4 md:px-16 pb-10">
    <div className="flex flex-col items-center text-center mb-16">
      <h1 className="text-5xl font-semibold mb-6">Our Terms And Conditions</h1>
      <p className="pt-4 pb-4 text-lg">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
        totam sit laudantium quisquam incidunt hic veniam ad maiores possimus
        iure voluptatibus voluptate pariatur cupiditate vero itaque non,
        accusantium eaque porro.
      </p>
    </div>

    {/* Rendrer accordion-seksjonene */}
    {sections.map((section, index) => (
      <TermsAccordion key={index} title={section.title}>
        <p className="font-normal text-lg">{section.content}</p>
      </TermsAccordion>
    ))}

    {/* Seksjon for Governing Law */}
    <div className="mt-10">
      <h2 className="text-3xl font-semibold mb-2">{governingLaw.title}</h2>
      <p className="text-lg mb-4">{governingLaw.content}</p>
      <p className="pt-4 text-md">Updated: {lastUpdated}</p>
    </div>
  </div>
);
