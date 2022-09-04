import React from "react";
import classes from "./ProductOverview.module.css";
import { Row, Col } from "react-bootstrap";

const ProductOverview = ({ description, address }) => {
  return (
    <Row>
      <Col lg={9} md={6}>
        <h4>About Fitness Center</h4>
        <p>
          At our fitness center, each employee is greeted by a young, vibrant
          work culture. All of our employees, regardless of position, are
          instilled with a sense of teamwork and camaraderie.
        </p>

        <p>
          At our fitness center, you can work with people from a variety of
          cultural, educational, and geographic backgrounds who can challenge
          conventional thought, offer fresh perspectives, and generate novel
          ideas. Our employees' diverse backgrounds, experiences, and
          perspectives give us a competitive advantage in serving clients and
          creating win-win situations.
        </p>
        <h5>Area (Square Feet)</h5>
        <p>1200 sqft</p>
        <h5>PersonalTrainer</h5>
        <p>Male - 1</p>
        <p>Female - 2</p>
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
