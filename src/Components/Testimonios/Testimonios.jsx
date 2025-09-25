import { DatosTestimonios } from '../../Services/Data.js';
import { HiMusicNote } from "react-icons/hi";
const Testimonios = () => {
  return (
    <section id="testimonios" data-aos="flip-left" >
      <div className='flex flex-col justify-center items-center px-5 gap-5 py-15'>
        <h2 className='text-amber-950 font-bold text-xl lg:text-3xl pb-5 text-center'>Lo que dicen nuestros estudiantes</h2>
        <div className='grid grid-cols-1 gap-5 lg:grid-cols-3'>
          {DatosTestimonios.map((datos) => (
            <div key={datos.id} className='border gap-5 py-5 flex flex-col justify-center items-center border-amber-950 rounded-xl px-5'>
              <em className='text-center'>"{datos.descripcion}"</em>
              <p className='text-amber-950 lg:text-xl font-bold flex justify-center items-center gap-3'><HiMusicNote/>{datos.nombre}</p>
            </div>
          ))}
        </div>

      </div>
      
    </section>
  );
};

export default Testimonios;
