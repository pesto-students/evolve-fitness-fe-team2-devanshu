import React from "react";
import LocationIcon from "../../assests/headerIcons/Location.svg";
import classes from "./header.module.css";

const Search = () => {
  return (
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
  );
};

export default Search;
