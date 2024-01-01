import React, { useEffect, useState } from "react";
import PageCover from "../../../../Components/PageCover/PageCover";
import CourseCard from "../../../../Components/CourseCard/CourseCard";
import bannerImage from "../../../../assets/banner";
import useApi from "./../../../../Hooks/useApi";

const Courses = () => {
  const [allCourses, setAllCourses] = useState([]);

  const { get } = useApi();

  useEffect(() => {
    get("courses")
      .then((data) => {
        const approvedCourses = data.filter(
          (course) => course.approved === true
        );

        setAllCourses(approvedCourses);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <PageCover
        img={bannerImage.banner4}
        title="All Courses"
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
