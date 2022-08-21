import React from "react";
import classes from "./Banner.module.css";
import Logo from "../../assests/headerIcons/Logo.png";
import BlackLogo from "../../assests/headerIcons/BlackLogo.png";
import UserLogin from "../../assests/headerIcons/user.png";
import { useLocation } from "react-router-dom";

function Banner({ ImageUrl }) {
  let location = useLocation();
  return (
    <div
      className={classes.BannerContainer}
      style={{ backgroundImage: `url(${ImageUrl})` }}
    ></div>
  );
}

export default Banner;
