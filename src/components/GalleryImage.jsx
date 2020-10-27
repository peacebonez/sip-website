import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

const GalleryImage = ({ image, alt, isFlex, setisFlex }) => {
  const flexCenter = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  };

  const gridStyles = {
    margin: "0",
    padding: "0",
    alignContent: "center",
    justifySelf: "center",
    alignSelf: "center",
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

GalleryImage.propTypes = {};

export default GalleryImage;
