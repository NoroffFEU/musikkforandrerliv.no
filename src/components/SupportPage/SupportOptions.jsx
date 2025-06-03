import supportOptionsData from '../../data/supportOptionsData.json';
import SupportOptionSingle from './SupportOptionSingle.jsx';

const SupportOptions = () => {
  return (
    <section className="w-full grid justify-center text-center my-24 gap-8 bg-white">
      {supportOptionsData.map((option, index) => (
        <SupportOptionSingle
          key={option.title}
          title={option.title}
          ariaDescription={option.ariaDescription}
          textContent={option.textContent}
          tabIndex={index + 1}
        />
      ))}
    </section>
  );
};

export default SupportOptions;
