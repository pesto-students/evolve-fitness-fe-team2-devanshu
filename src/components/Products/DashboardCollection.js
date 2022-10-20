import React, { useEffect, useState } from "react";
import ProductsCard from "./ProductsCard";
import DashboardSecton from "../DashboarSection";
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
      heading={
        data.length > 0 ? `Fitness Center  in and around "${cityName}"` : ""
      }
    >
      {data.map((item, index) => (
        <div key={index} style={{ margin: "12px 24px" }}>
          <ProductsCard data={item} />
        </div>
      ))}
    </DashboardSecton>
  );
};

export default DashboardCollection;
