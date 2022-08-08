import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import classes from "./ProductRating.module.css";
import ProductDetailComment from "./ProductDetailComment";

const ProductRating = () => {
  const [rating, setRating] = useState(0);
  return (
    <Row>
      <Col lg={9} md={6}>
        <h4>Hongkong Fitness center Reviews</h4>

        <div class="row ">
          <div class="col-md-12 col-lg-12">
            <div class="card text-dark">
              <hr class="my-0" />

              <div class="card-body p-4">
                <div class="d-flex flex-start">
                  <img
                    class="rounded-circle shadow-1-strong me-3"
                    src={
                      "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(26).webp"
                    }
                    alt="avatar"
                    width="60"
                    height="60"
                  />
                  <div>
                    <h6 class="fw-bold mb-1">{"UserName"}</h6>
                    <div class="d-flex align-items-center mb-3">
                      <p class="mb-1">{"Aug 8 ,2022"}</p>
                      <span class="badge bg-success">
                        <span
                          className={
                            rating >= 1
                              ? "fa fa-star"
                              : rating >= 0.5
                              ? "fa fa-star-half-o"
                              : "fa fa-star-o"
                          }
                          onClick={() => setRating(1)}
                        ></span>
                        <span
                          className={
                            rating >= 2
                              ? "fa fa-star"
                              : rating >= 1.5
                              ? "fa fa-star-half-o"
                              : "fa fa-star-o"
                          }
                          onClick={() => setRating(2)}
                        ></span>
                        <span
                          className={
                            rating >= 3
                              ? "fa fa-star"
                              : rating >= 2.5
                              ? "fa fa-star-half-o"
                              : "fa fa-star-o"
                          }
                          onClick={() => setRating(3)}
                        ></span>
                        <span
                          className={
                            rating >= 4
                              ? "fa fa-star"
                              : rating >= 3.5
                              ? "fa fa-star-half-o"
                              : "fa fa-star-o"
                          }
                          onClick={() => setRating(4)}
                        ></span>
                        <span
                          className={
                            rating >= 5
                              ? "fa fa-star classes.checked"
                              : rating >= 4.5
                              ? "fa fa-star-half-o classes.checked"
                              : "fa fa-star-o "
                          }
                          onClick={() => setRating(5)}
                        ></span>
                      </span>
                      <div class="badge bg-success"></div>
                    </div>
                  </div>
                </div>
                <textarea
                  style={{
                    outline: "none",
                    width: "100%",
                    border: "none",
                    borderBottom: "1px solid black",
                  }}
                  placeholder="Write your Review here.."
                ></textarea>
                <button>Cencel</button>
                <button>submit</button>
              </div>
            </div>
          </div>
        </div>
        <hr class="my-0" />
        {/* </div> */}
        <ProductDetailComment />
      </Col>
    </Row>
  );
};

export default ProductRating;
