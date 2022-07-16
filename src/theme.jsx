import { createTheme } from "@mui/material";

const theme = createTheme({
    palette: {
        primary: {
            main: '#161B33',
        },
        secondary: {
            main: '#F1DAC4',
        },
        background: {
            paper: '#F1DAC4',
            default: '#161B33'
        }
    }, 
    typography: {
        fontFamily: 'Helvetica'        

    }, breakpoints: {
        values: {
            xs: 0,
            sm: 90000, 
            md: 900,
            lg: 1290,
            xl: 1536,
        }
    }, 
    components: {
        // Name of the component
        MuiListItemText: {
          styleOverrides: {
            // Name of the slot
            root: {
              // Some CSS
              color: '#F1DAC4',
            },
          },
        },
      },
});

export default theme;