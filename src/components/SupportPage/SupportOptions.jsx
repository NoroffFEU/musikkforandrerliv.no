import SupportOptionSingle from './SupportOptionSingle.jsx';

import supportOptionsData from '../../data/supportOptionsData.json';

const SupportOptions = () => {
  return (
    <div className="w-full grid justify-center text-center my-24 gap-8 bg-white">
      {supportOptionsData.map((option, index) => (
        <SupportOptionSingle
          key={option.title}
          title={option.title}
          ariaDescription={option.ariaDescription}
          textContent={option.textContent}
          tabIndex={index + 1}
        />
      ))}
    </div>
  );
};

export default SupportOptions;
