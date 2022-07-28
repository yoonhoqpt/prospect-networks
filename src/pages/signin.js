import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
// @mui
import { ThemeProvider } from '@emotion/react';
import { Link, Grid, FormControlLabel, Paper, Checkbox, Container, Typography, Stack, Alert, CssBaseline, TextField, Button, Box } from '@mui/material';

// auth stuff
import {AuthContext} from '../context/authContext';
import {useForm} from '../components/hooks';
import { useMutation } from '@apollo/react-hooks';
import { gql } from 'graphql-tag';

// sections
import theme from '../components/theme/loginRegister';
import Image from '../components/images/login-ill.png';
import logo from '../components/images/blacklogo.png';
import AuthSocial from '../components/AuthSocial';

// ----------------------------------------------------------------------

const LOGIN_USER = gql ` 
  mutation login(
    $loginInput: LoginInput
  ) {
    loginUser(
      loginInput: $loginInput
    ) {
      firstName
      lastName
      email
      password
      token
    }
  }
`
// ----------------------------------------------------------------------

export default function Login(props) {
  const context = useContext(AuthContext);
  let navigate = useNavigate();
  const [errors, setErrors] = useState([]);

  function loginUserCallback() {
    loginUser();
    console.log("callback hit");
  }

  const {onChange, onSubmit, values} = useForm(loginUserCallback, {    
    email: '',
    password: '',
  })

  const [ loginUser, { loading}] = useMutation(LOGIN_USER, {
    update(proxy, {data: {loginUser: userData}}) {
      context.login(userData);
      navigate('/dashboard');      
    }, 
    onError({graphQLErrors}) {
      setErrors(graphQLErrors);
    },
    variables: {loginInput: values}
  })  
  return (    
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
      <CssBaseline />
      <Grid
        item
        xs={false}
        sm={4}
        md={8}
        sx={{
          backgroundImage: `url(${Image})`,
          backgroundRepeat: 'no-repeat',
          backgroundColor: (t) =>
            t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />          
      <Grid item xs={12} sm={8} md={4} component={Paper} elevation={6} square>
        <Box 
          sx={{
            my: 8,
            mx: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <img src={logo} height={50}/>
          <Typography component="h1" variant="h5" color='secondary'>
            Sign in
          </Typography>

            <Typography sx={{ color: 'secondary', mb: 5 }}>Find the perfect job, stress-free.</Typography>
            <AuthSocial/>
            <Box component="form" noValidate sx={{ mt: 1 }}>            
              <TextField
                color='secondary'
                margin="normal"          
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                focused
                onChange={onChange}
              />
              <TextField
                color='secondary'
                margin="normal"            
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                focused
                onChange={onChange}
              />
            <FormControlLabel 
              control={<Checkbox value="remember" color="secondary" />}
              label="Remember me"
            />            

            {errors.map(function(error){
              return (
                <Alert severity="error">
                  {error.message}
                </Alert>
              )
            })}
            
            <Button
              color='secondary'          
              onClick={onSubmit}
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
              <Link to="/register" component={RouterLink} color='secondary' style={{ textDecoration: 'none' }}>
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
  );
}
/*
 
        
        
        
        
        
                 
      </Box>
    </Box>
  </Grid>
</Grid> 
  </ThemeProvider>        
);

*/