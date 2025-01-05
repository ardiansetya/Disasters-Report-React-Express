
const Hero = () => {
  return (
    <section className="flex flex-1 flex-col justify-center items-center text-center p-6">
      <h2 className="text-4xl md:text-6xl text-white font-bold mb-4">
        Bersama Kita Selamatkan Nyawa
      </h2>
      <p className="text-lg md:text-xl text-white mb-6">
        Laporkan dan tanggapi bencana alam dengan cepat dan efisien.
      </p>
      <a
        href="/dashboard"
        className="bg-white text-blue-500 font-semibold py-3 px-6 rounded-lg shadow-lg hover:bg-gray-100">
        Mulai Sekarang
      </a>
    </section>
  );
}

export default Hero
