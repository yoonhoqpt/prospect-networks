import { Link as RouterLink } from 'react-router-dom';
// @mui
import { styled } from '@mui/material/styles';
import { ThemeProvider } from '@emotion/react';
import { Link, Container, Typography, CssBaseline } from '@mui/material';

// sections
import { RegisterForm } from '../auth/register';
import AuthSocial from '../auth/AuthSocial';
import thetheme from '../reversed-theme';

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

// ----------------------------------------------------------------------

export default function Register() {

  return (    
    <ThemeProvider theme={thetheme}>
      <CssBaseline />
        <Container>
          <ContentStyle>
            <Typography variant="h4" gutterBottom color='secondary'>
              Join our community.
            </Typography>

            <Typography sx={{ color: 'secondary', mb: 5 }}>Free forever. No credit card needed.</Typography>

            <AuthSocial />

            <RegisterForm />

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