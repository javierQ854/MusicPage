import { DatosCurso } from '../../Services/Data.js';
const Cursos = () => {
  return (
    <section id="Cursos" className="px-5 flex flex-col gap-5 justify-center items-center">
      <h2 className='text-amber-950 font-semibold text-xl' >Nuestros Cursos</h2>
      {DatosCurso.map((datos) => (
        <div className='border rounded-xl py-5 gap-5 border-amber-950 px-3 w-full flex flex-col justify-center items-center' key={datos.id}>
          <h3 className='text-amber-950 font-semibold text-lg'>{datos.titulo}</h3>
          <p className='text-center'>{datos.descripcion}</p>
        </div>
      ))}
    </section>
  );
};

export default Cursos;
