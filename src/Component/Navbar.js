import React, { Component } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import Container from '@mui/material/Container';

class Navbar extends Component {
    render() {
        return (
            <div>
               <AppBar position="static" sx={{backgroundColor: 'black' }}>
                  <Container maxWidth="lg">
                     <Toolbar>
                          <Typography variant="h4" color="inherit" component="div"  sx={{ml: -2 , fontWeight: 'bold'}}>
                             webflow
                          </Typography>
                          <Typography variant="p" color="inherit" component="div"  sx={{ml:4  }}>
                             Showcase
                          </Typography>
                          <Typography variant="p" color="inherit" component="div"  sx={{ml:4  }}>
                             Designers
                          </Typography>
                          <Typography variant="p" color="inherit" component="div"  sx={{ml:4  }}>
                             Learn & Support
                          </Typography>
                     </Toolbar>
                   </Container>

               </AppBar>
                
            </div>
        );
    }
}

export default Navbar;