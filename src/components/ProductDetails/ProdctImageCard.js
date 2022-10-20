import React from "react";
import classes from "./ProudctImageCard.module.css";

const ProdctImageCard = ({ images }) => {
  return (
    // <Container>
    <div className={classes.ProductImageCard_Wrapper}>
      <div
        className={classes.ProductImageCard_Left_Grid}
        style={{
          backgroundImage: `url(
         ${images[0]}
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
                    ${images[1]}
          )`,
          }}
        ></div>
        <div
          className={classes.ProductImageCard_Right_Grid_Two}
          style={{
            backgroundImage: `url(
                  ${images[2]}
          )`,
          }}
        ></div>
      </div>
    </div>
    // </Container>
  );
};

export default ProdctImageCard;
