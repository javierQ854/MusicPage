import { useState } from 'react';
const Header = () => {
  const [bandera, setBandera] = useState(false);
  return (
    <header>
      <div className="flex justify-between container mx-auto p-3">
        <h1 className="">Componente musical</h1>
        <button onClick={() => setBandera(!bandera)}>Menu</button>
      </div>
      {bandera && (
        <nav className="flex flex-col justify-center items-center">
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
