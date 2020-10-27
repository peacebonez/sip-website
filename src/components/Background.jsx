import React from "react";
import blueCoffee from "../assets/blue-coffee.jpg";

const Background = () => {
  return (
    <div
      id="background"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.32), rgb(255, 255, 255, .2)),
        url(${blueCoffee})`,
      }}
    ></div>
  );
};

export default Background;
