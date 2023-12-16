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
import PrivateRoute from "./PrivateRoute";
import MyCourses from "../pages/ClientSide/Instructors/MyCourses/MyCourses";
import AllTransactions from "../pages/Dashboard/Admin/AllTransactions/AllTransactions";
import PaymentHistory from "../pages/ClientSide/PaymentHistory/PaymentHistory";
import EnrolledCourses from "../pages/ClientSide/EnrolledCourses/EnrolledCourses";
import ManageCategories from "../pages/Dashboard/Admin/ManageCategories/ManageCategories.jsx";

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
        element: (
          <PrivateRoute>
            <BecomeInstructor />
          </PrivateRoute>
        ),
      },
      {
        path: "instructors/:id",
        element: <Instructor />,
      },

      {
        path: "addCourse",
        element: (
          <PrivateRoute>
            <AddCourse />
          </PrivateRoute>
        ),
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "myCourses",
        element: (
          <PrivateRoute>
            <MyCourses />
          </PrivateRoute>
        ),
      },
      {
        path: "paymentHistory",
        element: (
          <PrivateRoute>
            <PaymentHistory />
          </PrivateRoute>
        ),
      },
      {
        path: "enrolledCourses",
        element: (
          <PrivateRoute>
            <EnrolledCourses />
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "instructorApplication",
        element: (
          <PrivateRoute>
            <InstructorRequest />
          </PrivateRoute>
        ),
      },
      {
        path: "courseRequest",
        element: (
          <PrivateRoute>
            <CourseRequest />
          </PrivateRoute>
        ),
      },
      {
        path: "manageUsers",
        element: (
          <PrivateRoute>
            <ManageUsers />
          </PrivateRoute>
        ),
      },
      {
        path: "allTransactions",
        element: (
          <PrivateRoute>
            <AllTransactions />
          </PrivateRoute>
        ),
      },
      {
        path: "categories",
        element: (
          <PrivateRoute>
            <ManageCategories />
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/drop",
    element: <ManageCategories />,
  }
]);
