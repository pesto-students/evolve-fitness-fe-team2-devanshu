import React from "react";
import { Tab, Tabs } from "react-bootstrap";
import ProductOverview from "./ProductOverview";
import ProductRating from "./ProductRating";
import ProductDetailPrice from "./ProductDetailPrice";

function ProductDetailTab({ description, address, price, name, comments }) {
  return (
    <Tabs
      defaultActiveKey="Overview"
      id="uncontrolled-tab-example"
      className="mb-3"
    >
      <Tab eventKey="Overview" title="Overview">
        <ProductOverview description={description} address={address} />
      </Tab>
      <Tab eventKey="Price" title="Price">
        <ProductDetailPrice price={price} />
      </Tab>
      <Tab eventKey="Reviews" title="Reviews">
        <ProductRating name={name} comments={comments} />
      </Tab>
    </Tabs>
  );
}

export default ProductDetailTab;
