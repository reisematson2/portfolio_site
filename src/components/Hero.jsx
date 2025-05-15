import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative flex items-center justify-center min-h-screen px-4 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-96 h-96 rounded-full bg-accent/10 blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-72 h-72 rounded-full bg-accent/5 blur-3xl"></div>
      </div>
      
      <div className="container max-w-6xl mx-auto">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
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
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <a 
              href="#contact" 
              className="inline-block px-8 py-3 text-lg font-medium text-white bg-accent rounded-lg shadow-md hover:bg-accent/90 transition-all duration-300"
            >
              Let's Work Together
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
