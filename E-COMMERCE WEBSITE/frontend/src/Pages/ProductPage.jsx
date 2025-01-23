// ProductPage.jsx
import React, { useState } from "react";
import "../assets/css/product.css";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
// import Navbar from "./Navbar";
// import Footer from "./Footer";

const ProductPage = () => {
  
  const [products] = useState([
    { id: 1, name: "Product 1", price: 10, category: "Category 1", size: "M", color: "Red" },
    { id: 2, name: "Product 2", price: 20, category: "Category 2", size: "L", color: "Blue" },
    { id: 3, name: "Product 3", price: 15, category: "Category 1", size: "S", color: "Green" },
    { id: 4, name: "Product 4", price: 25, category: "Category 3", size: "XL", color: "Yellow" },
    { id: 5, name: "Product 5", price: 30, category: "Category 2", size: "M", color: "Black" },
  ]);

  const [filters, setFilters] = useState({
    category: "",
    size: "",
    color: "",
    sortBy: ""
  });

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  const filteredProducts = products
    .filter((product) =>
      filters.category ? product.category === filters.category : true
    )
    .filter((product) => (filters.size ? product.size === filters.size : true))
    .filter((product) => (filters.color ? product.color === filters.color : true))
    .sort((a, b) => {
      if (filters.sortBy === "price-asc") return a.price - b.price;
      if (filters.sortBy === "price-desc") return b.price - a.price;
      return 0;
    });

  return (
    <div className="product-page-container">
      <Navbar/>
      <header className="product-header">
        <h1>Our Products</h1>
        <p>Discover the best products curated just for you!</p>
      </header>

      <div className="filters">
        <select name="category" onChange={handleFilterChange} value={filters.category}>
          <option value="">All Categories</option>
          <option value="Category 1">Category 1</option>
          <option value="Category 2">Category 2</option>
          <option value="Category 3">Category 3</option>
        </select>

        <select name="size" onChange={handleFilterChange} value={filters.size}>
          <option value="">All Sizes</option>
          <option value="S">S</option>
          <option value="M">M</option>
          <option value="L">L</option>
          <option value="XL">XL</option>
        </select>

        <select name="color" onChange={handleFilterChange} value={filters.color}>
          <option value="">All Colors</option>
          <option value="Red">Red</option>
          <option value="Blue">Blue</option>
          <option value="Green">Green</option>
          <option value="Yellow">Yellow</option>
          <option value="Black">Black</option>
        </select>

        <select name="sortBy" onChange={handleFilterChange} value={filters.sortBy}>
          <option value="">Sort by</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
        </select>
      </div>

      <main className="product-main">
        <div className="product-list">
          {filteredProducts.map((product) => (
            <div key={product.id} className="product-card">
              <img
                src={`https://via.placeholder.com/300?text=${product.name}`}
                alt={product.name}
              />
              <h3>{product.name}</h3>
              <p>Price: ${product.price.toFixed(2)}</p>
              <p>Category: {product.category}</p>
              <p>Size: {product.size}</p>
              <p>Color: {product.color}</p>
              <button>Add to Cart</button>
            </div>
          ))}
        </div>
      </main>

      <Footer/>
    </div>
  );
};

export default ProductPage;
