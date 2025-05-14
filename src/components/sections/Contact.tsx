import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FaEnvelope, 
  FaPhoneAlt, 
  FaMapMarkerAlt, 
  FaPaperPlane 
} from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, you'd send the form data to a server here
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    
    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    
    // Reset submission status after delay
    setTimeout(() => setIsSubmitted(false), 5000);
  };
  
  return (
    <section id="contact" className="py-12 bg-neutral-dark text-white">
      <div className="section-container">
        <h2 className="section-title text-white">Get In Touch</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-display font-bold mb-6 text-secondary">
              Let's Discuss Your Project
            </h3>
            <p className="mb-8">
              Have a sports website project in mind? I'm here to help bring your vision to life.
              Fill out the form or reach out directly through any of the contact methods below.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="mr-4 bg-primary p-3 rounded-full">
                  <FaEnvelope />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Email</h4>
                  <p className="text-gray-300">contact@sportdesign.example</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 bg-primary p-3 rounded-full">
                  <FaPhoneAlt />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Phone</h4>
                  <p className="text-gray-300">+1 (123) 456-7890</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 bg-primary p-3 rounded-full">
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Location</h4>
                  <p className="text-gray-300">Chicago, IL, USA</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-white text-neutral-dark p-8 rounded-lg shadow-lg">
              {isSubmitted ? (
                <div className="text-center py-8">
                  <FaPaperPlane className="text-4xl text-secondary mx-auto mb-4" />
                  <h3 className="text-2xl font-display font-bold mb-2">Message Sent!</h3>
                  <p>Thanks for reaching out. I'll get back to you soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      required
                    />
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      required
                    />
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="subject" className="block text-sm font-medium mb-1">Subject</label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      required
                    >
                      <option value="">Select a subject</option>
                      <option value="Website Design">Website Design</option>
                      <option value="Brand Identity">Brand Identity</option>
                      <option value="Mobile App">Mobile App</option>
                      <option value="General Inquiry">General Inquiry</option>
                    </select>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      required
                    ></textarea>
                  </div>
                  
                  <button 
                    type="submit" 
                    className="w-full bg-secondary hover:bg-secondary-dark text-white font-medium py-3 rounded-md transition-colors"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
