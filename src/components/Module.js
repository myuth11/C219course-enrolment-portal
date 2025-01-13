import React from "react";
import { useParams } from "react-router-dom";

function Module() {
  const { moduleId } = useParams();

  return (
    <div>
      <h3>Module Details</h3>
      <p>You're viewing details for module ID: {moduleId}</p>
    </div>
  );
}

export default Module;
