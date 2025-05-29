// Import React to define a functional component
import React from "react";

// Privacy component for displaying the app's privacy policy
function Privacy() {
  return (
    <section>
      {/* Section heading */}
      <h2>Privacy Policy</h2>

      {/* Introductory message */}
      <p>We value your privacy. Here's how we handle your data:</p>

      {/* List of privacy practices */}
      <ul>
        <li>We store your garden locally in your browser only.</li>
        <li>We do not collect, sell, or track personal data.</li>
        <li>You may clear your garden anytime via browser settings.</li>
      </ul>
    </section>
  );
}

// Export the component for use in the app
export default Privacy;