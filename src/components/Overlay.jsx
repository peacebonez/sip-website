import React from "react";
import PropTypes from "prop-types";

const Overlay = ({ isOverlayShown, setisOverlayShown }) => {
  const styles = {
    height: "100vh",
    width: "100vw",
    overflow: "hidden",
    background: "rgba(0,0,0,.7)",
    zIndex: "1",
    position: "fixed",
    top: "0",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    transition: "all 0.5s cubic-bezier(.25,.1,.23,.98)",
    transform: isOverlayShown ? "translateY(0vh)" : "translateY(-100vh)",
  };
  return (
    <div id="overlay" style={styles}>
      <ul>
        <a href="#locations" onClick={() => setisOverlayShown(false)}>
          <li className="middle-underline">Locations</li>
        </a>
        <a href="#gallery" onClick={() => setisOverlayShown(false)}>
          <li className="middle-underline">Gallery</li>
        </a>
        <a href="#menu" onClick={() => setisOverlayShown(false)}>
          <li className="middle-underline">Menu</li>
        </a>
        <a href="#contact" onClick={() => setisOverlayShown(false)}>
          <li className="middle-underline">Contact</li>
        </a>
      </ul>
    </div>
  );
};

Overlay.propTypes = {
  isOverlayShown: PropTypes.bool.isRequired,
  setisOverlayShown: PropTypes.func.isRequired,
};

export default Overlay;
