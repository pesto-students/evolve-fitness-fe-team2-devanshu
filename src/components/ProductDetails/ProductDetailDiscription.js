import React from "react";
import classes from "./PrductDetailDiscription.module.css";
import { Container, Row, Col } from "react-bootstrap";

function ProductDetailDiscription() {
  return (
    <Container style={{ marginTop: "12px" }}>
      <Row>
        <Col lg={7}>
          <h1>The IRONMAN Fitness Club </h1>
          <p>
            Plot no. 124, Star Avenue, 1st Floor, Above Canara Bank, BDA Road,
            BHEL, Awadhpuri, Bhopal, Madhya Pradesh 462021
          </p>
        </Col>
        <Col className={classes.ProductDetailDiscriptionAverage} lg={4}>
          <h4>Average Rating</h4>
          <div className={classes.ProductDetailDiscriptionButton}>
            {4.5} <span className={"fa fa-star"}></span>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default ProductDetailDiscription;
