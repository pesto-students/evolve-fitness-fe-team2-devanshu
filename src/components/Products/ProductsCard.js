import React from "react";
import classes from "./ProductsCard.module.css";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

function ProductsCard(props) {
  return (
    <>
      <Link to={`/Fitness-Center-Details/${props.data._id}`}>
        <div className={classes.Productscard_wraapper}>
          <div className={classes.Productscard_Imagewraapper}>
            <img
              src={props.data.featuredImageUrl[0]}
              alt={props.data.name}
              // style={{ width: "100%", height: "250px", objectFit: "cover" }}
            />
          </div>

          <div className={classes.Productscard_Discription}>
            <div className={classes.Productscard_Title}>{props.data.name}</div>
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
              </div>

              <div className={classes.Productscard_Rating_Number}>
                <div>{4.5}</div>
                <div style={{ marginLeft: "2px" }}>
                  <span
                    class="fa-regular fa-star"
                    style={{ fontSize: "12px" }}
                  ></span>
                </div>
              </div>
            </div>
            <p className={classes.Productscard_para}>{`${
             props.data.address.city
            },${props.data.address.area},${
              props.data.address.state
            },${props.data.address.country}`}</p>
          </div>
        </div>
      </Link>
    </>
  );
}

export default ProductsCard;
