import { ThemeProvider } from '@emotion/react';
import { CssBaseline, Grid, FormControlLabel, Box, Paper, Avatar, Typography, Checkbox, Button } from '@mui/material';
import {Link} from 'react-router-dom';
import theme from '../reversed-theme';
import TextField from '@mui/material/TextField';
import Image from '../components/images/login-ill.png';
import blacklogo from '../components/images/blacklogo.png';

import React from 'react';

// imported directly from MUI template with a few modifications to fit our needs. 
function signin() {
    return(        
        // this uses the 'reverse-theme.jsx' because it is difficult to see the cursor and text when the background is
        // dark. For inputting into textfield, try to use the reverse-theme theme.
        <ThemeProvider theme={theme}>          
          <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: `url(${Image})`,
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box 
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <img src={blacklogo} height={50}/>
            <Typography component="h1" variant="h5" color='secondary'>
              Sign in
            </Typography>
            <Box component="form" noValidate sx={{ mt: 1 }}>
              <TextField
                color='secondary'
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                focused
              />
              <TextField
                color='secondary'
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                focused
              />
              <FormControlLabel 
                control={<Checkbox value="remember" color="secondary" />}
                label="Remember me"
              />
              <Button
                color='secondary'
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                <Link to={Location} style={{ textDecoration: 'none' }}>
                    <Button>
                        <Typography fontSize={13} color='secondary' noWrap>
                            Forgot password?
                        </Typography>
                    </Button>
                </Link>
                </Grid>
                <Grid item>
                  <Link to={'../register'} style={{ textDecoration: 'none' }}>
                    <Button>
                        <Typography fontSize={13} color='secondary' noWrap>
                            Don't have an account? 
                        </Typography>
                    </Button>
                </Link>
                </Grid>
              </Grid>              
            </Box>
          </Box>
        </Grid>
      </Grid> 
        </ThemeProvider>        
    )
}

export default signin;