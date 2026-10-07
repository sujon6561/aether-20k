export interface ProductSpec {
  label: string;
  value: string;
}

export interface Feature {
  icon: string;
  title: string;
  description: string;
}

export interface Product {
  name: string;
  tagline: string;
  description: string;
  price: string;
  oldPrice: string;
  stock: string;
  specs: ProductSpec[];
  features: Feature[];
}
