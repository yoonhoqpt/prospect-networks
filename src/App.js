import Layout from './components/Layout';
import { Container, Typography, Box, Button, Grid } from '@mui/material';
import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@emotion/react';
import theme from './theme';
import illustration from './components/images/money.png';
import interview from './components/images/interview.png';
import ghost from './components/images/ghost.png'

function App() {
  return (
    <Container>    
    <ThemeProvider theme={theme}>
      <CssBaseline /> 
      <div className="App">
        <Layout>
          <Box sx={{mt: 15}}> 
            <Typography color='secondary' variant='h1'>
            Finally, a job searching platform that empowers you.
            </Typography>  
            <Box sx={{mt: 2}}>
            <Button href='http://www.myprospect.io/dashboard' variant='contained' color='secondary' style={{maxWidth: '200px', maxHeight: '50px', minWidth: '200px', minHeight: '50px'}}>
              <Typography fontSize={13} color='primary'>
                <b>Get started</b>
              </Typography>
            </Button>
            </Box>
          </Box>          
          <Box sx={{mt: 20, justifyContent: 'flex-start'}}>          
            <Grid container direction='row' justifyContent='space-between' alignItems='center'>
            <Grid item xs={6}>
              <img src={illustration} height={600}/>
            </Grid>
            <Grid item xs={4}>
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
            <Grid item xs={4}>
              <Box sx={{mb: 10}}>
              <Typography color='secondary' fontSize='30px'>A transparent</Typography>
              <Typography color='secondary' fontSize='40px'><b>interview process.</b></Typography>
              </Box>
              <Typography color='secondary' fontSize='25px'>Save time and make an informed decision by finding out how many 
              rounds of interviews you must go through before you apply. Prepare better for your initial screening, technical 
              interview, and cognitive tests. </Typography>
            </Grid>
            <Grid item xs={6}>
              <img src={interview} height={500}/>
            </Grid>
            </Grid>
          </Box>
          <Box sx={{mt: 20, mb: 20, justifyContent: 'flex-start'}}>          
            <Grid container direction='row' justifyContent='space-between' alignItems='center'>
            <Grid item xs={6}>
              <img src={ghost} height={600}/>
            </Grid>
            <Grid item xs={4}>
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
        </Layout>        
      </div>
    </ThemeProvider>
    </Container>
  );
}

export default App;
