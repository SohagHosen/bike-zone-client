import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import { NavLink } from 'react-router-dom';

const drawerWidth = 240;

export default function ClippedDrawer() {
  return (
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

          <NavLink activeStyle={{ color: 'red' }} style={{ textDecoration: "none", fontWeight: "bold" }} to="/">
            <List>
              <ListItem button >
                <ListItemIcon>
                  <MailIcon />
                </ListItemIcon>
                <ListItemText primary={"text"} />
              </ListItem>
            </List></NavLink>
        </Box>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>

      </Box>
    </Box>
  );
}
