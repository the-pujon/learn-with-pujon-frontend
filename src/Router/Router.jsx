import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/ClientSide/Home/Home/Home";
import Instructors from "../pages/ClientSide/Instructors/Instructors/Instructors";
import Courses from "../pages/ClientSide/Courses/Courses/Courses";

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
    ],
  },
]);
