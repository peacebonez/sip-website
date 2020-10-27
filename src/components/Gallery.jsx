import React, { useState, useEffect } from "react";
import espresso from "../assets/espresso.jpg";
import macaroon from "../assets/macaroon.jpg";
import coldBrew from "../assets/cold-brew.jpg";
import bagel from "../assets/bagel.jpg";
import dessertDrink from "../assets/dessert-drink.jpg";
import orangeDrank from "../assets/orange-drank.jpg";

import GalleryImage from "../components/GalleryImage";
const images = [
  { image: macaroon, alt: "Tasty blue macaroon" },
  { image: espresso, alt: "Espresso being poured" },
  { image: coldBrew, alt: "Cold brew with pride logo" },
  { image: bagel, alt: "Bagel sandwich paired with a cold brew" },
  { image: orangeDrank, alt: "Orange drink" },
  { image: dessertDrink, alt: "Creamy XL cold brew" },
];

const Gallery = () => {
  const gridStyles = {
    display: "grid",
    gridGap: "3vw",
    gridTemplateColumns: "20vw 20vw 20vw",
    // gridTemplateColumns: "33vw 33vw",
    justifyContent: "center",
    justifyItems: "center",
  };
  let viewWidth = window.innerWidth;
  const [isFlex, setisFlex] = useState(viewWidth < 768);

  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth < 768) setisFlex(true);
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
          />
        );
      })}
    </section>
  );
};

export default Gallery;
