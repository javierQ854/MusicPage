const Contactos = () => {
  return (
    <section id="contacto">
      <div className="flex pb-15 px-5 gap-5 flex-col justify-center items-center">
        <h2 className="text-amber-950 text-xl font-bold">Contáctanos</h2>
        <p className="text-center">
          ¿Listo para iniciar tu viaje musical? ¡Envíanos un mensaje o visítanos!
        </p>
        <form className="flex flex-col justify-center items-center gap-5 w-70">
          <input className=" text-amber-800 w-full border border-amber-800 px-2 py-1 rounded" type="text" placeholder="Nombre" />
          <input className="text-amber-800 w-full border border-amber-800 px-2 py-1 rounded" type="text" placeholder="Correo Electronico" />
          <textarea className="text-amber-800 w-full border border-amber-800 px-2 py-1 rounded" placeholder="Mensaje" />
          <button className="bg-amber-950 w-30 py-1 text-white rounded">Enviar</button>
        </form>
      </div>
      
    </section>
  );
};

export default Contactos;
