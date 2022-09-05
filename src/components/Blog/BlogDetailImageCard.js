import React from "react";
import { Container, Row } from "react-bootstrap";

function BlogDetailImageCard({ image }) {
  return (
    <Container style={{ padding: "15px 20px" }}>
      <Row>
        <div className="col-lg-7 col-md-12 mb-4 mb-lg-0">
          <img
            src={
              image
                ? image
                : "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            }
            className="w-100 shadow-1-strong rounded mb-4"
            style={{
              width: "100%",
              objectFit: "cover",
              boxShadow: "0 12px 58px 0 rgb(0 31 52 / 35%)",
            }}
          />
        </div>
        <div className="col-lg-5 mt-2 mt-lg-0">
          <h1>{"7 Health Benefits Of Surya Namaskar"}</h1>
          <p style={{ color: "gray" }}>{"August 23, 2022"}</p>
        </div>
      </Row>
    </Container>
  );
}

export default BlogDetailImageCard;
