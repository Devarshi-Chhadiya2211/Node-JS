// HomePage.jsx
import React from "react";
import "../assets/css/home.css";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
// import Navbar from "./Navbar";
// import Footer from "./Footer";

const HomePage = () => {
  return (
    <div className="homepage-container">
      <Navbar/>
      <header className="homepage-header">
        <h1>Welcome to Our E-Commerce Store</h1>
        <p>Find the best products at unbeatable prices!</p>
        <button className="shop-now-btn">Shop Now</button>
      </header>

      <main className="homepage-main">
        <h2>Featured Products</h2>
        <div className="product-grid">
          <div className="product-card">
            <img src="https://via.placeholder.com/150" alt="Product 1" />
            <h3>Product 1</h3>
            <p>$29.99</p>
            <button>Add to Cart</button>
          </div>
          <div className="product-card">
            <img src="https://via.placeholder.com/150" alt="Product 2" />
            <h3>Product 2</h3>
            <p>$49.99</p>
            <button>Add to Cart</button>
          </div>
          <div className="product-card">
            <img src="https://via.placeholder.com/150" alt="Product 3" />
            <h3>Product 3</h3>
            <p>$19.99</p>
            <button>Add to Cart</button>
          </div>
        </div>
      </main>

      <Footer/>
    </div>
  );
};

export default HomePage;
