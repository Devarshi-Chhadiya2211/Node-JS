import React, { useState } from 'react';
// import '../assets/css/loginsignup.css';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
      <ToastContainer />
      <form onSubmit={handleSubmit} method="post">
        <div className="top-row">
          <div className="field-wrap">
            <label>
              Username<span className="req">*</span>
            </label>
            <input
              type="text"
              name="username"
              value={state.username}
              onChange={handleChange}
              required
              autoComplete="off"
            />
          </div>
        </div>

        <div className="field-wrap">
          <label>
            Email Address<span className="req">*</span>
          </label>
          <input
            type="email"
            name="email"
            value={state.email}
            onChange={handleChange}
            required
            autoComplete="off"
          />
        </div>

        <div className="field-wrap">
          <label>
            Set A Password<span className="req">*</span>
          </label>
          <input
            type="password"
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
            name="role"
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
              required
              autoComplete="off"
            />
          </div>
        )}

        <button type="submit" className="button button-block">
          Get Started
        </button>
      </form>
    </>
  );
}

export default Signup;