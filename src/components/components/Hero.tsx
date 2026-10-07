import React from "react";

const Hero: React.FC = () => {
  return (
    <section className="hero" id="buy">
      <div className="hero-container">
        <div className="hero-content">
          <span className="hero-badge">NEW • 100W POWER</span>

          <h1>
            Power That
            <span>Keeps Up.</span>
          </h1>

          <p>
            Meet Aether 20K — a powerful 20,000mAh power bank built for
            fast, reliable charging wherever you go.
          </p>

          <div className="hero-actions">
            <a href="#specs" className="btn-primary">
              Explore Aether 20K
            </a>

            <a href="#features" className="btn-secondary">
              View Features
            </a>
          </div>

          <div className="hero-stats">
            <div>
              <strong>20,000</strong>
              <span>mAh Capacity</span>
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
        </div>
      </div>
    </section>
  );
};

export default Hero;
