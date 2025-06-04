// Import React and useState from React library
import React, { useState } from "react";

// Functional component for Contact page
function Contact() {
  // State for form input values
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    reason: "",
    subscribe: false,
  });

  // State for validation errors
  const [errors, setErrors] = useState({});

  // Form validation logic
  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.email.includes("@")) newErrors.email = "Valid email is required.";
    if (!formData.message.trim()) newErrors.message = "Message cannot be empty.";
    if (!formData.reason) newErrors.reason = "Please select a reason for contact.";
    return newErrors;
  };

  // Handle changes to form inputs
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      alert("Thank you! Your message has been sent.");
      console.log(formData); // Simulate send
      // Reset form
      setFormData({
        name: "",
        email: "",
        message: "",
        reason: "",
        subscribe: false,
      });
      setErrors({});
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <section>
      {/* Section Heading */}
      <h2>Contact Us</h2>
      <p>If you have questions, feedback, or need support, feel free to reach out:</p>

      {/* Static email info */}
      <ul>
        <li>
          Email:{" "}
          <a href="mailto:support@homebotanicalsbible.app">
            support@homebotanicalsbible.app
          </a>
        </li>
      </ul>

      <hr style={{ margin: "2rem 0" }} />

      {/* Contact Form */}
      <form onSubmit={handleSubmit} style={{ maxWidth: "500px" }}>
        <h3>Send Us a Message</h3>

        {/* Name Input */}
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
        </label>

        {/* Email: Label and input side-by-side */}
        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginTop: "1rem" }}>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}

        {/* Reason Dropdown */}
        <label style={{ display: "block", marginTop: "1rem" }}>
          Reason for Contact:
          <select name="reason" value={formData.reason} onChange={handleChange}>
            <option value="">-- Please choose --</option>
            <option value="feedback">Feedback</option>
            <option value="bug">Report a Bug</option>
            <option value="support">Support</option>
          </select>
          {errors.reason && <p style={{ color: "red" }}>{errors.reason}</p>}
        </label>

        {/* Message */}
        <div style={{ display: "flex", alignItems: "flex-start", gap: "0.5rem", marginTop: "1rem" }}>
          <label htmlFor="message" style={{ paddingTop: "0.3rem" }}>Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            cols="30"
            required
          />
        </div>
        {errors.message && <p style={{ color: "red" }}>{errors.message}</p>}

        {/* Subscribe Checkbox */}
        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginTop: "1rem" }}>
          <input
            type="checkbox"
            name="subscribe"
            id="subscribe"
            checked={formData.subscribe}
            onChange={handleChange}
          />
          <label htmlFor="subscribe">Subscribe to Home Botanicals Bible newsletter</label>
        </div>

        {/* Submit Button */}
        <button type="submit" style={{ marginTop: "1.5rem" }}>
          Send Message
        </button>
      </form>
    </section>
  );
}

// Export component
export default Contact;