import React from "react";
import classes from "./PrductDetailDiscription.module.css";
import { Container, Row, Col } from "react-bootstrap";

const ProductDetailDiscription = ({ name, address, comments }) => {
  const Average = () => {
    var sum = 0;
    if (comments.length > 0) {
      comments.forEach(function (num) {
        sum += num.stars;
      });
      let average = sum / comments.length;

      return average.toFixed(1);
    }
  };
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
            {Average() || 5.0} <span className={"fa fa-star"}></span>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetailDiscription;
