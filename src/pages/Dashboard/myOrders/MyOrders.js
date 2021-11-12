/* eslint-disable react-hooks/exhaustive-deps */
import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Grid from '@mui/material/Grid';
import MyOrder from './myOrder/MyOrder';
import useAuth from '../../../hooks/useAuth';
const MyOrders = () => {
  const { user } = useAuth()
  const [myOrders, setMyOrders] = useState([])

  useEffect(() => {

    axios(`https://aqueous-savannah-91729.herokuapp.com/orders/${user.email}`).then(res => setMyOrders(res.data)).catch(err => console.log(err))

  }, [])
  return (
    <Box>
      <Typography variant="h4">
        My All Orders
      </Typography>

      <Grid container spacing={{ xs: 2, md: 3 }}>
        {myOrders?.map((order) => (
          <Grid item xs={12} sm={4} md={4} key={order._id}>
            <MyOrder myOrders={myOrders} setMyOrders={setMyOrders} order={order} />
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}

export default MyOrders
