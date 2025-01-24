// HomePage.jsx
import React, { useEffect, useState } from "react";
import "../assets/css/home.css";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
// import Navbar from "./Navbar";
// import Footer from "./Footer";

const HomePage = () => {

  const [Products, setProducts] = useState([]);

  const handleLike = async (ProductId) => {
  };

  useEffect(() => {
    const fetchProducts = async () => {
    };

    fetchProducts();
  }, []);

  return (
    <div className="homepage-container">
      <Navbar/>
      <header className="homepage-header">
        <h1>Welcome to Our E-Commerce Store</h1>
        <p>Find the best products at unbeatable prices!</p>
        <button className="shop-now-btn">Shop Now</button>
      </header>


       <div className="row">
          {Products.map((Product) => (
            <div key={Product._id} className="col-md-4 mb-4">
              <div className="card h-100">
                <Link to={`/product/${Product._id}`}>
                  <img src={Product.image} className="card-img-top" alt={Product.title} />
                </Link>
                <div className="card-body">
                  <h4>Price: {Product.price}</h4>
                  <h5 className="card-title">{Product.title}</h5>
                  <p className="card-text text-truncate">{Product.description}</p>
                  <p className="text-muted">{Product.category}</p>
                </div>
                
              </div>
            </div>
          ))}
        </div>
      {/* <main className="homepage-main">
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
      </main> */}

      <Footer/>
    </div>
  );
};

export default HomePage;
