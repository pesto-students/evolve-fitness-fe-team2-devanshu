import React from "react";
import classes from "./ProudctImageCard.module.css";

const ProdctImageCard = () => {
  return (
    // <Container>
    <div className={classes.ProductImageCard_Wrapper}>
      <div
        className={classes.ProductImageCard_Left_Grid}
        style={{
          backgroundImage: `url(
            "https://images.unsplash.com/photo-1623874514711-0f321325f318?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          )`,
        }}
      ></div>
      <div
        style={{
          width: "100%",
          height: "100%",
          marginLeft: "6px",
          padding: "3px",
        }}
      >
        <div
          className={classes.ProductImageCard_Right_Grid_one}
          style={{
            backgroundImage: `url(
            "https://images.unsplash.com/photo-1550259979-ed79b48d2a30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1668&q=80"
          )`,
          }}
        ></div>
        <div
          className={classes.ProductImageCard_Right_Grid_Two}
          style={{
            backgroundImage: `url(
            "https://images.unsplash.com/photo-1519505907962-0a6cb0167c73?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          )`,
          }}
        ></div>
      </div>
    </div>
    // </Container>
  );
};

export default ProdctImageCard;
