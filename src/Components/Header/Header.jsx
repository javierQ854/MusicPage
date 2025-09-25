import { useState } from 'react';
import { TiThMenu } from "react-icons/ti";
const Header = () => {
  const [bandera, setBandera] = useState(false);
  return (
    <header>
      <div className="flex justify-between bg-amber-950 container mx-auto p-3">
        <h1 className="text-white">Melodia Musical</h1>
        <nav className="hidden lg:block space-x-5 text-white">
          <a href="">Inicio</a>
          <a href="">Sobre nosotros</a>
          <a href="">Cursos</a>
          <a href="">Testimonios</a>
          <a href="">Contacto</a>
        </nav>
        <button className='lg:hidden border border-white px-2 rounded cursor-pointer' onClick={() => setBandera(!bandera)}><TiThMenu color='#ffffff' /></button>
      </div>
      {bandera && (
        <nav className="lg:hidden flex text-white absolute w-full pb-3 gap-3 bg-amber-950 flex-col justify-center items-center">
          <a href="">Inicio</a>
          <a href="">Sobre nosotros</a>
          <a href="">Cursos</a>
          <a href="">Testimonios</a>
          <a href="">Contacto</a>
        </nav>
      )}
    </header>
  );
};

export default Header;
