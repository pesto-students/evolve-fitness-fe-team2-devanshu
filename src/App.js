// import "./App.css";
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

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/Fitness-center/:id" element={<Products />} />
          <Route
            path="/Fitness-center-Details/:id"
            element={<ProductsDetails />}
          />
          <Route path="/blog" element={<Blogs />} />
          <Route path="/blog/:id" element={<BlogsDetails />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
