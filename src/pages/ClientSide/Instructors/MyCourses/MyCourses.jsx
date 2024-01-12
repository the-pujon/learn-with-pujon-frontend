import React, { useEffect, useState } from "react";
import { FaRegEye } from "react-icons/fa";
import { useUser } from "./../../../../Hooks/useUser";
import useApi from "../../../../Hooks/useApi";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import {Link} from "react-router-dom";
import Empty from '../../../../assets/animations/empty.gif'

const MyCourses = () => {
  const [courses, setAllCourses] = useState([]);
  const [filteredCourses, setFilteredCourses] = useState([]);
  const [search, setSearch] = useState("");

  const { loggedUser } = useUser();

  const { get, loading } = useApi();

  useEffect(() => {
    get(`courses/email/${loggedUser?.email}`, 'getCourses')
      .then((data) => {
        setAllCourses(data);
        setFilteredCourses(data);
      });
  }, [loggedUser]);

  //for search
  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  //for search
  useEffect(() => {
    let value = search.toLowerCase();
    let courseSearch = courses.filter((data) => {
      const name = data.name.toLowerCase();
      return name.startsWith(value);
    });
    setFilteredCourses(courseSearch);
  }, [search]);

  //for sort
  const handleSort = (e) => {
    if (e.target.value === "price-lowest") {
      const s = [...filteredCourses].sort((a, b) => a.price - b.price);
      setFilteredCourses(s);
    }

    if (e.target.value === "price-highest") {
      const s = [...filteredCourses].sort((b, a) => a.price - b.price);
      setFilteredCourses(s);
    }
  };

  return (
    <div>
      <div className="wrapper min-h-screen text-primary backdrop-blur-md">
        <div className="overflow-x-auto pt-[8rem]">
          <div className=" mb-4">
            <div className="text-4xl font-semibold pb-5 ">My Courses</div>
            <div className="flex flex-row items-start justify-between gap-4 text-primary">
              <input
                type="text"
                placeholder="Search courses..."
                className="px-4 py-2 border border-primary text-primary bg-transparent rounded-lg focus:outline-none"
                onChange={handleChange}
              />

              <select
                className="px-4 py-2 w-28 border border-primary bg-transparent rounded-lg focus:outline-none "
                //  value="{sortOption}"
                onChange={handleSort}
              >
                <option value="" className="bg-primary text-secondary">
                  Sort By
                </option>

                <option
                  value="price-lowest"
                  className="bg-primary text-secondary"
                >
                  Price (Lowest to Highest)
                </option>
                <option
                  value="price-highest"
                  className="bg-primary text-secondary"
                >
                  Price (Highest to Lowest)
                </option>
              </select>
            </div>
          </div>

          <div className="max-w-full overflow-auto">
            {!loading && filteredCourses.length <= 0 ? (
              <div className=" flex w-full h-[80vh] justify-center items-center text-xl">
                <div>
                  <img src={Empty} alt="empty" />
                </div>
              </div>
            ) : (
              <table className="table">
                {/* head */}
                <thead>
                  <tr>
                    <th>Course Name</th>
                    <th>Instructor</th>
                    <th>Category</th>
                    <th>Description</th>
                    <th>Total Lessons</th>
                    <th>Total Quizzes</th>
                    {/*<th>Total Students</th>*/}
                    <th>Duration</th>
                    <th>Price</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {loading === 'getCourses' && (
                    <tr>
                      <td>
                        <SkeletonTheme
                          baseColor="#ABB3BF"
                          highlightColor="#CED3DA"
                          height={50}
                        >
                          <Skeleton />
                        </SkeletonTheme>
                      </td>
                      <td>
                        <SkeletonTheme
                          baseColor="#ABB3BF"
                          highlightColor="#CED3DA"
                          height={50}
                        >
                          <Skeleton />
                        </SkeletonTheme>
                      </td>
                      <td>
                        <SkeletonTheme
                          baseColor="#ABB3BF"
                          highlightColor="#CED3DA"
                          height={50}
                        >
                          <Skeleton />
                        </SkeletonTheme>
                      </td>
                      <td>
                        <SkeletonTheme
                          baseColor="#ABB3BF"
                          highlightColor="#CED3DA"
                          height={50}
                        >
                          <Skeleton />
                        </SkeletonTheme>
                      </td>
                      <td>
                        <SkeletonTheme
                          baseColor="#ABB3BF"
                          highlightColor="#CED3DA"
                          height={50}
                        >
                          <Skeleton />
                        </SkeletonTheme>
                      </td>
                      <td>
                        <SkeletonTheme
                          baseColor="#ABB3BF"
                          highlightColor="#CED3DA"
                          height={50}
                        >
                          <Skeleton />
                        </SkeletonTheme>
                      </td>
                      <td>
                        <SkeletonTheme
                          baseColor="#ABB3BF"
                          highlightColor="#CED3DA"
                          height={50}
                        >
                          <Skeleton />
                        </SkeletonTheme>
                      </td>
                      <td>
                        <SkeletonTheme
                          baseColor="#ABB3BF"
                          highlightColor="#CED3DA"
                          height={50}
                        >
                          <Skeleton />
                        </SkeletonTheme>
                      </td>
                      <td>
                        <SkeletonTheme
                          baseColor="#ABB3BF"
                          highlightColor="#CED3DA"
                          height={50}
                        >
                          <Skeleton />
                        </SkeletonTheme>
                      </td>
                    </tr>
                  )}
                  {filteredCourses?.map((course) => (
                    <tr key={course._id}>
                      <td>
                        <div className="flex items-center space-x-3">
                          <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                              <img
                                src={course?.classImage}
                                alt="Avatar Tailwind CSS Component"
                              />
                            </div>
                          </div>

                          <div className="font-bold">{course.name}</div>
                        </div>
                      </td>
                      <td>
                        <div className="flex flex-col justify-startspace-x-3">
                          <div className="font-bold">
                            {course.instructor.name}
                          </div>
                          <div className="font-normal">
                            {course.instructor.email}
                          </div>
                        </div>
                      </td>
                      <td>
                        {" "}
                        <div className="flex flex-col justify-startspace-x-3">
                          <div className="font-bold">
                            {course.classCategory}
                          </div>
                          <div className="font-normal">
                            {course.classSubCategory}
                          </div>
                        </div>
                      </td>
                      <td> {course.description}</td>
                      <td> {course.totalLessons}</td>
                      <td> {course.totalQuizzes}</td>
                      {/*<td> {course.totalStudent}</td>*/}
                      <td> {course.duration}</td>
                      <td>{course.price}</td>
                      <td>
                        {console.log(course.approved)}
                        <div className="flex items-center">
                          <div
                            className={
                              course.approved
                                ? "border-green-600 border py-1 px-2 rounded-full text-green-600 font-normal"
                                : "border-red-600 border py-1 px-2 rounded-full text-red-600 font-normal"
                            }
                          >
                            {course.approved ? "Approved" : "Not approved yet"}
                          </div>
                          <Link
                            to={`/courseDetails/${course?._id}`}
                            className="ml-2 border px-2 py-1 text-primary text-xl rounded-full border-primary"
                          >
                            <FaRegEye />
                          </Link>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyCourses;
