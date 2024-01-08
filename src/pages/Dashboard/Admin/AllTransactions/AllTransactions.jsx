import React, { useEffect, useState } from "react";
import { FaRegEye } from "react-icons/fa";
import { useUser } from "./../../../../Hooks/useUser";
import useApi from "../../../../Hooks/useApi";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import Empty from "../../../../assets/animations/empty.gif";

const AllTransactions = () => {
  const [allTransactions, setAllTransactions] = useState([]);
  const [filteredTransactions, setFilteredTransactions] = useState([]);
  const [search, setSearch] = useState("");

  const { get, loading } = useApi();

  const { loggedUser } = useUser();

  useEffect(() => {
    get(`payments`, "getPayments").then((data) => {
      console.log(data);
      setAllTransactions(data);
      setFilteredTransactions(data);
    });
  }, [loggedUser]);

  //for search
  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  //for search
  useEffect(() => {
    let value = search.toLowerCase();
    let TransactionSearch = allTransactions.filter((data) => {
      const email = data.email.toLowerCase();
      return email.startsWith(value);
    });
    setFilteredTransactions(TransactionSearch);
  }, [search]);

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
                class="px-4 py-2  border border-primary text-primary bg-transparent rounded-lg focus:outline-none "
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="max-w-full overflow-auto">
            {!loading && filteredTransactions.length <= 0 ? (
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
                    <th>Session ID</th>
                    <th>Email</th>
                    <th>Total Courses</th>
                    <th>Total Amount</th>
                    <th>Time</th>
                    <th>Status</th>
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
                      </td>{" "}
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
                  {filteredTransactions?.map((transaction) => (
                    <tr key={transaction._id}>
                      <td> {transaction.sessionId}</td>
                      <td> {transaction.email}</td>
                      <td> {transaction.courses.length}</td>
                      <td> {transaction.totalAmount}</td>

                      <td>
                        {" "}
                        {new Date(parseInt(transaction?.date)).toLocaleString()}
                      </td>
                      <td>
                        <div
                          className={
                            transaction.paymentStatus === "paid"
                              ? "border-green-600 border py-1 px-2 rounded-full text-green-600 font-normal text-center"
                              : "border-red-600 border py-1 px-2 rounded-full text-red-600 font-normal text-center"
                          }
                        >
                          {" "}
                          {transaction.paymentStatus}
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

export default AllTransactions;
