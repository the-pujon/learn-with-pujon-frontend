import React, {useEffect} from "react";
import Header from "../Header/Header";
import About from "../About/About";
import PopularCourses from "../PopularCourses/PopularCourses";
import PopularInstructors from "../PopularInstrucors/PopularInstructors";
import HelpStudents from "../HelpStudents/HelpStudents";
import Brands from "../Brands/Brands";

const Home = () => {

  useEffect(()=>{
    fetch(`http://localhost:5000/api/users/pujondas1234@gmail.com`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data)
      //setRole(data.role);
    })
  },[])
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
