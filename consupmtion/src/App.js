import './App.css';
<<<<<<< HEAD
<<<<<<< HEAD

import MainProfile from './Componenets/main-profile/MainProfile';
=======
=======

>>>>>>> fa207933d4a8f1b9a06d9561c7bcdb3f8db0126a
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
<<<<<<< HEAD
=======
>>>>>>> afe9c6569616abfb81934a4c80df73ba293cd439
=======
>>>>>>> fa207933d4a8f1b9a06d9561c7bcdb3f8db0126a



function App() {
  useEffect(() => {
    AOS.init({ duration: 2000, once: true });
  }, []);
  return (
    <div className="App">
<<<<<<< HEAD
<<<<<<< HEAD
      Hello guys
      <MainProfile/>
=======
=======

>>>>>>> fa207933d4a8f1b9a06d9561c7bcdb3f8db0126a
 
      <Navbar/> 
      <Routes>
        <Route path="/" element={<Home />}></Route>
       
    
      </Routes>
     
    
      <About data-aos="fade-up"/>
      <Service/>
      <Login/>
      <Contact/>
      <Footer/>

<<<<<<< HEAD
>>>>>>> afe9c6569616abfb81934a4c80df73ba293cd439
=======
>>>>>>> fa207933d4a8f1b9a06d9561c7bcdb3f8db0126a
    </div>
  );
}

export default App;
