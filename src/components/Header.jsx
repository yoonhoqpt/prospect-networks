import React, { Component } from "react";
<<<<<<< HEAD
import {Box, Toolbar, AppBar, Grid, Typography,Link, Button} from '@mui/material';
import whitelogo from '../images/whitelogo.png';
=======
import {Toolbar, AppBar, Grid, Typography,Link, Button, ThemeProvider, Box} from '@mui/material';
import whitelogo from './images/whitelogo.png';
>>>>>>> f0dc8b521c4e998b11643b562458c9c4c0ffe88c
import theme from '../theme.jsx';

//FIXME:
class Header extends Component {
    render() {
        return (
<<<<<<< HEAD
        <ThemeProvider theme={theme}>
            {/* FULLSCREEN APPBAR */}
            <Box sx={{ display: {xs: 'none', sm: 'block'} }}>
                <AppBar color='transparent' elevation={0} position='static'>
                    <Toolbar>

                    <Link href={"./"}>
                        <img src={whitelogo} height={50} />
                    </Link>
                    
                    <Grid container display justifyContent='flex-end' position='relative' spacing={2}>
                        {this.AppBarItem("About", "./About")}
                        {this.AppBarItem("FAQs","./FAQs")}
                        {this.AppBarItem("Contact", "./Contact")}
                        {this.AppBarItem("Employer", "./Employer")}
                    </Grid>

                    <Grid container justifyContent='flex-end'>
                        <Button>
                            <Typography color='secondary' fontSize={12}>
                                Log in
                            </Typography>
                        </ Button>
                    </Grid>

                    </Toolbar>
                </AppBar>
            </Box>
=======
        <ThemeProvider theme={theme}>  
        <Box sx={{mt: 2}}> 
            <AppBar elevation={0} position='static' >
                <Toolbar>
                    <Grid container direction='row' justifyContent='space-between' alignItems='center' spacing={{xs: 0, sm:3, md: 23, lg: 42}} >   
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
>>>>>>> f0dc8b521c4e998b11643b562458c9c4c0ffe88c
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