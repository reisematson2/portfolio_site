import { FaTwitter, FaInstagram, FaLinkedinIn, FaGithub } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-dark text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-display font-bold mb-4">SportDesign</h3>
            <p className="mb-4 text-sm">
              Crafting digital experiences for sports brands, teams, and athletes.
              Combining my love for sports with my passion for web design.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-display font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#hero" className="hover:text-secondary transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-secondary transition-colors">About</a></li>
              <li><a href="#portfolio" className="hover:text-secondary transition-colors">Portfolio</a></li>
              <li><a href="#services" className="hover:text-secondary transition-colors">Services</a></li>
              <li><a href="#contact" className="hover:text-secondary transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-display font-bold mb-4">Connect</h3>
            <p className="mb-2 text-sm">info@sportdesign.example</p>
            <p className="mb-4 text-sm">+1 (123) 456-7890</p>
            <div className="flex space-x-4">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-secondary transition-colors">
                <FaTwitter className="text-xl" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-secondary transition-colors">
                <FaInstagram className="text-xl" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-secondary transition-colors">
                <FaLinkedinIn className="text-xl" />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-secondary transition-colors">
                <FaGithub className="text-xl" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm">
          <p>&copy; {currentYear} SportDesign. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
