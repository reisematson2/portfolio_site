import Layout from './components/layout/Layout'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Portfolio from './components/sections/Portfolio'
import Services from './components/sections/Services'
import Projects from './components/sections/Projects'
import Contact from './components/sections/Contact'
import './App.css'

function App() {
  return (
    <Layout>
      <Hero />
      <About />
      <Portfolio />
      <Services />
      <Projects />
      <Contact />
    </Layout>
  )
}

export default App
