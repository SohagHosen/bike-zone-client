/* eslint-disable react-hooks/exhaustive-deps */
import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import LinearProgress from '@mui/material/LinearProgress';

import ListItemText from '@mui/material/ListItemText';
import { NavLink, Switch, useRouteMatch } from 'react-router-dom';
import MyOrders from './myOrders/MyOrders';
import PrivateRoute from '../../shared/privateRoute/PrivateRoute';
import Review from './review/Review';
import Pay from './Pay/Pay';
import AlignHorizontalRightIcon from '@mui/icons-material/AlignHorizontalRight';
import axios from 'axios';
import useAuth from '../../hooks/useAuth';
import ManageAllProducts from './manageAllProducts/ManageAllProducts';
import AddNewProduct from './addANewProduct/AddNewProduct';
import MakeAdmin from './makeAdmin/MakeAdmin';
import ManageOrders from './manageOrders/ManageOrders';

const drawerWidth = 240;

export default function ClippedDrawer() {

  const { user } = useAuth()

  const [userRole, setUserRole] = React.useState("")
  const [loading, setLoading] = React.useState(true)
  React.useEffect(() => {


    axios(`https://aqueous-savannah-91729.herokuapp.com/users/${user.email}`).then(res => {
      setLoading(false);
      setUserRole(res.data.role)
    })


  }, [])


  let { path, url } = useRouteMatch();
  return (
    <>
      {loading ? <Box sx={{ minHeight: "calc(100vh - 155px)" }}>
        <LinearProgress /></Box> :
        <Box sx={{ display: 'flex' }}>
          <Drawer
            variant="permanent"
            style={{ zIndex: 0 }}
            sx={{

              width: drawerWidth,
              // flexShrink: 0,
              [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box', height: "auto", borderRight: 0 },
            }}
          >
            <Toolbar />
            <Box >

              {userRole === "subscriber" ? <>  <NavLink exact activeStyle={{ color: 'green' }} style={{ textDecoration: "none", fontWeight: "bold" }} to={`${url}`}>
                <List>
                  <ListItem button >
                    <ListItemIcon>
                      <AlignHorizontalRightIcon />
                    </ListItemIcon>
                    <ListItemText primary={"My Orders"} />
                  </ListItem>
                </List>
              </NavLink>

                <NavLink exact activeStyle={{ color: 'green' }} style={{ textDecoration: "none", fontWeight: "bold" }} to={`${url}/review`}>
                  <List>
                    <ListItem button >
                      <ListItemIcon>
                        <AlignHorizontalRightIcon />
                      </ListItemIcon>
                      <ListItemText primary={"Review"} />
                    </ListItem>
                  </List>
                </NavLink>

                <NavLink exact activeStyle={{ color: 'green' }} style={{ textDecoration: "none", fontWeight: "bold" }} to={`${url}/pay`}>
                  <List>
                    <ListItem button >
                      <ListItemIcon>
                        <AlignHorizontalRightIcon />
                      </ListItemIcon>
                      <ListItemText primary={"Pay"} />
                    </ListItem>
                  </List>
                </NavLink> </> : <>  <NavLink exact activeStyle={{ color: 'green' }} style={{ textDecoration: "none", fontWeight: "bold" }} to={`${url}/manageAllProducts`} >
                  <List>
                    <ListItem button >
                      <ListItemIcon>
                        <AlignHorizontalRightIcon />
                      </ListItemIcon>
                      <ListItemText primary={"Manage All Products"} />
                    </ListItem>
                  </List>
                </NavLink>

                <NavLink exact activeStyle={{ color: 'green' }} style={{ textDecoration: "none", fontWeight: "bold" }} to={`${url}/addAProduct`}>
                  <List>
                    <ListItem button >
                      <ListItemIcon>
                        <AlignHorizontalRightIcon />
                      </ListItemIcon>
                      <ListItemText primary={"Add A Product"} />
                    </ListItem>
                  </List>
                </NavLink>

                <NavLink exact activeStyle={{ color: 'green' }} style={{ textDecoration: "none", fontWeight: "bold" }} to={`${url}/makeAdmin`}>
                  <List>
                    <ListItem button >
                      <ListItemIcon>
                        <AlignHorizontalRightIcon />
                      </ListItemIcon>
                      <ListItemText primary={"Make Admin"} />
                    </ListItem>
                  </List>
                </NavLink>
                <NavLink exact activeStyle={{ color: 'green' }} style={{ textDecoration: "none", fontWeight: "bold" }} to={`${url}/manageOrders`}>
                  <List>
                    <ListItem button >
                      <ListItemIcon>
                        <AlignHorizontalRightIcon />
                      </ListItemIcon>
                      <ListItemText primary={"Manage Orders"} />
                    </ListItem>
                  </List>
                </NavLink></>
              }


            </Box>
          </Drawer>
          <Box component="main" sx={{ flexGrow: 1, p: 3, minHeight: "400px", width: "calc(100vw - 320px)", }}>

            <Switch>
              <PrivateRoute exact path={`${path}`}>
                {userRole === 'subscriber' ? <MyOrders /> : <ManageAllProducts />}

              </PrivateRoute>
              <PrivateRoute exact path={`${path}/myOrders`}>
                <MyOrders />
              </PrivateRoute>
              <PrivateRoute exact path={`${path}/review`}>
                <Review />
              </PrivateRoute>
              <PrivateRoute exact path={`${path}/pay`}>
                <Pay />
              </PrivateRoute>
              <PrivateRoute exact path={`${path}/manageAllProducts`}>
                <ManageAllProducts />
              </PrivateRoute>

              <PrivateRoute exact path={`${path}/addAProduct`}>
                <AddNewProduct />
              </PrivateRoute>
              <PrivateRoute exact path={`${path}/makeAdmin`}>
                <MakeAdmin />
              </PrivateRoute>
              <PrivateRoute exact path={`${path}/manageOrders`}>
                <ManageOrders />
              </PrivateRoute>

            </Switch>
          </Box>
        </Box>
      }
    </>
  );
}
