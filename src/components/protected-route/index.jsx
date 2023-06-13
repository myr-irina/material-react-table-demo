import { Typography } from '@mui/material';
import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

export default function ProtectedRoute({ token, children }) {
  const location = useLocation();

  if (!token) {
    <Typography>Идет загрузка...</Typography>;
  }

  return token ? (
    children
  ) : (
    <Navigate to='/signin' state={{ from: location }} replace />
  );
}
