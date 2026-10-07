import React from "react";

const specs = [
  ["Capacity", "20,000mAh"],
  ["Maximum Output", "100W"],
  ["USB-C", "Power Delivery"],
  ["Charging", "Fast Charging"],
  ["Display", "Digital Battery Display"],
  ["Protection", "Overcharge & Overheat Protection"],
];

export default function SpecTable() {
  return (
    <section className="specs" id="specs">
      <div className="specs-container">
        <span className="section-label">SPECIFICATIONS</span>

        <h2>Built to Perform.</h2>

        <div className="spec-table">
          {specs.map(([label, value]) => (
            <div className="spec-row" key={label}>
              <span>{label}</span>
              <strong>{value}</strong>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
