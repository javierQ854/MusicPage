import { DatosTestimonios } from '../../Services/Data.js';
const Testimonios = () => {
  return (
    <section id="testimonios">
      <div className='flex flex-col justify-center items-center px-5 gap-5 py-15'>
        <h2 className='text-amber-950 font-bold text-xl text-center'>Lo que dicen nuestros estudiantes</h2>
        {DatosTestimonios.map((datos) => (
          <div key={datos.id} className='border gap-5 py-5 flex flex-col justify-center items-center border-amber-950 rounded-xl px-5'>
            <p className='text-center'>{datos.descripcion}</p>
            <p className='text-amber-950 font-semibold'>{datos.nombre}</p>
          </div>
        ))}
      </div>
      
    </section>
  );
};

export default Testimonios;
