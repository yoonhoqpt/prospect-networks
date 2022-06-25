import Layout from './components/Layout';
import { Container, Typography, Box, Button } from '@mui/material';
import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@emotion/react';
import theme from './theme';

function App() {
  return (
    <Container>    
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App">
        <Layout>
          <Box sx={{mt: 20}}> 
            <Typography color='secondary' variant='h1'>
            Finally, a job searching platform that empowers you.
            </Typography>  
            <Box sx={{mt: 2}}>
            <Button variant='contained' color='secondary' size='large'>
              <Typography fontSize={13} color='primary'>
                Go to Dashboard
              </Typography>
            </Button>
            </Box>
          </Box>
        </Layout>        
      </div>
    </ThemeProvider>
    </Container>
  );
}

export default App;
