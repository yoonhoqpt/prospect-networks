import React, { Component } from "react";
import {AppBar, Typography, Grid, Link, Toolbar} from '@mui/material';
import {StyledText} from './styles.js';



/** -------------APPBAR COMPONENT---------------
 * At the top of all pages, includes relevant links.
 * FIXES: item links, style, etc. 
 */
class Header extends Component {
    
    render() {
        return (
        
        <div> 
            <AppBar position="static" color='transparent' elevation='0' alignItems="center">
                <Toolbar>

                    <h1>FIXME: LOGO</h1>
                    
                    <Grid container alignItems="center" justifyContent='flex-end' spacing={2}>

                    
                        <Grid item >
                            <Link href={"/employers"}>
                                <Typography noWrap>
                                    Employers
                                </Typography>
                            </Link>
                        </Grid>

                        <Grid item>
                            <Link href={"/profile/login"}>
                                <Typography>
                                    Log in
                                </Typography>
                            </Link>
                        </Grid>

                        <Grid item>
                            <Link href={"/profile/sign-up"}>
                                <Typography noWrap>
                                    Sign up
                                </Typography>
                            </Link>
                        </Grid>

                    </Grid>
                </Toolbar>
            </AppBar>
        </div>
        )
    }
    
}

export default Header;