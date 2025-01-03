import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "../assets/css/login.css"

function Login() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8080/login", formData);
      localStorage.setItem("token", response.data.token);
      
      console.log(response.data.token)
      alert("Login successful!");
      navigate("/");
    } catch (error) {
      console.error(error);
      alert("Failed to log in.");
    }
  };

  return (
    <>

    {/* <Header/> */}

    <div id="loginForm">
		<h1>Already have an account</h1>
		<small>Let's get started with your 30 days free trial.</small>
		<form id="createAccountForm" onSubmit={handleSubmit}>
	
        <input
        type="email"
        placeholder="Email"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        required
        name="email"
      />
      <input
      name="password"
        type="password"
        placeholder="Password"
        value={formData.password}
        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
        required
      />
      <button type="submit" >Login</button>
    
      <button 
        type="button" 
        id="createAccount"
        className="forgot-password-btn" 
        onClick={() => navigate("/reset-password")}>
        Forgot Password?
      </button>
      
      	</form>
		<span class="login">
			<p>Dont have an account</p><Link to={"/signup"}>Register here</Link>
		</span>
	</div>

    </>
  );
}

export default Login;