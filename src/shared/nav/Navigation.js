import React from 'react'
import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: "#1f1f1f" }}>
        <Toolbar>
          <Typography sx={{ mr: 5 }} variant="h6" component="div">

            <Link style={{ textDecoration: "none", color: "white", fontWeight: "bold" }} to="/"> BIKE ZONE</Link>
          </Typography>
          <Box sx={{ flexGrow: 1 }}>
            <Link style={{ textDecoration: "none", color: "white", fontWeight: "bold" }} to="/explore">Explore</Link>
          </Box>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Navigation
