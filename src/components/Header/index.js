import React from "react";
import classes from "./header.module.css";
import Search from "./Search";

function Header() {
  return (
    <div className={classes.HeaderWapper}>
      <div className={classes.Logo}>
        <h1>Evolve Fitness</h1>
      </div>
      <Search />
      <div>
        <div>Login/SignUp</div>
      </div>
    </div>
  );
}

export default Header;
