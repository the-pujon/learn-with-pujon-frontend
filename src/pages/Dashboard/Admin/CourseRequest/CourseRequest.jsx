import React, { useEffect, useState } from "react";
import { FaRegEye } from "react-icons/fa";

const CourseRequest = () => {
  const [courses, setAllCourses] = useState([]);
  const [filteredCourses, setFilteredCourses] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState([]);
  const [refresh, setRefresh] = useState(null);

  useEffect(() => {
    fetch("https://sv-ashen.vercel.app/api/courses")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setAllCourses(data);
        setFilteredCourses(data);
      });

    //fetch("/category.json")
    //  .then((res) => res.json())
    //  .then((data) => {
    //    setCategory(data);
    //  });
  }, [refresh]);

  //for search
  //  const handleChange = (e) => {
  //    setSearch(e.target.value);
  //  };

  //for search
  //  useEffect(() => {
  //    let value = search.toLowerCase();
  //    let toySearch = toys.filter((data) => {
  //      const name = data.name.toLowerCase();
  //      return name.startsWith(value);
  //    });
  //    setFilteredToys(toySearch);
  //  }, [search]);

  //for search
  //  const handleSubmit = (e) => {
  //    e.preventDefault();

  //    let value = search.toLowerCase();

  //    let toySearch = loadedToys.filter((data) => {
  //      const name = data.name.toLowerCase();
  //      return name === value;
  //    });

  //    setFilteredToys(toySearch);
  //  };

  //  const handleCategory = (e) => {
  //    e.preventDefault();
  //    //console.log(e.target.value);
  //    fetch(`https://sv-ashen.vercel.app/api/toys?category=${e.target.value}`)
  //      .then((res) => res.json())
  //      .then((data) => {
  //        setAllToys(data);
  //        setFilteredToys(data);
  //      });
  //  };

  //  const handleSort = (e) => {
  //    if (e.target.value === "price-lowest") {
  //      const s = [...filteredToys].sort((a, b) => a.price - b.price);
  //      setFilteredToys(s);
  //    }

  //    if (e.target.value === "price-highest") {
  //      const s = [...filteredToys].sort((b, a) => a.price - b.price);
  //      setFilteredToys(s);
  //    }
  //  };

  const handleApproved = (email) => {
    fetch(`https://sv-ashen.vercel.app/api/Courses/${email}`, {
      method: "PUT",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({ approved: true }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setRefresh(data.approved);
      })
      .catch((err) => console.error(err));
    setRefresh(null);
  };

  return (
    <div>
      <div className="wrapper min-h-screen text-primary backdrop-blur-md">
        <div className="overflow-x-auto pt-[8rem]">
          {/*<div class="flex items-center justify-between mb-4">
            <div class="flex items-center space-x-4 text-primary">
              <input
                type="text"
                placeholder="Search toys..."
                class="px-4 py-2 border border-secondary text-secondary bg-transparent rounded-lg focus:outline-none "
                onchange="{handleSearch}"
                onChange={handleChange}
                onSubmit={handleSubmit}
              />
              <select
                onChange={handleCategory}
                //defaultValue="All Categories"
                class="px-4 py-2 border border-secondary bg-transparent text-secondary rounded-lg focus:outline-none "
              >
                <option>All Categories</option>
                {category.map((c) => (
                  <option value={c.value} className="bg-primary text-secondary">
                    {c.name}
                  </option>
                ))}
              </select>
            </div>
            <select
              class="px-4 py-2 border border-secondary bg-transparent rounded-lg focus:outline-none "
              //  value="{sortOption}"
              onChange={handleSort}
            >
              <option value="" className="bg-primary">
                Sort By
              </option>

              <option value="price-lowest" className="bg-primary">
                Price (Lowest to Highest)
              </option>
              <option value="price-highest" className="bg-primary">
                Price (Highest to Lowest)
              </option>
            </select>
          </div>*/}

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
                      <div className="font-bold">{course.instructor.name}</div>
                      <div className="font-normal">
                        {course.instructor.email}
                      </div>
                    </div>
                  </td>
                  <td>
                    {" "}
                    <div className="flex flex-col justify-startspace-x-3">
                      <div className="font-bold">{course.classCategory}</div>
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
                      <button
                        disabled={course.approved}
                        onClick={() => {
                          handleApproved(course._id);
                        }}
                        className={
                          course.approved
                            ? "border-green-600 border py-1 px-2 rounded-full text-green-600 font-normal"
                            : "border-red-600 border py-1 px-2 rounded-full text-red-600 font-normal"
                        }
                      >
                        {course.approved ? "Approved" : "Not approved yet"}
                      </button>
                      <button className="ml-2 border px-2 py-1 text-primary text-xl rounded-full border-primary">
                        <FaRegEye />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CourseRequest;
