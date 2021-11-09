import { Grid, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useEffect, useState } from 'react'
import Bike from './Bike/Bike'
import axios from 'axios'
const Bikes = () => {
  const [bikes, setBikes] = useState([])
  useEffect(() => {
    axios('http://localhost:5000/bikes').then(res => setBikes(res.data.slice(0, 6)))

  }, [])
  return (
    <Box sx={{ my: 10, textAlign: "center" }}>
      <Typography variant="h3" sx={{ fontWeight: "bold", }}>
        Bikes
      </Typography>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {bikes?.map(bike => (
          <Grid item xs={4} sm={4} md={4} key={bike._id}>
            <Bike bike={bike} />
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}

export default Bikes
