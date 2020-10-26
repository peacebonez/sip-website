import React from "react";
import PropTypes from "prop-types";

const Overlay = ({ isOverlayShown }) => {
  const styles = {
    height: "100vh",
    width: "100vw",
    overflow: "hidden",
    background: "black",
    opacity: "0.6",
    zIndex: "1",
    position: "fixed",
    top: "0",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    transition: "all 0.8s cubic-bezier(.25,.1,.23,.98)",
    transform: isOverlayShown ? "translateY(0vh)" : "translateY(-100vh)",
  };
  return <div id="overlay" style={styles}></div>;
};

Overlay.propTypes = {};

export default Overlay;
