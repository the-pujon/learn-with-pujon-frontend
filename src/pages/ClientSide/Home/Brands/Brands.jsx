import React from "react";
import byjus from "../../../../assets/brands/Byjus.svg";
import coursera from "../../../../assets/brands/coursera.svg";
import freecodecamp from "../../../../assets/brands/freecodecamp.svg";
import udemy from "../../../../assets/brands/udemy.svg";

const Brands = () => {
  return (
    <div>
      <div className="wrapper">
        <div className="flex items-center gap-10 justify-center">
          <img src={byjus} alt="" className="w-72" />
          <img src={coursera} alt="" className="w-72" />
          <img src={freecodecamp} alt="" className="w-72" />
          <img src={udemy} alt="" className="w-72" />
        </div>
      </div>
    </div>
  );
};

export default Brands;
