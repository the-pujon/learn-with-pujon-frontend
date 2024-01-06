import React, { useEffect, useState } from "react";
import useApi from "./../../../../Hooks/useApi";
import { AiOutlineClose } from "react-icons/ai";
import Empty from "../../../../assets/animations/empty.gif";

const InstructorRequest = () => {
  const [instructors, setAllInstructors] = useState([]);
  const [filteredInstructors, setFilteredInstructors] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState([]);
  const [refresh, setRefresh] = useState(null);

  const { get, put, del } = useApi();

  useEffect(() => {
    get("instructors").then((data) => {
      setAllInstructors(data);
      setFilteredInstructors(data);
    });
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
    put(`instructors/${email}`, { approved: true }, "instructorUpdate")
      .then((data) => {
        if (data.approved) {
          put(`users/${email}`, { role: "instructor" }, "userUpdate")
            .then((data) => {
              console.log(data);
              setRefresh(data.approved);
            })
            .catch((err) => console.error(err));
        } else {
          console.log(data);
          setRefresh(data.approved);
        }
      })
      .catch((err) => console.error(err));
    setRefresh(null);
  };

  const handleDelete = (email) => {
    del(`instructors/${email}`, "instructorDelete").then((data) => {
      setRefresh(data.approved);
    });
    setRefresh(null);
  };

  return (
    <div>
      <div className="wrapper min-h-screen text-primary backdrop-blur-md">
        <div className="overflow-x-auto pt-5 sm:pt-[8rem]">
          <div class="flex items-center justify-between mb-4">
          <div class="flex flex-col sm:flex-row items-start gap-4 sm:items-center justify-between w-full text-primary">
              <div className="text-4xl font-semibold">Manage Instructors</div>
              <input
                type="text"
                placeholder="Search users..."
                class="px-4 py-2 border border-primary text-primary bg-transparent rounded-lg focus:outline-none "
                //onChange={handleChange}
                //onSubmit={handleSubmit}
              />
            </div>
          </div>

          {filteredInstructors.length <= 0 ? (
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
                  <th>Instructor Name</th>
                  <th>Email</th>
                  <th>Category</th>
                  <th>Experience</th>
                  <th>Education</th>
                  <th>About</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {filteredInstructors?.map((instructor) => (
                  <tr key={instructor._id}>
                    <td>
                      <div className="flex items-center space-x-3">
                        <div className="avatar">
                          <div className="mask mask-squircle w-12 h-12">
                            <img
                              src={instructor?.instructorImage}
                              alt="Avatar Tailwind CSS Component"
                            />
                          </div>
                        </div>

                        <div className="font-bold">{instructor.name}</div>
                      </div>
                    </td>
                    <td>
                      <div className="flex items-center space-x-3">
                        <div>
                          <div className="font-bold">{instructor.email}</div>
                        </div>
                      </div>
                    </td>
                    <td>{instructor.category}</td>
                    <td> {instructor.experience}</td>
                    <td> {instructor.education}</td>
                    <td> {instructor.about}</td>
                    <th>
                      <div className="flex items-center gap-4">
                        <button
                          disabled={instructor.approved}
                          onClick={() => {
                            handleApproved(instructor.email);
                          }}
                          className={
                            instructor.approved
                              ? "border-green-600 border py-1 px-2 rounded-full text-green-600 font-normal"
                              : "border-red-600 border py-1 px-2 rounded-full text-red-600 font-normal"
                          }
                        >
                          {instructor.approved
                            ? "Approved"
                            : "Not approved yet"}
                        </button>
                        <button onClick={() => handleDelete(instructor.email)}>
                          <AiOutlineClose className="text-2xl font-bold" />
                        </button>
                      </div>
                    </th>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
};

export default InstructorRequest;
