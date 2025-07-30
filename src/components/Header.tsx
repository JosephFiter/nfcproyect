import React from 'react';
import './Header.css';

const Header: React.FC = () => {
  const handleGoogleLogin = () => {
    // Lógica futura para login con Google
    console.log('Iniciar sesión con Google');
  };

  return (
    <header className="header-container">
      <button className="google-button" onClick={handleGoogleLogin}>
        Iniciar sesión con Google
      </button>
      <div className="logo-placeholder">
        {/* Logo de la página va aquí */}
        LOGO
      </div>
    </header>
  );
};

export default Header;
