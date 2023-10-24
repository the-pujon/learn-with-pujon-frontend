import React, { useEffect, useState } from "react";

import { useUser } from "../../../Hooks/useUser";

const PaymentHistory = () => {
  const [courses, setAllCourses] = useState([]);
  const [filteredCourses, setFilteredCourses] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState([]);

  const { loggedUser } = useUser();

  useEffect(() => {
    fetch(`http://localhost:5000/api/payments/${loggedUser?.email}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setAllCourses(data);
        setFilteredCourses(data);
      });
  }, [loggedUser]);

  return (
    <div>
      <div className="wrapper min-h-screen text-primary backdrop-blur-md">
        <div className="overflow-x-auto pt-[8rem]">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>Session ID</th>
                <th>Email</th>
                <th>Time</th>
              </tr>
            </thead>
            <tbody>
              {filteredCourses?.map((course) => (
                <tr key={course._id}>
                  <td> {course.sessionId}</td>
                  <td> {course.email}</td>
                  <td> {new Date(parseInt(course?.date)).toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PaymentHistory;
