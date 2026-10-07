import React from "react";

const ProductVisual: React.FC = () => {
  return (
    <section className="product-visual" id="product">
      <div className="product-visual-container">

        <div className="product-image">
          <div className="product-glow"></div>

          <div className="power-bank">
            <div className="power-bank-screen">
              20,000
              <span>mAh</span>
            </div>

            <div className="power-bank-brand">
              AETHER
            </div>

            <div className="power-bank-port">
              USB-C
            </div>
          </div>
        </div>

        <div className="product-info">
          <span className="product-label">
            AETHER 20K
          </span>

          <h2>
            Power. <span>Anywhere.</span>
          </h2>

          <p>
            A powerful 20,000mAh power bank built for fast,
            reliable charging wherever you go.
          </p>

          <div className="product-highlights">
            <div>
              <strong>20,000mAh</strong>
              <span>Huge Capacity</span>
            </div>

            <div>
              <strong>100W</strong>
              <span>Fast Charging</span>
            </div>

            <div>
              <strong>USB-C</strong>
              <span>Power Delivery</span>
            </div>
          </div>

          <a href="#specs" className="product-btn">
            View Specifications
          </a>
        </div>

      </div>
    </section>
  );
};

export default ProductVisual;
