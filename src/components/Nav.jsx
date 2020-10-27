import React from "react";
import PropTypes from "prop-types";
import sipIcon from "../assets/sip-icon.jpeg";

const Nav = ({ isOverlayShown, setisOverlayShown }) => {
  return (
    <header className="nav">
      <div>
        <img src={sipIcon} alt="sip logo" id="sip-logo" />
      </div>
      <div id="hamburger">
        <div
          className="interactive"
          onClick={() => setisOverlayShown(!isOverlayShown)}
        >
          {!isOverlayShown ? (
            <>
              <div className="line line-1"></div>
              <div className="line line-2"></div>
              <div className="line line-3"></div>
            </>
          ) : (
            <>
              <div className="line line-checked line-1-checked"></div>
              <div className="line line-checked line-2-checked"></div>
              <div className="line line-checked line-3-checked"></div>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

Nav.propTypes = {
  isOverlayShown: PropTypes.bool.isRequired,
  setisOverlayShown: PropTypes.func.isRequired,
};

export default Nav;
