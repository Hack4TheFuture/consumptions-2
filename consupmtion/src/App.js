import './App.css';
import Navbar from './Componenets/Navbar/Navbar';
import Home from './Componenets/Home/Home';
import Footer from './Componenets/Footer/Footer';
import About from './Componenets/About/About';

function App() {
  return (
    <div className="App">
      <Navbar/> 
      <Home/>
      <About/>
    <Footer/>
    </div>
  );
}

export default App;
