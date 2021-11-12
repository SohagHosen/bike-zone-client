import { Button, Container, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import axios from 'axios';
import React from 'react'

const MakeAdmin = () => {

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);


    const email = data.get('email')

    axios.put('https://aqueous-savannah-91729.herokuapp.com/users/admin', { email })
      .then(res => {

        if (res.data.modifiedCount) {
          alert('Admin added successful ')
          event.reset()
        }
      }).catch(err => console.log(err));

  }

  return (
    <Box>
      <Typography sx={{ textAlign: 'center' }} variant="h4">
        Make Admin
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
            <TextField
              name="email"
              required
              fullWidth
              label="Email"
              autoFocus
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Make Admin
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default MakeAdmin
