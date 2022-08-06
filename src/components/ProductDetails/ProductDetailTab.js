import React from "react";
import { Tab, Tabs } from "react-bootstrap";

function ProductDetailTab() {
  return (
    <Tabs
      defaultActiveKey="Overview"
      id="uncontrolled-tab-example"
      className="mb-3"
    >
      <Tab eventKey="Overview" title="Overview">
        <div style={{ width: "100%", height: "150px" }}>Overview</div>
      </Tab>
      <Tab eventKey="Price" title="Price">
        <div style={{ width: "100%", height: "150px" }}>Price</div>
      </Tab>
      <Tab eventKey="Reviews" title="Reviews">
        <div style={{ width: "100%", height: "150px" }}>Reviews</div>
      </Tab>
    </Tabs>
  );
}

export default ProductDetailTab;
