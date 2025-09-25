import { useState } from 'react';
import './App.css';
import Header from './Components/Header';
import Baner from './Components/Baner';
import Nosotros from './Components/Nosotros';
import Cursos from './Components/Cursos';
import Testimonios from './Components/Testimonios';
import Contactos from './Components/Contactos';
import Footer from './Components/Footer';
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Baner />
      <Nosotros />
      <Cursos />
      <Testimonios />
      <Contactos />
      <Footer />
    </>
  );
}

export default App;
