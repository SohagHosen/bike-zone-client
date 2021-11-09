import { Container, Grid } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import React, { useEffect, useState } from "react";
import ExploreProduct from "./exploreProduct/ExploreProduct";

const Explore = () => {
  const [bikes, setBikes] = useState([]);
  useEffect(() => {
    axios("http://localhost:5000/bikes").then((res) => setBikes(res.data));
  }, []);
  return (
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
    </Container>
  );
};

export default Explore;
