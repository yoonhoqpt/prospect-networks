import { ThemeProvider } from '@emotion/react';
import { Container } from '@mui/system';
import { CssBaseline } from '@mui/material';
import Layout from '../components/Layout';
import theme from '../components/theme/Landing';

import React from 'react';

function contact() {
    return(
        <Container>    
        <ThemeProvider theme={theme}>
          <CssBaseline /> 
          <div className="dashboard">
            <Layout>
              <h1>
                Contact.
              </h1>
            </Layout>        
          </div>
        </ThemeProvider>
        </Container>
    )
}

export default contact;