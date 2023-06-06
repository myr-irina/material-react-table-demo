import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

export default function ProtectedRoute({ token, children, isLoggedIn }) {
  const location = useLocation();

  return token ? (
    children
  ) : (
    <Navigate to='/signin' state={{ from: location }} replace />
  );
}
