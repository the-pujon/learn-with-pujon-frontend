import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer/Footer";

const Main = () => {
  return (
    <div className=' ' >
      <Navbar />
      <div className="min-h-[81vh]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Main;
