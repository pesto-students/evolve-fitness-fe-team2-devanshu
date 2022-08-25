// import "./App.css";
import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// Header AND Footer
import Header from "./components/Header";
import Footer from "./components/Footer";
//  pages import
import Dashboard from "./pages/Dashboard";
import Products from "./pages/Products";
import ProductsDetails from "./pages/ProductsDetails";
import Blogs from "./pages/Blogs";
import BlogsDetails from "./pages/BlogsDetails";
import CreateProductDetails from "./pages/Cms/CreateProductDetails";
import PartnerWithUs from "./pages/PartnerWithUs";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { Modal } from "react-bootstrap";
import Login from "./components/Login";
import PageNotFound from "./components/404";
import ScrolltoTop from "./components/ScrollTop";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Login />
      <BrowserRouter>
        <Header />
        <ScrolltoTop>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/fitness-center/:city/:id" element={<Products />} />
            <Route
              path="/fitness-center-details/:id"
              element={<ProductsDetails />}
            />
            <Route path="/blog" element={<Blogs />} />
            <Route path="/blog/:id" element={<BlogsDetails />} />
            <Route path="/partner-with-us" element={<PartnerWithUs />} />
            <Route
              path="/create-fitness-center"
              element={
                <ProtectedRoute>
                  <CreateProductDetails />
                </ProtectedRoute>
              }
            />
            <Route
              path="/create-fitness-center/:id"
              element={
                <ProtectedRoute>
                  <CreateProductDetails />
                </ProtectedRoute>
              }
            />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </ScrolltoTop>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
