import React, { Component } from "react";
import {Link} from 'react-router-dom';
import {Toolbar, AppBar, Grid, Typography, Button, ThemeProvider, Box} from '@mui/material';
import whitelogo from './images/whitelogo.png';
import theme from '../theme.jsx';

//FIXME: RECURSIVE <Link to=> behavior solved by ../PATH
class Header extends Component {
    render() {
        return (
        <ThemeProvider theme={theme}>  
        <Box sx={{mt: 2}}> 
            <AppBar elevation={0} position='static' >
                <Toolbar>
                    <Grid container direction='row' justifyContent='space-between' alignItems='center' spacing={{xs: 0, sm:3, md: 23, lg: 42}} >   
                    <Grid item>
                    <Link to="../">
                        <img src={whitelogo} height={50}/>
                    </Link>   
                    </Grid>  
                    <Grid item>
                        {this.AppBarItem("ABOUT", "../about")}
                        {this.AppBarItem("FAQs","../faqs")}
                        {this.AppBarItem("CONTACT", "../contact")}
                        {this.AppBarItem("EMPLOYERS", "../employer")}     
                        </Grid>                                          
                        <Grid item>
                        <Link to={"../signin"} style={{ textDecoration: 'none' }}>
                            <Button variant='outlined' color='secondary'>
                                <Typography fontSize={13} color='secondary'>
                                    Log in
                                </Typography>
                            </ Button>
                        </ Link>
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
                <Link to={Location} style={{ textDecoration: 'none' }}>
                    <Button>
                        <Typography fontSize={13} color='secondary' noWrap>
                            {DisplayName}
                        </Typography>
                    </Button>
                </Link>
                
            
        )
    }
    
}

export default Header;