import React, { useEffect, useState } from "react";
import ProductsCard from "../../components/Products/ProductsCard";
import { Container, Row, Col, OverlayTrigger, Tooltip } from "react-bootstrap";
import Banner from "../../components/Banner.js";
import { getProductByFitnessType } from "../../services/cmsService";
import { useParams } from "react-router-dom";
import Loader from "../../components/Loader";

const Products = () => {
  let { id, city } = useParams();
  let [productData, setProductData] = useState([]);
  let [isLoading, setIsLoading] = useState(false);
  let [isActive, setIsActive] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    getProductByFitnessType(id, city)
      .then((res) => {
        setProductData(res.data.product);
        setIsLoading(false);
        FilterRating(false);
        setIsActive(true);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  }, [id]);

  const FilterRating = (value) => {
    setIsActive(!isActive);
    if (value) {
      let data = productData.sort(
        (a, b) => Number(b.price.gold.price) - Number(a.price.gold.price)
      );
    } else {
      let data = productData.sort(
        (a, b) => Number(a.price.gold.price) - Number(b.price.gold.price)
      );
    }
  };
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
          alignItems: "center",
        }}
      >
        <div
          style={{ textTransform: "capitalize", fontWeight: "600" }}
        >{`${id} Center  "${city}"`}</div>
        <div>
          <OverlayTrigger
            placement={"left"}
            overlay={
              <Tooltip id={`tooltip-${"low"}`}>
                {isActive ? (
                  <strong>{"Low to High pice"}</strong>
                ) : (
                  <strong>{"High to Low pice"}</strong>
                )}
              </Tooltip>
            }
          >
            <div
              style={{
                backgroundColor: isActive ? "#f21137" : "#68020f",
                color: "white",
                padding: "8px 20px",
                borderRadius: "5px",
                width: "100%",
                cursor: "pointer",
              }}
              onClick={() => FilterRating(isActive)}
            >
              {isActive ? (
                <i className="fa-solid fa-arrow-up-1-9"></i>
              ) : (
                <i className="fa-solid fa-arrow-up-9-1"></i>
              )}
            </div>
          </OverlayTrigger>
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
