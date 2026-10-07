import React from "react";

const features = [
  {
    title: "20,000mAh Massive Capacity",
    description:
      "Stay powered throughout the day with a large 20,000mAh battery capacity.",
  },
  {
    title: "100W Ultra-Fast Charging",
    description:
      "Experience high-speed 100W charging for compatible devices.",
  },
  {
    title: "Multi-Device Support",
    description:
      "Charge your phone, tablet, laptop and other compatible devices.",
  },
  {
    title: "Smart Safety Protection",
    description:
      "Built-in protection helps keep your devices safe from overheating, overcharging and short circuits.",
  },
];

export default function Features() {
  return (
    <section id="features" className="features-section">
      <div className="features-container">
        <div className="features-heading">
          <span className="features-label">POWERFUL FEATURES</span>
          <h2>Everything You Need to Stay Powered</h2>
          <p>
            Aether 20K combines massive capacity, fast charging and intelligent
            protection in one powerful power bank.
          </p>
        </div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <div className="feature-card" key={index}>
              <div className="feature-number">
                {String(index + 1).padStart(2, "0")}
              </div>

              <h3>{feature.title}</h3>

              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
