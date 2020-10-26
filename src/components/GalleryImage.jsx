import React from "react";
import PropTypes from "prop-types";

const GalleryImage = ({ image, alt }) => {
  return (
    <div>
      <img alt={alt} src={image} />
    </div>
  );
};

GalleryImage.propTypes = {};

export default GalleryImage;
