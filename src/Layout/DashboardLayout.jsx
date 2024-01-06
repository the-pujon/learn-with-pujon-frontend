import React from "react";
import Sidebar from "../Components/Sidebar/Sidebar";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div className="flex gap-4">
      <div className="md:w-2/12">
        <Sidebar />
      </div>
      <div className="w-full max-h-screen md:max-h-full overflow-auto" >
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
