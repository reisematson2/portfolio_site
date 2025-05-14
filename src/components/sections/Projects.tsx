import React from 'react';
import { motion } from 'framer-motion';
import { FaChartLine, FaToolbox, FaRegLightbulb } from 'react-icons/fa';

type Project = {
  icon: React.ReactNode;
  title: string;
  description: string;
  tags: string[];
};

const projects: Project[] = [
  {
    icon: <FaChartLine className="text-3xl text-primary" />,
    title: "Sports Analytics Dashboard",
    description: "Interactive data visualization tool for coaches and team managers to track player performance metrics.",
    tags: ["Data Viz", "UX/UI", "JavaScript"]
  },
  {
    icon: <FaToolbox className="text-3xl text-primary" />,
    title: "Recruitment SaaS Platform",
    description: "Cloud-based software helping college coaches streamline the athlete recruitment process.",
    tags: ["SaaS Design", "React", "Firebase"]
  },
  {
    icon: <FaRegLightbulb className="text-3xl text-primary" />,
    title: "Fan Engagement Mobile App",
    description: "Native mobile application connecting fans with exclusive team content and interactive features.",
    tags: ["Mobile Design", "UI/UX", "Prototyping"]
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20">
      <div className="section-container">
        <h2 className="section-title">More Projects</h2>
        
        <p className="text-center max-w-3xl mx-auto mb-16">
          Beyond traditional web design, I'm also exploring innovative digital solutions 
          for the sports industry through these specialized projects.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white border border-gray-200 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="mb-4">
                {project.icon}
              </div>
              <h3 className="text-xl font-display font-bold mb-2">{project.title}</h3>
              <p className="text-neutral-dark mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, tagIndex) => (
                  <span 
                    key={tagIndex}
                    className="bg-primary bg-opacity-10 text-primary text-xs px-2 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary"
          >
            View All Projects
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
