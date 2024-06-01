import React, { useState } from 'react';
import Nav from '../components/nav';

function Signup() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [interests, setInterests] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password!== confirmPassword) {
      setError('Passwords do not match');
    } else {
      // Send signup request to server here
      console.log('Signup successful!');
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

      <div className="signup-container">
        <form onSubmit={handleSubmit}>
          <div className='fields'>
          <input
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="input-field"
          />
          <input
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="input-field"
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="input-field"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input-field"
          />
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="input-field"
          />
          <input
            type="number"
            placeholder="Age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            className="input-field"
          />
        

          <select
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            className="input-field"
          >
            <option value="">Your gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
          <select
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            className="input-field"
          >
            <option value="">The gender you are looking for</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
          </div>
          <div className='fields2'>
          <input
            type="text"
            placeholder="Description"
            value={interests}
            onChange={(e) => setInterests(e.target.value)}
            className="description"
          />
          </div>
          
          {error && <p className="error-message">{error}</p>}
          <button type="submit" className="sign-button" onClick={() => handleClick('match')}>Sign up</button>
        </form>
      </div>
    </div>
  );
}

export default Signup;