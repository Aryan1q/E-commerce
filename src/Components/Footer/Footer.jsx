import React from 'react';
import './Footer.css';
import logo from '../Assets/logo.png';
import instagram_icon from '../Assets/instagram_icon.png';
import whatsapp_icon from '../Assets/whatsapp_icon.png';

export const Footer = () => {
  return (
    <div className="footer">
      {/* Logo Section */}
      <div className="footer-logo">
        <img src={logo} alt="Zariyah Logo" />
        <p>Zariyah</p>
      </div>

      {/* Navigation Links */}
      <ul className="footer-links">
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>

      {/* Social Icons */}
      <div className="footer-social-icon">
        <div className="footer-icons-container">
          <img src={instagram_icon} alt="Instagram" />
        </div>
        <div className="footer-icons-container">
          <img src={whatsapp_icon} alt="WhatsApp" />
        </div>
      </div>

      {/* Copyright */}
      <div className="footer-copyright">
        <hr />
        <p>Copyright © 2025 - All Rights Reserved.</p>
      </div>
    </div>
  );
};
