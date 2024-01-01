import React, {useEffect} from "react";
import Header from "../Header/Header";
import About from "../About/About";
import PopularCourses from "../PopularCourses/PopularCourses";
import PopularInstructors from "../PopularInstrucors/PopularInstructors";
import HelpStudents from "../HelpStudents/HelpStudents";
import Brands from "../Brands/Brands";

const Home = () => {
  return (
    <div>
      <Header />
      <About />
      <PopularCourses />
      <PopularInstructors />
      <HelpStudents />
      <Brands />
    </div>
  );
};

export default Home;
