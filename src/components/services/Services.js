import { Row, Col, Container } from "react-bootstrap";
import ServicesCard from "./ServicesCard";
import DashboardSecton from "../DashboarSection";

const Services = (props) => {
  let Data = [
    {
      Image:
        "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      id: "1",
      heading: "Gym Center Near You",
      para: "Explore The City To Gym Center",
      type: "gym",
    },
    {
      Image:
        "https://images.unsplash.com/photo-1603988363607-e1e4a66962c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      id: "2",
      heading: "Yoga Center Near You",
      para: "Explore The City Top Yoga Center",
      type: "yoga",
    },
    {
      Image:
        "https://images.unsplash.com/photo-1527933053326-89d1746b76b9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      id: "3",
      heading: "Zumba Center Near You",
      para: "Explore The City Top Zumba Center",
      type: "zumba",
    },
    {
      Image:
        "https://images.unsplash.com/photo-1599677099934-d3c4e07056d9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      id: "4",
      heading: "Martial Art Center Near You",
      para: "Explore The City Top Martial Art Center",
      type: "martialart",
    },
  ];
  console.log("data", Data);
  return (
    <DashboardSecton heading={"Our Services"}>
      {Data.map((item) => (
        <ServicesCard key={item.id} data={item} />
      ))}
    </DashboardSecton>
  );
};

export default Services;
