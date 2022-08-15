import React, { useState } from "react";

const ProductDetailComment = ({ comments }) => {
  // const [rating, setRating] = useState(0);

  return (
    <div class="container my-5 py-5">
      {comments.map((item) => (
        <div class="row ">
          <div class="col-md-12 col-lg-12">
            <div class="text-dark py-5">
              {/* <hr class="my-0" /> */}

              {/* <div class="card-body p-4"> */}
              <div class="d-flex flex-start py-12">
                <img
                  class="rounded-circle shadow-1-strong me-3"
                  src={item.UserImage}
                  alt="avatar"
                  width="60"
                  height="60"
                />
                <div>
                  <h6 class="fw-bold mb-1">{item.UserName}</h6>
                  <div class="d-flex align-items-center mb-3">
                    <p class="mb-1">
                      {item.pubDate}
                      <span class="badge bg-success">
                        {" "}
                        <span
                          className={
                            item.rating >= 1
                              ? "fa fa-star"
                              : item.rating >= 0.5
                              ? "fa fa-star-half-o"
                              : "fa fa-star-o"
                          }
                        ></span>
                        <span
                          className={
                            item.rating >= 2
                              ? "fa fa-star"
                              : item.rating >= 1.5
                              ? "fa fa-star-half-o"
                              : "fa fa-star-o"
                          }
                        ></span>
                        <span
                          className={
                            item.rating >= 3
                              ? "fa fa-star"
                              : item.rating >= 2.5
                              ? "fa fa-star-half-o"
                              : "fa fa-star-o"
                          }
                        ></span>
                        <span
                          className={
                            item.rating >= 4
                              ? "fa fa-star"
                              : item.rating >= 3.5
                              ? "fa fa-star-half-o"
                              : "fa fa-star-o"
                          }
                        ></span>
                        <span
                          className={
                            item.rating >= 5
                              ? "fa fa-star classes.checked"
                              : item.rating >= 4.5
                              ? "fa fa-star-half-o classes.checked"
                              : "fa fa-star-o "
                          }
                        ></span>
                      </span>
                    </p>
                    <div class="badge bg-success"></div>
                  </div>
                  <p class="mb-0">{item.Message}</p>
                </div>
              </div>
              {/* </div> */}
            </div>
          </div>
          <hr class="my-0" />
        </div>
      ))}
    </div>
  );
};

export default ProductDetailComment;
