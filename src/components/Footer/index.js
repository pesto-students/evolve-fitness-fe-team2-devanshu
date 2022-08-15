import React from "react";
import classes from "./footer.module.css";
import { Link } from "react-router-dom";
import { Row, Col } from "react-bootstrap";

function Footer() {
  return (
    <div className={classes.FooterContainer}>
      <div className={classes.FooterWrapper}>
        <div className={classes.Logo}>Evolve Fitness</div>
        <div className={classes.Menu}>
          <h6>MENU</h6>
          <p>
            <Link to="/">Dashboard</Link>
          </p>
          <p>
            <Link to="/blog">Blog</Link>
          </p>
          <p>
            <Link to={`/Fitness-center/gym`}>Gym Center</Link>
          </p>
          <p>
            <Link to={`/Fitness-center/yoga`}>Yoga Center</Link>
          </p>
          <p>
            <Link to={`/Fitness-center/zumba`}>zumba Center</Link>
          </p>
          <p>
            <Link to={`/Fitness-center/martialart`}>Martial Art Center</Link>
          </p>
        </div>
        <div className={classes.Menu}>
          <h6>BISUNESS</h6>
          <p>
            <Link to="/partner-with-us">partner-with-us</Link>
          </p>
          <p>
            <Link to="/contact-us">contact us</Link>
          </p>
        </div>
        <div className={classes.Menu}>
          <h6>CONTACT US</h6>
          <p>MY company,42 Avenue Das Champs</p>
          <p>Call Us Now (0123-458-789)</p>
          <p>Email EvolveFitness@gmail.com</p>
        </div>
      </div>
      <div className={classes.FooterCopyRightSection}>
        Copyright © {new Date().getFullYear()} <span> Evolve Fitness </span> All
        rights reserved
      </div>
    </div>
  );
}

export default Footer;
