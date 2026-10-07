import React from "react";

const specs = [
  ["Capacity", "20,000mAh"],
  ["Maximum Output", "100W"],
  ["Product Type", "Portable Power Bank"],
  ["Charging", "High-Speed Fast Charging"],
  ["Device Support", "Smartphones, Tablets & Laptops"],
  ["Safety", "Overcharge & Overheat Protection"],
];

export default function SpecTable() {
  return (
    <section id="specifications" className="spec-section">
      <div className="spec-container">
        <div className="spec-heading">
          <span>TECHNICAL SPECIFICATIONS</span>
          <h2>Aether 20K Specifications</h2>
          <p>
            Everything you need to know about the Aether 20K power bank.
          </p>
        </div>

        <div className="spec-table">
          {specs.map(([name, value]) => (
            <div className="spec-row" key={name}>
              <div className="spec-name">{name}</div>
              <div className="spec-value">{value}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
