import Header from "./components/Header";
import Hero from "./components/Hero";
import ProductVisual from "./components/ProductVisual";
import Features from "./components/Features";
import SpecTable from "./components/SpecTable";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <ProductVisual />
        <Features />
        <SpecTable />
      </main>

      <Footer />
    </>
  );
}
