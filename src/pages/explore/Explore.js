import { Container, Grid } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import React, { useEffect, useState } from "react";
import LinearProgress from '@mui/material/LinearProgress';
import ExploreProduct from "./exploreProduct/ExploreProduct";
import banner from '../../assets/images/banner-min.jpg'
const Explore = () => {
  const [bikes, setBikes] = useState([]);
  useEffect(() => {
    axios("http://localhost:5000/bikes").then((res) => setBikes(res.data));
  }, []);
  return (
    <>

      {bikes.length === 0 ? <Box sx={{ minHeight: "calc(100vh - 155px)" }}>
        <LinearProgress /></Box> : <>
        <Box>
          <img width="100%" height="400px" style={{ objectFit: "cover" }} src={banner} alt="" />
        </Box>
        <Container sx={{ my: 5 }}>
          <Box>


            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
              {bikes?.map(bike => (
                <Grid item xs={4} sm={8} md={6} key={bike._id}>
                  <ExploreProduct bike={bike} />
                </Grid>
              ))}
            </Grid>
          </Box>
        </Container></>}



    </>
  );
};

export default Explore;
