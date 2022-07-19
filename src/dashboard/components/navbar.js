import React, { Component, useContext, useState } from "react";
import {Link, useNavigate} from 'react-router-dom';
import {Toolbar, AppBar, Grid, TextField, Drawer, ListItem, ListItemText, List, Typography, Avatar, Button, ThemeProvider, Box, Menu, MenuItem} from '@mui/material';
import whitelogo from '../../components/images/whitelogo.png';
import blacklogo from '../../components/images/blacklogo.png';
import search from '../../components/images/search.png';
import theme from '../../theme.jsx';
import lightTheme from '../../lightTheme';
import hamburger from '../../components/images/menuBlack.png';
import {AuthContext} from '../../context/authContext';
import notification from '../../components/images/bell.png';

//FIXME: RECURSIVE <Link to=> behavior solved by ../PATH
export default function Navbar() {    
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    let navigate = useNavigate();
    const {user, logout} = useContext(AuthContext);        

    const onLogout = () => {
        logout();
        navigate('/');
    }
    console.log(user);

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
    <ThemeProvider theme={lightTheme}>  
    <Box sx={{mt: 2}}> 
        <AppBar elevation={0} position='static' >
            <Toolbar>
                <Grid container direction='row' justifyContent='space-between' alignItems='center' >   
                    <Grid item>
                    <Link to="/dashboard">
                        <img src={blacklogo} height={50}/>                        
                    </Link>   
                    </Grid>  
                    <Grid item sx={{ display: { xs: 'none', sm: 'none', md: 'block', lg: 'block', xl: 'block'}}}>
                        <Link to={"../dashboard"} style={{ textDecoration: 'none' }}>
                            <Button>
                                <Typography color='#105FE1'>
                                    <b>Search</b>
                                </Typography>
                            </Button>
                        </Link>
                        <Link to={"../dashboard/favorites"} style={{ textDecoration: 'none' }}>
                            <Button>
                                <Typography color='secondary'>
                                <b> Favorites</b>
                                </Typography>
                            </Button>
                        </Link>
                        <Link to={"../dashboard/applied"} style={{ textDecoration: 'none' }}>
                            <Button>
                                <Typography color='secondary'>
                                <b> Applied jobs</b>
                                </Typography>
                            </Button>
                        </Link>
                        <Link to={"../profile"} style={{ textDecoration: 'none' }}>
                            <Button>
                                <Typography color='secondary'>
                                <b> My profile</b>
                                </Typography>
                            </Button>
                        </Link>
                        <Link to={"../messages"} style={{ textDecoration: 'none' }}>
                            <Button>
                                <Typography color='secondary'>
                                <b> Messages</b>
                                </Typography>
                            </Button>
                        </Link>
                    </Grid>                                          
                    <Grid item sx={{ display: { xs: 'none', sm: 'none', md: 'block', lg: 'block', xl: 'block'}}}>
                        { user ? 
                            <>
                                <Button>
                                    <img src={notification} height='20'></img>
                                </Button>
                                <Button
                                    id="basic-button"
                                    aria-controls={open ? 'basic-menu' : undefined}
                                    aria-haspopup="true"
                                    aria-expanded={open ? 'true' : undefined}
                                    onClick={handleClick}
                                >
                                    <Avatar></Avatar>
                                </ Button>
                                <Menu
                                    style={{color: 'red'}}
                                    id="basic-menu"
                                    anchorEl={anchorEl}
                                    open={open}
                                    onClose={handleClose}
                                    MenuListProps={{
                                    'aria-labelledby': 'basic-button',
                                    }}
                                >
                                    <MenuItem onClick={handleClose}>Profile</MenuItem>
                                    <MenuItem onClick={handleClose}>My account</MenuItem>
                                    <MenuItem onClick={onLogout}>Logout</MenuItem>
                                </Menu>
                            </>
                        :
                            <>
                                <Link to={"../signin"} style={{ textDecoration: 'none' }}>
                                    <Button variant='contained' color='neutral'>
                                        <Typography fontSize={13} color='primary'>
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
                                <Link to={"../dashboard"} style={{ textDecoration: 'none' }}>
                                    <ListItem button>
                                    <ListItemText primary="Search" />
                                    </ListItem>
                                </Link>

                                <Link to={"../dashboard/favorites"} style={{ textDecoration: 'none' }}>
                                    <ListItem button>
                                    <ListItemText primary="Favorites" />
                                    </ListItem>
                                </Link>

                                <Link to={"../dashboard/applied"} style={{ textDecoration: 'none' }}>
                                    <ListItem button>
                                    <ListItemText primary="Applied jobs" />
                                    </ListItem>
                                </Link>

                                <Link to={"../profile"} style={{ textDecoration: 'none' }}>
                                    <ListItem button>
                                    <ListItemText primary="My profile" />
                                    </ListItem>                                
                                </Link>
                                <Link to={"../messages"} style={{ textDecoration: 'none' }}>
                                    <ListItem button>
                                    <ListItemText primary="Message" />
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