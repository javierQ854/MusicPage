import { DatosCurso } from '../../Services/Data.js';
const Cursos = () => {
  return (
    <section id="cursos" className='scroll-mt-10' >
      <div className="px-5 flex flex-col gap-5 pt-10 justify-center items-center">
      <h2 className='text-amber-950 font-bold lg:text-3xl text-xl' >Nuestros Cursos</h2>
        <div className='grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-5'>
          {DatosCurso.map((datos) => (
            <div className='hover:scale-105 transition duration-300  py-5 gap-5 shadow-sm shadow-amber-950 rounded px-3 w-full flex flex-col justify-center items-center' key={datos.id}>
              <h3 className='text-amber-950 font-semibold text-lg'>{datos.titulo}</h3>
              <img className='rounded lg:w-50 lg:h-50' src={datos.imagen} alt={datos.titulo} />
              <p className='text-center lg:h-20'>{datos.descripcion}</p>
            </div>
          ))}
        </div>
      </div>

      
    </section>
  );
};

export default Cursos;
