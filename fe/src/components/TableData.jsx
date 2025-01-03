import { useEffect, useState } from "react";
import axiosInstance from "../axios/AxiosInstance"; // Pastikan path ke axiosInstance sesuai
import Button from "./Button";

const TableData = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosInstance.get("/disasters"); // Ganti dengan endpoint yang sesuai
        setData(response.data); // Sesuaikan struktur data
      } catch (err) {
        console.log(err);
        setError("Failed to fetch data");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div className="text-red-600">{error}</div>;

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
        <thead className="bg-gray-100">
          <tr>
            <th className="py-2 px-4 text-left text-sm font-medium text-gray-600">
              #
            </th>
            <th className="py-2 px-4 text-left text-sm font-medium text-gray-600">
              Jenis Bencana
            </th>
            <th className="py-2 px-4 text-left text-sm font-medium text-gray-600">
              Lokasi
            </th>
            <th className="py-2 px-4 text-left text-sm font-medium text-gray-600">
              Tanggal Kejadian
            </th>
            <th className="py-2 px-4 text-left text-sm font-medium text-gray-600">
              Deskripsi
            </th>
            <th className="py-2 px-4 text-left text-sm font-medium text-gray-600">
              Aksi
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={item.id} className="border-b hover:bg-gray-50">
              <td className="py-2 px-4 text-sm text-gray-800">{index + 1}</td>
              <td className="py-2 px-4 text-sm text-gray-800">
                {item.disasterType}
              </td>
              <td className="py-2 px-4 text-sm text-gray-800">
                {item.location}
              </td>
              <td className="py-2 px-4 text-sm text-gray-800">
                {new Date(item.date).toLocaleDateString()}
              </td>
              <td className="py-2 px-4 text-sm text-gray-800">
                {item.description}
              </td>
              <td className="py-2 px-4 text-sm text-gray-800">
                <div className="flex gap-2">
                  <Button variant="secondary" type="button">
                    Edit
                  </Button>
                  <Button variant="danger" type="button">
                    Hapus
                  </Button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableData;
