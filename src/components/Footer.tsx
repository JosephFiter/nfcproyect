import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer-container">
      <div className="footer-text">© 2025 Mi Sitio. Todos los derechos reservados.</div>
      <div className="footer-socials">
        <a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a>
        <a href="https://twitter.com" target="_blank" rel="noreferrer">Twitter</a>
        <a href="https://facebook.com" target="_blank" rel="noreferrer">Facebook</a>
      </div>
    </footer>
  );
};

export default Footer;
