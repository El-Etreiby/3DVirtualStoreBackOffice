import React, { useState } from 'react'
import './NavBar.css';
import { NavLink, useParams, useNavigate } from 'react-router-dom';
import { Divider, Drawer, Grid, Box, AppBar, Typography, IconButton, Button, Toolbar, Stack } from '@mui/material';
import ShoppingCartSharpIcon from '@mui/icons-material/ShoppingCartSharp';
import MenuSharpIcon from '@mui/icons-material/MenuSharp';
import InfoSharpIcon from '@mui/icons-material/InfoSharp';
import DescriptionSharpIcon from '@mui/icons-material/DescriptionSharp';
import logo from './images/logo.png'
import HomeSharpIcon from '@mui/icons-material/HomeSharp';
import PercentSharpIcon from '@mui/icons-material/PercentSharp';
import ShoppingCartCheckoutSharpIcon from '@mui/icons-material/ShoppingCartCheckoutSharp';


function NavBar() {
  const navigate = useNavigate();
  const username = useParams().username;
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);

  const menuHome = () => {
    setDrawerIsOpen(false);
    console.log("navigating");
    navigate(`/${username}`, { state: {username: username} });
  }

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton size="large" edge="start" color="inherit" aria-label="logo" onClick={() => setDrawerIsOpen(true)}>
          <MenuSharpIcon />
        </IconButton>
        <Drawer anchor='left' open={drawerIsOpen} onClose={() => setDrawerIsOpen(false)}>
          <Box p={2} width='250px' textAlign='center' role='presentation'>
            <Typography variant='h6' component='div'>
              <img
                width={50}
                height={150}
                src={logo}
                width={200}
                alt="logo"
              />
              
              <Stack alignItems = 'flex-start' direction="column" spacing={2} divider={<Divider orientation="horizontal" flexItem />}>
              <Button style={{ float: 'left' }} onClick={() => menuHome()}><HomeSharpIcon/> Home </Button>
              <Button style={{ float: 'left' }}><PercentSharpIcon/> offers </Button>
              <Button style={{ float: 'left' }}><ShoppingCartSharpIcon/> cart </Button>
              <Button style={{ float: 'left' }}><ShoppingCartCheckoutSharpIcon/> checkout </Button>
              </Stack>
            </Typography>
          </Box>
        </Drawer>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Grocery Store
        </Typography>
        <Stack direction="row" spacing={2}>
          <IconButton size="small" color="inherit">
            3D Store
            <ShoppingCartSharpIcon />
          </IconButton>
          <IconButton size="small" color="inherit">
            Features
            <DescriptionSharpIcon />
          </IconButton>
          <IconButton size="small" color="inherit">
            About
            <InfoSharpIcon />
          </IconButton>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;