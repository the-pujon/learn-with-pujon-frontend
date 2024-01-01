import React from "react";
import { Navigate } from "react-router-dom";
import useRole from "../Hooks/useRole";
import { useUser } from "../Hooks/useUser";

const AdminOnlyRoute = ({ children }) => {
  const { loggedUser, userLoading } = useUser();

  const role = useRole(loggedUser?.email);
  console.log(role);

  if (userLoading) {
    return <div>loading</div>
  }

  if (!userLoading && role === "admin") {
    return children;
  }

  return <Navigate to="/error"></Navigate>;
};

export default AdminOnlyRoute;
