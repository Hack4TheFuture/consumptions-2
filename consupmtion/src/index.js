import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import {Routes,Route} from 'react-router-dom'
import Login from './Componenets/Authentification/Login';
import Signup from './Componenets/Authentification/Signup'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
       <Router>
       <Routes>
        <Route path="/" element={<App />}></Route>
        <Route path="/Login" element={<Login />} ></Route>
        <Route path="/Signup" element={<Signup />}></Route>
    
      </Routes>
   
    </Router>
  </React.StrictMode>
);


