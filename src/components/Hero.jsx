import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import './Hero.css';

const Hero = () => {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  const handleButtonClick = (id) => (e) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative flex items-center justify-center min-h-screen px-4 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-96 h-96 rounded-full bg-accent/10 blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-72 h-72 rounded-full bg-accent/5 blur-3xl"></div>
      </div>
      
      <div className="container max-w-6xl mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2 
            className="text-accent mb-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Hello there, I'm
          </motion.h2>
          
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Jane Doe
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl mb-8 text-white/80"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            I create high-performing web applications that provide exceptional user experiences.
          </motion.p>
          
          {mounted && (
            <motion.div 
              className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <button
                onClick={handleButtonClick('contact')}
                className="hero-button hero-button-primary"
              >
                Let's Work Together
              </button>
              
              <button
                onClick={handleButtonClick('projects')}
                className="hero-button hero-button-secondary"
              >
                View My Work
              </button>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;
