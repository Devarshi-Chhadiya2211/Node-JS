import React, { useState } from "react";
import { Link, Links, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import  {jwtDecode}  from 'jwt-decode';
import '../assets/css/signup.css'
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const Login=()=> {
  const [state, setState] = useState({
    email: '',
    password: '',
  });

  const navigate = useNavigate(); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(state);
    try {
      const response = await fetch('http://localhost:6276/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(state),
      });

      const result = await response.json();
      if (response.ok) {
        toast.success(result.msg);
        const token = result.token;

        sessionStorage.setItem("token", token);

        const decoded = jwtDecode(token); 

        if (decoded.role === 'admin') {
          setTimeout(() => {
            navigate('/admin');
          }, 3000);
        } else {
          setTimeout(() => {
            navigate('/product');
          }, 3000);
        }
      } else {
        toast.error(result.msg);
      }
    } catch (error) {
      console.error('Error:', error);
      toast.error('An error occurred while logging in.');
    }
  };
  return (
    <>
    <Navbar/>
    <ToastContainer />
  {/* <div class="half"> */}
    {/* <div class="bg order-1 order-md-2" style={{
        backgroundImage: "url('https://preview.colorlib.com/theme/bootstrap/login-form-02/images/bg_1.jpg')",
      }}></div> */}
    <div class="contents order-2 order-md-1">

      <div class="container">
        <div class="row align-items-center justify-content-center">
          <div class="col-md-7">
            <h3>Login to <strong>E-commerce website</strong></h3>
            {/* <p class="mb-4">Lorem ipsum dolor sit amet elit. Sapiente sit aut eos consectetur adipisicing.</p> */}
            <form onSubmit={handleSubmit}>
              <div class="form-group first">
                <label for="username">Username</label>
                <input type="text" class="form-control" name="email" onChange={handleChange} placeholder="your-email@gmail.com" id="username"/>
              </div>
              <div class="form-group last mb-3">
                <label for="password">Password</label>
                <input type="password" name="password" class="form-control" onChange={handleChange} placeholder="Your Password" id="password"/>
              </div>
              
              <input type="submit" value="Log In" class="btn btn-block btn-primary"/>

            </form>
            <h6>Dont have an account?<Link to="/signup">Signup here</Link></h6>
          </div>
        </div>
      </div>
    </div>

    
  {/* </div> */}
    <Footer/>
    </>
  )
}

export default Login
