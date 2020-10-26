import React from "react";
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
  { image: cakePops, alt: "Colorful cake pops with verdant green back drop" },
];

const Gallery = (props) => {
  return (
    <section id="gallery">
      {images.map((obj, i) => {
        return <GalleryImage key={i} image={obj.image} alt={obj.alt} />;
      })}
    </section>
  );
};

Gallery.propTypes = {};

export default Gallery;
