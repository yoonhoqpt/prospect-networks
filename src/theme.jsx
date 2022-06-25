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
            paper: '#161B33',
            default: '#161B33'
        }
    }, typography: {
        fontFamily: 'Helvetica',
        
    }, breakpoints: {
        values: {
            xs: 0,
            sm: 600, 
            md: 900,
            lg: 1200,
            xl: 1536,
        }
    }, 

});

export default theme;