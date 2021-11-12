import React from 'react'
import { Button, Container, Grid, Typography } from '@mui/material'
import { Box } from '@mui/system'
import { useHistory } from 'react-router-dom'
import img from '../../../assets/images/extra.jpg'
const ExtraSection = () => {
  return (
    <Box sx={{ minHeight: "calc(100vh - 45px)" }}>
      <Grid container spacing={2} >
        <Grid item xs={12} md={6}>
          <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%" }}>
            <Box>
              <Typography variant="h5" sx={{
                fontWeight: "bold", color: "black", fontSize: {
                  lg: 38,
                  md: 35,
                  sm: 28,
                  xs: 22
                }
              }}>
                A motorcycle, often called a motorbike, bike, or cycle, is a two- or three-wheeled motor vehicle.
              </Typography>
              <Typography sx={{ color: "black", my: 3 }} variant='body1'>
                Motorcycle design varies greatly to suit a range of different purposes: long-distance travel, commuting, cruising, sport (including racing), and off-road riding. Motorcycling is riding a motorcycle and being involved in other related social activity such as joining a motorcycle club and attending motorcycle rallies.


              </Typography>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box sx={{ position: "relative", height: "500px" }}>
            <img style={{ height: "100%", width: "100%", backgroundSize: "cover", backgroundPosition: "center" }} src={img} alt="" />
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}

export default ExtraSection
