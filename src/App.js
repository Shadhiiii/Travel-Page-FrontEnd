import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nav from './components/navbar.jsx';
import Login from './components/login.jsx';
import Rlogin from './components/rlogin.jsx';
import Forget from './components/forget.jsx'
import Err from './components/error.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/SignUp" element={<Login />} />
        <Route path="/SignIn" element={<Rlogin />} />
        <Route path="/Home" element={<Nav />} />
        <Route path="/Forget" element={<Forget />} />
        <Route path="/*" element={<Err />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
