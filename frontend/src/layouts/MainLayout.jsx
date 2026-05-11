import { useState } from "react";

import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

function MainLayout({ children }) {
  const [isOpen, setIsOpen] =
    useState(false);

  return (
    <div className="flex">
      <Sidebar
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />

      <div className="flex-1 min-h-screen bg-slate-950">
        <Navbar setIsOpen={setIsOpen} />

        <div className="p-6">
          {children}
        </div>
      </div>
    </div>
  );
}

export default MainLayout;