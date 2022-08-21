import React from "react";
import LocationIcon from "../../assests/headerIcons/Location.svg";
import classes from "./header.module.css";
import { Form } from "react-bootstrap";
import { setCity, selectCity } from "../../Redux/features/UserSlice";
import { useSelector, useDispatch } from "react-redux";

const Search = () => {
  let dispatch = useDispatch();
  let cityName = useSelector(selectCity);
  const HandelCity = (e) => {
    dispatch(
      setCity({
        city: e.target.value,
      })
    );
    console.log(e.target.value);
  };
  return (
    <div className={classes.HeaderSearch}>
      {/* <div className={classes.HeaderSearchLeftSection}> */}
      <img src={LocationIcon} alt="location" />
      <Form.Control
        as="select"
        name="language"
        value={cityName}
        onChange={(e) => HandelCity(e)}
        className={`form-select ${classes.LoactionFilter}`}
      >
        <option defaultValue value={"bhopal"}>
          Bhopal
        </option>
        <option value={"delhi"}>{"Delhi"}</option>
        <option value={"banglore"}>{"Banglore"}</option>
      </Form.Control>
    </div>
  );
};

export default Search;
