import './App.css';
import React,{useEffect} from 'react';
import Navbar from './Componenets/Navbar/Navbar';
import Home from './Componenets/Home/Home';
import Footer from './Componenets/Footer/Footer';
import About from './Componenets/About/About';
import Slider from './Componenets/Home/Slider';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Service from './Componenets/Service/Service';
import Contact from './Componenets/Contact/Contact';

function App() {
  useEffect(() => {
    AOS.init({ duration: 2000, once: true });
  }, []);
  return (
    <div className="App">
   
      <Navbar/> 
      
      <Home/>
      <About data-aos="fade-up"/>
      <Service/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
