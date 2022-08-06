import React from "react";
import classes from "./Bmi.module.css";
import { Form, Row, Col } from "react-bootstrap";

function Bmi() {
  return (
    <div className={classes.BmiContainer}>
      <div className={classes.Bmibox}>
        <div className={classes.BmiButton}>
          <button className={classes.BmiButtonOne}>Standred</button>
          <button className={classes.BmiButtonTwo}>Matrix</button>
        </div>
        <Form>
          <Row className="mb-3">
            <Form.Label style={{ fontWeight: "bold" }}>YOUR HEIGHT</Form.Label>
            <Col>
              <Form.Control placeholder="Feet" />
            </Col>
            <Col>
              <Form.Control placeholder="Inches" />
            </Col>
          </Row>
          <Row className="mb-3">
            <Col>
              <Form.Label style={{ fontWeight: "bold" }}>
                YOUR WEIGHT
              </Form.Label>
              <Form.Control placeholder="Pounds" />
            </Col>
          </Row>
          <Row className="mb-3">
            <Col>
              <button className={classes.BmiComputeBtn}>Compute Bmi</button>
            </Col>
            <Col>
              <button className={classes.BmiPoundsBtn}>Pounds</button>
            </Col>
          </Row>
        </Form>
      </div>
    </div>
  );
}

export default Bmi;
