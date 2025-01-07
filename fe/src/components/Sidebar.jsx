import Button from "./Button";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();

  const token = localStorage.getItem("authToken");

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    navigate("/login");
  };
  return (
    <aside className=" w-64 min-h-screen  bg-slate-500 text-white flex flex-col rounded-br-xl">
      <div className="p-10">
        <h1 className="sm:text-3xl font-bold underline">BencanAlert!</h1>
      </div>
      <nav className="flex flex-col gap-4 px-4">
        <a
          href="/"
          className="hover:bg-gray-700 px-4 py-2 rounded-md transition">
          Dashboard
        </a>
        <a
          href="/dashboard"
          className="hover:bg-gray-700 px-4 py-2 rounded-md transition">
          Laporan
        </a>
        <a
          href="#"
          className="hover:bg-gray-700 px-4 py-2 rounded-md transition">
          Settings
        </a>
        {token ? (
          <Button variant="danger" onClick={handleLogout}>
            Logout
          </Button>
        ) : (
          <Button type="button" onClick={handleLogout}>Login</Button>
        )}
      </nav>
    </aside>
  );
};

export default Sidebar;
