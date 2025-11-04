import React, { useEffect } from 'react'; 
import { useNavigate } from 'react-router-dom';
import { fetchCurrentUser } from '../services/api'; 

function Dashboard() {
  const navigate = useNavigate();

  useEffect(() => {
    console.log("Dashboard montado, buscando dados do usuário...");
    fetchCurrentUser();
  }, []); 

  const handleLogout = () => {
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
    navigate('/login');
  };

  return (
    <div>
      <h2>Dashboard (Página Protegida)</h2>
      <p>Você está logado!</p>
      <button onClick={handleLogout}>Sair (Logout)</button>
    </div>
  );
}

export default Dashboard;