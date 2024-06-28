import './navbar.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Login() {
  const navigate = useNavigate();
  const [name, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState(false);
  const [output, setOutput] = useState('');

  async function handleSubmit() {
    if (password === confirmPassword) {
      const response = await axios.post('http://localhost:5000/SignUp', { name, email, password });
      if (response.data.success) {
        setError(false);
        setOutput('Signup successful');
        navigate('/Home'); // Replace with your homepage route
      } else {
        setError(true);
        setOutput('There was an error signing up!');
      }
    } else {
      setError(true);
      setOutput('Passwords do not match');
    }
  }

  function handleUserName(e) {
    setUserName(e.target.value);
  }

  function handleEmail(e) {
    setEmail(e.target.value);
  }

  function handlePassword(e) {
    setPassword(e.target.value);
  }

  function handleConfirmPassword(e) {
    setConfirmPassword(e.target.value);
  }

  return (
    <>
      <div className="navba">
        <h1>Travel</h1>
        <button style={{ backgroundColor: 'white' }} onClick={() => navigate('/SignIn')}>Sign In</button>
      </div>
      <div className="navbar">
        <div className="nav1">
          <h1>Register</h1>
          <div className="cndnt1">
            <h3>Username</h3>
            <input type="text" placeholder="Enter username" onChange={handleUserName} />
          </div>
          <div className="cndnt2">
            <h3>Email</h3>
            <input type="email" placeholder="Enter your email" onChange={handleEmail} />
          </div>
          <div className="cndnt3">
            <h3>Password</h3>
            <input type="password" placeholder="Enter your password" onChange={handlePassword} />
          </div>
          <div className="cndnt4">
            <h3>Confirm Password</h3>
            <input type="password" placeholder="Verify password" onChange={handleConfirmPassword} />
          </div>
          <div className="button">
            <button onClick={handleSubmit}>Sign Up</button>
          </div>
          <div>
            {output && <p>{output}</p>}
          </div>
          
        </div>
      </div>
    </>
  );
}

export default Login;
