import ErrorBoundary from '../components/ErrorBoundary';
import FundingInfo from '../components/FundingInfo';
import ImpactOfContributions from '../components/ImpactOfContributions';
import SupportOptions from '../components/SupportPage/SupportOptions.jsx';
import BackToTopButton from '../components/buttons/BackToTop';
import FormModal from '../components/modal/FormModal.jsx';
import useFormModal from '../hooks/useFormModal.jsx';

function SupportPage() {
  // destructures state, the form component and open/close modal functions from hook
  const { isModalOpen, currentForm, openModal, closeModal } = useFormModal();

  return (
    <ErrorBoundary>
      <div className="w-full flex justify-center items-center flex-col mt-60 mb-50 pb-0 min-h-[10vh]">
        <h1 className="text-[50px] sm:text-[100px] text-center font-justAnotherHand">
          Support
        </h1>
        <FundingInfo />
        {/* passes openModal function from hook to component */}
        <SupportOptions openModal={openModal} />
        <ImpactOfContributions />
      </div>
      {/* takes closeModal function and isModalOpen state as props */}
      <FormModal closeModal={closeModal} isModalOpen={isModalOpen}>
        {/* renders the current selected form as a component */}
        {currentForm && <currentForm.Component />}
      </FormModal>
      <BackToTopButton />
    </ErrorBoundary>
  );
}

export default SupportPage;
