import ImagePreview from './ImagePreview';

/**
 * GalleryItem Component
 *
 * A single item in the gallery grid.
 * Displays an image with a caption.
 *
 * @param {string} src - The source URL of the image
 * @param {string} alt - The alternative text for the image
 * @param {string} caption - The caption text to display below the image
 * @param {string} aspectClass - The CSS class for the image aspect ratio
 * @param {function} onClick - The function to call when the image is clicked
 * @returns {React.ReactNode} - The GalleryItem component
 */

const GalleryItem = ({ images, index, src, alt, aspectClass }) => (
  <ImagePreview
    images={images}
    startingIndex={index}
    thumbnail={
      <div className="group w-full h-auto flex flex-col">
        <div
          className={`relative w-full overflow-hidden shadow-sm ${aspectClass}`}
        >
          <img
            src={src}
            loading="lazy"
            alt={alt}
            className="absolute inset-0 w-full h-full object-cover cursor-pointer shadow-md hover:opacity-80 transition"
          />
        </div>
        <p className="mt-2 text-lg text-center text-black">
          Lorem ipsum dolor sit amet
        </p>
      </div>
    }
  />
);

export default GalleryItem;
