import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faHeart, faBookmark } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
// import Header from "../Components/Header";
// import Footer from "../Components/Footer";

const HomePage = () => {
  const [blogs, setBlogs] = useState([]);

  const handleLike = async (blogId) => {
    try {
      const response = await fetch(`http://localhost:6276/${blogId}/like`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${sessionStorage.getItem("token")}`,
        },
        body: JSON.stringify({ userId: sessionStorage.getItem("UserId") }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        alert(errorData.msg);
        return;
      }

      const updatedBlog = await response.json();
      setBlogs((prevBlogs) =>
        prevBlogs.map((blog) =>
          blog._id === updatedBlog._id ? updatedBlog : blog
        )
      );
    } catch (error) {
      console.error("Error liking the blog:", error);
    }
  };

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch("http://localhost:6276/allBlogs");
        if (!response.ok) {
          throw new Error("Failed to fetch blogs");
        }
        const data = await response.json();
        setBlogs(data);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <>
      {/* <Header /> */}

      <div className="container my-5">
        

        <div className="row">
          {blogs.map((blog) => (
            <div key={blog._id} className="col-md-4 mb-4">
              <div className="card h-100">
                <Link to={`/allblogs/${blog._id}`}>
                  <img src={blog.image} className="card-img-top" alt={blog.title} />
                </Link>
                <div className="card-body">
                  <h5 className="card-title">{blog.title}</h5>
                  <p className="card-text text-truncate">{blog.description}</p>
                  <p className="text-muted">{blog.category}</p>
                </div>
                
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* <Footer /> */}
    </>
  );
};

export default HomePage;