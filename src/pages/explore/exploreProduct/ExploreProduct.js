import React from "react";
import { Button, Card, CardContent, Typography } from "@mui/material";
import { useHistory } from 'react-router-dom'
const ExploreProduct = ({ bike }) => {
  const history = useHistory()
  return (
    <Card>
      <img src={bike.img} style={{ maxWidth: "500px", width: "100%" }} alt="" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {bike.title}
        </Typography>
        <Typography sx={{ height: 60 }} variant="body1" color="text.secondary">
          {bike.description}
        </Typography>
        <Typography sx={{ mt: 2 }} variant="subtitle1" color="text.secondary">
          Price: ${bike.price}
        </Typography>
        <Button onClick={() => history.push(`/order/${bike._id}`)} sx={{ width: "100%", mt: 2 }} variant="contained">Order now</Button>
      </CardContent>
    </Card >
  );
};

export default ExploreProduct;
