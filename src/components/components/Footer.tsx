import React from "react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <h2>Aether 20K</h2>
          <p>
            Powerful 20,000mAh capacity with 100W ultra-fast charging,
            designed to keep your devices powered wherever you go.
          </p>
        </div>

        <div className="footer-links">
          <a href="#features">Features</a>
          <a href="#specifications">Specifications</a>
          <a href="#product">Product</a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 Aether 20K. All rights reserved.</p>
      </div>
    </footer>
  );
}
