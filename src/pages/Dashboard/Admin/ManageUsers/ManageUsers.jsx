import React, { useEffect, useState } from "react";
import { MdAdminPanelSettings, MdDeleteSweep } from "react-icons/md";

const ManageUsers = () => {
  const [users, setAllUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState([]);
  const [refresh, setRefresh] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/api/users")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setAllUsers(data);
        setFilteredUsers(data);
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
  //    fetch(`http://localhost:5000/api/toys?category=${e.target.value}`)
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

  const handleAdmin = (email) => {
    fetch(`http://localhost:5000/api/users/${email}`, {
      method: "PATCH",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({ role: "admin" }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setRefresh(data.approved);
      })
      .catch((err) => console.error(err));
    setRefresh(null);
  };

  const handleRemove = (email) => {
    fetch(`http://localhost:5000/api/users/${email}`, {
      method: "DELETE",
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
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers?.map((user) => (
                <tr key={user._id}>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src={user?.image}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>

                      <div className="font-bold">{user.name}</div>
                    </div>
                  </td>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div>
                        <div className="font-bold">{user.email}</div>
                      </div>
                    </div>
                  </td>
                  {/*<td>{user.category}</td>
                  <td> {user.experience}</td>
                  <td> {user.education}</td>
                  <td> {user.about}</td>*/}
                  <td>{user.role}</td>
                  <td className="flex gap-2">
                    <button
                      onClick={() => handleAdmin(user.email)}
                      className={
                        "border-green-600 border py-1 px-2 rounded-full text-green-600 font-normal flex items-center gap-1 "
                      }
                    >
                      <MdAdminPanelSettings /> Make Admin
                    </button>
                    <button
                      onClick={() => handleRemove(user.email)}
                      className={
                        "border-green-600 border py-1 px-2 rounded-full text-green-600 font-normal flex gap-1 items-center"
                      }
                    >
                      <MdDeleteSweep /> Remove User
                    </button>
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

export default ManageUsers;
