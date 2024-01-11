import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Components/Footer/Footer";

const Main = () => {
  const pathName = useLocation().pathname;

  const noHeaderFooter = pathName === "/login" || pathName === "/signup";

  return (
    <div className=" ">
      {noHeaderFooter || <Navbar />}
      <div className="min-h-[81vh]">
        <Outlet />
      </div>
      {noHeaderFooter || <Footer />}
    </div>
  );
};

export default Main;
