// Navbar.jsx
import React from "react";
import "../assets/css/navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">E-Commerce</div>
      <ul className="nav-links">
        <li>Home</li>
        <li>Products</li>
        <li>Cart</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;
