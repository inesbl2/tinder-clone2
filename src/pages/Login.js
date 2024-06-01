import React, { useState } from 'react';
import Nav from '../components/nav';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === 'user' && password === 'password') {
      // Rediriger l'utilisateur vers une autre page ici
    } else {
      setError('Invalid username or password');
    }
  };
  const handleClick = (path) => {
    window.location.href = `http://localhost:3000/${path}`;
  };

  return (
    <div className='background'>
      <nav>
        {Nav()}
      </nav>
      
      <h1 className="secondary-title">Welcome Back</h1>
      <div className='login-container'>
      <form onSubmit={handleSubmit}>
        <input 
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="input-field"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="input-field"
        />
        {error && <p className="error-message">{error}</p>}
        <button type="submit" className="sign-button" onClick={() => handleClick('match')}>Log in</button>
      </form>
      </div>
    </div>
  );
}

export default Login;
