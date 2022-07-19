import Layout from '../components/Layout';
import { Container, Typography, Box, Button, Grid } from '@mui/material';
import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@emotion/react';
import {Link} from 'react-router-dom';
import theme from '../theme';
import illustration from '../components/images/money.png';
import interview from '../components/images/interview.png';
import ghost from '../components/images/ghost.png'
import Navbar from './navbar';

function home() {
  return (
    <Container>    
    <ThemeProvider theme={theme}>
      <CssBaseline /> 
      <div className="App">
        <Navbar />
          <Box> 
            <Box  sx={{mt: 15, display: { xs: 'none', sm: 'none', md: 'block', lg: 'block', xl: 'block'}}}></Box>
            <Box  sx={{mt: 10, display: { xs: 'block', sm: 'block', md: 'none', lg: 'none', xl: 'none'}}}></Box>
            <Typography color='secondary' variant='h1' sx={{ display: { xs: 'none', sm: 'none', md: 'block', lg: 'block', xl: 'block'}}}>
            Search the best pool of candidates, money effectively.
            </Typography>  
            <Typography color='secondary' variant='h2' sx={{ display: { xs: 'block', sm: 'block', md: 'none', lg: 'none', xl: 'none'}}}>
            Search the best pool of candidates, money effectively.
            </Typography>  
            <Box sx={{mt: 2}}>

            <Link to='./dashboard' style={{ textDecoration: 'none' }}>
                <Button variant='contained' color='secondary' style={{maxWidth: '200px', maxHeight: '50px', minWidth: '200px', minHeight: '50px'}}>
                    <Typography fontSize={13} color='primary'>
                        <b>Get started</b>
                    </Typography>
                </Button>
            </Link>
            
            </Box>
          </Box>          
          <Box  sx={{mt: 10, display: { xs: 'none', sm: 'none', md: 'block', lg: 'block', xl: 'block'}}}></Box>
          <Box  sx={{mt: 5, display: { xs: 'block', sm: 'block', md: 'none', lg: 'none', xl: 'none'}}}></Box>
          <Box sx={{ justifyContent: 'flex-start'}}>          
            <Grid container direction='row' justifyContent='space-between' alignItems='center'>
            <Grid item xs={12} sm={4} md={8} sx={{pl: 10, pr: 0, display: { xs: 'none', sm: 'none', md: 'block', lg: 'block', xl: 'block'}}}>
              <img src={illustration} height={600} style={{width:'100%',height:'auto'}}/>
            </Grid>
            <Grid item xs={12} sm={4} md={8} sx={{display: { xs: 'block', sm: 'block', md: 'none', lg: 'none', xl: 'none'}}}>
              <img src={illustration} height={600} style={{width:'100%',height:'auto'}}/>
            </Grid>
            <Grid item xs={12} sm={8} md={4}>
              <Box sx={{mb: 10}}>
              <Typography color='secondary' fontSize='30px'>Every. Single. Job.</Typography>
              <Typography color='secondary' fontSize='40px'><b>Has a posted salary.</b></Typography>
              </Box>
              <Typography color='secondary' fontSize='25px'>Employers are required to post their budget
               for the role they are looking to fill. The salary range is also restricted to be a reasonable amount. 
               Establishing salaries beforehand saves times for both job candidates and employers.</Typography>
            </Grid>
            </Grid>
          </Box>
          <Box sx={{mt: 15}}>
            <Grid container direction='row' justifyContent='space-between' alignItems='center'>
            <Grid item xs={12} sm={4} md={8} sx={{pl: 10, pr: 20, display: { xs: 'none', sm: 'none', md: 'block', lg: 'block', xl: 'block'}}}>
              <img src={interview} height={500} style={{width:'100%',height:'auto'}}/>
            </Grid>
            <Grid item xs={12} sm={4} md={8} sx={{display: { xs: 'block', sm: 'block', md: 'none', lg: 'none', xl: 'none'}}}>
              <img src={interview} height={500} style={{width:'100%',height:'auto'}}/>
            </Grid>
            <Grid item xs={12} sm={8} md={4}>
              <Box sx={{mb: 10}}>
              <Typography color='secondary' fontSize='30px'>A transparent</Typography>
              <Typography color='secondary' fontSize='40px'><b>interview process.</b></Typography>
              </Box>
              <Typography color='secondary' fontSize='25px'>Save time and make an informed decision by finding out how many 
              rounds of interviews you must go through before you apply. Prepare better for your initial screening, technical 
              interview, and cognitive tests. </Typography>
            </Grid>
            
            </Grid>
          </Box>
          <Box sx={{mt: 20, mb: 20, justifyContent: 'flex-start'}}>          
            <Grid container direction='row' justifyContent='space-between' alignItems='center'>
            <Grid item xs={12} sm={4} md={8} sx={{pl: 10, pr: 20, display: { xs: 'none', sm: 'none', md: 'block', lg: 'block', xl: 'block'}}}>
              <img src={ghost} style={{width:'100%',height:'auto'}}/>
            </Grid>
            <Grid item xs={12} sm={4} md={8} sx={{display: { xs: 'block', sm: 'block', md: 'none', lg: 'none', xl: 'none'}}}>
              <img src={ghost} style={{width:'100%',height:'auto'}}/>
            </Grid>
            <Grid item xs={12} sm={8} md={4}>
              <Box sx={{mb: 10}}>
              <Typography color='secondary' fontSize='30px'>Getting ghosted?</Typography>
              <Typography color='secondary' fontSize='40px'><b>Let's fix that.</b></Typography>
              </Box>
              <Typography color='secondary' fontSize='25px'>As part of our user agreement, employers are required to send a 
              prompt response within seven business days within the day of receiving your message. This guarantees a response
              from the employer regarding the initial screening process.</Typography>
            </Grid>
            </Grid>
          </Box>        
      </div>
    </ThemeProvider>
    </Container>
  );
}

export default home;
