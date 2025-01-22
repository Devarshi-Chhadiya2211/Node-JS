import React, { useState } from 'react';
import '../assets/css/addpro.css';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const AddPro = () => {
  const [product, setProduct] = useState({
    name: '',
    description: '',
    price: '',
    imageUrl: '',
  });

  const [products, setProducts] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (product.name && product.price) {
      setProducts([...products, product]);
      setProduct({ name: '', description: '', price: '', imageUrl: '' });
    } else {
      alert('Please provide product name and price!');
    }
  };

  return (
    <>
    <Navbar/>
    <div className="product-form-container">
         

      <h2>Add Product</h2>
      <form onSubmit={handleSubmit} className="product-form">
        <input
          type="text"
          name="name"
          placeholder="Product Name"
          value={product.name}
          onChange={handleChange}
          required
        />
        <textarea
          name="description"
          placeholder="Product Description"
          value={product.description}
          onChange={handleChange}
        />
        <input
          type="number"
          name="price"
          placeholder="Price"
          value={product.price}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="imageUrl"
          placeholder="Image URL"
          value={product.imageUrl}
          onChange={handleChange}
        />
        <button type="submit">Add Product</button>
      </form>

      <div className="product-list">
        <h3>Products</h3>
        {products.length === 0 ? (
          <p>No products added yet.</p>
        ) : (
          products.map((prod, index) => (
            <div key={index} className="product-card">
              {prod.imageUrl && <img src={prod.imageUrl} alt={prod.name} />}
              <h4>{prod.name}</h4>
              <p>{prod.description}</p>
              <p><strong>Price:</strong> ${prod.price}</p>
            </div>
          ))
        )}
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default AddPro;
