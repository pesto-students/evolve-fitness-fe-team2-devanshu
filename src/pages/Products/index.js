import React, { useEffect, useState } from "react";
import ProductsCard from "../../components/Products/ProductsCard";
import { Container, Row, Col, Form } from "react-bootstrap";
import Banner from "../../components/Banner.js";
import { getProductByFitnessType } from "../../services/cmsService";
import { useParams } from "react-router-dom";
import Loader from "../../components/Loader";

const Products = () => {
  let { id, city } = useParams();
  let [productData, setProductData] = useState([]);
  let [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    getProductByFitnessType(id, city)
      .then((res) => {
        setProductData(res.data.product);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  }, [id]);

  const FilterGender = () => {
    let data = productData.filter((item) => item.category === "female");
    console.log("data", data);
  };
  console.log(FilterGender());
  return (
    <div>
      <Banner
        ImageUrl={
          "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        }
      />

      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          padding: "12px",
        }}
      >
        <div
          style={{ textTransform: "capitalize" }}
        >{`Fitness Center  "${city}"`}</div>
        <div style={{ width: "100px" }}>
          <Form.Control
            as="select"
            name="language"
            value={""}
            onChange={() => {}}
          >
            <option defaultValue value="">
              Filter
            </option>
            <option value={"female"}>{"female"}</option>
            <option value={"male"}>{"male"}</option>
            <option value={"unisex"}>{"unisex"}</option>
          </Form.Control>
        </div>
      </div>

      <Container>
        <Row lg={2} md={2}>
          {isLoading ? (
            <Loader />
          ) : productData.length > 0 ? (
            productData.map((item) => (
              <Col lg={6} key={item._id}>
                <ProductsCard data={item} />
              </Col>
            ))
          ) : (
            <div
              style={{
                width: "100%",
                textAlign: "center",
                textTransform: "capitalize",
              }}
            >
              <h1>{` Data Not Found for "${id}"`}</h1>
            </div>
          )}
        </Row>
      </Container>
    </div>
  );
};

export default Products;
