import React from 'react';
import { Navigate, Outlet } from 'react-router';
import { useUser } from "../axios/userContext";


export const ProtectedRoute = () => {
  const { user } = useUser();

  return user ? <Outlet /> : <Navigate to="/login" replace />;
};