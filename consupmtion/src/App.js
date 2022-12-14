import './App.css';


import MainProfile from './Componenets/main-profile/MainProfile';

import React,{useEffect} from 'react';
import Navbar from './Componenets/Navbar/Navbar';
import Home from './Componenets/Home/Home';
import Footer from './Componenets/Footer/Footer';
import About from './Componenets/About/About';
import {Routes,Route} from 'react-router-dom'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Service from './Componenets/Service/Service';
import Contact from './Componenets/Contact/Contact';

import Login from './Componenets/Authentification/Login';
import Signup from './Componenets/Authentification/Signup'




function App() {
  useEffect(() => {
    AOS.init({ duration: 2000, once: true });
  }, []);
  return (
    <div className="App">

       <MainProfile/>

      <Navbar/> 
      <Routes>
        <Route path="/" element={<Home />}></Route>
       
    
      </Routes>
     
    
      <About data-aos="fade-up"/>
      <Service/>
      <Login/>
      <Contact/>
      <Footer/>


    </div>
  );
}

export default App;
