import React from "react";
import classes from "./Banner.module.css";
import Logo from "../../assests/headerIcons/Logo.png";
function Banner({ ImageUrl }) {
  return (
    <div
      className={classes.BannerContainer}
      style={{ backgroundImage: `url(${ImageUrl})`}}
    >
      {/* <img src={Logo} alt="EvolveFitness"  /> */}
    </div>
  );
}

export default Banner;
