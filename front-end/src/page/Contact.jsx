import React, { useState } from "react";
import "../style/Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({ email: "", message: "" });

  // Handle form input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Email: ${formData.email}\nMessage: ${formData.message}`);
    setFormData({ email: "", message: "" });
  };

  return (
    <div className="contact-container">
      <h2>Contact Us</h2>
      <form className="contact-form" onSubmit={handleSubmit}>
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
          rows="4"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
        />
        <button type="submit" className="contact-submit-btn">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
