import React from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuIcon from '@mui/icons-material/Menu';
import { red } from '@mui/material/colors';

const color = red[500];

function Navbar() {
  return (
    <div>
        <AppBar>
            <Toolbar>
                <MenuIcon/> 
            <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' }}}
          >
            Bill Application Store
          </Typography>
                
                <AccountCircle/>
                    Priyadarshiny
                   
               
            </Toolbar>
        </AppBar>
    </div>
  )
}

export default Navbar