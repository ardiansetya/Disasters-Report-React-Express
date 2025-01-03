import React from "react";
import Button from "./Button";

const FormContent = () => {
  return (
    <div className="flex justify-center items-center ">
      <form className="w-full max-w-5xl bg-white p-6">
        {/* Nama Pelapor */}
        <div className="flex gap-2 items-center">
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-gray-700 font-semibold mb-2">
              Nama Pelapor
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Masukkan nama Anda"
              className="w-full px-4 py-2 border border-blue-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-700"
            />
          </div>
          {/* Lokasi Kejadian */}
          <div className="mb-4  flex-grow">
            <label
              htmlFor="location"
              className="block text-gray-700 font-semibold mb-2">
              Lokasi Kejadian
            </label>
            <input
              type="text"
              id="location"
              name="location"
              placeholder="Masukkan lokasi bencana"
              className="w-full px-4 py-2 border border-blue-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-700"
            />
          </div>
        </div>

        {/* Jenis Bencana */}
        <div className="mb-4">
          <label
            htmlFor="disaster-type"
            className="block text-gray-700 font-semibold mb-2">
            Jenis Bencana
          </label>
          <select
            id="disaster-type"
            name="disaster-type"
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
            id="description"
            name="description"
            placeholder="Jelaskan situasi secara singkat"
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
            type="date"
            id="date"
            name="date"
            className="w-full px-4 py-2 border border-blue-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-700"
          />
        </div>

        {/* Tombol Submit */}
        <div className="text-center">
          <Button variant="primary" type="submit">
            Laporkan Bencana
          </Button>
        </div>
      </form>
    </div>
  );
};

export default FormContent;
