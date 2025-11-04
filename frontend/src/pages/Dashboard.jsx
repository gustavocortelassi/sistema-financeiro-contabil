// Em src/pages/Dashboard.jsx
import React, { useEffect } from 'react'; // 1. Importe useEffect
import { useNavigate } from 'react-router-dom';
import { fetchCurrentUser } from '../services/api'; // 2. Importe nossa função de teste

function Dashboard() {
  const navigate = useNavigate();

  // 3. Chame a função quando o componente montar (Teste da PROJ-08)
  useEffect(() => {
    console.log("Dashboard montado, buscando dados do usuário...");
    fetchCurrentUser();
  }, []); // O array vazio [] significa "só rode uma vez"

  // Lógica de Logout (PROJ-07)
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