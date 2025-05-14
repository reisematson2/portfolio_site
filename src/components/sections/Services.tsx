import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaPencilRuler, 
  FaCode, 
  FaMegaport, 
  FaChartLine, 
  FaMobileAlt, 
  FaServer 
} from 'react-icons/fa';

type Service = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

const services: Service[] = [
  {
    icon: <FaPencilRuler className="text-4xl mb-4 text-secondary" />,
    title: "Sports UI/UX Design",
    description: "User-centered design for sports websites that create memorable fan experiences and drive engagement."
  },
  {
    icon: <FaCode className="text-4xl mb-4 text-secondary" />,
    title: "Front-end Development",
    description: "Clean, efficient code bringing designs to life with smooth animations and responsive layouts."
  },
  {
    icon: <FaMegaport className="text-4xl mb-4 text-secondary" />,
    title: "Brand Identity",
    description: "Sports-focused branding that captures team spirit and connects with fans on an emotional level."
  },
  {
    icon: <FaChartLine className="text-4xl mb-4 text-secondary" />,
    title: "Analytics & Optimization",
    description: "Performance tracking and data-driven improvements to maximize user engagement and conversions."
  },
  {
    icon: <FaMobileAlt className="text-4xl mb-4 text-secondary" />,
    title: "Responsive Mobile Design",
    description: "Mobile-first experiences for fans and athletes accessing content on the go."
  },
  {
    icon: <FaServer className="text-4xl mb-4 text-secondary" />,
    title: "CMS Integration",
    description: "Custom content management systems tailored for sports organizations' unique content needs."
  },
];

const Services = () => {
  return (
    <section id="services" className="py-12 bg-neutral">
      <div className="section-container">
        <h2 className="section-title">Services</h2>
        
        <div className="mt-12">
          <p className="text-center max-w-3xl mx-auto mb-16">
            My specialized services combine design expertise with sports industry knowledge,
            helping teams, athletes, and leagues create digital experiences that engage fans
            and achieve their goals.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="text-center">
                  {service.icon}
                  <h3 className="text-xl font-display font-bold mb-3">{service.title}</h3>
                  <p className="text-neutral-dark">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
