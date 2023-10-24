import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Components/Footer/Footer";

const Main = () => {
  const pathName = useLocation().pathname;
  console.log(import.meta)
  //console.log(process.env.REACT_APP_DB_PASSWORD);
  const dbPassword = import.meta.env.DB_PASSWORD;
console.log(dbPassword);



  const noHeaderFooter = pathName === "/auth";

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
