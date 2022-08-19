import React from "react";
import classes from "./DisplayCard.module.css";
import { Container } from "react-bootstrap";

const DisplayCard = ({ Data }) => {
  return (
    <Container>
      <div className={classes.DisplayDisc}>
        <h3>Why should you partner with Evolve Fitness?</h3>
        <p>
          Evolve fitness enables you to get 40% more revenue, 10x new customers
          and boost your brand visibility by providing insights to improve your
          business.
        </p>
      </div>
      <div className={classes.DisplayCardWrap}>
        {Data.map((item, index) => (
          <div key={index} className={classes.CardWrap}>
            <div className={classes.DisplayCardLeft}>
              <img src={item.Logo} alt={item.heading} />
            </div>
            <div className={classes.DisplayCardRight}>
              <h4>{item.heading}</h4>
              <p>{item.para}</p>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default DisplayCard;
