import React, { useEffect, useState } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import classes from "./ProductRating.module.css";
import ProductDetailComment from "./ProductDetailComment";
import UserLogo from "../../assests/headerIcons/user.png";

import { useSelector, useDispatch } from "react-redux";
import {
  selectUserImage,
  selectUserId,
  selectUserName,
  selectUserAnonymous,
} from "../../Redux/features/UserSlice";

import { PostReview } from "../../services/cmsService";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import Avatar from "react-avatar";
import { setModel } from "../../Redux/features/HeaderSlice";

const ProductRating = ({ name, comments }) => {
  let param = useParams();
  let dispatch = useDispatch();
  let UserName = useSelector(selectUserName);
  let UserId = useSelector(selectUserId);
  let userImage = useSelector(selectUserImage);
  const isAnonymous = useSelector(selectUserAnonymous);

  const [rating, setRating] = useState(1);
  const [text, setText] = useState("");
  const [commentsData, setCommentsData] = useState([]);

  const HandelCancle = () => {
    setRating(0);
    setText("");
  };
  const HandleSubmit = async (e) => {
    e.preventDefault();

    let data = {
      text: text,
      stars: rating,
      userName: UserName,
      pubDate: new Date().toLocaleString("en-us", {
        month: "short",
        day: "numeric",
        year: "numeric",
      }),
      userId: UserId,
    };
    if (text !== "") {
      await PostReview(data, param.id)
        .then((res) => {
          setText("");
          setCommentsData([...commentsData, data]);
        })
        .catch((err) => {
          toast.error("review add failed");
        });
    }
  };

  useEffect(() => {
    if (comments) {
      setCommentsData([...comments]);
    }
  }, [comments]);
  return (
    <Row>
      {isAnonymous ? (
        <Col lg={12} md={12}>
          <h4 style={{ textTransform: "capitalize" }}>{`${name} Reviews`}</h4>

          <div className="row ">
            <div className="col-md-12 col-lg-12">
              <div className="text-dark">
                <hr className="my-0" />

                <div className="p-4">
                  <div className="d-flex flex-start">
                    <img
                      className="rounded-circle shadow-1-strong me-3"
                      src={UserLogo}
                      alt="avatar"
                      width="60"
                      height="60"
                    />
                  </div>
                  <Form.Group>
                    <Form.Control
                      as="textarea"
                      rows={1}
                      placeholder="Write your Review here.."
                      value={text}
                      onClick={() =>
                        dispatch(
                          setModel({
                            Model: true,
                          })
                        )
                      }
                      onChange={() =>
                        dispatch(
                          setModel({
                            Model: true,
                          })
                        )
                      }
                      style={{
                        outline: "none",
                        width: "100%",
                        border: "none",
                        borderBottom: "1px solid black",
                        boxShadow: "none",
                      }}
                    />
                  </Form.Group>
                </div>
              </div>
            </div>
          </div>

          <ProductDetailComment comments={commentsData} />
        </Col>
      ) : (
        <Col lg={12} md={12}>
          <h4 style={{ textTransform: "capitalize" }}>{`${name} Reviews`}</h4>

          <div className="row ">
            <div className="col-md-12 col-lg-12">
              <div className="text-dark">
                <hr className="my-0" />

                <div className="p-4">
                  <Form onSubmit={HandleSubmit}>
                    <div className="d-flex flex-start">
                      {UserName !== null ? (
                        <Avatar
                          name={UserName}
                          size="60"
                          round={true}
                          className="rounded-circle shadow-1-strong me-3"
                        />
                      ) : (
                        <img
                          className="rounded-circle shadow-1-strong me-3"
                          src={userImage}
                          alt="avatar"
                          width="60"
                          height="60"
                        />
                      )}
                      <div>
                        <h6 className="fw-bold mb-1">{UserName}</h6>
                        <div className="d-flex align-items-center">
                          <div className="mb-3">{`${new Date().toLocaleString(
                            "en-us",
                            {
                              month: "short",
                              day: "numeric",
                              year: "numeric",
                            }
                          )}`}</div>
                          <div
                            className="badge bg-success mb-3 "
                            style={{ marginLeft: "12px" }}
                          >
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
                                  ? "fa fa-star "
                                  : rating >= 4.5
                                  ? "fa fa-star-half-o "
                                  : "fa fa-star-o "
                              }
                              onClick={() => setRating(5)}
                            ></span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <Form.Group>
                      <Form.Control
                        as="textarea"
                        rows={1}
                        placeholder="Write your Review here.."
                        name="text"
                        value={text}
                        maxLength={350}
                        onChange={(e) => setText(e.target.value)}
                        style={{
                          outline: "none",
                          width: "100%",
                          border: "none",
                          borderBottom: "1px solid black",
                          boxShadow: "none",
                        }}
                      />
                    </Form.Group>
                    <div style={{ display: "flex", justifyContent: "end" }}>
                      <Button
                        onClick={() => HandelCancle()}
                        className={classes.CencleBtn}
                      >
                        Cancel
                      </Button>
                      <Button type="submit" className={classes.SubmitBtn}>
                        Submit
                      </Button>
                    </div>
                  </Form>
                </div>
              </div>
            </div>
          </div>
          <div className={classes.CommentsSection}>
            <ProductDetailComment comments={commentsData} />
          </div>
        </Col>
      )}
    </Row>
  );
};

export default ProductRating;
