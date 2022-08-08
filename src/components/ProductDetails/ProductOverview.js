import React from "react";
import classes from "./ProductOverview.module.css";
import DirectionIcon from "../../assests/ProducDetials/Direction.svg";
import { Row, Col } from "react-bootstrap";

const ProductOverview = () => {
  return (
    <Row>
      <Col lg={9} md={6}>
        <h4>About Fitness Center</h4>
        <p>
          {`A gym is a large room, usually containing special equipment, 
          where people go to do physical exercise and get fit. The gym has 
          exercise bikes and running machines. While some guests play golf, 
          others work out in the hotel gym. 
          The large gym offers a variety of exercise equipment and weights going up to 100 pounds.`}
        </p>
      </Col>
      <Col lg={3} md={6}>
        <div className={classes.ProductOverviewCall}>
          <h4>Call</h4>
          <p className={classes.ProductOverviewCallNumber}>+918827831093</p>
          <h4>Direction</h4>
          <div className={classes.ProductOverviewMap}>Map</div>
          <p>Plot 10-C/CA, Scheme 94, Vijay Nagar, Indore</p>

          <div className={classes.ProductOverviewDirectionBtn}>
            <img src={DirectionIcon} alt={"Direction"} width={15} />
            Direction
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default ProductOverview;
