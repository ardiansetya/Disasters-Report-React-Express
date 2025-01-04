import { useEffect } from "react";
import Button from "./Button";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../redux/CreateSlice";

const TableData = () => {
  const dispatch = useDispatch();
  const {data} = useSelector((state) => state.user)

  console.log(data)
  
  // Mengambil data saat komponen dimuat
  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);
  
  // if (loading) {
  //   return <div>Loading...</div>;
  // }

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
        <thead className="bg-gray-100">
          <tr>
            <th className="py-2 px-4 text-left text-sm font-medium text-gray-600">
              #
            </th>
            <th className="py-2 px-4 text-left text-sm font-medium text-gray-600">
              Nama Pelapor
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
                {item.reporterName}
              </td>
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
                  <Button
                    variant="secondary"
                    type="button"
                    onClick={() => handleEdit(item)}>
                    Edit
                  </Button>
                  <Button
                    variant="danger"
                    type="button"
                    onClick={() => handleDelete(item.id)}>
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

  // Placeholder functions untuk Edit dan Hapus
  function handleEdit(item) {
    console.log("Edit item:", item);
    // Tambahkan logika untuk edit di sini
  }

  function handleDelete(id) {
    console.log("Hapus item dengan ID:", id);
    // Tambahkan logika untuk hapus di sini
  }
};

export default TableData;
