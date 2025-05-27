import React from "react";
import "../css/Contact.css";

const Contact = () => {
  return (
    <div className="contact-container">
      <h1>Hope you have filled the form, now our experts will guide you 🚀</h1>
      <h2>Not filled yet? Fill now and join govt. elite services.</h2>

      <div className="cta-section">
        <div className="qr-code">
          <img src="/frame.png" alt="QR" />
        </div>
        <div className="or-text">or</div>
        <a
          href="https://docs.google.com/forms/d/1-Chp5eZwVJlgHfJMrXgv8EBGqP5OIlW1BJLeJhmrzsc"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="hero-btn secondary">Join Now</button>
        </a>
      </div>
    </div>
  );
};

export default Contact;
