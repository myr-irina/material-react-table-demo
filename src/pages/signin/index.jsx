import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { signin } from '../../utils/auth';
import { UserContext } from '../../services';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../../services';
import { BASE_URL } from '../../utils/constants';

const theme = createTheme();

export default function SignIn() {
  const { token, login, logout } = useAuth();

  const navigate = useNavigate();

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   const data = new FormData(event.currentTarget);
  //   const newData = {
  //     username: data.get('username'),
  //     password: data.get('password'),
  //   };

  //   const { username, password } = newData;

  //   try {
  //     signin({ username, password }).then((res) => {
  //       if (res.access_token) {
  //         localStorage.setItem(
  //           'access_token',
  //           JSON.stringify(res.access_token)
  //         );
  //         const token = res.access_token;
  //         console.log({ token });
  //         setAuth(token);
  //       }
  //     });
  //   } catch (error) {
  //     navigate('/signin', {
  //       state: { message: 'Failed to submit form' },
  //     });
  //   }
  // };

  const submitLogin = async ({ username, password }) => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: JSON.stringify(
        `grant_type=&username=${username}&password=${password}&client_id=&client_secret=`
      ),
    };

    const response = await fetch(`${BASE_URL}/api/v1/token`, requestOptions);
    const data = await response.json();

    if (!response.ok) {
      console.log('err');
    } else {
      const { access_token, token_type } = data;
      localStorage.setItem('access_token', access_token);
      login(access_token);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);

    const newData = {
      username: data.get('username'),
      password: data.get('password'),
    };

    const { username, password } = newData;
    submitLogin({ username, password });
    navigate('/');
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component='main' maxWidth='xs'>
        <CssBaseline />
        <Box
          sx={{
            marginTop: 16,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component='h1' variant='h5'>
            Sign in
          </Typography>
          <Box
            component='form'
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin='normal'
              required
              fullWidth
              id='username'
              label='Email Address'
              name='username'
              autoComplete='email'
              autoFocus
            />
            <TextField
              margin='normal'
              required
              fullWidth
              name='password'
              label='Password'
              type='password'
              id='password'
              autoComplete='current-password'
            />

            <Button
              type='submit'
              fullWidth
              variant='contained'
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
