import { motion } from 'framer-motion';
import { FaBaseballBall, FaLaptopCode, FaGraduationCap } from 'react-icons/fa';
import profileImg from '../../assets/rm-portrait.jpg';

const About = () => {
  return (
    <section id="about" className="py-20 bg-neutral">
      <div className="section-container">
        <h2 className="section-title">About Me</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              <img
                src={profileImg}
                alt="Profile"
                className="rounded-lg w-full max-w-md shadow-lg"
              />
              <div className="absolute -bottom-5 -right-5 bg-secondary text-white p-4 rounded-lg shadow-lg">
                <p className="font-bold">Open for Collaborations</p>
              </div>
            </div>
          </motion.div>
          
          {/* Content Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl font-display font-bold mb-4 text-primary">
              From the Diamond to the Digital Field
            </h3>
            <p className="mb-6">
              As a former college baseball player, I bring the same discipline, 
              grit, and team-first mindset to every web project I take on. My 
              background in sports gives me a unique lens for understanding how 
              athletes and teams connect with their audience—on the field and online.
            </p>
            <p className="mb-8">
              I'm a self-taught designer and developer who's worked on a growing 
              number of personal projects and collaborations, especially in the 
              sports and tech space. I combine creative thinking with a strong 
              foundation in web design and front-end development to help brands 
              stand out and perform online.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  icon: <FaBaseballBall />,
                  title: 'Sports Background',
                  description: 'College baseball experience informs design thinking'
                },
                {
                  icon: <FaLaptopCode />,
                  title: 'Hands-On Projects',
                  description: 'Built websites and UIs for personal brands and sports mockups'
                },
                {
                  icon: <FaGraduationCap />,
                  title: 'Always Learning',
                  description: 'Actively learning React, Tailwind, and building SaaS side projects'
                }
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="text-secondary text-3xl mb-2 flex justify-center">
                    {item.icon}
                  </div>
                  <h4 className="font-bold mb-1">{item.title}</h4>
                  <p className="text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
