import React from "react";
import { Navigate } from "react-router-dom";
import useRole from "../Hooks/useRole";
import { useUser } from "../Hooks/useUser";

const InstructorOnlyRoute = ({ children }) => {
  const { loggedUser, userLoading } = useUser();

  const role = useRole(loggedUser?.email);

  if (userLoading) {
    return <div>loading</div>;
  }

  if (!userLoading && role === "instructor") {
    return children;
  }

  return <Navigate to="/error"></Navigate>;
};

export default InstructorOnlyRoute;
