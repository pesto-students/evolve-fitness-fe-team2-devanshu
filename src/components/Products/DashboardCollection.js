import React from "react";
import ProductsCard from "./ProductsCard";
import DashboardSecton from "../DashboarSection";
import { Container } from "react-bootstrap";

const DashboardCollection = () => {
  let Data = [
    {
      featuredImageUrl: [
        "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      ],
      _id: "62fa0434e347ace01b34cf2d",
      name: "sdfsf",
      description: "naasssssssqs",
      address:
        '{"phoneNumber":"","state":"Madhya Pradesh","country":"India","area":"awadhpuri","city":"INDWAR","url":"<iframe src=\\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58689.413303420966!2d79.93098239999999!3d23.166976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3981b1ceffffffff%3A0x1896beef8f76d90f!2sShalby%20Hospital%2C%20Jabalpur!5e0!3m2!1sen!2sin!4v1660495929329!5m2!1sen!2sin\\" width=\\"600\\" height=\\"450\\" style=\\"border:0;\\" allowfullscreen=\\"\\" loading=\\"lazy\\" referrerpolicy=\\"no-referrer-when-downgrade\\"></iframe>"}',
      // heading: "Gym Center Near You",
      // para: "Plot no. 124, Star Avenue, 1st Floor, Above Canara Bank, BDA Road, BHEL, Awadhpuri, Bhopal, Madhya Pradesh 462021",
      // rating: 4.5,
    },
  ];
  return (
    <DashboardSecton heading={"Collection"}>
      {Data.map((item) => (
        <ProductsCard key={item.id} data={item} />
      ))}
    </DashboardSecton>
  );
};

export default DashboardCollection;
