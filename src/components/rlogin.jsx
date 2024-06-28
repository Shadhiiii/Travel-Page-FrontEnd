import './navbar.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Rlogin() {
  const navigate = useNavigate();
  const [name, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const [output, setOutput] = useState('');

  async function handleSubmit1() {
    try {
      const response = await axios.post('http://localhost:5000/SignIn', {name,email, password });
      console.log(response.data);

      if (response.data === 'email not found') {
        setError(true);
        setOutput('Email not found');
      } else if (response.data === 'password not found') {
        setError(true);
        setOutput('Password not found');
      } else {
        setError(false);
        setOutput('Login successful');
        navigate('/Home'); // Replace with your homepage route
      }
    } catch (error) {
      console.error('There was an error logging in!', error);
    }
  }
  function handleSubmit2(){
    navigate('/Forget')
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

  return (
    <>
      <div className="navba">
        <h1>Travel</h1>
        <button style={{ backgroundColor: 'white' }} onClick={() => navigate('/SignUp')}>Sign Up</button>
      </div>
      <div className="navbar">
        <div className="nav1">
          <h1>Login</h1>
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
          <div className="button">
            <button onClick={handleSubmit1}>Sign In</button>
            <button onClick={handleSubmit2}>Forget Password</button>
          </div>
          <div>
            {output && <p>{output}</p>}
          </div>
        </div>
      </div>
    </>
  );
}

export default Rlogin;
