import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/ClientSide/Home/Home/Home";
import Instructors from "../pages/ClientSide/Instructors/Instructors/Instructors";
import Courses from "../pages/ClientSide/Courses/Courses/Courses";
import BecomeInstructor from "../pages/ClientSide/Instructors/BecomeInstructor/BecomeInstructor";
import Instructor from "../pages/ClientSide/Instructors/Instructor/Instructor";
import AddCourse from "../pages/ClientSide/Instructors/AddCourse/AddCourse.jsx";
import Cart from "../pages/ClientSide/Cart/Cart";
import ManageUsers from "../pages/Dashboard/Admin/ManageUsers/ManageUsers";
import PrivateRoute from "./PrivateRoute";
import MyCourses from "../pages/ClientSide/Instructors/MyCourses/MyCourses";
import AllTransactions from "../pages/Dashboard/Admin/AllTransactions/AllTransactions";
import PaymentHistory from "../pages/ClientSide/PaymentHistory/PaymentHistory";
import EnrolledCourses from "../pages/ClientSide/EnrolledCourses/EnrolledCourses";
import ManageCategories from "../pages/Dashboard/Admin/ManageCategories/ManageCategories.jsx";
import CourseDetails from "../pages/ClientSide/CourseDetails/CourseDetails.jsx";
import AdminOnlyRoute from "./AdminOnlyRoute.jsx";
import ErrorPage from "../pages/ErrorPage.jsx";
import InstructorOnlyRoute from "./InstructorOnlyRoute.jsx";
import DashboardLayout from "../Layout/DashboardLayout.jsx";
import Dashboard from "../pages/Dashboard/Admin/Dashboard/Dashboard.jsx";
import ManageInstructors from "../pages/Dashboard/Admin/ManageInstructors/ManageInstructors.jsx";
import ManageCourses from "../pages/Dashboard/Admin/ManageCourses/ManageCourses.jsx";
import LoginPage from "../pages/Authentication/LoginPage/LoginPage.jsx";
import SignUpPage from "../pages/Authentication/SignUpPage/SignUpPage.jsx";
import SuccessfulPaymentEndpoint from "../pages/ClientSide/paymentSuccess/PaymentSuccess.jsx";

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path:"/paid",
        element:<SuccessfulPaymentEndpoint/>
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
            <InstructorOnlyRoute>
              <AddCourse />
            </InstructorOnlyRoute>
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
      {
        path: "courseDetails/:id",
        element: <CourseDetails />,
      },
      {
        path:"/login",
        element: <LoginPage/>
      },
      {
        path:"/signup",
        element: <SignUpPage/>
      }
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <AdminOnlyRoute>
          <DashboardLayout />
        </AdminOnlyRoute>
      </PrivateRoute>
    ),
    children: [
      {
        path: '/dashboard',
        element: <PrivateRoute>
        <AdminOnlyRoute>
          <Dashboard />
        </AdminOnlyRoute>
      </PrivateRoute>
      },
      {
        path: "manageInstructor",
        element: (
          <PrivateRoute>
            <AdminOnlyRoute>
              <ManageInstructors/>
            </AdminOnlyRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "manageCourses",
        element: (
          <PrivateRoute>
            <AdminOnlyRoute>
              <ManageCourses />
            </AdminOnlyRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "manageUsers",
        element: (
          <PrivateRoute>
            <AdminOnlyRoute>
              <ManageUsers />
            </AdminOnlyRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "allTransactions",
        element: (
          <PrivateRoute>
            <AdminOnlyRoute>
              <AllTransactions />
            </AdminOnlyRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "categories",
        element: (
          <PrivateRoute>
            <AdminOnlyRoute>
              <ManageCategories />
            </AdminOnlyRoute>
          </PrivateRoute>
        ),
      },
    ],
  },
]);
