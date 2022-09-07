import React from "react";
import { Container } from "react-bootstrap";
import classes from "./DashboarSection.module.css";

function DashboardSecton(props) {
  return (
    <Container fluid>
      <h2
        style={{
          fontSize: "25px",
          margin: "8px 0px",
          fontWeight: 500,
          // textTransform: "capitalize",
        }}
      >
        {props.heading}
      </h2>
      <div className={classes.DashboardSectionWrapper}>{props.children}</div>
    </Container>
  );
}

export default DashboardSecton;
