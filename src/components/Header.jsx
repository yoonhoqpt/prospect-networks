import React, { Component } from "react";
import {Toolbar, AppBar, Grid, Typography,Link, Button, ThemeProvider, Box} from '@mui/material';
import whitelogo from './images/whitelogo.png';
import theme from '../theme.jsx';
import IconButton from '@mui/material/IconButton';

class Header extends Component {
    render() {
        return (
        <ThemeProvider theme={theme}>  
        <Box sx={{mt: 2}}> 
            <AppBar elevation={0} position='static' >
                <Toolbar>
                    <Grid container direction='row' justifyContent='center' alignItems='center' spacing={{xs: 0, sm:3, md: 23, lg: 42}} >   
                    <Grid item>
                    <Link href={"./"}>
                        <img src={whitelogo} height={50}/>
                    </Link>   
                    </Grid>  
                    <Grid item>
                        {this.AppBarItem("ABOUT", "./about")}
                        {this.AppBarItem("FAQs","./faqs")}
                        {this.AppBarItem("CONTACT", "./contact")}
                        {this.AppBarItem("EMPLOYERS", "./employer")}     
                        </Grid>                                          
                        <Grid item>
                            <Button variant='outlined' color='secondary'>
                                <Typography fontSize={13} color='secondary'>
                                    Log in
                                </Typography>
                            </ Button>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>     
        </Box>
        </ThemeProvider>
        )
    }

    /** Returns a clickable link on the AppBar.
     * @param DisplayName name of the link. 
     * @param Location directory location of the page.
     * @returns the entire sub-component.
      */
    AppBarItem(DisplayName, Location) {
        return (
            
                <Button>
                    <Typography fontSize={13} color='secondary' noWrap>
                        {DisplayName}
                    </Typography>
                </Button>
            
        )
    }
    
}

export default Header;