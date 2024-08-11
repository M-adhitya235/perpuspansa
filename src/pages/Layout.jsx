import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

const Layout = ({ children }) => {
  const [open, setOpen] = useState(true);

  return (
    <div className="flex">
      <Sidebar open={open} setOpen={setOpen} />
      <div className="flex-1 min-h-screen bg-[#ffdc64]">
        <Header open={open} />
        <div className="p-4">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;