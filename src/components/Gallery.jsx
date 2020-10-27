import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import espresso from "../assets/espresso.jpg";
import macaroon from "../assets/macaroon.jpg";
import coldBrew from "../assets/cold-brew.jpg";
import bagel from "../assets/bagel.jpg";
import dessertDrink from "../assets/dessert-drink.jpg";
import orangeDrank from "../assets/orange-drank.jpg";
import cakePops from "../assets/cake-pops.jpg";

import GalleryImage from "../components/GalleryImage";
const images = [
  { image: macaroon, alt: "Tasty blue macaroon" },
  { image: coldBrew, alt: "Cold brew with pride logo" },
  { image: espresso, alt: "Espresso being poured" },
  { image: dessertDrink, alt: "Creamy XL cold brew" },
  { image: bagel, alt: "Bagel sandwich paired with a cold brew" },
  { image: orangeDrank, alt: "Orange drink" },
  // { image: cakePops, alt: "Colorful cake pops with verdant green back drop" },
];

const Gallery = () => {
  const gridStyles = {
    display: "grid",
    gridGap: "3vw",
    gridTemplateColumns: "33vw 33vw",
    justifyContent: "center",
    justifyItems: "center",
  };

  const [isFlex, setisFlex] = useState(window.innerWidth < 768);

  useEffect(() => {
    let viewWidth = window.innerWidth;
    window.addEventListener("resize", () => {
      viewWidth = window.innerWidth;
      if (viewWidth < 768) setisFlex(true);
      else setisFlex(false);
    });
  });

  return (
    <section id="gallery" style={!isFlex ? gridStyles : {}}>
      {images.map((obj, i) => {
        return (
          <GalleryImage
            key={i}
            image={obj.image}
            alt={obj.alt}
            isFlex={isFlex}
            setisFlex={setisFlex}
          />
        );
      })}
    </section>
  );
};

Gallery.propTypes = {};

export default Gallery;
