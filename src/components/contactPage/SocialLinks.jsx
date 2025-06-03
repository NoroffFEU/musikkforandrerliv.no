import { FaFacebookF, FaInstagram } from 'react-icons/fa';

export function SocialLinks() {
  return (
    <div className="flex gap-8 justify-center md:justify-normal mt-6">
      <a
        href="https://facebook.com"
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col items-center group"
      >
        <div className="bg-black text-white rounded-full w-14 h-14 flex items-center justify-center cursor-pointer group-hover:scale-110 transition-transform">
          <FaFacebookF size={24} />
        </div>
        <span className="mt-2 text-sm text-black font-sans">Facebook</span>
      </a>

      <a
        href="https://instagram.com"
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col items-center group"
      >
        <div className="bg-black text-white rounded-full w-14 h-14 flex items-center justify-center cursor-pointer group-hover:scale-110 transition-transform">
          <FaInstagram size={24} />
        </div>
        <span className="mt-2 text-sm text-black font-sans">Instagram</span>
      </a>
    </div>
  );
}
