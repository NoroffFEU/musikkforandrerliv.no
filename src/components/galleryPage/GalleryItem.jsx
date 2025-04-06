/**
 * GalleryItem Component
 *
 * A single item in the gallery grid.
 * Displays an image with a caption.
 *
 * @param {string} src - The source URL of the image
 * @param {string} alt - The alternative text for the image
 * @param {string} aspectClass - The CSS class for the image aspect ratio
 * @param {function} onClick - The function to call when the image is clicked
 * @returns {React.ReactNode} - The GalleryItem component
 */
const GalleryItem = ({ src, alt, aspectClass, onClick }) => (
  <div className="group w-full h-full flex flex-col">
    <div
      className={`relative w-full h-full overflow-hidden shadow-sm ${aspectClass}`}
    >
      <img
        src={src}
        loading="lazy"
        alt={alt}
        className="absolute inset-0 w-full h-full object-cover cursor-pointer shadow-md hover:opacity-80 transition"
        onClick={onClick}
      />
    </div>
    <p className="mt-2 mb-4 text-lg text-center text-gray-600">
      Lorem ipsum dolor sit amet
    </p>
  </div>
);

export default GalleryItem;
