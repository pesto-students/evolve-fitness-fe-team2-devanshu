import React from "react";
import ProdctImageCard from "../../components/ProductDetails/ProdctImageCard";
import { Breadcrumb, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import ProductDetailTab from "../../components/ProductDetails/ProductDetailTab";
import ProductDetailDiscription from "../../components/ProductDetails/ProductDetailDiscription";

const ProductsDetails = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <Breadcrumb>
        <Breadcrumb.Item onClick={() => navigate("/")}>Home</Breadcrumb.Item>
        <Breadcrumb.Item onClick={() => navigate("/")}>Read</Breadcrumb.Item>
        <Breadcrumb.Item active>{"prod"}</Breadcrumb.Item>
      </Breadcrumb>
      <ProdctImageCard />
      <ProductDetailDiscription />
      <ProductDetailTab />
    </Container>
  );
};

export default ProductsDetails;
