import { ThemeProvider } from '@emotion/react';
import { Container } from '@mui/system';
import { CssBaseline } from '@mui/material';
import Layout from '../components/Layout';
import theme from '../theme';

import React from 'react';

function faqs() {
    return(
        <Container>    
        <ThemeProvider theme={theme}>
          <CssBaseline /> 
          <div className="dashboard">
            <Layout>
              <h1>
                FAQ.
              </h1>
            </Layout>        
          </div>
        </ThemeProvider>
        </Container>
    )
}

export default faqs;