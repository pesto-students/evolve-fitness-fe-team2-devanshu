import React from "react";
import classes from "./ProductDetailPrice.module.css";
import { Row, Col } from "react-bootstrap";

function ProductDetailPrice() {
  let data = [
    {
      id: 1,
      color: "#CD7F32",
      CradName: "Bronze",
      duration: "1 Month",
      price: "500",
      personalTrainer: "500rs",
    },
    {
      id: 1,
      color: "#C0C0C0",
      CradName: "Silver",
      duration: "3 Month",
      price: "1200",
      personalTrainer: "500rs",
    },
    {
      id: 1,
      color: "#FFCA4B",
      CradName: "Gold",
      duration: "6 Month",
      price: "2200",
      personalTrainer: "500rs",
    },
    {
      id: 1,
      color: "#a0a09e",
      CradName: "Platinum",
      duration: "12 Month",
      price: "4200",
      personalTrainer: "500rs",
    },
  ];
  return (
    <Row>
      {data.map((item) => (
        <Col>
          <div
            className={classes.PrudctDetailPriceCard}
            key={item.id}
            style={{ backgroundColor: item.color }}
          >
            <h4>{item.CradName}</h4>
            <div className={classes.PrudctDetailPriceDisc}>
              <div> {`Duration  -${item.duration}`}</div>
              <div> {`Price  - ₹ ${item.price} /-`}</div>
              <div> {`Personal Trainer  - ₹ ${item.personalTrainer} /-`}</div>
            </div>
          </div>
        </Col>
      ))}
    </Row>
  );
}

export default ProductDetailPrice;
