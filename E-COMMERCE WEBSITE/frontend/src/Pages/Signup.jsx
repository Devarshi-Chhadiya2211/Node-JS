import React, { useState } from 'react';
import '../assets/css/Signup.css';
import { Link, Links, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

function Signup() {
  const [role, setRole] = useState('');
  const navigate = useNavigate();

  const [state, setState] = useState({
    username: '',
    email: '',
    password: '',
    role: '',
    adminCode: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });

    if (name === 'role') {
      setRole(value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(state);

    try {
      const response = await fetch('http://localhost:6276/user/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(state),
      });

      const result = await response.json();
      if (response.ok) {
        toast.success(result.msg);
        setTimeout(() => {
          navigate('/login');
        }, 3000);
      } else {
        toast.error(result.msg);
      }
    } catch (error) {
      console.error('Error:', error);
      toast.error('An error occurred while registering.');
    }
  };

  return (
    <>
      <Navbar />
      <ToastContainer />
      <div class="contents order-2 order-md-1">

        <div class="container">
          <div class="row align-items-center justify-content-center">
            <div class="col-md-7">
              <h3>Signin to <strong>E-commerce website</strong></h3>

              <form onSubmit={handleSubmit} method="post">
                <div className="form-group first">
                  <div className="field-wrap">
                    <label>
                      Username<span className="req">*</span>
                    </label>
                    <input
                      type="text"
                      name="username"
                      value={state.username}
                      onChange={handleChange}
                      required class="form-control"
                      autoComplete="off"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label>
                    Email Address<span className="req">*</span>
                  </label>
                  <input
                    type="email" class="form-control"
                    name="email"
                    value={state.email}
                    onChange={handleChange}
                    required
                    autoComplete="off"
                  />
                </div>

                <div className="form-group">
                  <label>
                    Set A Password<span className="req">*</span>
                  </label>
                  <input
                    type="password" class="form-control"
                    name="password"
                    value={state.password}
                    onChange={handleChange}
                    required
                    autoComplete="off"
                  />
                </div>

                <div className="field-wrap">
                  <label>
                    Select Role<span className="req">*</span>
                  </label>
                  <select
                    name="role" class="form-control"
                    value={state.role}
                    onChange={handleChange}
                    required
                  >
                    <option value="" disabled>
                      Choose Role
                    </option>
                    <option value="user">User</option>
                    <option value="admin">Admin</option>
                  </select>
                </div>

                {role === 'admin' && (
                  <div className="field-wrap">
                    <label>
                      Admin Code<span className="req">*</span>
                    </label>
                    <input
                      type="text"
                      name="adminCode"
                      value={state.adminCode}
                      onChange={handleChange}
                      required class="form-control"
                      autoComplete="off"
                    />
                  </div>
                )}

                <button type="submit" class="btn btn-block btn-primary">
                  Get Started
                </button>
              </form>
              <h6>Already have an account <Link to="/login">Login here</Link></h6>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Signup;
