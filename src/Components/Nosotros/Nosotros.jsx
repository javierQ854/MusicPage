const Nosotros = ({BASE_URL}) => {
  return (
    <section id="nosotros" className="bg-amber-200/10 scroll-mt-10">
      <div className="flex flex-col lg:flex-row items-center gap-5 px-5 py-15 justify-center">
        <div className="lg:w-500">
          <img src={`${BASE_URL}Musica.jpg`} className="rounded lg:w-full" />
        </div>
        
        <div className=" flex flex-col justify-center items-center gap-5">
          <h2 className="text-amber-950 font-bold text-xl lg:text-3xl">Sobre Nuestra Escuela</h2>
          <p className="text-justify">
            En Melodía Musical, creemos que la música es un lenguaje universal que
            todos podemos aprender. Nuestra misión es fomentar la creatividad y la
            expresión a través de la instrucción musical de alta calidad. Contamos
            con profesores apasionados y un plan de estudios personalizado para
            cada estudiante. Ya seas un principiante o busques perfeccionar tus
            habilidades, te ofrecemos un espacio acogedor para crecer.
          </p>
        </div>

      </div>
    </section>
  );
};

export default Nosotros;
