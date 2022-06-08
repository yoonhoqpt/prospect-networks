import Header from './components/Header';
import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@emotion/react';
import theme from './theme';

function App() {
  
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App" style={{backgroundColor: '#0a1923'}}>
        <Header />
      </div>
    </ThemeProvider>
    
  );
}

export default App;
