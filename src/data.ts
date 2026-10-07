import type { Product } from "./types";

export const product: Product = {
  name: "Aether 20K",
  tagline: "20,000mAh • 100W Fast Charging Power Bank",
  description:
    "A high-performance 20,000mAh power bank designed for fast, reliable charging on the go.",
  price: "$79.99",
  oldPrice: "$99.99",
  stock: "In Stock",

  specs: [
    {
      label: "Capacity",
      value: "20,000mAh",
    },
    {
      label: "Maximum Output",
      value: "100W",
    },
    {
      label: "Fast Charging",
      value: "PD 65W",
    },
    {
      label: "USB Ports",
      value: "USB-C + USB-A",
    },
    {
      label: "Display",
      value: "Digital Battery Display",
    },
    {
      label: "Battery Type",
      value: "Lithium Polymer",
    },
  ],

  features: [
    {
      icon: "⚡",
      title: "100W Fast Charging",
      description:
        "Power compatible laptops, tablets and smartphones with high-speed charging.",
    },
    {
      icon: "🔋",
      title: "20,000mAh Capacity",
      description:
        "Large capacity keeps your essential devices powered throughout the day.",
    },
    {
      icon: "📱",
      title: "Multi-Device Charging",
      description:
        "Charge multiple compatible devices from the available ports.",
    },
    {
      icon: "📊",
      title: "Smart Digital Display",
      description:
        "Check the remaining battery percentage at a glance.",
    },
  ],
};
