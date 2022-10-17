import React from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

import '../App.css';

import {Link} from 'react-router-dom';
export default function Navbar(){
   return(
    <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static">
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        <Button component={Link} to="/Tablecomponent" variant="contained" color="success">
TO view Users
</Button>&nbsp;
        <Button component={Link} to="/form" variant="contained" color="success">
Sgin Up !
</Button>&nbsp;

        </Typography>
        
      </Toolbar>
    </AppBar>
  </Box>
   );

}




