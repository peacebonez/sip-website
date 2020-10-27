import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

import LocationBox from "./LocationBox";

const Landing = ({ navBarHeight }) => {
  const [height, setheight] = useState("");

  //programmatically set margin-top on locations section
  useEffect(() => {
    const navBarHeight = document.querySelector(".nav").clientHeight;
    setheight(navBarHeight);
  }, [navBarHeight]);
  return (
    <section
      className="landing-container"
      style={{
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <section id="locations" style={{ marginTop: height + "px" }}>
        <LocationBox
          location="Crown Point"
          street="11 N Court St"
          cityStateZip="Crown Point, IN 46307"
          telephone="(219) 662-9165"
          link="https://www.facebook.com/thesipcp"
          orderLink="https://www.grubhub.com/restaurant/sip-coffee-house--artisan-cafe-11-n-court-st-crown-point/1022252"
        />
        <LocationBox
          location="Highland"
          street="2815 Jewett Avenue"
          cityStateZip="Highland, IN 46322"
          telephone="(219) 595-0314"
          link="https://www.facebook.com/SipCoffeeHouse2/"
          orderLink="https://www.grubhub.com/restaurant/sip-coffee-house--artisan-cafe-2815-jewett-ave-highland/1022398"
        />
        <LocationBox
          location="Cedar Lake"
          street="13133 Lake Shore Dr"
          cityStateZip="Cedar Lake, IN 46303"
          telephone="(219) 662-9165"
          link="https://www.facebook.com/Sip-Coffee-House-3-113965280007448/"
        />
      </section>
      <blockquote>
        "Awesome meet-up location for great food and lattes."
      </blockquote>
    </section>
  );
};

Landing.propTypes = {};

export default Landing;
