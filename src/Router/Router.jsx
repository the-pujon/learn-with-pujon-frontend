import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/ClientSide/Home/Home/Home";
import Instructors from "../pages/ClientSide/Instructors/Instructors/Instructors";
import Courses from "../pages/ClientSide/Courses/Courses/Courses";
import Authentication from "../pages/Authentication/Authentication/Authentication";
import BecomeInstructor from "../pages/ClientSide/Instructors/BecomeInstructor/BecomeInstructor";
import Instructor from "../pages/ClientSide/Instructors/Instructor/Instructor";
import InstructorRequest from "../pages/Dashboard/Admin/InstructorRequest/InstructorRequest";

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
        path: "requests",
        element: <InstructorRequest />,
      },
    ],
  },
]);
