import React from "react";
import classes from "./serviceCard.module.css";
import { Link } from "react-router-dom";

const ServicesCard = (props) => {
  return (
    <div className={classes.Servicescard_wraapper}>
      <Link to={`/Fitness-center/${props.data.id}`}>
        <div className={classes.Servicescard_Imagewraapper}>
          <img
            src={props.data.Image}
            alt={props.data.heading}
            // style={{ width: "100%", height: "220px", objectFit: "cover" }}
          />
          {/* <div className="delivery-time"></div> */}
        </div>

        <div className={classes.Servicescard_Discription}>
          <p className={classes.Servicescard_Title}>{props.data.heading}</p>
          <p className={classes.Servicescard_para}>{props.data.para}</p>
        </div>
      </Link>
    </div>
  );
};

export default ServicesCard;
