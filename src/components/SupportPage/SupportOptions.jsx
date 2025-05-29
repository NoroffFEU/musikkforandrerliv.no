import SupportOptionSingle from './SupportOptionSingle.jsx';

const supportOptionsData = [
  {
    title: 'Volunteering',
    ariaDescription: '',
    textContent: "Would you like to make a difference for street children in one of the world's poorest countries? We are looking for individuals who want to volunteer with us in Madagascar. Primarily, we are seeking those with an interest in or education related to music.We find that students greatly benefit from instruction by professional musicians.Currently, there is no professional symphony orchestra in Madagascar, so we rely on bringing in teaching expertise from outside.We hope to have volunteers in shorter or longer periods during 2024, especially for viola, cello, flute, and clarinet, possibly a conductor as well. Furthermore, we always need people with talents for practical work such as maintenance, carpentry, artists, arts and crafts teachers, healthcare professionals, photographers, and more. We are also open to other groups and talents, so please get in touch, and we'll see if MMF is the right fit for you! If you are curious and think this could be exciting, please fill out the form, and we will contact you."
  },
  {
    title: 'Donations',
    ariaDescription: '',
    textContent: 'The funds that come in go towards covering everything from food, clothing, education, equipment, healthcare, medicines, and dental care for the children, as well as the operation of the music school and salaries for our staff. Give a simple amount: You choose how much you want to support with. Vipps to 784870 or transfer to account number: 3260.13.19038. You can also fill out the form and choose a payment plan and payment method. Thank you for your support!'
  },
  {
    title: 'Fundraising',
    ariaDescription: '',
    textContent: "Over the past few years, we have been fortunate to have many enthusiastic individuals who have fundraised in connection with birthdays and other events. We have also had several people who have organized collections of equipment for both the children and instruments for the music school. Please feel free to contact us if you wish to start a fundraiser or crowdfunding campaign to support our work."
  }
]

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
