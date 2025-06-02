import { Link } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";

export default function EventBreadcrumb() {
  return (
    <nav
      className="text-sm text-gray-600 font-montserrat mb-8"
      aria-label="Breadcrumb"
    >
      <ol className="list-none p-0 inline-flex items-center space-x-2">
        <li>
          <Link to="/" className="hover:underline text-[#f26355]">
            Home
          </Link>
        </li>
        <li>
          <FaChevronRight className="inline-block text-xs" />
        </li>
        <li>
          <Link to="/events" className="hover:underline text-[#f26355]">
            Events
          </Link>
        </li>
        <li>
          <FaChevronRight className="inline-block text-xs" />
        </li>
        <li aria-current="page" className="text-gray-900 font-medium">
          Back-to-School Gala
        </li>
      </ol>
    </nav>
  );
}


