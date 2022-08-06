import React from "react";
import classes from "./ProductsCard.module.css";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

function ProductsCard(props) {
  return (
    <>
      <Link to={`/Fitness-center-Details/${props.data.id}`}>
        <div className={classes.Productscard_wraapper}>
          <div className={classes.Productscard_Imagewraapper}>
            <img
              src={props.data.Image}
              alt={props.data.heading}
              // style={{ width: "100%", height: "250px", objectFit: "cover" }}
            />
          </div>

          <div className={classes.Productscard_Discription}>
            <div className={classes.Productscard_Title}>
              {props.data.heading}
            </div>
            <div className={classes.Productscard_Rating_Section}>
              <div className={classes.Productscard_Rating}>
                <span
                  className={
                    props.data.rating >= 1
                      ? "fa fa-star"
                      : props.data.rating >= 0.5
                      ? "fa fa-star-half-o"
                      : "fa fa-star-o"
                  }
                ></span>

                <span
                  className={
                    props.data.rating >= 2
                      ? "fa fa-star"
                      : props.data.rating >= 1.5
                      ? "fa fa-star-half-o"
                      : "fa fa-star-o"
                  }
                ></span>

                <span
                  className={
                    props.data.rating >= 3
                      ? "fa fa-star"
                      : props.data.rating >= 2.5
                      ? "fa fa-star-half-o"
                      : "fa fa-star-o"
                  }
                ></span>

                <span
                  className={
                    "classes.checked" + props.data.rating >= 4
                      ? "fa fa-star"
                      : props.data.rating >= 3.5
                      ? "fa fa-star-half-o"
                      : "fa fa-star-o"
                  }
                ></span>

                <span
                  className={
                    props.data.rating >= 5
                      ? "fa fa-star classes.checked"
                      : props.data.rating >= 4.5
                      ? "fa fa-star-half-o classes.checked"
                      : "fa fa-star-o "
                  }
                ></span>
                {/* <span className={`${classes.checked} ${"fa fa-star"} `}></span>
                <span className={`${classes.checked} ${"fa fa-star"} `}></span>
                <span className={`${classes.checked} ${"fa fa-star"} `}></span>
                <span
                  className={`${classes.checked} ${"fa fa-star-half-full"}`}
                ></span>
                <span
                  className={`${classes.checked} fa-regular fa-star`}
                ></span> */}
              </div>

              <div className={classes.Productscard_Rating_Number}>
                <div>{props.data.rating}</div>
                <div style={{ marginLeft: "2px" }}>
                  <span
                    class="fa-regular fa-star"
                    style={{ fontSize: "12px" }}
                  ></span>
                </div>
              </div>
            </div>
            <p className={classes.Productscard_para}>{props.data.para}</p>
          </div>
        </div>
      </Link>
    </>
  );
}

export default ProductsCard;
