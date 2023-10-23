import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/ClientSide/Home/Home/Home";
import Instructors from "../pages/ClientSide/Instructors/Instructors/Instructors";
import Courses from "../pages/ClientSide/Courses/Courses/Courses";
import Authentication from "../pages/Authentication/Authentication/Authentication";
import BecomeInstructor from "../pages/ClientSide/Instructors/BecomeInstructor/BecomeInstructor";
import Instructor from "../pages/ClientSide/Instructors/Instructor/Instructor";
import InstructorRequest from "../pages/Dashboard/Admin/InstructorRequest/InstructorRequest";
import AddCourse from "../pages/ClientSide/Instructors/AddCourse/AddCourse.jsx";
import Cart from "../pages/ClientSide/Cart/Cart";
import Dashboard from "../Layout/Dashboard";
import CourseRequest from "../pages/Dashboard/Admin/CourseRequest/CourseRequest";
import ManageUsers from "../pages/Dashboard/Admin/ManageUsers/ManageUsers";
//import AddCourse from "../pages/ClientSide/Instructors/AddCourse/AddCourse";

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "instructors",
        element: <Instructors />,
      },
      {
        path: "courses",
        element: <Courses />,
      },
      {
        path: "auth",
        element: <Authentication />,
      },
      {
        path: "becomeInstructor",
        element: <BecomeInstructor />,
      },
      {
        path: "instructors/:id",
        element: <Instructor />,
      },

      {
        path: "addCourse",
        element: <AddCourse />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "instructorApplication",
        element: <InstructorRequest />,
      },
      {
        path: "courseRequest",
        element: <CourseRequest />,
      },
      {
        path: "manageUsers",
        element: <ManageUsers />,
      },
    ],
  },
]);
