import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm, Controller } from 'react-hook-form';

import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { useAuth } from '../../contexts/auth-provider';
import { BASE_URL } from '../../utils/constants';

const theme = createTheme();

export default function SignIn() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const { control, handleSubmit } = useForm({
    defaultValues: {
      username: '',
      password: '',
    },
  });

  const submitLogin = async ({ username, password }) => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: JSON.stringify(
        `grant_type=&username=${username}&password=${password}&client_id=&client_secret=`
      ),
    };

    try {
      const response = await fetch(`${BASE_URL}/api/v1/token`, requestOptions);
      const data = await response.json();
      const { access_token } = data;
      login(access_token);
      navigate('/');
    } catch (err) {
      console.log('login error');
    }
  };

  const onSubmit = (data) => {
    const { username, password } = data;
    submitLogin({ username, password });
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const data = new FormData(e.currentTarget);

  //   const newData = {
  //     username: data.get('username'),
  //     password: data.get('password'),
  //   };

  //   const { username, password } = newData;
  //   submitLogin({ username, password });
  // };

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
            onSubmit={handleSubmit(onSubmit)}
            noValidate
            sx={{ mt: 1 }}
          >
            <Controller
              name='username'
              control={control}
              render={({ field }) => (
                <TextField fullWidth margin='normal' {...field} />
              )}
            />
            <Controller
              name='password'
              control={control}
              render={({ field }) => (
                <TextField
                  fullWidth
                  margin='normal'
                  type='password'
                  {...field}
                />
              )}
            />
            {/* <TextField
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
            /> */}

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
