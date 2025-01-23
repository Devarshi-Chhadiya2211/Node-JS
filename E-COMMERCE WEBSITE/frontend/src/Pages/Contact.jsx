import React, { useState } from "react";
import "../assets/css/contact.css";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulate form submission
    console.log("Form Submitted", formData);
    setSubmitted(true);

    // Clear the form
    setFormData({ name: "", email: "", message: "" });

    // Optional: Reset submitted state after some time
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <>
    <Navbar/>
    <div className="contact-form-container">
      <h2>Contact Us</h2>
      {submitted && <p className="success-message">Thank you! Your message has been sent.</p>}
      <form onSubmit={handleSubmit} className="contact-form">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          rows="5"
          required
        />
        <button type="submit">Send Message</button>
      </form>
    </div>
    <Footer/>
    </>
  );
};

export default ContactForm;
