import { Button, Grid, LinearProgress, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import axios from 'axios';
import React from 'react'
import Rating from '@mui/material/Rating';
import useAuth from '../../../hooks/useAuth';
const Review = () => {
  const [rating, setRating] = React.useState(5);
  const [loading, setLoading] = React.useState(false);
  const { user } = useAuth()
  const handleSubmit = (event) => {
    setLoading(true)
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const feedback = data.get('feedback')
    const review = { feedback, rating, userName: user.displayName }

    axios.post('https://aqueous-savannah-91729.herokuapp.com/reviews', review).then(res => {

      if (res.data.insertedId) {
        setLoading(false)
        alert('Your feedback was successfully submitted')
        event.reset()
      }
    }).catch(err => console.log(err));
  };


  return (
    <Box>
      <Typography variant="h4" sx={{ textAlign: "center" }}>
        Review
      </Typography>


      {loading ? <Box sx={{ minHeight: "calc(100vh - 355px)" }}>
        <LinearProgress /></Box> : <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3, width: "100%", maxWidth: "500px", mx: "auto" }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="subtitle1">Rate your Experience</Typography>
            <Rating
              name="simple-controlled"
              value={rating}
              onChange={(event, newValue) => {
                setRating(newValue);
              }}
            />
          </Grid>

          <Grid item xs={12}>
            <Typography variant="subtitle1">Tell us on how we improve...</Typography>
            <TextField
              required
              fullWidth
              name="feedback"
            />
          </Grid>

        </Grid>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Submit
        </Button>
      </Box>}

    </Box>
  )
}

export default Review
