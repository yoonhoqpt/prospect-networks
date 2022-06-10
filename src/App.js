import Layout from './components/Layout';
import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@emotion/react';
import theme from './theme';

function App() {
  
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App">
        <Layout>

        </Layout>        
      </div>
    </ThemeProvider>
    
  );
}

export default App;
