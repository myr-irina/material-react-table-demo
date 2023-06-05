import React, { useContext } from 'react';
import { Route, Navigate, useLocation, Outlet } from 'react-router-dom';
import { useAuth } from '../../services';
import { UserContext } from '../../services';

export default function ProtectedRoute({ token }) {
  const location = useLocation();

  return token ? (
    <Outlet />
  ) : (
    <Navigate to='/signin' state={{ from: location }} replace />
  );
}
