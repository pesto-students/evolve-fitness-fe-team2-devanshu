import React from "react";
import Banner from "../../components/Banner.js";
import DisplayCard from "../../components/PartnerWithUs/DisplayCard.js";
import EarthImg from "../../assests/PartnerWithus/earth.png";
import PeopleImg from "../../assests/PartnerWithus/people.png";
import StepCard from "../../components/PartnerWithUs/StepCard.js";
import PartnerLogin from "../../components/PartnerWithUs/PartnerLogin.js";

const PartnerWithUs = () => {
  let Data = [
    {
      Logo: EarthImg,
      heading: "100+Cities",
      para: "in india",
    },
    {
      Logo: "https://static.thenounproject.com/png/466088-200.png",
      heading: "15 thousand+",
      para: "Fitness center Registred",
    },
    {
      Logo: PeopleImg,
      heading: "1 Lakh+",
      para: "Daily users",
    },
  ];
  let Steps = [
    {
      Logo: "https://static.thenounproject.com/png/466088-200.png",
      heading: "Step 1.",
      para: "Create your page on Evovle Fitness Help users discover your place by creating a listing on Evovle Fitness",
    },
    {
      Logo: "https://static.thenounproject.com/png/466088-200.png",
      heading: "Step 2.",
      para: "Start users reviews Manage your Evolve fitness page with web dashboard ",
    },
  ];
  return (
    <div>
      <Banner
        ImageUrl={
          "https://images.unsplash.com/photo-1434682772747-f16d3ea162c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80"
        }
      />
      <PartnerLogin />
      <DisplayCard Data={Data} />

      <StepCard Data={Steps} />
    </div>
  );
};

export default PartnerWithUs;
