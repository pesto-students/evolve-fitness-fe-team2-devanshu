import React from "react";
import ProdctImageCard from "../../components/ProductDetails/ProdctImageCard";
import { Breadcrumb, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import ProductDetailTab from "../../components/ProductDetails/ProductDetailTab";

const ProductsDetails = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <Breadcrumb>
        <Breadcrumb.Item onClick={() => navigate("/")}>Home</Breadcrumb.Item>
        <Breadcrumb.Item onClick={() => navigate("/F")}>Read</Breadcrumb.Item>
        <Breadcrumb.Item active>{"prod"}</Breadcrumb.Item>
      </Breadcrumb>
      <ProdctImageCard />
      <div style={{ width: "100%", height: "50px" }}></div>
      <ProductDetailTab />
    </Container>
  );
};

export default ProductsDetails;
