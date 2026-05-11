import { Link } from "react-router-dom";

function Sidebar({ isOpen, setIsOpen }) {
  return (
    <>
      <div
        className={`fixed md:static top-0 left-0 z-50 h-screen w-64 bg-slate-900 p-5 transform transition-transform duration-300 ${
          isOpen
            ? "translate-x-0"
            : "-translate-x-full md:translate-x-0"
        }`}
      >
        <h1 className="text-2xl font-bold text-blue-500 mb-10">
          Task Manager
        </h1>

        <div className="flex flex-col gap-4 text-lg">
          <Link
            to="/dashboard"
            onClick={() => setIsOpen(false)}
          >
            Dashboard
          </Link>

          <Link
            to="/projects"
            onClick={() => setIsOpen(false)}
          >
            Projects
          </Link>

          <Link
            to="/tasks"
            onClick={() => setIsOpen(false)}
          >
            Tasks
          </Link>
        </div>
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}

export default Sidebar;