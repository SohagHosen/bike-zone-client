import { Button, Card, CardContent, Container, Grid, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import useAuth from '../../hooks/useAuth';
const Order = () => {
  const [bike, setBike] = useState({})
  const [value, setValue] = useState(new Date());
  const { user } = useAuth()
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = data.get('email')
    const password = data.get('password')
    const name = data.get('name')
    console.log();
  }


  useEffect(() => {
    axios(`http://localhost:5000/bikes/${'618ac3498648ca8f9200b0ac'}`).then(res => setBike(res.data))
  }, [])
  console.log(bike);
  return (
    <Container sx={{ mt: 10, mb: 5 }}>
      <Grid container spacing={2}>
        <Grid item xs={6}>
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
          </CardContent>
        </Grid>
        <Grid item xs={6}>

          <Box
            sx={{
              my: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Box component="form" onSubmit={(handleSubmit) => { }} sx={{ mt: 3 }}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={12}>
                  <TextField
                    disabled
                    fullWidth
                    name="name"
                    value={user.displayName}
                  />

                </Grid> <Grid item xs={12} sm={12}>
                  <TextField
                    disabled
                    fullWidth
                    name="email"
                    value={user.email}
                  />

                </Grid>
                <Grid item xs={12} sm={12}>
                  <TextField
                    disabled
                    fullWidth
                    name="model"
                    value={bike.title}
                  />

                </Grid>

                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    disabled
                    value={bike.price}
                    name="price"
                  />
                </Grid>
                <Grid item xs={12}>
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DesktopDatePicker
                      value={value}
                      minDate={new Date('2017-01-01')}
                      disabled
                      onChange={(newValue) => {
                        setValue(newValue);
                      }}
                      renderInput={(params) => <TextField {...params} />}
                    />
                  </LocalizationProvider>
                </Grid>

              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Order now
              </Button>
            </Box>
          </Box>


        </Grid>
      </Grid>
    </Container>
  )
}

export default Order
