import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';
import { Box } from '@mui/system';
import { Button, Typography } from '@mui/material';



const ManageOrders = () => {

  const [orders, setOrders] = React.useState([]);
  const [load, setLoad] = React.useState(true);


  const handleStatus = (id, status) => {
    axios
      .patch(`https://aqueous-savannah-91729.herokuapp.com/orders/status/${id}`, {
        status: status === 'pending' ? 'approved' : 'pending',
      })
      .then((response) => {
        if (response.data.modifiedCount) {
          setLoad(!load);
        }
      })
      .catch((error) => console.log(error));
  }


  React.useEffect(() => {
    axios("https://aqueous-savannah-91729.herokuapp.com/orders").then((res) => setOrders(res.data));
  }, [load]);
  return (
    <Box>
      <Typography sx={{ mb: 5 }} variant="h4">Manage All Orders </Typography>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell>User Name</TableCell>
              <TableCell align="right">Email</TableCell>
              <TableCell align="right">Bike Model</TableCell>
              <TableCell align="right">Price</TableCell>
              <TableCell align="right">Order Date</TableCell>
              <TableCell align="right">Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orders?.map((order) => (
              <TableRow
                key={order._id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {order.userName}
                </TableCell>
                <TableCell align="right">{order.email}</TableCell>
                <TableCell align="right">{order.bikeModel}</TableCell>
                <TableCell align="right">{order.price}</TableCell>
                <TableCell align="right">{order.orderDate}</TableCell>
                <TableCell align="right">{order.status} {
                  order.status === 'pending' ? <Button onClick={() => handleStatus(order._id, order.status)}>Approved</Button> : <Button onClick={() => handleStatus(order._id, order.status)}>Pending</Button>
                } </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  )
}

export default ManageOrders
