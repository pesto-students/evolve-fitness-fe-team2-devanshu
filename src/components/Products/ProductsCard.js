import React from "react";
import classes from "./ProductsCard.module.css";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";

const ProductsCard = (props) => {
  const Average = () => {
    var sum = 0;
    if (props.data.reviews.length > 0) {
      props.data.reviews.forEach(function (num) {
        sum += num.stars;
      });
      let average = sum / props.data.reviews.length;

      return average.toFixed(1);
    }
  };
  return (
    <>
      <Link to={`/Fitness-Center-Details/${props.data._id}`}>
        <div className={classes.Productscard_wraapper}>
          <div className={classes.Productscard_Imagewraapper}>
            <img
              src={props.data.featuredImageUrl[0]}
              alt={props.data.name}
              loading="lazy"
              // style={{ width: "100%", height: "250px", objectFit: "cover" }}
            />
          </div>

          <div className={classes.Productscard_Discription}>
            <div className={classes.Productscard_Title}>{props.data.name}</div>
            <div
              className={classes.Productscard_Package}
            >{` Minimum package ${props.data.price.gold.duration} - ₹ ${props.data.price.gold.price}`}</div>
            <div className={classes.Productscard_Rating_Section}>
              <div className={classes.Productscard_Rating}>
                <span
                  className={
                    Average() >= 1
                      ? "fa fa-star"
                      : Average() >= 0.5
                      ? "fa fa-star-half-o"
                      : "fa fa-star-o"
                  }
                ></span>

                <span
                  className={
                    Average() >= 2
                      ? "fa fa-star"
                      : Average() >= 1.5
                      ? "fa fa-star-half-o"
                      : "fa fa-star-o"
                  }
                ></span>

                <span
                  className={
                    Average() >= 3
                      ? "fa fa-star"
                      : Average() >= 2.5
                      ? "fa fa-star-half-o"
                      : "fa fa-star-o"
                  }
                ></span>

                <span
                  className={
                    Average() >= 4
                      ? "fa fa-star"
                      : Average() >= 3.5
                      ? "fa fa-star-half-o"
                      : "fa fa-star-o"
                  }
                ></span>

                <span
                  className={
                    Average() >= 5
                      ? "fa fa-star classes.checked"
                      : Average() >= 4.5
                      ? "fa fa-star-half-o classes.checked"
                      : "fa fa-star-o "
                  }
                ></span>
              </div>
              {/* 
              <div className={classes.Productscard_Rating_Number}>
                <div>{Average()}</div>
                <div style={{ marginLeft: "2px" }}>
                  <span
                    class="fa-regular fa-star"
                    style={{ fontSize: "12px" }}
                  ></span>
                </div>
              </div> */}
            </div>
            <p
              className={classes.Productscard_para}
            >{`${props.data.address.completeAddress}`}</p>
          </div>
        </div>
      </Link>
    </>
  );
};

export default ProductsCard;
