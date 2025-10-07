import { TermsAccordion } from '../components/TermsAccordion/TermsAccordion';

export const TermsPage = () => {
  const sections = [
    { title: 'acceptance of terms', content: '' },
    { title: 'use of website', content: '' },
    { title: 'links to other websites', content: '' },
    { title: 'disclaimer of warranties', content: '' },
    { title: 'limitation of liability', content: '' },
    { title: 'indemnification', content: '' },
    { title: 'applicable law', content: '' },
    { title: 'changes', content: '' },
    { title: 'governing law', content: '' },
  ];

  return (
    <div>
      <h1>Terms and Conditions</h1>
      <TermsAccordion sections={sections} />
    </div>
  );
};
