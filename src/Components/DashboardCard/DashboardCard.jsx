import React from "react";
import { FaChalkboardTeacher, FaUser } from "react-icons/fa";
import { FaMoneyCheckDollar } from "react-icons/fa6";
import { SiGoogleclassroom } from "react-icons/si";
import { Link } from "react-router-dom";

const DashboardCard = ({ name, total, url }) => {
  return (
    <div className="flex flex-col p-3 border rounded-md shadow-xl gap-2">
      <div className="text-sm">Total {name}</div>
      <div className="text-3xl font-semibold text-primary">
        {name === "earnings" ? `$ ${total}` : total}
      </div>
      {/*<div title="approved / not approved" >
        <span className="text-green-500" >5</span> / <span className="text-red-500" >10</span>
      </div>*/}
      <div className="flex justify-between">
        <Link to={url} className="underline" >See all {name}</Link>
        <div>
          {name === "users" ? (
            <FaUser size={18} />
          ) : name === "courses" ? (
            <SiGoogleclassroom size={18} />
          ) : name === "earnings" ? (
            <FaMoneyCheckDollar size={18} />
          ) : (
            name !== "instructor" && <FaChalkboardTeacher size={18} />
          )}
        </div>
      </div>
    </div>
  );
};

export default DashboardCard;
