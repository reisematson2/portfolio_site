import { motion } from 'framer-motion';

const servicesList = [
  {
    title: 'MVP Development',
    description: 'Transforming your ideas into viable products with clean, efficient code and rapid iterative development.',
    icon: '🚀'
  },
  {
    title: 'Frontend Prototyping',
    description: 'Creating engaging user interfaces with modern frameworks like React, focusing on performance and user experience.',
    icon: '💻'
  },
  {
    title: 'UI/UX Design',
    description: 'Designing intuitive, accessible, and visually appealing interfaces that delight users and achieve business goals.',
    icon: '🎨'
  },
  {
    title: 'Code Refactoring',
    description: 'Optimizing existing codebases for better performance, maintainability, and scalability.',
    icon: '⚙️'
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 px-4">
      <div className="container max-w-6xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-accent text-xl mb-2">What I Do</h2>
          <h3 className="text-4xl font-bold mb-4">My Services</h3>
          <p className="text-white/70 max-w-2xl mx-auto">
            I provide comprehensive solutions for modern web development challenges, focusing on
            performance, usability, and maintainability.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicesList.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-6 hover:bg-white/10 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.03 }}
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h4 className="text-xl font-bold mb-3">{service.title}</h4>
              <p className="text-white/70">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
