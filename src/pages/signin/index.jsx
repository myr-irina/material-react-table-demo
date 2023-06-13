import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import LoadingButton from '@mui/lab/LoadingButton';

import { useAuth } from '../../contexts/auth-provider';
import { userSignin } from '../../utils/auth';

const validationSchema = yup
  .object({
    username: yup
      .string()
      .trim()
      .email('Введите верный формат email')
      .required('Пожалуйста, заполните поле Email'),
    password: yup.string().trim().required('Пожалуйста, заполните поле Пароль'),
  })
  .required();

const theme = createTheme();

export default function SignIn() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const {
    control,
    handleSubmit,
    formState: { isValid, errors, isSubmitSuccessful, isSubmitting },
    reset,
    clearErrors,
  } = useForm({
    defaultValues: {
      username: '',
      password: '',
    },
    resolver: yupResolver(validationSchema),
    mode: 'onBlur',
  });

  const onSubmit = async (data) => {
    const { username, password } = data;
    try {
      const response = await userSignin({ username, password });
      const data = await response.json();
      const { access_token } = data;
      login(access_token);
      navigate('/employees-plan');
    } catch (err) {
      console.log('login error');
    }
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful, reset]);

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
              render={({
                field: { ...field },
                fieldState: { invalid, error },
              }) => (
                <TextField
                  label='Email'
                  name='username'
                  autoComplete='off'
                  autoFocus
                  fullWidth
                  margin='normal'
                  error={!!errors?.username}
                  helperText={invalid ? error.message : ''}
                  value={field.value}
                  {...field}
                />
              )}
            />

            <Controller
              name='password'
              control={control}
              render={({ field, fieldState: { invalid, error } }) => (
                <TextField
                  label='Пароль'
                  name='password'
                  fullWidth
                  margin='normal'
                  type='password'
                  autoComplete='off'
                  error={!!errors?.password}
                  helperText={invalid ? error.message : ''}
                  value={field.value}
                  {...field}
                />
              )}
            />
            {isSubmitting ? (
              <LoadingButton
                loading={isSubmitting}
                fullWidth
                variant='contained'
                sx={{ mt: 3, mb: 2 }}
                disabled={!isValid}
              >
                Sign In
              </LoadingButton>
            ) : (
              <Button
                type='submit'
                fullWidth
                variant='contained'
                sx={{ mt: 3, mb: 2 }}
                disabled={!isValid}
              >
                Sign In
              </Button>
            )}
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
