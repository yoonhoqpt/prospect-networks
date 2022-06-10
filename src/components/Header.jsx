import React, { Component } from "react";
import {Toolbar, AppBar, Grid, Typography,Link, Button} from '@mui/material';
import whitelogo from './images/whitelogo.png';
import theme from '../theme.jsx';
import { ThemeProvider } from "styled-components";
import styled from 'styled-components';

class Header extends Component {
    render() {
        return (
        
            <div>
                <AppBar elevation={0} position='static'>
                    <Toolbar>

                    <Link href={"./"}>
                        <img src={whitelogo} height={50} />
                    </Link>

                    <Grid container justifyContent='center' spacing={2}>
                        {this.AppBarItem("About", "./About")}
                        {this.AppBarItem("FAQs","./FAQs")}
                        {this.AppBarItem("Contact", "./Contact")}
                        {this.AppBarItem("Employer", "./Employer")}
                    </Grid>

                    <Grid container justifyContent='flex-end'>
                        <Button>
                            <Typography color='white'>
                                Log in
                            </Typography>
                        </ Button>
                    </Grid>

                    </Toolbar>
                </AppBar>
            </div>
        )
    }

    /** Returns a clickable link on the AppBar.
     * @param DisplayName name of the link. 
     * @param Location directory location of the page.
     * @returns the entire sub-component.
      */
    AppBarItem(DisplayName, Location) {
        return (
            <Grid item>
                <Link underline="hover" href={Location}>
                    <Typography color='white' noWrap>
                        {DisplayName}
                    </Typography>
                </Link>
            </Grid>
        )
    }

}

export default Header;