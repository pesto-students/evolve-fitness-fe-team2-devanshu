import React from "react";
import ProductsCard from "../../components/Products/ProductsCard";
import {
  Container,
  Row,
  Col,
  DropdownButton,
  Dropdown,
  Form,
} from "react-bootstrap";
import Banner from "../../components/Banner.js";

function Products() {
  let Data = [
    {
      Image:
        "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      id: "1",
      heading: "Gym Center Near You",
      para: "Plot no. 124, Star Avenue, 1st Floor, Above Canara Bank, BDA Road, BHEL, Awadhpuri, Bhopal, Madhya Pradesh 462021",
      rating: 4.5,
    },
    {
      Image:
        "https://images.unsplash.com/photo-1603988363607-e1e4a66962c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      id: "2",
      heading: "Yoga Center Near You",
      para: "Plot no. 124, Star Avenue, 1st Floor, Above Canara Bank, BDA Road, BHEL, Awadhpuri, Bhopal, Madhya Pradesh 462021",
      rating: 4.1,
    },
    {
      Image:
        "https://images.unsplash.com/photo-1527933053326-89d1746b76b9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      id: "3",
      heading: "Zumba Center Near You",
      para: "Explore The City Top Zumba Center",
      rating: 1.5,
    },
    {
      Image:
        "https://images.unsplash.com/photo-1599677099934-d3c4e07056d9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      id: "4",
      heading: "Martial Art Center Near You",
      para: "Plot no. 124, Star Avenue, 1st Floor, Above Canara Bank, BDA Road, BHEL, Awadhpuri, Bhopal, Madhya Pradesh 462021",
      rating: 4.5,
    },
  ];
  return (
    <div>
      <Banner />

      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>{"Fitness Center near “Bhopal “"}</div>
        <div style={{ width: "100px" }}>
          <Form.Control
            as="Select"
            name="language"
            value={""}
            onChange={() => {}}
          >
            <option defaultValue value="">
              Filter
            </option>
            <option value={"price"}>{"price"}</option>
            <option value={"price"}>{"price"}</option>
            <option value={"price"}>{"price"}</option>{" "}
            <option value={"price"}>{"price"}</option>
          </Form.Control>
        </div>
      </div>

      <Container>
        <Row
          lg={2}
          md={2}
          // style={{
          //   display: "flex",
          //   flexWrap: "wrap",
          //   justifyContent: "space-around",
          // }}
        >
          {Data.map((item) => (
            <Col lg={6} key={item.id}>
              <ProductsCard key={item.id} data={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default Products;
