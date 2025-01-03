import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import '../assets/css/login.css'
// import "./AddBlog.css";

function AddBlog() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    image: "",
    category: ""
  });
  const [token, setToken] = useState(localStorage.getItem("token")|| null);
//   const [formSubmitted, setFormSubmitted] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };



  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:8080/blog/add`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          ...(token && { Authorization: `Bearer ${token}` })
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const resData = await response.json();
      console.log('Response:', resData);
      alert("Blog added successfully!");
      navigate('/');

    } catch (err) {
      console.error('Error details:', err);
      alert("Error adding blog: " + (err.message || "Unknown error occurred"));
    } 
  };

  return (

    <>
    
    <div id="loginForm">
		<h1>Add your Blog here</h1>
		<small>Let's get started with your 30 days free trial.</small>

		<form id="createAccountForm" onSubmit={handleSubmit}>
        <input
                type="text"
                id="title"
                name="title"
                placeholder="Enter the blog title"
                value={formData.title}
                onChange={handleInputChange}
                required
              />
                <input
                type="text"
                id="description"
                // aria-rowspan={5}
                name="description"
                placeholder="Enter the blog description"
                value={formData.description}
                onChange={handleInputChange}
                required
              />
                <input
                type="text"
                id="image"
                name="image"
                placeholder="Enter the image URL"
                value={formData.image}
                onChange={handleInputChange}
                required
              />
            <input
                type="text"
                id="category"
                name="category"
                placeholder="Enter the blog category"
                value={formData.category}
                onChange={handleInputChange}
              />
        
            <br />
            <button type="submit" id="createAccount">Add-Blog</button>
		</form>
	</div>
    {/* {formSubmitted && (
        <div className="success-message">
          <h3>Blog Added Successfully!</h3>
        </div>
      )} */}

    </>
   
    //   {formSubmitted && (
    //     <div className="success-message">
    //       <h3>Blog Added Successfully!</h3>
    //     </div>
    //   )}
    // </div>
  );
}

export default AddBlog;