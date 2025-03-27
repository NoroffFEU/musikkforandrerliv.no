import ReusableButton from './reusableButton'

export default function ReadMoreButton({ href }) {
  return (
    <ReusableButton
      text="READ MORE"
      href={href}
      className="py-4 px-8 rounded-lg font-semibold md:text-2xl"
    />
  );
}
