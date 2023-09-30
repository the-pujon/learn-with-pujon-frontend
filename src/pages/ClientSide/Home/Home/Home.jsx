import React from "react";
import Header from "../Header/Header";
import About from "../About/About";
import PopularCourses from "../PopularCourses/PopularCourses";

const Home = () => {
  return (
    <div>
      <Header />
      <About />
      <PopularCourses />
    </div>
  );
};

export default Home;
