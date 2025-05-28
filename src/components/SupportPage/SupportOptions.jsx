import SupportOptionSingle from './SupportOptionSingle.jsx';

const SupportOptions = () => {
  return (
    <div className="w-full grid justify-center text-center border-2 my-24">
      <h2>Support options</h2>
      <div className="flex gap-2 border-2">
        <SupportOptionSingle
          title="Volunteering"
          textContent=""
          ctaText="Volunteer"
        />
        <SupportOptionSingle
          title="Donations"
          textContent=""
          ctaText="Donate"
        />
        <SupportOptionSingle
          title="Fundraising"
          textContent=""
          ctaText="Join Us"
        />
      </div>
    </div>
  );
};

export default SupportOptions;
