import React, { useState } from "react";

const ProductDetailComment = () => {
  // const [rating, setRating] = useState(0);
  let data = [
    {
      id: 1,
      UserImage: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(26).webp",
      UserName: "Lara Stewart",
      pubDate: "March 15,2021",
      rating: "4.5",
      Message:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites.",
    },
    {
      id: 2,
      UserImage: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(26).webp",
      UserName: "Lara Stewart",
      pubDate: "March 15,2021",
      rating: "3.5",
      Message:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites.",
    },
    {
      id: 3,
      UserImage: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(26).webp",
      UserName: "Lara Stewart",
      pubDate: "March 15,2021",
      rating: "1.5",
      Message:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites.",
    },
    {
      id: 4,
      UserImage: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(26).webp",
      UserName: "Lara Stewart",
      pubDate: "March 15,2021",
      rating: "2.5",
      Message:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites.",
    },
    {
      id: 5,
      UserImage: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(26).webp",
      UserName: "Lara Stewart",
      pubDate: "March 15,2021",
      rating: "5.0",
      Message:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites.",
    },
  ];
  return (
    <div class="container my-5 py-5">
      {data.map((item) => (
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
