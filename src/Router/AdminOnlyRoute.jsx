import React from "react";
import { Navigate } from "react-router-dom";
import useRole from "../Hooks/useRole";
import { useUser } from "../Hooks/useUser";

const AdminOnlyRoute = ({ children }) => {
  const { loggedUser, userLoading } = useUser();

  const [role, roleLoading] = useRole()

  if (userLoading||roleLoading) {
    return <div>loading</div>
  }

  if (loggedUser && role === "admin") {
    return children;
  }

  return <Navigate to="/error"></Navigate>;
};

export default AdminOnlyRoute;
