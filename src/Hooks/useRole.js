import React, { useEffect, useState } from "react";

const useRole = (email) => {
  console.log(email);
  const [role, setRole] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/api/users/${email}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setRole(data.role);
      })
      .catch((err) => console.error(err));
  });

  return role;
};

export default useRole;
