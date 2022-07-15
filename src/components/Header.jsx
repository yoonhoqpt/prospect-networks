import React, { Component, useContext } from "react";
import {Link, useNavigate} from 'react-router-dom';
import {Toolbar, AppBar, Grid, Typography, Button, ThemeProvider, Box} from '@mui/material';
import whitelogo from './images/whitelogo.png';
import theme from '../theme.jsx';
import {AuthContext} from '../context/authContext';

//FIXME: RECURSIVE <Link to=> behavior solved by ../PATH
export default function Header() {
        let navigate = useNavigate();
        const {user, logout} = useContext(AuthContext);        

        const onLogout = () => {
            logout();
            navigate('/');
        }
        console.log(user);
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
                    <Grid item sx={{ display: { xs: 'none', sm: 'none', md: 'block', lg: 'block', xl: 'block'}}}>
                    <Link to={"../about"} style={{ textDecoration: 'none' }}>
                        <Button>
                            <Typography fontSize={13} color='secondary' noWrap>
                                {"ABOUT"}
                            </Typography>
                        </Button>
                    </Link>
                    <Link to={"../faqs"} style={{ textDecoration: 'none' }}>
                        <Button>
                            <Typography fontSize={13} color='secondary' noWrap>
                                {"FAQs"}
                            </Typography>
                        </Button>
                    </Link>
                    <Link to={"../contact"} style={{ textDecoration: 'none' }}>
                        <Button>
                            <Typography fontSize={13} color='secondary' noWrap>
                                {"CONTACT"}
                            </Typography>
                        </Button>
                    </Link>
                    <Link to={"../employer"} style={{ textDecoration: 'none' }}>
                        <Button>
                            <Typography fontSize={13} color='secondary' noWrap>
                                {"EMPLOYERS"}
                            </Typography>
                        </Button>
                    </Link>
                       
                        </Grid>                                          
                        <Grid item sx={{ display: { xs: 'none', sm: 'none', md: 'block', lg: 'block', xl: 'block'}}}>
                            { user ? 
                                <>
                                    <Button variant='outlined' color='secondary'>
                                        <Typography fontSize={13} color='secondary'>
                                            Logout
                                        </Typography>
                                    </ Button>
                                </>
                            :
                                <>
                                    <Link to={"../signin"} style={{ textDecoration: 'none' }}>
                                        <Button variant='outlined' color='secondary'>
                                            <Typography fontSize={13} color='secondary'>
                                                Log in
                                            </Typography>
                                        </ Button>
                                    </ Link>
                                </>
                            }                            
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>     
        </Box>
        </ThemeProvider>
        )   
}