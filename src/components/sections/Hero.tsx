import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { FaChevronDown } from 'react-icons/fa';
import heroBg from '../../assets/hero-bg.jpg';

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative h-screen flex items-center justify-center bg-cover bg-center text-white"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      
      <div className="container mx-auto px-4 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-4">
            Sports Web Design <br /> that Delivers Results
          </h1>
          
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8">
            From athlete to designer, I bring a unique perspective to digital experiences 
            for sports brands, teams, and organizations.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary"
            >
              View My Work
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-secondary"
            >
              Get in Touch
            </motion.button>
          </div>
        </motion.div>
      </div>
      
      <div className="absolute bottom-8 left-0 right-0 flex justify-center">
        <Link
          to="about"
          smooth={true}
          duration={800}
          offset={-70}
          className="animate-bounce cursor-pointer"
        >
          <FaChevronDown className="text-white text-2xl" />
        </Link>
      </div>
    </section>
  );
};

export default Hero;
