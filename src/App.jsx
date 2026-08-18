import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Stats from './components/Stats'
import Specialties from './components/Specialties'
import Gamemodes from './components/Gamemodes'
import Projects from './components/Projects'
import Tech from './components/Tech'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen">
      <Nav />
      <main>
        <Hero />
        <About />
        <Stats />
        <Specialties />
        <Gamemodes />
        <Projects />
        <Tech />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
