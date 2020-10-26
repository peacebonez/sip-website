import React from "react";
import espresso from "../assets/espresso.jpg";

import blueCoffee from "../assets/blue-coffee.jpg";

import PropTypes from "prop-types";

const Background = (props) => {
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

Background.propTypes = {};

export default Background;
