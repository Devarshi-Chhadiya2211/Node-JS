import  { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
// import gsap from "gsap";
import "../assets/css/login.css"

function Register() {
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const navigate = useNavigate();

  
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData)
    try {
      await axios.post("http://localhost:8080/register", formData);
      alert("Registration successful! Please login.");
      navigate("/login");
    } catch (error) {
      console.error(error);
      alert("Failed to register.");
    }
  };

  return (
    <>
      {/* <Header/> */}

      <div id="loginForm">
		<h1>Create an account</h1>
		<small>Let's get started with your 30 days free trial.</small>
		<form id="createAccountForm"  onSubmit={handleSubmit} >
			<input type="text" name="name" id="name" 
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
      placeholder="Name" required/>
			<input type="email" name="email" id="email"
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
       placeholder="Email" required/>
			<input type="password" name="password"
        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
       id="password" placeholder="Password" required/>
			<button type="submit" id="createAccount">Create account</button>
		</form>
		<span class="login">
			<p>Already have an account? </p><Link to={"/login"}>Login</Link>
		</span>
	</div>


      {/* <Footer/> */}
    </>
    // <form className="register" onSubmit={handleSubmit} encType="multipart/form-data">
    //   <h2>Register</h2>
    //   <input
    //     type="text"
    //     placeholder="Name"
    //     value={formData.name}
    //     onChange={(e) => setFormData({ ...formData, name: e.target.value })}
    //     required
    //   />
    //   <input
    //     type="email"
    //     placeholder="Email"
    //     value={formData.email}
    //     onChange={(e) => setFormData({ ...formData, email: e.target.value })}
    //     required
    //   />
    //   <input
    //     type="password"
    //     placeholder="Password"
    //     value={formData.password}
    //     onChange={(e) => setFormData({ ...formData, password: e.target.value })}
    //     required
    //   />
    //   <button type="submit">Register</button>
    // </form>
  );
}

export default Register;