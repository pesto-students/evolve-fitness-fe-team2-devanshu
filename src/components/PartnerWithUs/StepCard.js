import React from "react";
import classes from "./StepCard.module.css";
import { Container } from "react-bootstrap";

const StepCard = ({ Data }) => {
  return (
    <Container>
      <div className={classes.StepCardDisc}>
        <h3>How It Works ?</h3>
      </div>
      <div className={classes.StepCardContainer}>
        {Data.map((item, index) => (
          <div key={index} className={classes.StepCardWrap}>
            <div className={classes.StepCardImage}>
              <img src={item.Logo} alt={item.heading} />
            </div>

            <h4>{item.heading}</h4>
            <p>{item.para}</p>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default StepCard;
