const Contactos = () => {
  return (
    <section id="contactos" className="bg-amber-200/20 pt-10">
      <div className="flex pb-15 px-5 gap-5 flex-col justify-center items-center">
        <h2 className="text-amber-950 text-xl lg:text-3xl font-bold">Contáctanos</h2>
        <p className="text-center text-amber-950">
          ¿Listo para iniciar tu viaje musical? ¡Envíanos un mensaje o visítanos!
        </p>
        <form className="flex flex-col justify-center items-center gap-5 w-70 lg:w-150 ">
          <input className="focus:outline-none focus:border-amber-950 focus:ring-amber-950 focus:ring-2 text-amber-800 w-full border border-amber-800 px-2 py-1 lg:py-2 rounded" type="text" placeholder="Nombre" />
          <input className="focus:outline-none focus:border-amber-950 focus:ring-amber-950 focus:ring-2 text-amber-800 w-full border border-amber-800 px-2 py-1 lg:py-2 rounded" type="text" placeholder="Correo Electronico" />
          <textarea className=" focus:outline-none focus:border-amber-950 focus:ring-amber-950 focus:ring-2 text-amber-800 w-full border border-amber-800 px-2 py-1 lg:py-2 rounded" placeholder="Mensaje" />
          <button className="bg-amber-950 w-30 py-1 text-white rounded cursor-pointer hover:scale-105">Enviar</button>
        </form>
      </div>
      
    </section>
  );
};

export default Contactos;
