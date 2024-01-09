import React from "react";

import "./Banner.scss";
import { Fade } from "react-awesome-reveal";
import { Link } from 'react-router-dom';


const Banner = ({ image, title }) => {
  return (
    <div>
      <div
        className="  banner   space-y-8 "
        style={{
          backgroundImage: `url(${image}), linear-gradient(90deg, rgba(33, 53, 85,1) 30%, rgba(0,212,255,0) 100%)`,
        }}
      >
        <div className="wrapper min-h-screen flex flex-col gap-4 items-center sm:items-start justify-center ">
          <div className="  text-secondary uppercase  ">
            <Fade
              delay={0}
              cascade
              duration={2000}
              damping={1e-1}
              className=" text-4xl leading-tight md:text-6xl text-center sm:text-start text-white font-bold flex flex-col"
            >
              <span>WELCOME To</span>
              <span>SKILLS VOYAGE</span>
            </Fade>
          </div>
          <div className="  text-secondary   ">
            <Fade
              delay={0}
              cascade
              duration={2000}
              damping={1e-1}
              className=" text-2xl leading-tight md:text-2xl text-center sm:text-start text-secondary font-medium flex flex-col"
            >
              <span>'Lean what your heart says,</span>
              <span> learn from your heart'</span>
            </Fade>
          </div>
          <Link to={'/courses'} className="border-4 text-xl border-secondary relative border-double p-[1.25rem_2rem] w-fit text-secondary hover:shadow-[0px_0px_15px_1px_rgba(255,255,255,1)] transition-all duration-200" >Select Courses </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
