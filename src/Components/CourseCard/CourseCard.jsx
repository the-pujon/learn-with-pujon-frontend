import React from "react";
import { Fade } from "react-awesome-reveal";

const CourseCard = (card) => {
  const {
    className,
    image,
    instructor,
    instrument,
    price,
    seatsAvailable,
    totalStudents,
  } = card.card;

  return (
    <div>
      {/*<Fade duration={2000}>
        <div
          className={`card card-compact  w-80 md:w-[23rem] bg-base-100 shadow-xl rounded-none ${
            seatsAvailable === 0 && "border-[3px] border-red-600"
          }`}
        >
          <figure className="h-56">
            <img src={image} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Name: {className}</h2>
            <p>Instrument: {instrument}</p>
            <p>Instructor: {instructor}</p>
            <p>Students: {totalStudents}</p>
            <p>Available Seats: {seatsAvailable}</p>
            <p>Price: {price}</p>
            <div className="card-actions justify-end">
              {role === "student" && (
              <button
                //  disabled={seatsAvailable === 0}
                //  onClick={() => handleSelectedClass(card)}
                className="btn btn-outline disabled:bg-gray-300  hover:bg-[color:var(--hoverColor2)] border-2 border-black rounded-none"
              >
                Select Class
              </button>
              )}
            </div>
          </div>
        </div>
      </Fade>*/}
      <div className=" ">
        <div className=" relative w-[23rem] bg-secondary rounded   shadow-lg  ">
          <p className="absolute top-4 right-4 font-semibold px-2 py-1 text-primary bg-secondary rounded-full shadow-sm">
            ${price}
          </p>
          <div className=" h-2/4 sm:h-64 overflow-hidden">
            <img
              className="w-full rounded-t"
              src={image}
              alt="Photo by aldi sigun on Unsplash"
            />
            <p className="absolute top-48 right-4 font-semibold px-2 py-1 text-primary bg-secondary rounded-full shadow-sm">
              4.5
            </p>
          </div>
          <div className="flex justify-start px-5 -mt-14">
            <span className="flex relative h-32">
              <img
                alt="Photo by aldi sigun on Unsplash"
                src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2ZpbGUlMjBwaWN0dXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                className="mx-auto object-cover rounded-full h-[5.5rem] w-[5.5rem] bg-secondary p-1"
              />
              <span className="mt-14 ml-2 italic text-primary/60">
                This Course will take by {instructor}
              </span>
            </span>
          </div>
          <div className="">
            <div className="px-7 pb-7 mb-8">
              <h2 className="text-3xl font-bold text-primary ">{className}</h2>
              <p className="text-primary mt-2 ">{instrument}</p>
              <p className="text-primary mt-2 ">
                Seats Available: {seatsAvailable}
              </p>
              <p className="text-primary mt-2 ">
                Total Students: {totalStudents}
              </p>

              <div className="flex gap-4 items-center mt-2">
                <button className="justify-center px-4 py-2 cursor-pointer w-fit border border-primary hover:bg-primary hover:text-secondary transition-colors duration-300">
                  Course Details
                </button>{" "}
                <button className="justify-center px-4 py-2 cursor-pointer w-fit border border-primary hover:bg-primary hover:text-secondary transition-colors duration-300">
                  Select Course
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
