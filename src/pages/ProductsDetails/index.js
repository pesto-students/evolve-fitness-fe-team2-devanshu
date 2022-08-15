import React, { useEffect, useState } from "react";
import ProdctImageCard from "../../components/ProductDetails/ProdctImageCard";
import { Breadcrumb, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import ProductDetailTab from "../../components/ProductDetails/ProductDetailTab";
import ProductDetailDiscription from "../../components/ProductDetails/ProductDetailDiscription";
import { getProduct } from "../../services/cmsService";

const ProductsDetails = () => {
  const navigate = useNavigate();
  let [Data, setData] = useState([]);
  let [dummyUrl, setDummyUrl] = useState([
    "https://media.tarkett-image.com/large/TH_24567080_24594080_24596080_24601080_24563080_24565080_24588080_001.jpg",
    "https://media.tarkett-image.com/large/TH_24567080_24594080_24596080_24601080_24563080_24565080_24588080_001.jpg",
    "https://media.tarkett-image.com/large/TH_24567080_24594080_24596080_24601080_24563080_24565080_24588080_001.jpg",
  ]);
  useEffect(() => {
    getProduct()
      .then((res) => {
        setData(res.data.ProductData);
        console.log(JSON.parse(res.data.ProductData[0].address));
      })
      .catch((err) => {});
  }, []);
  return (
    <Container>
      <Breadcrumb>
        <Breadcrumb.Item onClick={() => navigate("/")}>Home</Breadcrumb.Item>
        <Breadcrumb.Item
          onClick={() =>
            navigate(
              `/Fitness-center/${Data.length > 0 ? Data[0].fitnessType : ""}`
            )
          }
        >
          {`All ${Data.length > 0 ? Data[0].fitnessType : ""} Center`}
        </Breadcrumb.Item>
        <Breadcrumb.Item active>{`${
          Data.length > 0 ? Data[0].name : ""
        }`}</Breadcrumb.Item>
      </Breadcrumb>
      <ProdctImageCard
        images={Data.length > 0 ? Data[0].featuredImageUrl : dummyUrl}
      />
      <ProductDetailDiscription
        name={Data.length > 0 ? Data[0].name : ""}
        address={Data.length > 0 ? JSON.parse(Data[0].address) : ""}
      />
      <ProductDetailTab
        description={Data.length > 0 ? Data[0].description : ""}
        address={Data.length > 0 ? JSON.parse(Data[0].address) : ""}
        price={Data.length > 0 ? JSON.parse(Data[0].price) : ""}
        name={Data.length > 0 ? Data[0].name : ""}
      />
    </Container>
  );
};

export default ProductsDetails;
