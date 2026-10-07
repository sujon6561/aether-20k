import React from "react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-brand">
          <h2>AETHER</h2>
          <p>
            Powerful 20,000mAh capacity with 100W fast charging,
            designed to keep your devices powered wherever you go.
          </p>
        </div>

        <div className="footer-links">
          <a href="#product">Product</a>
          <a href="#features">Features</a>
          <a href="#specs">Specifications</a>
          <a href="#buy">Buy Now</a>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2026 Aether 20K. All rights reserved.</p>
      </div>
    </footer>
  );
}
