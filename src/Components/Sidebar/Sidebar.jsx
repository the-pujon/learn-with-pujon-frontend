import React from "react";
import wave from "../../assets/wave5.svg";
import { Link, NavLink } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
import { FaUsersCog } from "react-icons/fa";
import "./Sidebar.scss";
import logo from "../../assets/logos/logo3.png";

const Sidebar = () => {
  return (
    <div>
      <div className="fixed inset-y-0 z-10 flex w-80">
        <svg
          className="absolute inset-0 w-full h-full text-white"
          style={{ filter: "drop-shadow(10px 0 10px #00000030)" }}
          preserveAspectRatio="none"
          viewBox="0 0 309 800"
          fill="#213555"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M268.487 0H0V800H247.32C207.957 725 207.975 492.294 268.487 367.647C329 243 314.906 53.4314 268.487 0Z" />
        </svg>

        <div className="z-10 flex flex-col flex-1">
          <div className="flex items-end justify-between flex-shrink-0 pl-2  w-28">
            <img src={logo} alt="" className="w-24 " />
            <div className="text-2xl text-secondary font-normal mb-2">SKILLS VOYAGE</div>
          </div>
          <nav className="flex flex-col flex-1 w-64 p-4 mt-4 gap-4 text-secondary sidebar">
            <NavLink to="/" className="flex items-center space-x-2 w-fit">
              <AiOutlineHome className="text-xl" />
              <p className="text-base"> Home</p>
            </NavLink>
            <NavLink
              to="/dashboard/manageUsers"
              className="flex items-center space-x-2 w-fit "
            >
              <FaUsersCog className="text-xl" />
              <span className="text-base">Manage Users</span>
            </NavLink>
            <NavLink
              to="/dashboard/instructorApplication"
              className="flex items-center space-x-2 w-fit"
            >
              <AiOutlineHome className="text-xl" />
              <span className="text-base">Instructor Application</span>
            </NavLink>
            <NavLink
              to="/dashboard/courseRequest"
              className="flex items-center space-x-2 w-fit"
            >
              <AiOutlineHome className="text-xl" />
              <span className="text-base">Course Request</span>
            </NavLink>
            <NavLink to="/" className="flex items-center space-x-2 w-fit">
              <AiOutlineHome className="text-xl" />
              <span className="text-base">All Classes</span>
            </NavLink>
            <NavLink to="/dashboard/allTransactions" className="flex items-center space-x-2 w-fit">
              <AiOutlineHome className="text-xl" />
              <span className="text-base">All Transactions</span>
            </NavLink>
          </nav>
          <div className="flex-shrink-0 p-4">
            <button className="flex items-center space-x-2">
              <svg
                aria-hidden="true"
                className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                />
              </svg>
              <span>Logout</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
