import React, { useEffect, useState } from "react";
import { useUser } from "./useUser";

const useRole = () => {
  const [role, setRole] = useState(null);
  const [roleLoading, setRoleLoading] = useState(true)
  const { loggedUser } = useUser();

  const token = localStorage.getItem('access-token')

  useEffect(() => {

    fetch(`http://localhost:5000/api/users/${loggedUser?.email}`,{
      headers:{
        "Content-type": "application/json",
        Authorization: `Bearer ${token}`
      }
    })
      .then((res) => res.json())
      .then((data) => {
        setRole(data?.role);
        setRoleLoading(false)
      })
      .catch((err) => console.error(err));
  }, [loggedUser]);

  return [role, roleLoading];
};

export default useRole;
