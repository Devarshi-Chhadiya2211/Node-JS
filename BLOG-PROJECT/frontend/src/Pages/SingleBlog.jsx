import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import i7 from '../assets/img/person_1.jpg';

function SingleBlog() {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await fetch(`http://localhost:8080/blog/allBlogs/${id}`);
        if (!response.ok) {
          throw new Error('Blog not found');
        }
        const data = await response.json();
        setBlog(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchBlog();
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!blog) return <div>No blog found</div>;

  return (
    <div className="site-cover site-cover-sm same-height overlay single-page">
      <div className="container">
        <div className="row single-blog">
          <div className="col-lg-8 mx-auto">
            {/* Blog Header */}
            <div className="text-center">
              <h1 className="heading">{blog.title}</h1>
              <div className="post-meta mb-3">
                <span className="date">{new Date(blog.createdAt).toLocaleDateString()} <br/></span>
                {/* <span className="mx-1">&bullet;</span> */}
                <span>{blog.category}</span>
              </div>
            </div>

            {/* Blog Image */}
            <div className="post-img-wrapper mb-4">
              <img src={blog.image} alt={blog.title} className="img-fluid rounded"/>
            </div>

            {/* Blog Content */}
            <div className="post-content">
              <p className="lead mb-4">{blog.description}</p>
              
              {/* Author Info */}
              <div className="author d-flex align-items-center mt-5">
                <div className="author-pic">
                  <img src={i7} alt="Author" className="img-fluid rounded-circle"/>
                </div>
                <div className="author-info ms-3">
                  <strong>{blog.author || 'Anonymous'}</strong>
                  <span className="d-block">Author</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleBlog;
