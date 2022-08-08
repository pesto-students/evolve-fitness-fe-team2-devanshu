import React from "react";
import { Tab, Tabs } from "react-bootstrap";
import ProductOverview from "./ProductOverview";
import ProductRating from "./ProductRating";
import ProductDetailPrice from "./ProductDetailPrice";

function ProductDetailTab() {
  return (
    <Tabs
      defaultActiveKey="Overview"
      id="uncontrolled-tab-example"
      className="mb-3"
    >
      <Tab eventKey="Overview" title="Overview">
        <ProductOverview />
      </Tab>
      <Tab eventKey="Price" title="Price">
        <ProductDetailPrice />
      </Tab>
      <Tab eventKey="Reviews" title="Reviews">
        <ProductRating />
      </Tab>
    </Tabs>
  );
}

export default ProductDetailTab;
