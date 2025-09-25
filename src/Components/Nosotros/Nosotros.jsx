const Nosotros = () => {
  return (
    <section id="nosotros">
      <div className="flex flex-col items-center gap-5 px-5 py-15 justify-center">
        <img src="/Musica.jpg" className="rounded" />
        <h3 className="text-amber-950 font-semibold text-xl">Sobre Nuestra Escuela</h3>
        <p className="text-justify">
          En Melodía Musical, creemos que la música es un lenguaje universal que
          todos podemos aprender. Nuestra misión es fomentar la creatividad y la
          expresión a través de la instrucción musical de alta calidad. Contamos
          con profesores apasionados y un plan de estudios personalizado para
          cada estudiante. Ya seas un principiante o busques perfeccionar tus
          habilidades, te ofrecemos un espacio acogedor para crecer.
        </p>
      </div>
    </section>
  );
};

export default Nosotros;
