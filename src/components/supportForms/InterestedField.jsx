import RadioInput from "./RadioInput";

const InterestedField = () => {
  return (
    <div>
      <div className="flex flex-col gap-[25px] justify-center items-center md:items-stretch container md:flex-row md:gap-[52px] transition-all duration-300 ease-in-out">
        <fieldset  
            aria-labelledby='I am interested in'
            className="min-h-[227px] h-auto flex flex-col justify-center items-center  md:items-start md:justify-start w-[280px] md:w-[505px] px-[10px] py-[35px] md:px-[70px] border-[1px] border-opacity-50 border-black/50 rounded-[9px] bg-white transition-all duration-300 ease-in-out">
       
          <h2 className="font-sans text-[18px] md:text-[20px] md:text-left sm:text-center text-[#363732] font-semibold mb-[44px]">
           I'm Interested In:
          </h2>
          <RadioInput
            name="interest"
            options={[
              { label: 'Volunteering', value: 'volunteering' },
              { label: 'Fundraising', value: 'fundraising' },
              { label: 'Ticket / Registration', value: 'ticket' },
              { label: 'Other', value: 'other' },
            ]}
          />
        </fieldset>
      </div>
    </div>
  );
};

export default InterestedField;