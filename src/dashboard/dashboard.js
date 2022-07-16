import { ThemeProvider } from '@emotion/react';
import { Container } from '@mui/system';
import { CssBaseline } from '@mui/material';
import Layout from '../components/Layout';
import theme from '../theme';
import Navbar from './components/navbar';
import React from 'react';

function dashboard() {
  return(
      <Container>    
        <ThemeProvider theme={theme}>
          <CssBaseline /> 
          <Navbar/>
        </ThemeProvider>
      </Container>
  )
}

export default dashboard;