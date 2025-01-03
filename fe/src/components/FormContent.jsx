import {   useState } from "react";
import axiosInstance from "../axios/AxiosInstance";
import Button from "./Button";

const FormContent = () => {
  const [formData, setFormData] = useState({
    reporterName: "",
    location: "",
    disasterType: "",
    description: "",
    date: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const formatedData = {
        ...formData,
        date: new Date(formData.date).toISOString(),
      }

      const response = await axiosInstance.post("/disasters", formatedData);
      const data = response.data;
      console.log(data)

      // Reset form after successful submission
      setFormData({
        reporterName: "",
        location: "",
        disasterType: "",
        description: "",
        date: "",
      });

      fetchData();

      console.log("Data Created successfully:", response.data);
    } catch (err) {
      console.error("Error:", err.response?.data?.message || err.message);
      setError(
        err.response?.data?.message ||
          "Failed to report disaster. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  const fetchData = async () => {
    try {
      const response = await axiosInstance.get("/disasters"); // Ganti dengan endpoint yang sesuai
      setFormData(response.data); // Sesuaikan struktur data
    } catch (err) {
      console.log(err);
      setError("Failed to fetch data");
    } finally {
      setLoading(false);
    }
  };


  return (
    <div className="flex justify-center items-center">
      <form onSubmit={handleSubmit} className="w-full max-w-5xl bg-white p-6">
        {/* Nama Pelapor */}
        <div className="flex gap-2 items-center">
          <div className="mb-4">
            <label
              htmlFor="reporterName"
              className="block text-gray-700 font-semibold mb-2">
              Nama Pelapor
            </label>
            <input
              onChange={handleChange}
              type="text"
              id="reporterName"
              name="reporterName"
              placeholder="Masukkan nama Anda"
              value={formData.reporterName}
              className="w-full px-4 py-2 border border-blue-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-700"
            />
          </div>

          {/* Lokasi Kejadian */}
          <div className="mb-4 flex-grow">
            <label
              htmlFor="location"
              className="block text-gray-700 font-semibold mb-2">
              Lokasi Kejadian
            </label>
            <input
              onChange={handleChange}
              type="text"
              id="location"
              name="location"
              placeholder="Masukkan lokasi bencana"
              value={formData.location}
              className="w-full px-4 py-2 border border-blue-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-700"
            />
          </div>
        </div>

        {/* Jenis Bencana */}
        <div className="mb-4">
          <label
            htmlFor="disasterType"
            className="block text-gray-700 font-semibold mb-2">
            Jenis Bencana
          </label>
          <select
            onChange={handleChange}
            id="disasterType"
            name="disasterType"
            value={formData.disasterType}
            className="w-full px-4 py-2 border border-blue-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-700">
            <option value="">Pilih jenis bencana</option>
            <option value="banjir">Banjir</option>
            <option value="gempa">Gempa Bumi</option>
            <option value="kebakaran">Kebakaran</option>
            <option value="tanah-longsor">Tanah Longsor</option>
          </select>
        </div>

        {/* Deskripsi */}
        <div className="mb-4">
          <label
            htmlFor="description"
            className="block text-gray-700 font-semibold mb-2">
            Deskripsi Kejadian
          </label>
          <textarea
            onChange={handleChange}
            id="description"
            name="description"
            placeholder="Jelaskan situasi secara singkat"
            value={formData.description}
            className="w-full px-4 py-2 border border-blue-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-700"
            rows="4"></textarea>
        </div>

        {/* Tanggal Kejadian */}
        <div className="mb-4">
          <label
            htmlFor="date"
            className="block text-gray-700 font-semibold mb-2">
            Tanggal Kejadian
          </label>
          <input
            onChange={handleChange}
            type="date"
            id="date"
            name="date"
            value={formData.date}
            className="w-full px-4 py-2 border border-blue-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-700"
          />
        </div>

        {/* Tombol Submit */}
        <div className="text-center">
          <Button variant="primary" type="submit" disabled={loading}>
            {loading ? "Sedang Mengirim..." : "Laporkan Bencana"}
          </Button>
        </div>

        {/* Menampilkan error jika ada */}
        {error && <p className="text-red-600 text-center mt-4">{error}</p>}
      </form>
    </div>
  );
};

export default FormContent;
