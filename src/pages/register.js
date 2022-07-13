import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
// @mui
import { styled } from '@mui/material/styles';
import { ThemeProvider } from '@emotion/react';
import { Link, Container, Typography, CssBaseline, TextField, Stack, Alert, Button, Box } from '@mui/material';

// auth stuff
import {AuthContext} from '../context/authContext';
import {useForm} from '../components/hooks';
import { useMutation } from '@apollo/react-hooks';
import { gql } from 'graphql-tag';
import * as Yup from 'yup';

// sections
import AuthSocial from '../auth/AuthSocial';
import thetheme from '../reversed-theme';

import logo from '../components/images/blacklogo.png';

// ----------------------------------------------------------------------

const ContentStyle = styled('div')(({ theme }) => ({
  maxWidth: 480,
  margin: 'auto',
  minHeight: '100vh',
  display: 'flex',
  justifyContent: 'center',  
  flexDirection: 'column',
  padding: theme.spacing(6, 0),
}));

const REGISTER_USER = gql ` 
  mutation Mutation(
    $registerInput: RegisterInput
  ) {
    registerUser(
      registerInput: $registerInput
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

export default function Register() {
  const context = useContext(AuthContext);
  let navigate = useNavigate();
  const [errors, setErrors] = useState([]);

  function registerUserCallback() {
    console.log("callback hit");
    registerUser();
  }
  const {onChange, onSubmit, values} = useForm(registerUserCallback, {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  })

  const [ registerUser, { loading}] = useMutation(REGISTER_USER, {
    update(proxy, {data: {registerUser: userData}}) {
      context.login(userData);
      navigate('/');
    }, 
    onError({graphQLErrors}) {
      setErrors(graphQLErrors);
    },
    variables: {registerInput: values}
  })
  // from the other register form
  const [showPassword, setShowPassword] = useState(false);
  const RegisterSchema = Yup.object().shape({
    firstName: Yup.string().required('First name required'),
    lastName: Yup.string().required('Last name required'),
    email: Yup.string().email('Email must be a valid email address').required('Email is required'),
    password: Yup.string().required('Password is required'),
  });
  const defaultValues = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  };

  return (    
    <ThemeProvider theme={thetheme}>
      <CssBaseline />
        <Container>
          <ContentStyle>
          <img src={logo} height={50} width={50}/>
            <Typography variant="h4" gutterBottom color='secondary'>
              Join our community.
            </Typography>

            <Typography sx={{ color: 'secondary', mb: 5 }}>Find the perfect job, stress-free.</Typography>

            <AuthSocial />
            <Stack spacing={2}> 
              <Stack spacing={2} direction={{xs: 'column', sm: 'row'}}>
                <TextField  
                  fullWidth 
                  color="secondary"
                  label="First name"
                  name="firstName"
                  onChange={onChange}
                />
                <TextField  
                  fullWidth 
                  color="secondary"
                  label="Last name"
                  name="lastName"
                  onChange={onChange}
                />
              </Stack>
              <TextField
                color="secondary"
                label="Email"
                name="email"
                onChange={onChange}
              />
              <TextField 
                color="secondary"
                label="Password"
                name="password"
                onChange={onChange}
                type={showPassword ? 'text' : 'password'}
              />
            
            {errors.map(function(error){
              return (
                <Alert severity="error">
                  {error.message}
                </Alert>
              )
            })}
            
            <Button variant="contained" onClick={onSubmit} color='secondary'>Register</Button>            
            </Stack>
            <Typography variant="body2" align="center" sx={{ color: 'text.secondary', mt: 3 }}>
              By registering, I agree to Prospect's&nbsp;
              <Link underline="always" color="text.primary" href="#">
                Terms of Service
              </Link>
              {''} and {''}
              <Link underline="always" color="text.primary" href="#">
                Privacy Policy
              </Link>
              .
            </Typography>
            
              <Typography variant="body2" sx={{ mt: 3, textAlign: 'center' }}>
                Already have an account?{' '}
                <Link variant="subtitle2" to="/signin" component={RouterLink} color='secondary'>
                  Login
                </Link>
              </Typography>            
          </ContentStyle>
        </Container>    
      </ThemeProvider>
  );
}