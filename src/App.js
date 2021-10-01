import logo from './logo.svg';
import './App.css';
import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Navbar from "./Component/Navbar";
import NavbarTwo from './Component/NavbarTwo';
import CardOne from "./Component/CardOne";

function App() {
  return (
    <div classname ="App">      
         <Navbar/>
         <NavbarTwo/>
            <CssBaseline />
               <Container maxWidth="lg">
                   <CardOne/>
                </Container>
            <CssBaseline/>
    </div>
  );
}

export default App;
