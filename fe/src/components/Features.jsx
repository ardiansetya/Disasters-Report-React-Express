
const Features = () => {
  return (
    <section id="features" className="bg-white py-12 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h3 className="text-3xl font-bold mb-6">Fitur Unggulan</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-blue-50 rounded-lg shadow">
            <h4 className="text-xl font-seibold mb-2">Pelaporan Cepat</h4>
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
  );
}

export default Features
