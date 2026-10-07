import React from "react";

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header-container">
        <a href="/" className="logo">
          AETHER
        </a>

        <nav className="nav">
          <a href="#features">Features</a>
          <a href="#specs">Specifications</a>
          <a href="#buy">Buy Now</a>
        </nav>

        <button className="menu-button" aria-label="Open menu">
          ☰
        </button>
      </div>
    </header>
  );
};

export default Header;
