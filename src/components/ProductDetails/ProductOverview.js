import React from "react";
import classes from "./ProductOverview.module.css";
import { Row, Col } from "react-bootstrap";

const ProductOverview = ({ description, address }) => {
  return (
    <Row>
      <Col lg={9} md={6}>
        <h4>About Fitness Center</h4>
        <div dangerouslySetInnerHTML={{ __html: `${description}` }}></div>
      </Col>
      <Col lg={3} md={6}>
        <div className={classes.ProductOverviewCall}>
          <h4>Call</h4>
          <a href={`tel:${address.phoneNumber}`} className="text-white">
            <p className={classes.ProductOverviewCallNumber}>
              {address.phoneNumber || null}
            </p>
          </a>

          <h4>Direction</h4>
          <div
            className={classes.ProductOverviewMap}
            dangerouslySetInnerHTML={{
              __html: `${address ? address.url : ""}`,
            }}
          ></div>
        </div>
      </Col>
    </Row>
  );
};

export default ProductOverview;
