import React from "react";
import Sidebar from "../Components/Sidebar/Sidebar";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="flex gap-4">
      <div className="w-2/12">
        <Sidebar />
      </div>
      <div className="w-full" >
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
