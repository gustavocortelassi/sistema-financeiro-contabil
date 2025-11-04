import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = () => {

  const token = localStorage.getItem('access_token');

  return token ? <Outlet /> : <Navigate to="/login" replace />;
};

export default ProtectedRoute;

// import React from 'react';
// import { Navigate, Outlet } from 'react-router-dom';

// const ProtectedRoute = () => {
//   // TESTE: Vamos sempre permitir o acesso
//   return <Outlet />;
// };

// export default ProtectedRoute;