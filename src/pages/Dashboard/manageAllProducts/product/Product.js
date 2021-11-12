import React from 'react'
import { Button, Card, CardContent, Typography } from "@mui/material";
import axios from 'axios';
const Product = ({ product, products, setProducts }) => {
  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to Delete this Product?")) {
      axios
        .delete(`https://aqueous-savannah-91729.herokuapp.com/bikes/${id}`)
        .then((res) => {
          if (res.data.deletedCount) {
            const remaining = products.filter((order) => order._id !== id);
            setProducts(remaining);
          }
        })
        .catch((err) => console.error(err));
    }
  }
  return (
    <Card>
      <img src={product.img} style={{ maxWidth: "500px", width: "100%" }} alt="" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {product.title}
        </Typography>
        <Typography noWrap variant="body1" color="text.secondary">
          {product.description}
        </Typography>
        <Typography sx={{ mt: 2 }} variant="subtitle1" color="text.secondary">
          Price: ${product.price}
        </Typography>
        <Button onClick={() => handleDelete(product._id)} sx={{ width: "100%", mt: 2 }} variant="contained">Delete Item</Button>
      </CardContent>
    </Card >
  )
}

export default Product
