// material
import { Stack, Button, Divider, Typography, Box } from '@mui/material';
// component
import {useEffect, useState, useContext } from 'react';
import jwt_decode from 'jwt-decode';
import {useNavigate } from 'react-router-dom';
import {AuthContext} from '../context/authContext';

// ----------------------------------------------------------------------

export default function AuthSocial() {
  const context = useContext(AuthContext);
  const [user, setUser] = useState({});
  let navigate = useNavigate();
  // google SSO

  function handleCallbackResponse(response) {
    console.log("Encoded JWT ID token: " + response.credential);    
    // decode the given JWT ID token from Google, then store it in the userObject object
    var userObject = jwt_decode(response.credential);
    console.log(userObject);
    setUser(userObject);
    context.login(response.credential);
    navigate('/');
  }
  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id: "1061673576512-gnkunvdghpaqjjqc0ej5vj6lvoihdi52.apps.googleusercontent.com",
      callback: handleCallbackResponse
    });

    google.accounts.id.renderButton(
      document.getElementById("signInDiv"),
      {theme: "filled_blue", size: "large", width: "350", text: "continue_with"}
    );
  }, []);
  return (
    <>
      <Stack direction="row" spacing={2} justifyContent='center'>      
        <div id="signInDiv"></div>            
      </Stack>

      <Divider sx={{ my: 3 }}>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          OR
        </Typography>
      </Divider>
    </>
  );
}