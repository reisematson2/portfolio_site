import { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would handle the form submission
    // For now, we'll just log the form data
    console.log(formData);
    alert('Thanks for your message! I\'ll get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="bg-gradient-to-b from-background to-black py-20 px-4">
      <div className="container max-w-5xl mx-auto">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-accent text-xl mb-2">Get In Touch</h2>
          <h3 className="text-4xl font-bold mb-4">Ready to Grow Your Business Online?</h3>
          <p className="text-white/70 max-w-2xl mx-auto">
            Own a gym, run a clinic, or coach a team? Let's build your digital home base. 
            Drop me a message, and I'll get back to you soon to discuss how I can help your business thrive online.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
          {/* Contact Info */}
          <motion.div
            className="md:col-span-2 space-y-6"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6">
              <h4 className="font-semibold text-xl mb-4">Contact Information</h4>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="text-accent text-xl">📧</div>
                  <div>
                    <h5 className="text-sm text-white/60">Email</h5>
                    <a href="mailto:jane@example.com" className="hover:text-accent">jane@example.com</a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="text-accent text-xl">📍</div>
                  <div>
                    <h5 className="text-sm text-white/60">Location</h5>
                    <p>San Francisco, CA</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="text-accent text-xl">🔗</div>
                  <div>
                    <h5 className="text-sm text-white/60">Social</h5>
                    <div className="flex space-x-4 mt-1">
                      <a href="#" className="hover:text-accent">Github</a>
                      <a href="#" className="hover:text-accent">LinkedIn</a>
                      <a href="#" className="hover:text-accent">Twitter</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6">
              <h4 className="font-semibold text-xl mb-2">Availability</h4>
              <p className="text-white/70">
                I'm currently available for freelance work and open to discussing new opportunities.
              </p>
            </div>
          </motion.div>
          
          {/* Contact Form */}
          <motion.div
            className="md:col-span-3"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <form onSubmit={handleSubmit} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 space-y-4">
              <div>
                <label htmlFor="name" className="block mb-1 text-sm font-medium">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/10 focus:border-accent focus:outline-none transition-colors"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block mb-1 text-sm font-medium">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/10 focus:border-accent focus:outline-none transition-colors"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block mb-1 text-sm font-medium">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/10 focus:border-accent focus:outline-none transition-colors"
                  required
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full px-6 py-3 bg-accent text-white rounded-lg font-medium hover:bg-accent/90 transition-colors"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
