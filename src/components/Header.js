import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";

function Header() {
  return (
    <nav className="header">
      <img src={logo} alt="Logo" className="header-logo" />
      <ul className="header-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/diplomas">Diplomas</Link></li>
        <li><Link to="/register">Register</Link></li>
      </ul>
    </nav>
  );
}

export default Header;
