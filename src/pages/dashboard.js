import { ThemeProvider } from '@emotion/react';
import { Container } from '@mui/system';
import { CssBaseline } from '@mui/material';
import Layout from '../components/Layout';
import theme from '../theme';

import React from 'react';

function dashboard() {
    return(
        <Container>    
        <ThemeProvider theme={theme}>
          <CssBaseline /> 
          <div className="dashboard">
            <Layout>
              <h1>
                Indeed, Jacob hath swindled his brother Esau.
              </h1>
            </Layout>        
          </div>
        </ThemeProvider>
        </Container>
    )
}

export default dashboard;