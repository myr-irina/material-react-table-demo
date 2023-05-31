import { Box, Typography } from '@mui/material';
import React from 'react';

function ErrorMessage(message) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Typography variant='h5' mt={10} gutterBottom>
        {message}
      </Typography>
    </Box>
  );
}

export default ErrorMessage;
