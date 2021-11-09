import React from 'react'
import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import LinesEllipsis from 'react-lines-ellipsis'

const Bike = ({ bike }) => {

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="auto"
        image={bike.img}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" noWrap>
          YAMAHA {bike.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <LinesEllipsis
            text={bike.description}
            maxLine='3'
            ellipsis='...'
            trimRight
            basedOn='letters'
          />

        </Typography>
      </CardContent>
      <CardActions sx={{ mx: 1, display: 'flex', justifyContent: "space-between" }}>
        <Typography sx={{ pt: 1 }} gutterBottom variant="body1" >
          Price: ${bike.price}
        </Typography>
        <Button variant="contained">Buy Now</Button>
      </CardActions>
    </Card>
  )
}

export default Bike
