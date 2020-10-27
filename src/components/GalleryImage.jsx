import React from "react";
import PropTypes from "prop-types";

const GalleryImage = ({ image, alt, isFlex }) => {
  const flexCenter = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  };

  return (
    <div style={flexCenter}>
      <img
        alt={alt}
        src={image}
        style={!isFlex ? { padding: 0, margin: 0 } : {}}
      />
    </div>
  );
};

GalleryImage.propTypes = {
  image: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  isFlex: PropTypes.bool.isRequired,
};

export default GalleryImage;
