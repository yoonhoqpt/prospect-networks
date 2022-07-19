import { ThemeProvider } from '@emotion/react';
import { Container } from '@mui/system';
import { CssBaseline, Grid } from '@mui/material';
import Layout from '../components/Layout';
import Filters from './components/filters';
import JobPost from './components/jobPost';
import JobDescription from './components/jobDescription';
import lightTheme from '../lightTheme';
import Navbar from './components/navbar';
import React from 'react';

function dashboard() {
  return(
      <Container>    
        <ThemeProvider theme={lightTheme}>
          <CssBaseline />            
          <Navbar/>
          <Grid container>
            <Grid item xs={0} sm={0} md={3} lg={3}>
              <Filters/>
            </Grid>
            <Grid item xs={12} sm={8} md={6} lg={6}>
              <JobPost/>
            </Grid>
            <Grid item xs={0} sm={0} md={3} lg={3}>
              <JobDescription/>
            </Grid>
          </Grid>
        </ThemeProvider>
      </Container>
  )
}

export default dashboard;