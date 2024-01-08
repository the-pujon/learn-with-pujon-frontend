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
      className="h-full"
    >
      <div className="wrapper ">
        <div className="grid grid-cols-1 sm:grid-cols-2 h-full w-full py-5">
          <div className="w-11/12">
            <h1 className="text-3xl sm:text-5xl font-bold text-secondary">
              We've helped our students to to conquer extra useful skills beside
              their study
            </h1>
            <p className="text-sm sm:text-xl text-secondary">
              In our commitment to holistic education, we've empowered students
              to conquer invaluable skills alongside their studies. From
              fostering creativity to developing critical thinking, our mission
              is to equip students with a diverse skill set that extends far
              beyond the confines of traditional academics.
            </p>
          </div>
          <div></div>
          <div></div>
          <div className="">
            <h1 className="text-5xl font-bold text-secondary py-2">We have</h1>
            <div className="flex flex-row justify-around items-center gap-3">
              <div className="w-32 h-32 sm:w-60 flex flex-col items-center justify-center sm:h-60 text-secondary bg-primary/30 backdrop-blur-sm rounded-xl">
                <p className="text-2xl sm:text-5xl font-medium">
                  <CountUp start={0} end={2000} duration={2} />+
                </p>
                <p className="text-xl ">Students</p>
              </div>
              <div className="w-32 h-32 sm:w-60 flex flex-col items-center justify-center sm:h-60 text-secondary bg-primary/30 backdrop-blur-sm rounded-xl">
                <p className="text-2xl sm:text-5xl font-medium">
                  <CountUp start={0} end={200} duration={2} />+
                </p>
                <p className="text-xl">Instructors</p>
              </div>
              <div className="w-32 h-32 sm:w-60 flex flex-col items-center justify-center sm:h-60 text-secondary bg-primary/30 backdrop-blur-sm rounded-xl">
                <p className="text-2xl sm:text-5xl font-medium">
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
