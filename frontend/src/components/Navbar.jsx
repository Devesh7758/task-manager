import { useNavigate } from "react-router-dom";

function Navbar({ setIsOpen }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("userInfo");

    navigate("/");
  };

  return (
    <div className="h-16 bg-slate-800 flex items-center justify-between px-6">
      <button
        onClick={() => setIsOpen(true)}
        className="md:hidden text-2xl"
      >
        ☰
      </button>

      <h2 className="text-xl font-semibold">
        Welcome
      </h2>

      <button
        onClick={handleLogout}
        className="bg-red-500 px-4 py-2 rounded"
      >
        Logout
      </button>
    </div>
  );
}

export default Navbar;