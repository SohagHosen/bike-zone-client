import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import axios from 'axios';

const MyOrder = ({ myOrders, setMyOrders, order }) => {

  const handleCancel = (id) => {
    if (window.confirm("Are you sure you want to cancel this order?")) {
      axios
        .delete(`https://aqueous-savannah-91729.herokuapp.com/orders/${id}`)
        .then((res) => {
          if (res.data.deletedCount) {
            const remaining = myOrders.filter((order) => order._id !== id);
            setMyOrders(remaining);
          }
        })
        .catch((err) => console.error(err));
    }
  }

  return (
    <Card sx={{ maxWidth: 345 }}>
      <img width="100%" src={order.bikeImg} alt="" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {order.bikeModel}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Price: ${order.price}
        </Typography><Typography variant="body2" color="text.secondary">
          Order Date: {order.orderDate}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Status: {order.status}
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={() => handleCancel(order._id)} size="small">Cancel</Button>
      </CardActions>
    </Card>
  )
}

export default MyOrder
