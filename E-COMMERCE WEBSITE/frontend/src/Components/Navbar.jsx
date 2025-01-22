// Navbar.jsx
import React from "react";
import "../assets/css/navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">E-Commerce</div>
      <ul className="nav-links">
        <Link to="/"><li>Home</li></Link>
        <Link to="/product"><li>Products</li></Link>
        {/* <Link><li>Cart</li></Link> */}
        <Link><li>Contact</li></Link>
      </ul>
    </nav>
  );
};

export default Navbar;
