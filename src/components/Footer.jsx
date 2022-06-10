import React, { Component } from "react";
import { ThemeProvider } from "styled-components";
import { Footer } from "@mui/material";
import { Typography } from "@mui/material";
import theme from '../theme';

/**LINKS: back to top, ... 
 * FIXMES: add Links
  */
class BottomFooter extends Component {
    render() {
        return (
        
        <ThemeProvider theme={theme}>
            <div>
                <Typography color='white'>
                    2022 Prospect Networks Inc.
                </Typography>
            </div>
        </ThemeProvider>
        )
    }
}

export default BottomFooter;