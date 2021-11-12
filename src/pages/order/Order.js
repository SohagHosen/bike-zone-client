/* eslint-disable react-hooks/exhaustive-deps */
import { Button, CardContent, Container, Grid, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import useAuth from '../../hooks/useAuth';
import { useParams, useHistory } from 'react-router-dom';
const Order = () => {
  const [bike, setBike] = useState({})
  const [value, setValue] = useState(new Date().toLocaleDateString());
  const { id } = useParams()
  const { user } = useAuth()

  const history = useHistory()

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = data.get('email')
    const model = data.get('model')
    const name = data.get('name')
    const price = data.get('price')
    const newOrder = { email, userName: name, bikeModel: model, price, orderDate: value, bikeImg: bike.img, status: 'pending' }

    axios.post('https://aqueous-savannah-91729.herokuapp.com/orders', newOrder).then(res => {
      if (res.data.insertedId) {
        history.push('/dashboard')
      }
    }).catch(err => console.log(err));
  }


  useEffect(() => {
    axios(`https://aqueous-savannah-91729.herokuapp.com/bikes/${id}`).then(res => setBike(res.data))
  }, [])
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
            <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={12}>
                  <Typography variant="subtitle1">Name</Typography>
                  <TextField
                    fullWidth
                    name="name"
                    value={user.displayName || ''}
                  />

                </Grid> <Grid item xs={12} sm={12}>
                  <Typography variant="subtitle1">Email</Typography>

                  <TextField
                    fullWidth
                    name="email"
                    value={user.email || ''}
                  />

                </Grid>
                <Grid item xs={12} sm={12}>
                  <Typography variant="subtitle1">Bike Model</Typography>

                  <TextField
                    fullWidth
                    name="model"
                    value={bike.title || ''}
                  />

                </Grid>

                <Grid item xs={12}>
                  <Typography variant="subtitle1">Price</Typography>

                  <TextField
                    required
                    fullWidth
                    value={bike.price || ''}
                    name="price"
                  />
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="subtitle1">Order Date</Typography>

                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DesktopDatePicker
                      value={value}
                      minDate={new Date()}
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
