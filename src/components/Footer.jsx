import React, { Component } from "react";
import { BottomNavigation, Typography, ThemeProvider } from "@mui/material";
import theme from '../theme';

/**LINKS: back to top, ... 
 * FIXMES: add Links
  */
class Footer extends Component {
    render() {
        return (
        <ThemeProvider theme={theme}>

            <BottomNavigation theme={theme}>
            <Typography fontSize={12} color='secondary'>
                2022 Prospect Networks Inc.
            </Typography>
        </BottomNavigation>

        </ThemeProvider>
        
        )
    }
}

export default Footer;