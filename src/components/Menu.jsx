import React from "react";
import PropTypes from "prop-types";
import menuCoffee from "../assets/menu-coffee.jpg";
import menuFood from "../assets/menu-food.jpg";

const Menu = ({ isBigScreen }) => {
  return (
    <section id="menu">
      <h1>Our Menu</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: `${isBigScreen ? "row" : "column"}`,
        }}
      >
        <div className="menu-wrapper" id="coffee-menu">
          <img src={menuCoffee} alt="coffee menu" />
        </div>
        <div>
          <img src={menuFood} alt="food menu" id="food-menu" />
        </div>
      </div>
    </section>
  );
};

Menu.propTypes = {
  isBigScreen: PropTypes.bool.isRequired,
};

export default Menu;
