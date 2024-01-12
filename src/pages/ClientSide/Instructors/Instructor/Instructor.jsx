import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useApi from "../../../../Hooks/useApi";
import CourseSlider from "../../../../Components/CourseSlider/CourseSlider";

const Instructor = () => {
  const id = useParams().id;
  const [instructorDetails, setInstructorDetails] = useState({});
  const [instructorEmail, setInstructorEmail] = useState("");
  const [instructorCourses, setInstructorCourses] = useState([]);

  const { get } = useApi();

  //  console.log(id);
  useEffect(() => {
    get(`instructors/singleInstructor?id=${id}`,'getInstructor')
      .then((data) => {
        setInstructorDetails(data);
        const encodedEmail = encodeURIComponent(data.email);

        get(`courses/email/${encodedEmail}`).then((res) => {
          setInstructorCourses(res);
        });
      });
  }, []);

  return (
    <div>
      <div className="wrapper pt-32">
        <div className="hero  bg-base-200">
          <div className="hero-content flex-col lg:flex-row-reverse wrapper sm:w-full justify-between">
            <img
              src={instructorDetails.instructorImage}
              className="max-w-sm w-full flex-1 rounded-lg shadow-2xl"
            />
            <div className=" sm:w-[50rem]">
              <h1 className="text-4xl sm:text-5xl pb-1 font-bold">
                {instructorDetails.name}
              </h1>
              <p className="text-xl text-gray-500 pb-1">
                {instructorDetails.category} Instructor
              </p>
              <p className="text-sm text-gray-500 pb-3">
                {instructorDetails.experience} years of experience
              </p>

              <p className="py-6">
                <span className="text-xl font-medium">About</span>
                <br />{instructorDetails.about}
              </p>

              <li className="">Email: {instructorDetails.email}</li>
              <li className="">Phone: {instructorDetails.phone}</li>
              <li className="">Education: {instructorDetails.education}</li>
              <li className="">Address: {instructorDetails.address}</li>
            </div>
          </div>
        </div>
        {instructorCourses?.length > 0 && (
          <div>
            <h1 className="text-4xl mb-4 text-primary font-semibold mt-20">
              All Courses of this instructor
            </h1>
            <div>
              <CourseSlider instructorCourses={instructorCourses} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Instructor;
