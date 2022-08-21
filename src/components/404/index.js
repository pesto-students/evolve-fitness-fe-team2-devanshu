import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./PageNotFound.css";

function PageNotFound() {
  return (
    <div className="page_404">
      <Container>
        <Row>
          <Col sm={12} lg={12}>
            <Col sm={12} className="text-center">
              <div className="four_zero_four_bg">
                <h1 className="text-center ">404</h1>
              </div>

              <div className="contant_box_404">
                <h3 className="h2">Look like you're lost</h3>

                <p>the page you are looking for not avaible!</p>

                <Link to={"/"} className="link_404">
                  Go to Home
                </Link>
              </div>
            </Col>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default PageNotFound;
