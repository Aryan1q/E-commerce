import React from "react";
import './CSS/ContactUs.css';
export const ContactUs = () => {
  return (
    <section className="contact-container">
      <div className="contact-hero">
        <h2>
          Get in <span>Touch</span>
        </h2>
        <p>
          At <strong>Zariyah</strong>, every message matters. Whether it’s a
          query, feedback, or just a hello — we’d love to connect with you.
        </p>
      </div>

      <div className="contact-content">
        {/* Left side - Info */}
        <div className="contact-info">
          <h3>Contact Information</h3>
          <p>📍 Lucknow, Uttar Pradesh, India</p>
          <p>📞 +91 98765 43210</p>
          <p>📧 hello@zariyah.com</p>
          <p className="quote">
            “Every dress you buy not only makes you shine but also feeds a
            little heart with hope.”
          </p>
        </div>

        {/* Right side - Form */}
        <div className="contact-form">
          <form>
            <div className="form-group">
              <input type="text" placeholder="Your Name" required />
            </div>
            <div className="form-group">
              <input type="email" placeholder="Your Email" required />
            </div>
            <div className="form-group">
              <textarea placeholder="Your Message" rows="5" required></textarea>
            </div>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};
