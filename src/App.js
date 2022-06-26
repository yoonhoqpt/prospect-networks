import Layout from './components/Layout';
import { Container, Typography, Box, Button, Grid } from '@mui/material';
import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@emotion/react';
import theme from './theme';
import illustration from './components/images/illus.png';

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
            <Button variant='contained' color='secondary' style={{maxWidth: '200px', maxHeight: '50px', minWidth: '200px', minHeight: '50px'}}>
              <Typography fontSize={13} color='primary'>
                <b>Get started</b>
              </Typography>
            </Button>
            </Box>
          </Box>
          <Box sx={{mt: 15, justifyContent: 'flex-start'}}>
            <Grid container direction='row' justifyContent='left' alignItems='top' spacing={{xs: 0, sm:3, md: 23, lg: 42}} >
            <Grid item xs={6}>
              <img src={illustration} height={500}/>
            </Grid>
            <Grid item xs={6}>
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
        </Layout>        
      </div>
    </ThemeProvider>
    </Container>
  );
}

export default App;
