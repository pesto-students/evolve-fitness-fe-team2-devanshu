import React from "react";
import { Container, Breadcrumb } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import BlogDetailImageCard from "../../components/Blog/BlogDetailImageCard";
import BlogImageGrid from "../../components/Blog/BlogImageGrid";

const Blogs = () => {
  const navigate = useNavigate();
  return (
    <Container style={{marginTop:"30px"}}>
      <Breadcrumb>
        <Breadcrumb.Item onClick={() => navigate("/")}>Home</Breadcrumb.Item>
        <Breadcrumb.Item active>{`All Blogs`}</Breadcrumb.Item>
      </Breadcrumb>
      <BlogDetailImageCard />
      <BlogImageGrid />
    </Container>
  );
};

export default Blogs;
