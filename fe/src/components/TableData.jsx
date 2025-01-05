import { useEffect } from "react";
import Button from "./Button";
import { useDispatch, useSelector } from "react-redux";
import { fetchData, deleteData, editData } from "../redux/CreateSlice";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

const TableData = () => {
  const dispatch = useDispatch();
  const { data, loading } = useSelector((state) => state.user);

  // Mengambil data saat komponen dimuat
  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

 const handleModalEdit = async (id, item) => {
   console.log("Item data:", item);

   const { value: formValues } = await MySwal.fire({
     title: `Edit Data: ${item.reporterName}`,
     html: `
      <input id="swal-input-reporterName" class="swal2-input" placeholder="Nama Pelapor" value="${
        item.reporterName || ""
      }">
      <input id="swal-input-disasterType" class="swal2-input" placeholder="Jenis Bencana" value="${
        item.disasterType || ""
      }">
      <input id="swal-input-location" class="swal2-input" placeholder="Lokasi" value="${
        item.location || ""
      }">
      <input id="swal-input-date" type="date" class="swal2-input" placeholder="Tanggal Kejadian" value="${
        item.date ? new Date(item.date).toISOString().split("T")[0] : ""
      }">
      <textarea id="swal-input-description" class="swal2-textarea" placeholder="Deskripsi">${
        item.description || ""
      }</textarea>
    `,
     focusConfirm: false,
     preConfirm: () => {
       const reporterName = document
         .getElementById("swal-input-reporterName")
         .value.trim();
       const disasterType = document
         .getElementById("swal-input-disasterType")
         .value.trim();
       const location = document
         .getElementById("swal-input-location")
         .value.trim();
       const date = document.getElementById("swal-input-date").value;
       const description = document
         .getElementById("swal-input-description")
         .value.trim();

       if (
         !reporterName ||
         !disasterType ||
         !location ||
         !date ||
         !description
       ) {
         MySwal.showValidationMessage("Semua field harus diisi!");
         return null;
       }

       return { reporterName, disasterType, location, date, description };
     },
   });

   console.log("Form values:", formValues);

   if (formValues) {
     try {
       await dispatch(editData({ id, formData: formValues })).unwrap();
       Swal.fire("Berhasil!", "Data berhasil diperbarui.", "success");
     } catch (error) {
       Swal.fire("Gagal!", error.message || "Terjadi kesalahan.", "error");
     }
   }
 };


  const handleDelete = async (id) => {
    const result = await Swal.fire({
      title: "Apakah Anda yakin?",
      text: "Data yang dihapus tidak dapat dikembalikan!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Ya, hapus!",
    });

    if (result.isConfirmed) {
      try {
        await dispatch(deleteData(id)).unwrap();
        Swal.fire("Berhasil!", "Data berhasil dihapus.", "success");
      } catch (error) {
        Swal.fire(
          "Gagal!",
          error.message || "Terjadi kesalahan saat menghapus data.",
          "error"
        );
      }
    }
  };

  if (loading) {
    return <div className="text-center">Memuat data...</div>;
  }

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
                    onClick={() => handleModalEdit(item.id, item)}>
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
};

export default TableData;
