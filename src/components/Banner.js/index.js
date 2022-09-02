import React from "react";
import classes from "./Banner.module.css";
import { useParams } from "react-router-dom";

function Banner({ ImageUrl }) {
  let { id } = useParams();

  return (
    <div
      className={classes.BannerContainer}
      style={{ backgroundImage: `url(${ImageUrl})` }}
    >
      <h1 style={{ color: "white", width: "55%" }}>
        {id
          ? id === "yoga"
            ? `“yoga is the journey of the self,through the self,to the self.”`
            : id === "gym"
            ? "“Exercise not only changes your body. It changes your mind, your attitude, and your mood.” "
            : id === "martialart"
            ? "“What the mind can perceive, the heart can believe, the body can achieve.”"
            : id === "zumba"
            ? "“Every time you exercise, you release endorphins, which trigger positive feelings throughout the body.”"
            : "“If you want something you've never had, you must be willing to do something you've never done.”"
          : ""}
      </h1>
    </div>
  );
}

export default Banner;
