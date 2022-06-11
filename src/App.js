import Layout from './components/Layout';
import { Container, Typography } from '@mui/material';
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
          <Typography color='primary' fontSize={17.6}>
          Lorem ipsum dolor sit amet, consect
          etur adipiscing elit. Vivamus at scel
          erisque lacus. Donec fermentum vitae ex nec sagitt
          is. Fusce dapibus leo eget euismod pulvinar. Nullam imper
          diet aliquam justo, a semper turpis dapibus eu. Cras solli
          citudin facilisis felis, id condimentum urna sollicitu
          din sed. Phasellus non mi sit amet nisl congue tempus ut
           a lacus. Donec rutrum augue sit amet lacus feugiat
            congue. Donec
           dapibus orci eget sem tempus, non sce
           lerisque libero finibus. Suspendisse eros lor
           em, tincidunt faucibu
           s facilisis nec, tincidunt nec velit. Cras 
           eu justo feugiat, aliquet nunc vel, euismod 
           metus. Quisque malesuada porta congue.

          Ut porttitor, leo et aliquet posuere, 
          nulla elit suscipit eros, sed rhoncus 
          erat felis sed augue. Integer eu gravid
          a mi, sodales sodales dui. Lorem ipsum 
          dolor sit amet, consectetur adipiscing 
          elit. Integer commodo, erat nec digniss
          im hendrerit, tellus nulla sagittis qua
          m, eget pharetra ante mi et nibh. Aliqu
          am erat volutpat. Pellentesque bibendum
           maximus magna, eu tincidunt nunc vestibulum ut. 
           Donec sed lorem a metus lobortis tincidunt si
           t amet molestie justo. Fusce viverra lacus qui
           s mi ultricies, ac cursus diam euismod. Ut pha
           retra elementum nunc, sit amet facilisis est m
           attis non. Fusce eget tortor vitae neque curs
           us mollis et vel leo. Nulla facilisi. Vestibul
           um consectetur vitae odio ac vulputate. Suspen
           disse potenti. Vivamus metus dui, malesuada qu
           is imperdiet eget, placerat sed lacus. Morbi p
           osuere lorem et justo laoreet, eget congue mau
           ris pretium.
          </Typography>
        </Layout>        
      </div>
    </ThemeProvider>

    </Container>
  );
}

export default App;
