import React, { Component, useContext, useState } from "react";
import {Link, useNavigate} from 'react-router-dom';
import {Toolbar, AppBar, Grid, Typography, Drawer, Button, ThemeProvider, Box, List, ListItem, ListItemText} from '@mui/material';
import whitelogo from './images/whitelogo.png';
import theme from '../theme.jsx';
import {AuthContext} from '../context/authContext';
import hamburger from './images/menu.png';

//FIXME: RECURSIVE <Link to=> behavior solved by ../PATH
export default function Header() {    
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
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
                <Grid container direction='row' justifyContent='space-between' alignItems='center' >   
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
                                <Button variant='outlined' color='secondary' onClick={onLogout}>
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
                    <Grid item sx={{ display: { xs: 'block', sm: 'block', md: 'none', lg: 'none', xl: 'none'}}}>
                        <Button onClick={() => setIsDrawerOpen(true)}>
                            <img src={hamburger} height='30'></img>
                        </Button>
                        <Drawer open={isDrawerOpen} onClose={() => setIsDrawerOpen(false)}>
                            <List>
                                 { user ? 
                                    <>
                                        <ListItem button onClick={onLogout}>
                                        <ListItemText primary="LOGOUT" />
                                        </ListItem>
                                    </>
                                :
                                    <>
                                        <Link to={"../signin"} style={{ textDecoration: 'none' }}>
                                            <ListItem button>
                                            <ListItemText primary="LOG IN" />
                                            </ListItem>
                                        </Link>
                                    </>
                                }
                                <Link to={"../about"} style={{ textDecoration: 'none' }}>
                                    <ListItem button>
                                    <ListItemText primary="ABOUT" />
                                    </ListItem>
                                </Link>

                                <Link to={"../faqs"} style={{ textDecoration: 'none' }}>
                                    <ListItem button>
                                    <ListItemText primary="FAQs" />
                                    </ListItem>
                                </Link>

                                <Link to={"../contact"} style={{ textDecoration: 'none' }}>
                                    <ListItem button>
                                    <ListItemText primary="CONTACT" />
                                    </ListItem>
                                </Link>

                                <Link to={"../employer"} style={{ textDecoration: 'none' }}>
                                    <ListItem button>
                                    <ListItemText primary="EMPLOYERS" />
                                    </ListItem>                                
                                </Link>
                            </List>
                        </Drawer>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>     
    </Box>
    </ThemeProvider>
    )   
}