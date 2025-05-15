import { motion } from 'framer-motion';

const projectsList = [
  {
    title: 'E-commerce Platform',
    description: 'A full-featured online store with cart, checkout, and payment integration',
    image: 'https://placehold.co/600x400/0f172a/3b82f6?text=E-commerce',
    tags: ['React', 'Node.js', 'MongoDB'],
    demoLink: '#',
    codeLink: '#'
  },
  {
    title: 'SaaS Dashboard',
    description: 'Analytics dashboard for SaaS businesses with data visualization',
    image: 'https://placehold.co/600x400/0f172a/3b82f6?text=Dashboard',
    tags: ['Next.js', 'Tailwind', 'Chart.js'],
    demoLink: '#',
    codeLink: '#'
  },
  {
    title: 'Social Media App',
    description: 'Instagram-like application with real-time feeds and messaging',
    image: 'https://placehold.co/600x400/0f172a/3b82f6?text=Social+App',
    tags: ['React', 'Firebase', 'Tailwind'],
    demoLink: '#',
    codeLink: '#'
  },
  {
    title: 'Task Management Tool',
    description: 'Collaborative task manager with drag-and-drop interface',
    image: 'https://placehold.co/600x400/0f172a/3b82f6?text=Tasks+App',
    tags: ['React', 'Redux', 'Node.js'],
    demoLink: '#',
    codeLink: '#'
  }
];

const Projects = () => {
  return (
    <section id="projects" className="bg-white/5 py-20 px-4">
      <div className="container max-w-6xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-accent text-xl mb-2">My Work</h2>
          <h3 className="text-4xl font-bold mb-4">Featured Projects</h3>
          <p className="text-white/70 max-w-2xl mx-auto">
            A showcase of my recent development work, personal projects, and client collaborations.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projectsList.map((project, index) => (
            <motion.div
              key={index}
              className="relative overflow-hidden rounded-xl bg-white/5 group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Project Image */}
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-64 object-cover object-center" 
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <h4 className="text-2xl font-bold mb-2">{project.title}</h4>
                <p className="text-white/70 mb-3">{project.description}</p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex} 
                      className="text-xs px-2 py-1 bg-accent/20 text-accent rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                {/* Links */}
                <div className="flex space-x-3">
                  <a 
                    href={project.demoLink} 
                    className="text-sm font-medium px-4 py-2 bg-accent text-white rounded hover:bg-accent/90 transition-colors"
                  >
                    Live Demo
                  </a>
                  <a 
                    href={project.codeLink} 
                    className="text-sm font-medium px-4 py-2 bg-white/10 text-white rounded hover:bg-white/20 transition-colors"
                  >
                    View Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          className="text-center mt-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <a 
            href="#" 
            className="inline-block px-6 py-3 border border-accent text-accent rounded hover:bg-accent hover:text-white transition-all duration-300"
          >
            View All Projects
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
