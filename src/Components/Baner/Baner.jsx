const Baner = () => {
  return (
    <section id="baner" className="pt-5 lg:pt-14"  >
      <div className=" bg-[url(/musicafondo.png)] flex justify-center items-center bg-center bg-cover gap-5 h-70 lg:h-95 ">
        <div className="bg-black/50 lg:w-300 gap-5 py-3 lg:p-4  lg:rounded-xl  flex flex-col justify-center items-center">
          <h2 className="text-2xl lg:text-6xl text-center font-bold text-white">Descubre tu pasión por la música</h2>
          <p className="text-center lg:text-2xl text-white">
            Aprende a tocar el instrumento que siempre has soñado con los mejores
            instructores en un ambiente divertido y creativo.
          </p>
          <button className="cursor-pointer transition duration-300 lg:text-2xl hover:scale-105 bg-amber-950 text-white px-3 lg:px-2 py-1 lg:py-2 rounded">¡Inscribete Ahora!</button>
        </div>
      </div>
     
    </section>
  );
};

export default Baner;
