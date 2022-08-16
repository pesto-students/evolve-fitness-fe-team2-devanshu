import React from "react";
import classes from "./PrductDetailDiscription.module.css";
import { Container, Row, Col } from "react-bootstrap";

function ProductDetailDiscription({ name, address }) {
  return (
    <Container style={{ marginTop: "12px" }}>
      <Row>
        <Col lg={7}>
          <h1>{name}</h1>
          <p>{`${address.city}, ${address.area}, ${address.state}, ${address.country}`}</p>
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
