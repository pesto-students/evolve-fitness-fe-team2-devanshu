import React, { useState } from "react";
import classes from "./Bmi.module.css";
import { Form, Row, Col } from "react-bootstrap";

const Bmi = () => {
  let [feet, setFeet] = useState("");
  let [inches, setInches] = useState("");
  let [pounds, setPounds] = useState("");
  let [standardResult, setStandardResult] = useState("");
  let [kilogram, setKilogram] = useState("");
  let [matricResult, setMatricResult] = useState("");
  let [switchForm, setSwitchForm] = useState(true);

  //  matric Bmi calculation
  const MatricBmi = (e) => {
    e.preventDefault();
    let CalInche = parseInt(feet) * 12;
    let heightInch = parseInt(CalInche) + parseInt(inches);
    let HeightCenti = parseInt(heightInch) * 2.54;
    let result = (kilogram / HeightCenti / HeightCenti) * 10000;
    setMatricResult(result);
  };

  //  standard Bmi calculation
  const StandardCalculate = (e) => {
    e.preventDefault();
    let CalInche = parseInt(feet) * 12;
    let height = parseInt(CalInche) + parseInt(inches);
    let result = (parseInt(pounds) / parseInt(height) / parseInt(height)) * 703;
    setStandardResult(result);
  };

  return (
    <div className={classes.BmiContainer}>
      <div className={classes.Bmibox}>
        <div className={classes.BmiButton}>
          <button
            className={classes.BmiButtonOne}
            style={{ backgroundColor: switchForm ? "#f21137" : "#030303" }}
            onClick={() => setSwitchForm(true)}
          >
            Standard
          </button>
          <button
            className={classes.BmiButtonTwo}
            style={{ backgroundColor: switchForm ? "#030303" : "#f21137" }}
            onClick={() => setSwitchForm(false)}
          >
            Metric
          </button>
        </div>

        {/* Standard code */}
        <div style={{ display: switchForm === true ? "" : "none" }}>
          <Form onSubmit={(e) => StandardCalculate(e)}>
            <Row className="mb-3">
              <Form.Label style={{ fontWeight: "bold" }}>
                YOUR HEIGHT
              </Form.Label>
              <Col>
                <Form.Control
                  type="number"
                  placeholder="Feet"
                  name="feet"
                  value={feet}
                  onChange={(e) => setFeet(e.target.value)}
                  required={true}
                />
              </Col>
              <Col>
                <Form.Control
                  type="number"
                  placeholder="Inches"
                  name="inches"
                  value={inches}
                  onChange={(e) => setInches(e.target.value)}
                  required={true}
                />
              </Col>
            </Row>
            <Row className="mb-3">
              <Col>
                <Form.Label style={{ fontWeight: "bold" }}>
                  YOUR WEIGHT
                </Form.Label>
                <Form.Control
                  placeholder="Pounds"
                  name="pounds"
                  value={pounds}
                  onChange={(e) => setPounds(e.target.value)}
                  required={true}
                />
              </Col>
            </Row>
            <Row className="mb-3">
              <Col>
                <button className={classes.BmiComputeBtn} type="submit">
                  Compute BMI
                </button>
              </Col>
              <Col>
                <button className={classes.BmiPoundsBtn}>
                  {standardResult ? standardResult : "Result here"}
                </button>
              </Col>
            </Row>
          </Form>
        </div>

        {/* Matric code */}

        <div style={{ display: switchForm === false ? "" : "none" }}>
          <Form onSubmit={(e) => MatricBmi(e)}>
            <Row className="mb-3">
              <Form.Label style={{ fontWeight: "bold" }}>
                YOUR HEIGHT
              </Form.Label>
              <Col>
                <Form.Control
                  type="number"
                  placeholder="Feet"
                  name="feet"
                  value={feet}
                  onChange={(e) => setFeet(e.target.value)}
                  required={true}
                />
              </Col>
              <Col>
                <Form.Control
                  type="number"
                  placeholder="Inches"
                  name="inches"
                  value={inches}
                  onChange={(e) => setInches(e.target.value)}
                  required={true}
                />
              </Col>
            </Row>
            <Row className="mb-3">
              <Col>
                <Form.Label style={{ fontWeight: "bold" }}>
                  YOUR WEIGHT
                </Form.Label>
                <Form.Control
                  placeholder="Kg"
                  name="kg"
                  value={kilogram}
                  onChange={(e) => setKilogram(e.target.value)}
                  required={true}
                />
              </Col>
            </Row>
            <Row className="mb-3">
              <Col>
                <button className={classes.BmiComputeBtn} type="submit">
                  Compute BMI
                </button>
              </Col>
              <Col>
                <div className={classes.BmiPoundsBtn}>
                  {matricResult ? matricResult : "Result here"}
                </div>
              </Col>
            </Row>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Bmi;
