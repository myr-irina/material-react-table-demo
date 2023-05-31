import { Box, Typography } from '@mui/material';
import React from 'react';

function ServerError() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Typography variant='h3' mb={4} gutterBottom>
        Внутренняя ошибка сервера
      </Typography>
      <Typography variant='body1' gutterBottom>
        Сайт сервиса Яндекс.Трекер временно недоступен.
      </Typography>
    </Box>
  );
}

export default ServerError;
