import React from "react";
import { Fade } from "react-awesome-reveal";

const PageCover = ({ img, title, subtitle }) => {
  return (
    <Fade>
      <div
        className="hero h-96 text-white"
        style={{ background: `url(${img})`, backgroundSize: "cover" }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="backdrop-blur-sm">
            <h1
              style={{ textShadow: "0px 0px 70px black" }}
              className="mb-5 text-4xl md:text-8xl text-center uppercase text-[color:var(--primaryColor)]  font-bold"
            >
              {title}
            </h1>
            <p className="mb-5">{subtitle}</p>
          </div>
        </div>
      </div>
    </Fade>
  );
};

export default PageCover;
