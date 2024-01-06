import React, { useEffect, useState } from "react";
import { FaChalkboardTeacher, FaUserGraduate } from "react-icons/fa";
import { MdAdminPanelSettings, MdDeleteSweep } from "react-icons/md";
import useApi from "../../../../Hooks/useApi";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import Empty from "../../../../assets/animations/empty.gif";

import "react-loading-skeleton/dist/skeleton.css";

const ManageUsers = () => {
  const [users, setAllUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [refresh, setRefresh] = useState(null);
  const [loading, setLoading] = useState(true);

  const { get, put, del } = useApi();

  useEffect(() => {
    get("users").then((data) => {
      setAllUsers(data);
      setFilteredUsers(data);
      setLoading(false);
    });
  }, [refresh]);

  //for search
  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  //for search
  useEffect(() => {
    let value = search.toLowerCase();
    let userSearch = users.filter((data) => {
      const name = data.name.toLowerCase();
      const email = data.email.toLowerCase();
      return name.startsWith(value) || email.startsWith(value);
    });
    setFilteredUsers(userSearch);
  }, [search]);

  //for search
  const handleSubmit = (e) => {
    e.preventDefault();

    let value = search.toLowerCase();

    let userSearch = users.filter((data) => {
      const name = data.name.toLowerCase();
      return name === value;
    });

    setFilteredUsers(userSearch);
  };

  //update user
  const handleAdmin = (email) => {
    put(
      `users/${email}`,
      {
        role: "admin",
      },
      "updateUser"
    )
      .then((data) => {
        console.log(data);
        setRefresh(data.approved);
      })
      .catch((err) => console.error(err));
    setRefresh(null);
  };

  //for delete
  const handleRemove = (email) => {
    console.log(email);
    del(`users/${email}`, "userDelete")
      .then((data) => {
        if (data.role === "instructor") {
          del(`instructors/${email}`, "instructorUpdate").then((data) => {
            setRefresh(data.approved);
          });
        }
      })
      .catch((err) => console.error(err));
    setRefresh(null);
  };

  return (
    <div>
      <div className="wrapper min-h-screen text-primary backdrop-blur-md">
        <div className="overflow-x-auto pt-5 sm:pt-[8rem]">
          <div class="flex items-center justify-between mb-4">
            <div class="flex flex-col sm:flex-row items-start gap-4 sm:items-center justify-between w-full text-primary">
              <div className="text-4xl font-semibold">Manage Users</div>
              <input
                type="text"
                placeholder="Search users..."
                class="px-4 py-2 border border-primary text-primary bg-transparent rounded-lg focus:outline-none "
                onChange={handleChange}
                onSubmit={handleSubmit}
              />
            </div>
          </div>

          {!loading &&  filteredUsers.length <= 0 ? (
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
                  <th>Name</th>
                  <th>Email</th>
                  <th>Role</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {loading && (
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
                  </tr>
                )}
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
                    <td>
                      {user.role === "admin" && (
                        <div className="flex items-center gap-1">
                          <MdAdminPanelSettings /> Admin
                        </div>
                      )}
                      {user.role === "instructor" && (
                        <div className="flex items-center gap-1">
                          <FaChalkboardTeacher /> Instructor
                        </div>
                      )}
                      {user.role === "user" && (
                        <div className="flex items-center gap-1">
                          <FaUserGraduate /> User
                        </div>
                      )}
                    </td>
                    <td>
                      <div className="flex gap-2">
                        <button
                          disabled={user.role === "admin"}
                          onClick={() => handleAdmin(user.email)}
                          className={
                            "border-gray-600 border py-1 px-2 rounded-full text-gray-600 font-normal flex items-center gap-1 disabled:cursor-not-allowed"
                          }
                        >
                          <MdAdminPanelSettings /> Make Admin
                        </button>
                        <button
                          disabled={user.role === "admin"}
                          onClick={() => handleRemove(user.email)}
                          className={
                            "border-red-400 border py-1 px-2 rounded-full text-red-600 font-normal flex gap-1 items-center disabled:cursor-not-allowed"
                          }
                        >
                          <MdDeleteSweep /> Remove User
                        </button>
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
  );
};

export default ManageUsers;
