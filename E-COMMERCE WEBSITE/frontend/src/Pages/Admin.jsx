// AdminPage.jsx
import React from "react";
import "../assets/css/admin.css";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
// import Navbar from "./Navbar";
// import Footer from "./Footer";

const Admin= () => {
  return (
    <div className="admin-page-container">
      <Navbar/>
      <header className="admin-header">
        <h1>Admin Dashboard</h1>
        <p>Manage products, orders, and users efficiently</p>
      </header>

      <main className="admin-main">
        <div className="admin-card">
          <h2>Products</h2>
          <p>Add, update, or delete products.</p>
          <button>Manage Products</button>
        </div>
        <div className="admin-card">
          <h2>Orders</h2>
          <p>View and manage customer orders.</p>
          <button>View Orders</button>
        </div>
        <div className="admin-card">
          <h2>Users</h2>
          <p>Manage user accounts and permissions.</p>
          <button>Manage Users</button>
        </div>
      </main>

      <Footer/>
    </div>
  );
};

export default Admin;