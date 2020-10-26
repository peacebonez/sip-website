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
        <label htmlFor="click">
          <input
            type="checkbox"
            className="checkbox"
            id="click"
            onClick={() => setisOverlayShown(!isOverlayShown)}
          />
          <div className="interactive">
            <div className="line line-1"></div>
            <div className="line line-2"></div>
            <div className="line line-3"></div>
          </div>
        </label>
      </div>
    </header>
  );
};

Nav.propTypes = {
  isOverlayShown: PropTypes.bool.isRequired,
  setisOverlayShown: PropTypes.func.isRequired,
};

export default Nav;
