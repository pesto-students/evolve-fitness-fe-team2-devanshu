import React from "react";
import DashboardBlogCard from "./DashboardBlogCard";
import { Container, Row, Col } from "react-bootstrap";

const DashboardBlog = () => {
  let Data = [
    {
      Image:
        "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1220&q=80",
      id: "1",
      heading: "7 ways to bring mindfulness into your yoga practice",
      pubDate: "Aug. 23, 2022",
      para: "Mindfulness can help us bring a new perspective and a positive change to our daily lives. Yoga teacher Belle shows us 7 ways we can bring it into our yoga practice too.",
    },
    {
      Image:
        "https://images.unsplash.com/photo-1545389336-cf090694435e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80",
      id: "2",
      heading: "What is Mindfulness?",
      pubDate: "Aug. 24, 2022",
      para: "What is mindfulness and how can we incorporate the practice into our daily lives?",
    },
    {
      Image:
        "https://images.unsplash.com/photo-1532798442725-41036acc7489?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
      id: "3",
      heading: "The Science & Magic of Mantra",
      pubDate: "Aug. 25, 2022",
      para: "An introduction to the neuroscience behind how mantras make potent additions to your practices, and how to find one that works for you.",
    },
    {
      Image:
        "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      id: "4",
      heading: "Digestion-boosting and de-bloating seed mix digestif",
      pubDate: "Aug. 26, 2022",
      para: "If you suffer with indigestion, bloating, or feeling ‘heavy’ after dinner try this Ayurvedic inspired seed mix to help your digestion.",
    },
  ];
  return (
    <Container fluid>
      <div
        style={{
          fontSize: "30px",
          // color: var(--heading-text),
          //   marginBottom: "25px",
          marginTop: "20px",
          fontWeight: 500,
          textAlign: "left",
        }}
      >
        Our Blogs
        <div
          style={{
            fontSize: "14px",
            // color: var(--heading-text),
            marginBottom: "25px",
            // marginTop: "20px",
          }}
        >
          Recents Blogs
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
            <Col key={item.id}>
              <DashboardBlogCard key={item.id} data={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
};

export default DashboardBlog;
