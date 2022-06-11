import { createTheme } from "@mui/material";

const theme = createTheme({
    palette: {
        primary: {
            main: '#0a1923',
        },
        secondary: {
            main: '#fff',
        },
        background: {
            paper: '#0a1923',
            default: '#0a1923'
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