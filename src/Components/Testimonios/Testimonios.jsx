import { DatosTestimonios } from '../../Services/Data.js';
const Testimonios = () => {
  return (
    <section id="testimonios">
      <h2>Lo que dicen nuestros estudiantes</h2>
      {DatosTestimonios.map((datos) => (
        <div key={datos.id}>
          <p>{datos.descripcion}</p>
          <p>{datos.nombre}</p>
        </div>
      ))}
    </section>
  );
};

export default Testimonios;
