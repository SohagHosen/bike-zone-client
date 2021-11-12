import { Typography } from '@mui/material';
import { Box } from '@mui/system'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Review from './Review';


const Reviews = () => {
  const [reviews, setReviews] = useState([])

  useEffect(() => {
    axios('https://aqueous-savannah-91729.herokuapp.com/reviews').then(res => setReviews(res.data)).catch(err => console.log(err))

  }, [])
  return (
    <Box sx={{ my: 10 }}>
      <Typography sx={{ mb: 5 }} variant="h4">
        Customer Reviews
      </Typography>
      <Carousel responsive={responsive}>
        {reviews?.map(review => <Review key={review._id} review={review} />)}

      </Carousel>
    </Box>
  )
}

export default Reviews


const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};