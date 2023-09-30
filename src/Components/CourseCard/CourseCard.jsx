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
      <Fade duration={2000}>
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
              {/*{role === "student" && (*/}
              <button
                //  disabled={seatsAvailable === 0}
                //  onClick={() => handleSelectedClass(card)}
                className="btn btn-outline disabled:bg-gray-300  hover:bg-[color:var(--hoverColor2)] border-2 border-black rounded-none"
              >
                Select Class
              </button>
              {/*)}*/}
            </div>
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default CourseCard;
