import React, { useEffect, useState } from "react";
import { useUser } from "./useUser";

const useRole = () => {
  const [role, setRole] = useState(null);
  const { loggedUser } = useUser();

  useEffect(() => {
    fetch(`http://localhost:5000/api/users/${loggedUser?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setRole(data.role);
      })
      .catch((err) => console.error(err));
  });

  return role;
};

export default useRole;
