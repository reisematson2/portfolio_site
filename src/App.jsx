import { lazy, Suspense } from 'react'
import { motion } from 'framer-motion'

// Lazy load components for better performance
const Hero = lazy(() => import('./components/Hero'))
const Services = lazy(() => import('./components/Services'))
const Projects = lazy(() => import('./components/Projects'))
const About = lazy(() => import('./components/About'))
const Contact = lazy(() => import('./components/Contact'))
const Footer = lazy(() => import('./components/Footer'))

function App() {
  return (
    <div className="min-h-screen">
      <Suspense fallback={<div className="flex items-center justify-center min-h-screen">Loading...</div>}>
        <main>
          <Hero />
          <Services />
          <Projects />
          <About />
          <Contact />
          <Footer />
        </main>
      </Suspense>
    </div>
  )
}

export default App
