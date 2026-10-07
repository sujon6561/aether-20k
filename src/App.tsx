import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import SpecTable from './components/SpecTable'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
        <SpecTable />
      </main>
      <Footer />
    </>
  )
}
