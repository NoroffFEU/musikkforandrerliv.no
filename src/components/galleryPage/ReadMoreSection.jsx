import Button from '../Button';

const ReadMoreSection = () => {
  return (
    <div className="mt-16 py-12 px-6 bg-gray-100 rounded-lg relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 mix-blend-overlay"></div>
      <div className="relative z-10">
        <h2 className="text-3xl font-bold text-center mb-8">Read More</h2>
        <p className="text-center mb-8 max-w-3xl mx-auto">
          Want to learn more about our organization and what we do? Check out
          these sections to discover our mission, values, and activities.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <Button variant="primary" outline href="/about">
            About Us
          </Button>
          <Button variant="primary" href="/what-we-do">
            What We Do
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ReadMoreSection;
