import React from "react";
import banner from "../../../../assets/banner/banner3.jpg";
import CountUp from "react-countup";

const HelpStudents = () => {
  return (
    <div
      style={{
        background: `url(${banner})`,
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
      }}
      className="h-[70vh]"
    >
      <div className="wrapper">
        <div className="grid grid-cols-2 h-[50vh] w-full py-5">
          <div className="w-11/12">
            <h1 className="text-5xl font-bold text-secondary">
              {" "}
              We've helped our students to to conquer extra useful skills beside
              their study{" "}
            </h1>
            <p className="text-xl text-secondary">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
              officiis doloribus eveniet laudantium ea, incidunt veritatis
              accusamus perspiciatis odit veniam exercitationem aliquid nobis
              earum vitae facilis asperiores provident et quisquam reprehenderit
              tenetur ratione totam aspernatur magnam adipisci? Aliquid,
              officiis similique itaque eius perspiciatis doloremque id quam ex
              saepe, earum numquam?
            </p>
          </div>
          <div></div>
          <div></div>
          <div className="" >
            <h1 className="text-5xl font-bold text-secondary py-2">We have</h1>
            <div className="flex items-center gap-3">
              <div className="w-60 flex flex-col items-center justify-center h-60 text-secondary bg-primary/30 backdrop-blur-sm rounded-xl">
                <p className="text-5xl font-medium">
                  <CountUp start={0} end={2000} duration={2} />+
                </p>
                <p className="text-xl ">Students</p>
              </div>
              <div className="w-60 flex flex-col items-center justify-center h-60 text-secondary bg-primary/30 backdrop-blur-sm rounded-xl">
                <p className="text-5xl font-medium">
                  <CountUp start={0} end={200} duration={2} />+
                </p>
                <p className="text-xl">Instructors</p>
              </div>
              <div className="w-60 flex flex-col items-center justify-center h-60 text-secondary bg-primary/30 backdrop-blur-sm rounded-xl">
                <p className="text-5xl font-medium">
                  <CountUp start={0} end={20} duration={2} />+
                </p>
                <p className="text-xl">Courses</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpStudents;
