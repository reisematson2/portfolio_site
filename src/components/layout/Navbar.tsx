import { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';
import logoImg from '../../assets/logo.svg';

const navLinks = [
  { name: 'Home', to: 'hero' },
  { name: 'About', to: 'about' },
  { name: 'Portfolio', to: 'portfolio' },
  { name: 'Services', to: 'services' },
  { name: 'Projects', to: 'projects' },
  { name: 'Contact', to: 'contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-lg py-2' : 'bg-transparent py-4'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <img src={logoImg} alt="Logo" className="h-10 w-10 mr-2" />
          <span className={`font-display font-bold text-xl ${scrolled ? 'text-primary' : 'text-white'}`}>
            SportDesign
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex">
          {navLinks.map((link) => (
            <ScrollLink
              key={link.name}
              to={link.to}
              smooth={true}
              duration={400}
              offset={-70}
              spy={true}
              hashSpy={true}
              className={`mx-3 text-sm font-medium cursor-pointer transition-colors hover:text-secondary ${
                scrolled ? 'text-neutral-dark' : 'text-white'
              }`}
            >
              {link.name}
            </ScrollLink>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? (
            <FaTimes className={scrolled ? 'text-neutral-dark' : 'text-white'} />
          ) : (
            <FaBars className={scrolled ? 'text-neutral-dark' : 'text-white'} />
          )}
        </button>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            className="absolute top-full left-0 right-0 bg-white shadow-lg md:hidden"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
          >
            <div className="flex flex-col py-4">
              {navLinks.map((link) => (
                <ScrollLink
                  key={link.name}
                  to={link.to}
                  smooth={true}
                  duration={400}
                  offset={-70}
                  spy={true}
                  hashSpy={true}
                  className="px-6 py-2 text-neutral-dark font-medium hover:bg-neutral hover:text-secondary cursor-pointer"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </ScrollLink>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
};

export default Navbar;
