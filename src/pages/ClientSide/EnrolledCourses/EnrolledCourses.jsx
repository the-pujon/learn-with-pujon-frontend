import React, { useEffect, useState } from "react";
import { FaRegEye } from "react-icons/fa";
import { useUser } from "../../../Hooks/useUser";
import { Link } from "react-router-dom";
import useApi from "../../../Hooks/useApi";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import Empty from "../../../assets/animations/empty.gif";

const MyCourses = () => {
  const [courses, setAllCourses] = useState([]);
  const [filteredCourses, setFilteredCourses] = useState([]);
  const [search, setSearch] = useState("");


  const { loggedUser } = useUser();

  const { get, loading } = useApi();

  useEffect(() => {
    get(`payments/${loggedUser?.email}`, "getPayments").then((data) => {
      console.log(data);

      const formattedCourses = data?.flatMap((d) => {
        return d.courses.map((c) => {
          return {
            _id: c._id,
            name: c.name,
            category: c.category,
            instructorName: c.instructorName,
            price: c.price,
            classImage: c.classImage,
            date: d.date,
          };
        });
      });

      setAllCourses(formattedCourses);
      setFilteredCourses(formattedCourses);
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
      const sortedCourses = [...courses].sort((a, b) => a.price - b.price);
      setFilteredCourses(sortedCourses);
    }

    if (e.target.value === "price-highest") {
      const sortedCourses = [...courses].sort((b, a) => a.price - b.price);
      setFilteredCourses(sortedCourses);
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
                className="px-4 py-2 border w-full   border-primary text-primary bg-transparent rounded-lg focus:outline-none"
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
                    <th>Price</th>
                    <th>Enroll Date</th>
                  </tr>
                </thead>
                <tbody>
                  {loading === "getPayments" && (
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
                    </tr>
                  )}
                  {filteredCourses?.map((course,i) =>

                      <tr key={i}>
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
                              {course.instructorName}
                            </div>
                            {/*<div className="font-normal">
                          {course.instructor.email}
                        </div>*/}
                          </div>
                        </td>
                        <td>
                          {" "}
                          <div className="flex flex-col justify-startspace-x-3">
                            <div className="font-bold">{course.category}</div>
                          </div>
                        </td>

                        <td>{course.price}</td>
                        <td> {new Date(parseInt(course?.date)).toLocaleString()}</td>
                        <td>
                          <Link
                            to={`/courseDetails/${course?._id}`}
                            className=" text-primary"
                          >
                            <FaRegEye className="text-2xl" />
                          </Link>
                        </td>
                      </tr>

                  )}
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
