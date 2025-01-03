
const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-green-500 flex flex-col">

      <header className="flex justify-between items-center p-6">
        <h1 className="text-white text-3xl font-bold">BencanaAlert</h1>
      </header>


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

      <section id="features" className="bg-white py-12 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-6">Fitur Unggulan</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-blue-50 rounded-lg shadow">
              <h4 className="text-xl font-semibold mb-2">Pelaporan Cepat</h4>
              <p>Laporkan bencana dengan beberapa klik saja.</p>
            </div>
            <div className="p-6 bg-blue-50 rounded-lg shadow">
              <h4 className="text-xl font-semibold mb-2">Informasi Akurat</h4>
              <p>Dapatkan data real-time dari berbagai sumber terpercaya.</p>
            </div>
            <div className="p-6 bg-blue-50 rounded-lg shadow">
              <h4 className="text-xl font-semibold mb-2">Peringatan Dini</h4>
              <p>Notifikasi peringatan dini untuk tindakan yang lebih cepat.</p>
            </div>
          </div>
        </div>
      </section>


      <footer className="bg-gray-500 text-white text-center py-4">
        <p className="text-sm">
          &copy; 2025 BencanaAlert. All right reserved.
        </p>
      </footer>
    </div>
  );
};

export default LandingPage;
