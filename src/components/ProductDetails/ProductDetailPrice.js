import React from "react";
import classes from "./ProductDetailPrice.module.css";
import { Row, Col } from "react-bootstrap";

function ProductDetailPrice({ price }) {
  const display = Object.keys(price).map((key, index) => (
    <Col key={index}>
      <div
        className={classes.PrudctDetailPriceCard}
        style={{ backgroundColor: `${price[key].color}` }}
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
  return <Row>{display}</Row>;
}

export default ProductDetailPrice;
