import { createTheme } from "@mui/material";

const theme = createTheme({
    palette: {
        primary: {
            main: '#F1DAC4',
        },
        secondary: {
            main: '#161B33',
        },
        background: {
            paper: '#F1DAC4',
            default: '#F1DAC4'
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