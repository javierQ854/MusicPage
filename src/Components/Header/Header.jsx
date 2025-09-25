import { useState } from 'react';
import { TiThMenu } from "react-icons/ti";
const Header = () => {
  const [bandera, setBandera] = useState(false);
  return (
    <header id='header' className='bg-amber-950 z-50 fixed w-screen'>
      <div className="flex justify-between container mx-auto p-3">
        <h1 className="text-white lg:text-2xl">Melodia Musical</h1>
        <nav className="hidden pt-1 lg:block space-x-5 text-white">
          <a href="#baner">Inicio</a>
          <a href="#nosotros">Sobre nosotros</a>
          <a href="#cursos">Cursos</a>
          <a href="#testimonios">Testimonios</a>
          <a href="#contactos">Contacto</a>
        </nav>
        <button className='lg:hidden border border-white px-2 rounded cursor-pointer' onClick={() => setBandera(!bandera)}><TiThMenu color='#ffffff' /></button>
      </div>
      {bandera && (
        <nav className="lg:hidden flex text-white absolute w-full pb-3 gap-3 bg-amber-950 flex-col justify-center items-center">
          <a href="#baner" onClick={()=>setBandera(false)}>Inicio</a>
          <a href="#nosotros" onClick={()=>setBandera(false)}>Sobre nosotros</a>
          <a href="#cursos" onClick={()=>setBandera(false)}>Cursos</a>
          <a href="#testimonios" onClick={()=>setBandera(false)}>Testimonios</a>
          <a href="#contactos" onClick={()=>setBandera(false)}>Contacto</a>
        </nav>
      )}
    </header>
  );
};

export default Header;
