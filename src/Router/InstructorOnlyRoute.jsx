import React from "react";
import { Navigate } from "react-router-dom";
import useRole from "../Hooks/useRole";
import { useUser } from "../Hooks/useUser";

const InstructorOnlyRoute = ({ children }) => {
  const { loggedUser, userLoading } = useUser();

  const [role, roleLoading] = useRole()

  if (userLoading||roleLoading) {
    return <div>loading...</div>
  }

  if (loggedUser && role === "instructor") {
    return children;
  }

  return <Navigate to="/error"></Navigate>;
};

export default InstructorOnlyRoute;
