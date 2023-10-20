import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import "./Navbar.scss";
import logo1 from "../../assets/logos/logo3.png";
import { useUser } from "../../Hooks/useUser";

const navbarOption = (
  <>
    <li>
      <NavLink to="/">Home</NavLink>
    </li>
    <li>
      <NavLink to="/instructors">Instructors</NavLink>
    </li>
    <li>
      <NavLink to="/courses">Classes</NavLink>
    </li>
    <li>
      <a
      //to={`/dashboard/${
      //  role === "admin"
      //    ? "manageUsers"
      //    : role === "instructor"
      //    ? "myClasses"
      //    : "selectedClass"
      //}`}
      >
        Dashboard
      </a>
    </li>
  </>
);
const Navbar = () => {
  const [scroll, setScroll] = useState(true);

  const location = useLocation().pathname;

  const { loggedUser, logOut, userLoading } = useUser();

  /**
   * Used for navbar animation when scroll
   */
  const listenScrollEvent = () => {
    if (location === "/") {
      window.scrollY > 650 ? setScroll(false) : setScroll(true);
    } else {
      window.scrollY > 280 ? setScroll(false) : setScroll(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  const handleLogOut = (e) => {
    e.preventDefault();
    logOut().then(() => console.log("logout"));
  };

  return (
    <div
      className={` text-white fixed z-50 w-full transition-all duration-500 ease-linear  ${
        scroll
          ? " py-12 backdrop-blur-sm bg-opacity-0 "
          : " backdrop-blur-sm bg-primary/70 bg-opacity-100 py-3"
      }`}
    >
      <div className="wrapper">
        <div className="navbar bg-base-100">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-black bg-white/5"
              >
                {navbarOption}
              </ul>
            </div>
            <Link to="/" className=" text-5xl font-medium">
              <img
                src={logo1}
                alt=""
                className={`${
                  scroll ? "w-32" : "w-20"
                } transition-all duration-500 ease-linear`}
              />
            </Link>
          </div>

          <div className="navbar-center">
            {" "}
            <ul className=" menu menu-horizontal px-1 hidden md:flex">
              {navbarOption}
            </ul>
          </div>

          <div className="navbar-end">
            <ul>
              <li>
                <NavLink to="/instructors">Become an Instructor</NavLink>
              </li>
            </ul>

            {/*<div className="dropdown dropdown-end text-black">

              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 "
              >
                <li>
                  <a className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </a>
                </li>
                <li>
                  <a>Settings</a>
                </li>
                <li>
                  <a>Logout</a>
                </li>
              </ul>
            </div>*/}
            <div className="dropdown dropdown-end text-black">
              {loggedUser ? (
                <>
                  <label
                    tabIndex={0}
                    className="btn btn-ghost btn-circle avatar"
                  >
                    <div className="w-10 rounded-full">
                      <img src={loggedUser?.photoURL} />
                    </div>
                  </label>
                  <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content mt-3 z-[1] shadow-2xl bg-transparent text-white rounded-box w-52 "
                  >
                    <li
                      className=" bg-primary/20 p-2 backdrop-blur-md"
                      onClick={handleLogOut}
                    >
                      <a>Logout</a>
                    </li>
                  </ul>
                </>
              ) : (
                <>
                  <ul>
                    <li className="text-xl text-white">
                      <NavLink to="/auth" className={" flex items-center"}>
                        Login
                      </NavLink>
                    </li>
                  </ul>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
