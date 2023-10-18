import React, { useEffect, useState } from "react";
import InstructorCard from "../../../../Components/InstructorCard/InstructorCard";

import PageCover from "../../../../Components/PageCover/PageCover";
import bannerImage from "../../../../assets/banner/index";
import CategoryDropdown from "../../../../Components/CategoryDropdown/CategoryDropdown";

const instructorCategory = [
  "Programming Instructors", "Math Instructors", "English Instructors", "Physics Instructors",
];

const Instructors = () => {
  const [instructors, setInstructors] = useState([]);

  useEffect(() => {
    fetch("https://learn-with-pujon-backend.vercel.app/instructors")
      .then((res) => res.json())
      .then((data) => {
        setInstructors(data);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <PageCover
        img={bannerImage.banner3}
        title="All Instructors"
        subtitle="“The mediocre teacher tells. The good teacher explains. The superior teacher demonstrates. The great teacher inspires.” - William Ward"
      />
      <div className="wrapper">
        <div className="flex justify-between">
          <div className="flex gap-2 items-center w-full p-2">
            <input
              type="search"
              id="search"
              name="search"
              className="w-full p-2 outline-none border-2"
            />
            <label
              className="p-[.5rem_1rem] border bg-primary text-secondary "
              htmlFor="search"
            >
              Search
            </label>
          </div>
          <CategoryDropdown
            buttonName={"Instructors"}
            categoryList={instructorCategory}
          />
        </div>
        <div className="grid grid-cols-1 gap-4 py-10 md:grid-cols-2 lg:grid-cols-3 w-11/12 mx-auto">
          {instructors.map((instructor) => (
            <div key={instructor._id}>
              <InstructorCard
                img={instructor.image}
                name={instructor.name}
                email={instructor.email}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Instructors;
