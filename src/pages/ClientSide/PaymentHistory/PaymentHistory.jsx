import React, { useEffect, useState } from "react";

import { useUser } from "../../../Hooks/useUser";
import useApi from './../../../Hooks/useApi';
import Skeleton, {SkeletonTheme} from "react-loading-skeleton";
import Empty from "../../../assets/animations/empty.gif"

const PaymentHistory = () => {
  const [allTransactions, setAllTransactions] = useState([]);
  const [filteredTransactions, setFilteredTransactions] = useState([]);

  const { loggedUser } = useUser();

  const {get, loading} = useApi()

  useEffect(() => {
    get(`payments/${loggedUser?.email}`, 'getAllHistory')
      .then((data) => {
        console.log(data);
        setAllTransactions(data);
        setFilteredTransactions(data);
      });
  }, [loggedUser]);

  return (
    <div>
      <div className="wrapper min-h-screen text-primary backdrop-blur-md ">
        <div className="text-3xl font-semibold py-2 pt-32 sm:pt-[8rem]" >Payment History</div>
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
                  {loading === "getAllHistory" && (
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
  );
};

export default PaymentHistory;
