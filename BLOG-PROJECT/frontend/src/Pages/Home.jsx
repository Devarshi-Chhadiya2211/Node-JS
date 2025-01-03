import React, { useEffect, useState } from 'react'
import '../assets/css/home.css'
import i7 from '../assets/img/person_1.jpg' 
import Email from '../Components/Email'
import { Link } from 'react-router-dom'

function Home() {
	const [blogs, setBlogs] = useState([]);

	useEffect(() => {
		const fetchBlogs = async () => {
			try {
				const response = await fetch("http://localhost:8080/blog/allBlogs");
				if (!response.ok) {
					throw new Error("Failed to fetch blogs");
				}
				const data = await response.json();
				setBlogs(data);
				console.log("Fetched blogs:", data); // For debugging
			} catch (error) {
				console.error("Error fetching blogs:", error);
			}
		};

		fetchBlogs();
	}, []);

	return (
		<>
			<div className="section">
				<div className="container">
					<div className="row g-5">
						{blogs.map((blog, index) => (
							<div className="col-lg-4" key={blog._id || index}>
								<div className="post-entry d-block small-post-entry-v">
									<div className="thumbnail">
										<Link to={`/allblog/${blog._id}`}>
											<img src={blog.image} alt={blog.title} className="img-fluid"/>		
										</Link>
									</div>
									<div className="content">
										<div className="post-meta mb-1">
											<span className="category">{blog.category}</span>
											<span className="date">{new Date(blog.createdAt).toLocaleDateString()}</span>
										</div>
										<h2 className="heading mb-3">
											<Link to={`/allblog/${blog._id}`}>{blog.title}</Link>
										</h2>
										<p>{blog.description}</p>

										<Link to={`/blog/${blog._id}`} className="post-author d-flex align-items-center">
											<div className="author-pic">
												<img src={i7} alt="Author"/>
											</div>
											<div className="text-center">
												<strong>{blog.author || 'Anonymous'}</strong>
												<span>Author</span>
											</div>
										</Link>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>

			<Email/>
		</>
	)
}

export default Home
