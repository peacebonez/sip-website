import React from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";

const LocationBox = ({
  location,
  street,
  cityStateZip,
  telephone,
  link,
  orderLink,
}) => {
  return (
    <div className="location-box">
      <a href={link}>
        <h2>Sip {location}</h2>
      </a>
      <hr />
      <p>{street}</p>
      <p>{cityStateZip}</p>
      <p>{telephone}</p>
      {orderLink && (
        <a href={orderLink}>
          <Button
            size="large"
            color="primary"
            variant="contained"
            style={{ background: "#52C2D0", border: "solid 3px white" }}
          >
            Order Online
          </Button>
        </a>
      )}
    </div>
  );
};

LocationBox.propTypes = {
  location: PropTypes.string.isRequired,
  street: PropTypes.string.isRequired,
  cityStateZip: PropTypes.string.isRequired,
  telephone: PropTypes.string.isRequired,
};

export default LocationBox;
