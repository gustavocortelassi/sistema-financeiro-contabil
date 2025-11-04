import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; 

function Login() {
  // states para guardar o usuario e senha
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  // function chamada ao enviar o formulario
  const handleSubmit = async (e) => {
    e.preventDefault(); // impede o recarregamento da página
    setError(null); // limpa erros antigos

    try {
      const response = await axios.post('http://127.0.0.1:8000/api/token/', {
        username: username,
        password: password,
      });

      const { access, refresh } = response.data;

      localStorage.setItem('access_token', access);
      localStorage.setItem('refresh_token', refresh);

      console.log('Login com sucesso!', response.data);
  
      navigate('/dashboard');

    } catch (err) {
      console.error('Erro no login:', err);
      setError('Usuário ou senha inválidos.');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Usuário:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Senha:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Entrar</button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
}

export default Login;