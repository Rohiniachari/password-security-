import React, { useState } from 'react';
import './App.css';

function App() {
  const [password, setPassword] = useState('');
  const [strength, setStrength] = useState(0);

  // Function to calculate strength
  const calculateStrength = (password) => {
    let strength = 0;
    if (password.length >= 8) strength++;
    if (/[0-9]/.test(password)) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/[a-z]/.test(password)) strength++;
    if (/[^a-zA-Z0-9]/.test(password)) strength++;

    return strength;
  };

  // Update password and strength
  const handlePasswordChange = (event) => {
    const passwordValue = event.target.value;
    setPassword(passwordValue);
    setStrength(calculateStrength(passwordValue));
  };

  // Strength bar colors and feedback messages
  const colors = ['red', 'orange', 'yellow', 'lightgreen', 'green'];
  const messages = ['Very Weak', 'Weak', 'Moderate', 'Strong', 'Very Strong'];

  return (
    <div className="container">
      <h1>Password Strength Checker</h1>
      <p>Start typing a password to see its strength!</p>
      <input
        type="password"
        value={password}
        onChange={handlePasswordChange}
        placeholder="Enter your password"
      />
      <div id="strength-bar" style={{ width: `${strength * 20}%`, backgroundColor: colors[strength - 1] || 'red' }}></div>
      <p id="feedback">{messages[strength - 1] || 'Enter a password'}</p>
    </div>
  );
}

export default App;
