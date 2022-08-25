import React, { useEffect, useState } from "react";
import ProductsCard from "./ProductsCard";
import DashboardSecton from "../DashboarSection";
import { Container } from "react-bootstrap";
import { getProductByCity } from "../../services/cmsService";
import { useSelector } from "react-redux";
import { selectCity } from "../../Redux/features/UserSlice";

const DashboardCollection = () => {
  let cityName = useSelector(selectCity);
  let [data, setData] = useState([]);

  useEffect(() => {
    getProductByCity(cityName)
      .then((res) => {
        setData(res.data.product);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [cityName]);
  return (
    <DashboardSecton
      heading={data.length > 0 ? `Fitness Center "${cityName}"` : ""}
    >
      {data.map((item, index) => (
        <ProductsCard key={index} data={item} />
      ))}
    </DashboardSecton>
  );
};

export default DashboardCollection;
