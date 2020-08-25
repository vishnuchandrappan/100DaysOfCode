import React, { useState, useEffect } from "react";
import { Axios } from "../../api";

export default function Users() {
  const [specializations, setSpecializations] = useState([]);
  useEffect(() => {
    Axios
      .get("/users")
      .then((response) => {
        console.log("Response", response);
        setSpecializations(response.data);
      })
      .catch((error) => {
        console.log("Error", error);
      });
  }, []);
  return (
    <div className="container users_container">
      <h1>Users List</h1> <hr />
      {specializations.length === 0 && <h5>Loading...</h5>}
      <div>
        {specializations.map((item) => (
          <h3 key={item.id}>{item.name}</h3>
        ))}
      </div>
    </div>
  );
}
