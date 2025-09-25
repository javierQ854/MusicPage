import {useEffect } from 'react';
import './App.css';
import Header from './Components/Header';
import Baner from './Components/Baner';
import Nosotros from './Components/Nosotros';
import Cursos from './Components/Cursos';
import Testimonios from './Components/Testimonios';
import Contactos from './Components/Contactos';
import Footer from './Components/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
function App() {
  const URL = import.meta.env.BASE_URL;
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: false,     
    });
    AOS.refresh(); 
  }, []); 
  return (
    <>
      <Header />
      <Baner />
      <Nosotros BASE_URL={URL} />
      <Cursos BASE_URL={URL} />
      <Testimonios />
      <Contactos />
      <Footer />
    </>
  );
}

export default App;
