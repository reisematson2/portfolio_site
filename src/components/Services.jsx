import { motion } from 'framer-motion';

const servicesList = [
  {
    title: 'Custom Websites for Small Businesses',
    description: 'Beautiful, fast-loading websites designed specifically for small businesses in the sports and fitness industry.',
    icon: '🏆'
  },
  {
    title: 'Booking, Scheduling & CRM Tools',
    description: 'Custom tools to manage your clients, appointments, and classes—making your business run smoothly and efficiently.',
    icon: '📆'
  },
  {
    title: 'Sport-Specific Platforms',
    description: 'Specialized solutions for team planning, training logs, and athlete management tailored to your specific sport.',
    icon: '⚽'
  },
  {
    title: 'One-Page Sites, Landing Pages & Rebrands',
    description: 'Quick, effective digital presence solutions—from simple landing pages to complete brand refreshes.',
    icon: '🚀'
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
          <h2 className="text-accent text-xl mb-2">How I Can Help</h2>
          <h3 className="text-4xl font-bold mb-4">Services for Your Business</h3>
          <p className="text-white/70 max-w-2xl mx-auto">
            I create digital solutions specifically for small businesses in sports and fitness, helping you connect with clients, streamline operations, and grow your business.
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
