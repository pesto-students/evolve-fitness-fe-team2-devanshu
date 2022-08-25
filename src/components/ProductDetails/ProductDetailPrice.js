import React from "react";
import classes from "./ProductDetailPrice.module.css";
import { Row, Col, Container } from "react-bootstrap";

function ProductDetailPrice({ price }) {
  const display = Object.keys(price).map((key, index) => (
    <Col key={index}>
      <div
        className={classes.PrudctDetailPriceCard}
        style={{
          backgroundColor: `${price[key].color}`,
          background: `linear-gradient(to right, ${
            key === "gold"
              ? "#ae8625, #f7ef8a, #d2ac47"
              : key === "silver"
              ? "#737373, #C0C0C0, #D8D8D6"
              : key === "bronze"
              ? "#503B00, #C1A132, #EACA58"
              : key === "platinum"
              ? "#D8D8D6, #D8D8D6, #D8D8D6"
              : "#ae8625, #f7ef8a, #d2ac47"
          })`,
        }}
      >
        <h4>{key}</h4>
        <div className={classes.PrudctDetailPriceDisc}>
          <div> {`Duration  -${price[key].duration}`}</div>
          <div> {`Price  - ₹ ${price[key].price} /-`}</div>
          <div> {`Personal Trainer  - ₹ ${price[key].personalTrainer} /-`}</div>
        </div>
      </div>
    </Col>
  ));
  return (
    <Container fluid>
      <Row>{display}</Row>
    </Container>
  );
}

export default ProductDetailPrice;
