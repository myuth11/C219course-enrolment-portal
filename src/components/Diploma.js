import React from "react";
import { useParams, Link } from "react-router-dom";

const modules = {
  cybersecurity: [
    { id: "101", name: "Introduction to Cybersecurity" },
    { id: "102", name: "Ethical Hacking" },
  ],
  "software-engineering": [
    { id: "201", name: "Web Development" },
    { id: "202", name: "Mobile App Development" },
  ],
};

function Diploma() {
  const { diplomaId } = useParams();
  const diplomaModules = modules[diplomaId] || [];

  return (
    <div>
      <h2>Modules</h2>
      <ul>
        {diplomaModules.map((module) => (
          <li key={module.id}>
            <Link to={`/diplomas/${diplomaId}/${module.id}`}>{module.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Diploma;
