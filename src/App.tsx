import CustomCursor from './components/CustomCursor'

import Footer from './layout/Footer'
import Navbar from './layout/Navbar'

import About from './sections/About'
import Certifications from './sections/Certifications'
import Contact from './sections/Contact'
import FeaturedWork from './sections/FeaturedWork'
import Hero from './sections/Hero'
import Skills from './sections/Skills'

function App() {
  return (
    <div className="portfolio-app">
      <CustomCursor />

      <Navbar />

      <main>
        <Hero />
        <About />
        <FeaturedWork />
        <Certifications />
        <Skills />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}

export default App