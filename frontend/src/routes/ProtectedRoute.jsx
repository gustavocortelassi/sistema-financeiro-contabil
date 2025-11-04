// Em src/routes/ProtectedRoute.jsx
import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = () => {
  // O PROBLEMA PROVAVELMENTE ESTÁ AQUI:
  // Verifique se é 'access_token' e não 'acess_token' ou algo assim
  const token = localStorage.getItem('access_token'); 

  // 2. Se o token existir, permite o acesso (Outlet)
  //    Se não, redireciona para /login
  return token ? <Outlet /> : <Navigate to="/login" replace />;
};

export default ProtectedRoute;