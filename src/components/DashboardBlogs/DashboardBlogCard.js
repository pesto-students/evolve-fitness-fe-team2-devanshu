import React from "react";
import { Link } from "react-router-dom";
import classes from "./DashboardBlog.module.css";

const DashboardBlogCard = (props) => {
  return (
    <Link to={`/blog/${props.data.id}`}>
      <div className={classes.DashboardBlogcard_wraapper}>
        <div className={classes.DashboardBlogcard_Imagewraapper}>
          <img
            src={props.data.Image}
            alt={props.data.heading}
            // style={{ width: "100%", height: "250px", objectFit: "cover" }}
          />
        </div>

        <div className={classes.DashboardBlogcard_Discription}>
          <div className={classes.DashboardBlogcard_PubliceDate}>
            {"DEC. 20, 2020"}
          </div>
          <div className={classes.DashboardBlogcard_Title}>
            {props.data.heading}
          </div>
          <p className={classes.DashboardBlogcard_para}>{props.data.para}</p>
        </div>
      </div>
    </Link>
  );
};

export default DashboardBlogCard;
