// Import React library
import React from "react";

// Functional component to display contact information
function Contact() {
  return (
    <section>
      <h2>Contact Us</h2>

      {/* Contact instructions */}
      <p>
        If you have questions, feedback, or need support, feel free to reach out:
      </p>

      {/* Contact methods list */}
      <ul>
        {/* Email contact */}
        <li>
          Email:{" "}
          <a href="mailto:support@homebotanicalsbible.app">
            support@homebotanicalsbible.app
          </a>
        </li>
      </ul>
    </section>
  );
}

// Export the component for use in other parts of the app
export default Contact;