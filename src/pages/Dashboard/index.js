import React from "react";
import Banner from "../../components/Banner.js";
import Bmi from "../../components/Bmi/";
import DashboardBlog from "../../components/DashboardBlogs/DashboardBlog.js";
import DashboardCollection from "../../components/Products/DashboardCollection.js";
import Services from "../../components/services/Services";

function Dashboard() {
  return (
    <div>
      <Banner />
      <Services />
      <DashboardCollection />
      <Bmi />
      <DashboardBlog />
    </div>
  );
}

export default Dashboard;
