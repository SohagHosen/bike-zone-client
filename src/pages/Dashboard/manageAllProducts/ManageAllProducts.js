import { Grid, LinearProgress } from '@mui/material';
import { Box } from '@mui/system';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Product from './product/Product';

const ManageAllProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios("https://aqueous-savannah-91729.herokuapp.com/bikes").then((res) => setProducts(res.data)).catch((err) => console.log(err))
  }, []);
  return (
    <>

      {products.length === 0 ? <Box sx={{ minHeight: "calc(100vh - 155px)" }}>
        <LinearProgress /></Box> : <>

        <Box sx={{ my: 5, }}>


          <Grid container spacing={{ xs: 2, md: 3 }}>
            {products?.map(product => (
              <Grid item xs={12} sm={6} md={4} key={product._id}>
                <Product product={product} products={products} setProducts={setProducts} />
              </Grid>
            ))}
          </Grid>
        </Box></>}



    </>
  )
}

export default ManageAllProducts
