import React, { Component } from "react";
import {Container, IconButton, AppBar, Typography, Grow, Grid, Box, Link, CssBaseline, Toolbar, Button} from '@material-ui/core';
import useStyles from './styles.js';
import { withStyles } from '@material-ui/core/styles';
import { ReactDOM } from "react";


/** -------------APPBAR COMPONENT---------------
 * At the top of all pages, includes relevant links.
 * FIXES: item links, style, etc. 
 */
class Header extends React.Component {
    render() {
        const useStyles = theme => ({
            root: {
                flexGrow: 1
            }
        })
        return (
        <div> 
            <AppBar position="static" color='transparent' elevation='0' alignItems="center">
                <Toolbar>
                    
                    <h1> FIXME: LOGO HERE </h1>
                    
                    <Grid container alignItems="center" justifyContent='flex-end' spacing={2}>

                        <Grid item>
                            <Link href={"/employers"}>
                                <Typography style={{display: 'inline-block'}} className="headinglr" noWrap>
                                    Employers
                                </Typography>
                            </Link>
                        </Grid>

                        <Grid item>
                            <Link href={"/profile/login"}>
                                <Typography style={{display: 'inline-block'}} className="headinglr" noWrap>
                                    Log in
                                </Typography>
                            </Link>
                        </Grid>

                        <Grid item>
                            <Link href={"/profile/sign-up"}>
                                <Typography style={{display: 'inline-block'}} className={useStyles.headinglr} noWrap>
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

export default withStyles(useStyles)(Header);

