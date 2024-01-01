import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import "./Navbar.scss";
import logo1 from "../../assets/logos/logo3.png";
import { useUser } from "../../Hooks/useUser";
import { useSelector } from "react-redux";
import useRole from "./../../Hooks/useRole";
import { toast } from 'react-hot-toast';

const navbarOption = (
  <>
    <li>
      <NavLink to="/">Home</NavLink>
    </li>
    <li>
      <NavLink to="/instructors">Instructors</NavLink>
    </li>
    <li>
      <NavLink to="/courses">Courses</NavLink>
    </li>
  </>
);
const Navbar = () => {
  const cartItems = useSelector((state) => state.cart);
  const [scroll, setScroll] = useState(true);
  const location = useLocation().pathname;
  const { loggedUser, logOut, userLoading } = useUser();
  const [role] = useRole();


  /**
   * Used for navbar animation when scroll
   */
  const listenScrollEvent = () => {
    if (location === "/") {
      window.scrollY > 650 ? setScroll(false) : setScroll(true);
    } else {
      setScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  /**
   * Used for log out
   */
  const handleLogOut = (e) => {
    e.preventDefault();
    logOut().then(() =>{
      toast.success('Log out Successful', {position:'top-right'})
      window.location.reload()
    });
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
            {role === "instructor" || (
              <ul>
                <li>
                  <NavLink to="/becomeInstructor">Become an Instructor</NavLink>
                </li>
              </ul>
            )}

            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle">
                <div className="indicator">
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
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                  <span className="badge badge-sm bg-primary border-none indicator-item">
                    {cartItems.totalItem}
                  </span>
                </div>
              </label>
              <div
                tabIndex={0}
                className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-primary/50 backdrop-blur-md shadow-2xl"
              >
                <div className="card-body">
                  <span className="font-bold text-lg">
                    {cartItems.totalItem} Items
                  </span>
                  <span className="text-info">
                    Subtotal: $ {cartItems.totalPrice}
                  </span>
                  <div className="card-actions">
                    <Link
                      to="/cart"
                      className="SVButton-2 text-primary py-2 px-4 text-base"
                    >
                      <span> View cart</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

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
                    <li className=" bg-primary/20 p-2 backdrop-blur-md">
                      <Link to="/cart">Cart</Link>
                    </li>
                    <li className=" bg-primary/20 p-2 backdrop-blur-md">
                      <Link to="/enrolledCourses">Enrolled Course</Link>
                    </li>
                    {role === "user" || (
                      <li className=" bg-primary/20 p-2 backdrop-blur-md">
                        <Link to="/myCourses">My Course</Link>
                      </li>
                    )}
                    <li className=" bg-primary/20 p-2 backdrop-blur-md">
                      <Link to={"/paymentHistory"}>
                        Payment History
                      </Link>
                    </li>
                    {role === "instructor" && (
                      <li className=" bg-primary/20 p-2 backdrop-blur-md">
                        <Link to="/addCourse">Add Course</Link>
                      </li>
                    )}
                    {role === "admin" && (
                      <li className=" bg-primary/20 p-2 backdrop-blur-md">
                        <Link to="/dashboard">Dashboard</Link>
                      </li>
                    )}
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
