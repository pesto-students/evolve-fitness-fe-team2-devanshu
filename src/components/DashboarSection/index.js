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
        Our services
      </div>
      <div
        className={classes.DashboardSectionWrapper}
        // style={{
        //   display: "flex",
        //   flexWrap: "nowrap",
        //   overflowX: "scroll",
        //   width: "100%",
        //   marginBottom: "30px",
        //   padding: "8px 0px",
        // }}
      >
        {props.children}
      </div>
    </Container>
  );
}

export default DashboardSecton;
