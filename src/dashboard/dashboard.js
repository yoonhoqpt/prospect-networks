import { ThemeProvider } from '@emotion/react';
import { Container } from '@mui/system';
import { CssBaseline, Grid, Box } from '@mui/material';
import Layout from '../components/Layout';
import Filters from './components/filters';
import JobPost from './components/jobPost';
import JobDescription from './components/jobDescription';
import lightTheme from '../lightTheme';
import Navbar from './components/navbar';
import React from 'react';
import Searchbar from './components/search';

function dashboard() {
  return(
      <Container>    
        <ThemeProvider theme={lightTheme}>
          <CssBaseline />            
          <Navbar/>
          <Grid container>
            <Grid item xs={12}>
              <Box sx={{mt:3}} />
            </Grid>
            <Grid item xs={12}>
              <Searchbar />
            </Grid>
            <Grid item xs={12}>
              <Box sx={{mt:3}} />
            </Grid>
            <Grid item sm={0} md={3} lg={2} sx={{ display: { xs: 'none', sm: 'none', md: 'block', lg: 'block', xl: 'block'}}}>
              <Filters/>
            </Grid>
            <Grid item xs={12} sm={8} md={6} lg={7}>
              <JobPost/>
            </Grid>
            <Grid item sm={0} md={3} lg={3} sx={{ display: { xs: 'none', sm: 'none', md: 'block', lg: 'block', xl: 'block'}}}>
              <JobDescription/>
            </Grid>
          </Grid>
        </ThemeProvider>
      </Container>
  )
}

export default dashboard;