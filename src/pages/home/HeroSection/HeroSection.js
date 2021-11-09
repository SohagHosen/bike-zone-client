import React from 'react'
import { Button, Container, Grid, Typography } from '@mui/material'
import { Box } from '@mui/system'
import bikeImg from '../../../assets/images/2021 MT-10.png'

import './heroSection.css'

const HeroSection = () => {
  return (
    <Box sx={{ minHeight: "calc(100vh - 48px)", backgroundColor: "#1f1f1f" }}>
      <Container>
        <Grid container spacing={2} >
          <Grid item xs={12} md={6}>
            <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%" }}>
              <Box>
                <Typography variant="h3" sx={{
                  fontWeight: "bold", color: "white", fontSize: {
                    lg: 45,
                    md: 35,
                    sm: 28,
                    xs: 22
                  }
                }}>
                  The <span style={{ color: "#1976d2" }}>Bike Zone</span> Shop is the World leading Premier Yamaha Dealer.
                </Typography>
                <Typography sx={{ color: "white", my: 3 }} variant='body1'>
                  The <span style={{ color: "#1976d2" }}>Bike Zone</span> Shop showcase a large selection of the latest new Yamaha models, plus an extensive choice of top quality used motorcycles. We also keep a great range of Yamaha demonstrator models and if you bring your bike in with you, we can value it for part exchange and work out a deal that suits you.
                </Typography>
                <Button variant="contained">EXPLORE</Button>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box sx={{ position: "relative", height: "500px" }}>
              <img style={{ height: "100%", width: "100%" }} className="img" src={bikeImg} alt="" />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default HeroSection
