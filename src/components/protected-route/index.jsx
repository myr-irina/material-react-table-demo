import React, { useContext } from 'react';
import { Route, Navigate, useLocation, Outlet } from 'react-router-dom';

export default function ProtectedRoute() {
  const token = JSON.parse(localStorage.getItem('access_token'));
  const location = useLocation();

  return token ? (
    <Outlet />
  ) : (
    <Navigate to='/signin' state={{ from: location }} replace />
  );
}
