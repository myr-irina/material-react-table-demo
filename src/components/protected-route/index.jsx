import React, { useContext } from 'react';
import { Route, Navigate, useLocation, Outlet } from 'react-router-dom';

import { UserContext, UserProvider } from '../../services';

export default function ProtectedRoute() {
  const { token } = useContext(UserContext);
  console.log({ token });
  const location = useLocation();

  return token ? (
    <Outlet />
  ) : (
    <Navigate to='/signin' state={{ from: location }} replace />
  );
}
