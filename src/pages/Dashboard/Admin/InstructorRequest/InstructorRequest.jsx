import React, { useEffect, useState } from "react";

const InstructorRequest = () => {
  const [instructors, setAllInstructors] = useState([]);
  const [filteredInstructors, setFilteredInstructors] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState([]);
  const [refresh, setRefresh] = useState(null);

  useEffect(() => {
    fetch("https://sv-ashen.vercel.app/api/instructors")
      .then((res) => res.json())
      .then((data) => {
        setAllInstructors(data);
        setFilteredInstructors(data);
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
    fetch(`https://sv-ashen.vercel.app/api/instructors/${email}`, {
      method: "PUT",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({ approved: true }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.approved) {
          fetch(`https://sv-ashen.vercel.app/api/users/${email}`, {
            method: "PATCH",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify({ role: "instructor" }),
          })
            .then((res) => res.json())
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

  return (
    <div>
      <div className="wrapper min-h-screen text-primary backdrop-blur-md">
        <div className="overflow-x-auto pt-5 sm:pt-[8rem]">
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
                      {instructor.approved ? "Approved" : "Not approved yet"}
                    </button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default InstructorRequest;
