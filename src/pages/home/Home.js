import { Container } from "@mui/material";
import React from "react";
import initFirebase from "../../firebase/initFirebase";
import Bikes from "./Bikes/Bikes";
import ExtraSection from "./extraSection/ExtraSection";
import HeroSection from "./HeroSection/HeroSection";
import Reviews from "./reviews/Reviews";
initFirebase()
const Home = () => {
  return (
    <>
      <HeroSection />
      <Container>
        <Bikes />
        <Reviews />
        <ExtraSection />
      </Container>
    </>

  );
};

export default Home;
