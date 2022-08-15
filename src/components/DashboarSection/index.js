import React from "react";
import { Container } from "react-bootstrap";
import classes from "./DashboarSection.module.css";

function DashboardSecton(props) {
  return (
    <Container fluid>
      <div
        style={{
          fontSize: "30px",
          // color: var(--heading-text),
          marginBottom: "25px",
          fontWeight: 500,
        }}
      >
        {props.heading}
      </div>
      <div className={classes.DashboardSectionWrapper}>{props.children}</div>
    </Container>
  );
}

export default DashboardSecton;
