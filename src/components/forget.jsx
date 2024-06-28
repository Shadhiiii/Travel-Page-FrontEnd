import { useState } from 'react';
import './forget.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Forget() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [result, setResult] = useState('');
  const [error, setError] = useState(false);

  function handleSubmit() {
    if (newPassword === confirmPassword) {
      setError(false);
      axios.post('http://localhost:5000/Forget', {
        email,
        newPassword
      }).then(response => {
        console.log(response.data);
        if (response.data === 'email not found') {
          setResult('Email not found');
        } else {
          setResult('Password updated successfully');
          navigate('/SignIn');
        }
      }).catch(error => {
        console.error('There was an error updating the password!', error);
      });
    } else {
      setError(true);
      setResult('password not found');
    }
  }

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  function handleNewPasswordChange(e) {
    setNewPassword(e.target.value);
  }

  function handleConfirmPasswordChange(e) {
    setConfirmPassword(e.target.value);
  }

  return (
    <div className="for1">
        <div className="for3">
            <h3>Email</h3>
            <input type="text" placeholder="Enter email" onChange={handleEmailChange} />
            <h3>New Password</h3>
            <input type="password" placeholder="Enter new password" onChange={handleNewPasswordChange} />
            <h3>Confirm Password</h3>
            <input type="password" placeholder="Verify password" onChange={handleConfirmPasswordChange} />
            <div className="button">
                <button onClick={handleSubmit}>Submit</button>
            </div>
            {result && <p>{result}</p>}
        </div>
    </div>
  );
}

export default Forget;
