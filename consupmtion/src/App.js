import './App.css';
<<<<<<< HEAD
import Prof from './components/Pro/Prof';
=======
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
<<<<<<< HEAD
import Login from './Componenets/Authentification/Login';
import Signup from './Componenets/Authentification/Signup'
=======
>>>>>>> afe9c6569616abfb81934a4c80df73ba293cd439


>>>>>>> 94b88114d4d14f86ea0a84a9b3b4ad82df1e5062
function App() {
  useEffect(() => {
    AOS.init({ duration: 2000, once: true });
  }, []);
  return (
    <div className="App">
<<<<<<< HEAD
      Hello guys
      <Prof/>
=======
 
      <Navbar/> 
      <Routes>
        <Route path="/" element={<Home />}></Route>
       
    
      </Routes>
     
    
      <About data-aos="fade-up"/>
      <Service/>
      <Login/>
      <Contact/>
      <Footer/>

>>>>>>> afe9c6569616abfb81934a4c80df73ba293cd439
    </div>
  );
}

export default App;
