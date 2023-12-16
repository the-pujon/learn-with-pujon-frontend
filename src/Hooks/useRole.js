import React, { useEffect, useState } from "react";
import { useUser } from "./useUser";

const useRole = () => {
  const [role, setRole] = useState(null);
  const { loggedUser } = useUser();

  useEffect(() => {
    fetch(`https://sv-ashen.vercel.app/api/users/${loggedUser?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setRole(data.role);
      })
      .catch((err) => console.error(err));
  }, [loggedUser]);

  return role;
};

export default useRole;
