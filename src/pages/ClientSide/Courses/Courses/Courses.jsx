import React, { useEffect, useState } from "react";
import PageCover from "../../../../Components/PageCover/PageCover";
import CourseCard from "../../../../Components/CourseCard/CourseCard";
import bannerImage from "../../../../assets/banner";

const Courses = () => {
  const [allCourses, setAllCourses] = useState([]);

  useEffect(() => {
    fetch("/Courses.json")
      .then((res) => res.json())
      .then((data) => {
        setAllCourses(data);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <PageCover
        img={bannerImage.banner4}
        title="Classes"
        subtitle="Everything in the universe has a rhythm, everything dances. ~ Maya Angelou"
      />
      <div className="wrapper grid my-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-11/12 mx-auto">
        {allCourses.map((card) => (
          <div key={card._id}>
            <CourseCard card={card} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;
