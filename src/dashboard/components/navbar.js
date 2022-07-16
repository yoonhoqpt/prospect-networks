import React, { Component, useContext, useState } from "react";
import {Link, useNavigate} from 'react-router-dom';
import {Toolbar, AppBar, Grid, TextField, Typography, Avatar, Button, ThemeProvider, Box, Menu, MenuItem} from '@mui/material';
import whitelogo from '../../components/images/whitelogo.png';
import search from '../../components/images/search.png';
import theme from '../../theme.jsx';
import {AuthContext} from '../../context/authContext';
import notification from '../../components/images/notification.png';

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
    <ThemeProvider theme={theme}>  
    <Box sx={{mt: 2}}> 
        <AppBar elevation={0} position='static' >
            <Toolbar>
                <Grid container direction='row' justifyContent='space-between' alignItems='center' spacing={{xs: 0, sm:3, md: 23, lg: 20}} >   
                    <Grid item>
                    <Link to="../">
                        <img src={whitelogo} height={50}/>                        
                    </Link>   
                    </Grid>  
                    <Grid item sx={{ display: { xs: 'none', sm: 'none', md: 'block', lg: 'block', xl: 'block'}}}>
                        <TextField id="outlined-search" label="Search for the perfect job" type="search" color='secondary'  focused/>
                        <TextField id="outlined-search" label="Location" type="search" color='secondary'  focused/>
                        <Button>
                            <img src={search} height={25}/>
                        </Button>
                    </Grid>                                          
                    <Grid item sx={{ display: { xs: 'none', sm: 'none', md: 'block', lg: 'block', xl: 'block'}}}>
                        { user ? 
                            <>
                                <Button>
                                    <img src={notification} height='30'></img>
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
                                    <MenuItem onClick={handleClose}>Logout</MenuItem>
                                </Menu>
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