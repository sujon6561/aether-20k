import React from "react";

const ProductVisual: React.FC = () => {
  return (
    <section className="product-visual">
      <div className="product-card">
        <div className="power-bank">
          <div className="power-bank-screen">
            <span>100W</span>
            <small>SUPER FAST CHARGE</small>
          </div>

          <div className="power-bank-brand">AETHER</div>

          <div className="power-bank-capacity">
            20,000mAh
          </div>

          <div className="power-bank-ports">
            <span>USB-C</span>
            <span>USB-A</span>
          </div>
        </div>

        <div className="product-info">
          <p className="product-label">AETHER 20K</p>
          <h2>20,000mAh Power Bank</h2>
          <p>
            Powerful 100W fast charging with a premium compact design.
          </p>

          <div className="product-specs">
            <div>
              <strong>100W</strong>
              <span>Max Output</span>
            </div>

            <div>
              <strong>20K</strong>
              <span>Battery</span>
            </div>

            <div>
              <strong>USB-C</strong>
              <span>Fast Charge</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductVisual;
