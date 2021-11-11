import { Container } from "@mui/material";
import React from "react";
import initFirebase from "../../firebase/initFirebase";
import Bikes from "./Bikes/Bikes";
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
      </Container>
    </>

  );
};

export default Home;
