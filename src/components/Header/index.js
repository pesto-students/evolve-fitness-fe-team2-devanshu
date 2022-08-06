import React from "react";
import classes from "./header.module.css";
import LocationIcon from "../../assests/headerIcons/Location.svg";

function Header() {
  return (
    <div className={classes.HeaderWapper}>
      <div className={classes.Logo}>
        <h1>Evolve Fitness</h1>
      </div>
      <div className={classes.HeaderSearch}>
        <div className={classes.HeaderSearchLeftSection}>
          <img src={LocationIcon} alt="location" />
          <div>{"Bhopal,awadhpuri"}</div>
        </div>
        <div className={classes.HeaderSearchRightSection}>
          <input
            type="text"
            placeholder="search for fitness center near you"
            name="fname"
            autocomplete="off"
          />
          <div className={classes.HeaderSearchResult}></div>
        </div>
      </div>
      <div>
        <div>Login/SignUp</div>
      </div>
    </div>
  );
}

export default Header;
