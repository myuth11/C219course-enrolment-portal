import React from "react";
import { useLocation } from "react-router-dom";

function Confirmation() {
  const location = useLocation();
  const { name, email, course } = location.state || {};

  return (
    <div>
      <h2>Thank You!</h2>
      <p>Name: {name}</p>
      <p>Email: {email}</p>
      <p>Course: {course}</p>
    </div>
  );
}

export default Confirmation;
