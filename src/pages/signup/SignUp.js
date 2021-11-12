import React from 'react'
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Link } from 'react-router-dom';
import { getAuth, updateProfile } from "firebase/auth";

import useAuth from '../../hooks/useAuth'
import { useHistory, useLocation } from 'react-router-dom'
import axios from 'axios';
const SignUp = () => {
  const auth = getAuth();
  const { createUser, setUser } = useAuth();

  const history = useHistory();
  let location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };


  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = data.get('email')
    const password = data.get('password')
    const name = data.get('fullName')

    createUser(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        user.displayName = name;
        setUser(user);
        history.replace(from);
        updateProfile(auth.currentUser, {
          displayName: name
        }).then(() => {
          const postUser = { name, email, role: "subscriber" };
          axios.post('https://aqueous-savannah-91729.herokuapp.com/users', postUser).then(res => {
          }).catch(err => console.log(err));
        }).catch(() => { });
      })
      .catch((error) => console.log(error));
  };


  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          mb: 8,
          mt: 15,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12}>
              <TextField
                required
                fullWidth
                label="Full Name"
                autoFocus
                name="fullName"
              />

            </Grid>

            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
              />
            </Grid>

          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign Up
          </Button>
          <Link to="/login" variant="body2">
            Already have an account? Login
          </Link>
        </Box>
      </Box>
    </Container>
  );
}

export default SignUp
