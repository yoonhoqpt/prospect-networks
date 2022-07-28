import { createTheme } from "@mui/material";

const theme = createTheme({
    palette: {
        primary: {
            main: '#ffffff',
        },
        secondary: {
            main: '#575757',
            // 3633FF
        },
        neutral: {
          main: '#105FE1'
        },
        background: {
            paper: '#ffffff',
            default: '#ffffff'
        }
    }, 
    typography: {
        fontFamily: 'system-ui',
        fontSize: '1.9rem',
        button: {
            textTransform: "none"
          }     

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
              color: '#000000',
            },
          },
        },
      },
});

export default theme;