import React, { Fragment, useState } from 'react';

import PropTypes from 'prop-types';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

const defaultImage = {
  src: 'https://placehold.co/1000x344',
  alt: 'Event promotional image',
};

export default function EventVisuals({ image = defaultImage }) {
  const [open, setOpen] = useState(false);
  const [imageError, setImageError] = useState(false);

  const imageSrc = imageError ? 'https://placehold.co/800x300' : image.src;

  return (
    <Fragment>
      <div className="event-visual w-full max-w-3xl mx-auto">
        <div
          className="overflow-hidden cursor-pointer"
          onClick={() => setOpen(true)}
        >
          <img
            src={imageSrc}
            alt={image.alt}
            onError={() => setImageError(true)}
            className="w-full h-auto object-cover "
            loading="lazy"
          />
        </div>
      </div>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={[{ src: imageSrc, title: image.alt }]}
      />
    </Fragment>
  );
}

EventVisuals.propTypes = {
  image: PropTypes.shape({
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
  }),
};
