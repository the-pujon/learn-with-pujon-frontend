import React, { useEffect, useState } from "react";
import { useUser } from "./useUser";

const useRole = () => {
  const [role, setRole] = useState(null);
  const { loggedUser } = useUser();

  const token = localStorage.getItem('access-token')
  console.log(token)

console.log(loggedUser?.email)
  useEffect(() => {
    fetch(`http://localhost:5000/api/users/${loggedUser?.email}`,{
      headers:{
        "Content-type": "application/json",
        Authorization: `Bearer ${token}`
      }
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        setRole(data.role);
      })
      .catch((err) => console.error(err));
  }, [loggedUser]);

  return role;
};

export default useRole;
