import React from "react";
import Banner from "../../components/Banner.js";
import Bmi from "../../components/Bmi/";
import DashboardBlog from "../../components/DashboardBlogs/DashboardBlog.js";
import DashboardCollection from "../../components/Products/DashboardCollection.js";
import Services from "../../components/services/Services";

function Dashboard() {
  return (
    <div>
      <Banner
        ImageUrl={
          "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        }
      />
      <Services />
      <DashboardCollection />
      <Bmi />
      <DashboardBlog />
    </div>
  );
}

export default Dashboard;
