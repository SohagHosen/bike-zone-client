import { Container, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <Box style={{ zIndex: 1 }} component="footer" sx={{ backgroundColor: '#1f1f1f', py: 6, color: "white" }}>
      <Container maxWidth="lg">
        <Typography variant="h6" align="center" gutterBottom>
          BIKE ZONE
        </Typography>
        <Typography variant="body2" align="center">
          {'Copyright © '}
          <Link style={{ color: "#1976d2", fontWeight: 'bold' }} to="/">
            BIKE ZONE{" "}
          </Link>
          {new Date().getFullYear()}
        </Typography>
      </Container>
    </Box>
  )
}

export default Footer
