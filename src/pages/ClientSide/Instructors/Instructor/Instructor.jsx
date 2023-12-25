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
    fetch(
      `https://sv-ashen.vercel.app/api/instructors/singleInstructor?id=${id}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setInstructorDetails(data);
        //setInstructorEmail(data.instructor.email)
        console.log(data.email);
        const encodedEmail = encodeURIComponent(data.email);
        console.log(encodedEmail);

        get(`courses/email/${encodedEmail}`).then((res) => {
          console.log(res);
          setInstructorCourses(res);
        });
      });
  }, []);

  return (
    <div>
      <div className="wrapper min-h-screen pt-32">
        <div className="hero  bg-base-200">
          <div className="hero-content flex-col lg:flex-row-reverse wrapper w-full justify-between">
            <img
              src={instructorDetails.instructorImage}
              className="max-w-sm w-full flex-1 rounded-lg shadow-2xl"
            />
            <div className=" w-[50rem]">
              <h1 className="text-5xl pb-1 font-bold">
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
                <br />P{instructorDetails.about} Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Commodi, quis. Illo nostrum
                ratione porro ipsum dolorem, minima quidem ut! Hic ea minima
                dolorum fugiat laudantium nesciunt animi quas ut velit unde
                debitis modi, sapiente enim repellat veniam mollitia! Similique
                repudiandae at sequi laborum perspiciatis distinctio architecto
                quos unde quisquam, libero iste eaque, maiores incidunt neque
                quam hic nulla ratione, dolore id! Molestias eligendi ducimus
                atque minima laboriosam cupiditate, magnam corporis! Culpa
                excepturi quisquam quidem architecto maxime perferendis, harum
                soluta cum esse repellat nulla error quas itaque! Deleniti magni
                sit eaque, harum tenetur rerum. Blanditiis nisi voluptates unde
                eum, modi voluptas?
              </p>

              <li className="">Email: {instructorDetails.email}</li>
              <li className="">Phone: {instructorDetails.phone}</li>
              <li className="">Education: {instructorDetails.education}</li>
              <li className="">Address: {instructorDetails.address}</li>
            </div>
          </div>
        </div>
        <div>
          <h1 className="text-4xl mb-4 text-primary font-semibold mt-20">
            All Courses of this instructor
          </h1>
          <div>
            <CourseSlider instructorCourses={instructorCourses} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Instructor;
