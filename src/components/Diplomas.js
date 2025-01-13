import React from "react";
import { Link } from "react-router-dom";

import diplomasImage from "../assets/diplomas-image.jpg";

const diplomas = [
  { id: "cybersecurity", name: "Diploma in Cybersecurity" },
  { id: "digital-design-and-development", name: "Diploma in Digital Design and Development" },
];

function Diplomas() {
  return (
    <div className="diplomas">
      <header className="diplomas-header">
        <h1>Explore Our Diplomas</h1>
        <p>
          Discover programs tailored to meet the demands of the modern tech
          industry.
        </p>
      </header>
      <div className="diplomas-content">
        <img
          src={diplomasImage}
          alt="Diploma Programs"
          className="diplomas-image"
        />
        <div className="diplomas-list">
          <h2>Available Diplomas:</h2>
          <ul>
            {diplomas.map((diploma) => (
              <li key={diploma.id}>
                <Link to={`/diplomas/${diploma.id}`}>{diploma.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Diplomas;
