import React from "react";

const Features: React.FC = () => {
  return (
    <section className="features" id="features">
      <div className="features-container">
        <div className="section-heading">
          <span className="section-label">WHY AETHER 20K</span>
          <h2>
            Power built for
            <span> everyday life.</span>
          </h2>
          <p>
            Everything you need for fast, reliable and convenient charging
            wherever you go.
          </p>
        </div>

        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">⚡</div>
            <h3>100W Fast Charging</h3>
            <p>
              Charge compatible devices quickly with powerful 100W USB-C
              Power Delivery.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🔋</div>
            <h3>20,000mAh Capacity</h3>
            <p>
              High-capacity battery keeps your devices powered throughout the
              day.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🔌</div>
            <h3>USB-C Power</h3>
            <p>
              Modern USB-C connectivity gives you fast and convenient charging
              wherever you need it.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🛡️</div>
            <h3>Reliable Protection</h3>
            <p>
              Designed with protection features to help keep your devices safe
              while charging.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
