import React from "react";
import classes from "./serviceCard.module.css";
import { Link } from "react-router-dom";
import { selectCity } from "../../Redux/features/UserSlice";
import { useSelector } from "react-redux";

const ServicesCard = (props) => {
  let city = useSelector(selectCity);
  return (
    <div className={classes.Servicescard_wraapper}>
      <Link to={`/Fitness-center/${city}/${props.data.type}`}>
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
