import React from 'react'
import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material';
import { Link, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Navigation = () => {
  const history = useHistory();
  const { user, logOut } = useAuth()
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar sx={{ backgroundColor: "#1f1f1f" }}>
        <Toolbar>
          <Typography sx={{ mr: 5 }} variant="h6" component="div">

            <Link style={{ textDecoration: "none", color: "white", fontWeight: "bold" }} to="/"> BIKE ZONE</Link>
          </Typography>
          <Box sx={{ flexGrow: 1 }}>
            <Link style={{ textDecoration: "none", color: "white", fontWeight: "bold", marginRight: "10px" }} to="/">Home</Link>
            <Link style={{ textDecoration: "none", color: "white", fontWeight: "bold" }} to="/explore">Explore</Link>
          </Box>
          {user.email && <>
            <Typography variant="subtitle2">
              {user.displayName}
            </Typography>
            <Button onClick={() => {
              history.push('/dashboard')
            }} color="inherit">Dashboard</Button>
          </>}
          {user.email ? <Button onClick={() => logOut()} color="inherit">Log out</Button> : <Button onClick={() => {
            history.push('/login')
          }} color="inherit">Login</Button>}
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Navigation
