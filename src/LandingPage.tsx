import React from 'react';
import './LandingPage.css';
import Header from './components/Header';
import Footer from './components/Footer';

const LandingPage: React.FC = () => {
  return (
    <div className="landing-container">
      <Header />
      
      <main className="landing-content">
        {/* Contenido de la landing va aquí */}
      </main>

      <Footer />
    </div>
  );
};

export default LandingPage;
