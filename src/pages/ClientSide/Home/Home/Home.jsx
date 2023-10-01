import React from "react";
import Header from "../Header/Header";
import About from "../About/About";
import PopularCourses from "../PopularCourses/PopularCourses";
import PopularInstructors from "../PopularInstrucors/PopularInstructors";

const Home = () => {
  return (
    <div>
      <Header />
      <About />
      <PopularCourses />
      <PopularInstructors />
    </div>
  );
};

export default Home;
