import React, { useEffect, useState } from "react";
import { FaRegEye } from "react-icons/fa";
import { useUser } from "./../../../../Hooks/useUser";

const AllTransactions = () => {
  const [allTransactions, setAllTransactions] = useState([]);
  const [filteredTransactions, setFilteredTransactions] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState([]);

  const { loggedUser } = useUser();

  useEffect(() => {
    fetch(`https://sv-ashen.vercel.app/api/payments`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setAllTransactions(data);
        setFilteredTransactions(data);
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
                <th>Total Courses</th>
                <th>Total Amount</th>
                <th>Time</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {filteredTransactions?.map((transaction) => (
                <tr key={transaction._id}>
                  <td> {transaction.sessionId}</td>
                  <td> {transaction.email}</td>
                  <td> {transaction.courses.length}</td>
                  <td> {transaction.totalAmount}</td>

                  <td> {new Date(parseInt(transaction?.date)).toLocaleString()}</td>
                 <td>
                 <div
                   className={
                     transaction.paymentStatus === 'paid'
                      ? "border-green-600 border py-1 px-2 rounded-full text-green-600 font-normal text-center"
                      : "border-red-600 border py-1 px-2 rounded-full text-red-600 font-normal text-center"
                  }
                  > {transaction.paymentStatus}</div>
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

export default AllTransactions;
