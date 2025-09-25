import { DatosCurso } from '../../Services/Data.js';
const Cursos = () => {
  return (
    <section id="Cursos" className="">
      <h2>Nuestros Cursos</h2>
      {DatosCurso.map((datos) => (
        <div key={datos.id}>
          <h3>{datos.titulo}</h3>
          <h3>{datos.descripcion}</h3>
        </div>
      ))}
    </section>
  );
};

export default Cursos;
