const Baner = () => {
  return (
    <section id="Baner"  className=" bg-[url(/musicafondo.png)] flex justify-center items-center bg-center bg-cover gap-5 h-70 ">
      <div className="bg-black/50 gap-5 py-3  flex flex-col justify-center items-center">
        <h2 className="text-2xl text-center font-bold text-white">Descubre tu pasión por la música</h2>
        <p className="text-center text-white">
          Aprende a tocar el instrumento que siempre has soñado con los mejores
          instructores en un ambiente divertido y creativo.
        </p>
        <button className="cursor-pointer hover:scale-105 bg-amber-950 text-white px-3 py-1 rounded">¡Inscribete Ahora!</button>
      </div>
      
      
    </section>
  );
};

export default Baner;
