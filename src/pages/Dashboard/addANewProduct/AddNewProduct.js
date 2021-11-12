import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import axios from 'axios';
const AddNewProduct = () => {

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);


    const newBike = {
      title: data.get('title'),
      description: data.get('description'),
      price: data.get('price'),
      img: data.get('img'),
    }

    axios.post('https://aqueous-savannah-91729.herokuapp.com/bikes', newBike).then(res => {

      if (res.data.insertedId) {
        alert('Bike successfully added')
        event.reset()
      }
    }).catch(err => console.log(err));
  };



  return (
    <Box>
      <Typography sx={{ textAlign: 'center' }} variant="h4">
        Add a new Product
      </Typography>
      <Container component="main" maxWidth="xs" sx={{ mt: -5 }}>
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  name="title"
                  required
                  fullWidth
                  label="Tittle"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  name="description"
                  required
                  fullWidth
                  label="Description"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  label="Bike Image Link"
                  name="img"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  label="Bike Price"
                  name="price"
                  type="number"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Add Product
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default AddNewProduct
