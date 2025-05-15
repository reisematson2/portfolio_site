import { motion } from 'framer-motion';
import './Projects.css';

const projectsList = [
  {
    title: 'PlanMyPractice',
    description: 'A web app for coaches to plan, share, and manage practices. Designed for real-time collaboration and efficient training organization.',
    image: 'https://placehold.co/600x400/0f172a/3b82f6?text=PlanMyPractice',
    tags: ['React', 'Node.js', 'MongoDB'],
    demoLink: '#',
    codeLink: '#'
  },
  {
    title: 'FitBookPro',
    description: 'A comprehensive booking system for fitness studios that allows clients to schedule classes, manage memberships, and track progress all in one place.',
    image: 'https://placehold.co/600x400/0f172a/3b82f6?text=FitBookPro',
    tags: ['Next.js', 'Tailwind', 'PostgreSQL'],
    demoLink: '#',
    codeLink: '#'
  },
  {
    title: 'IronGym Website',
    description: 'A modern, responsive website for a local gym featuring class schedules, trainer profiles, and membership information with seamless online sign-ups.',
    image: 'https://placehold.co/600x400/0f172a/3b82f6?text=IronGym',
    tags: ['React', 'Tailwind', 'Firebase'],
    demoLink: '#',
    codeLink: '#'
  },
  {
    title: 'AthleteTracker',
    description: 'Performance tracking tool for coaches and athletes to monitor progress, set goals, and visualize improvements over time with custom metrics.',
    image: 'https://placehold.co/600x400/0f172a/3b82f6?text=AthleteTracker',
    tags: ['React', 'Chart.js', 'Node.js'],
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
          <h2 className="text-accent text-xl mb-2">Success Stories</h2>
          <h3 className="text-4xl font-bold mb-4">Featured Projects</h3>
          <p className="text-white/70 max-w-2xl mx-auto">
            Custom solutions I've built for sports and fitness businesses that helped them grow and better serve their clients.
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
                    className="project-button project-button-primary"
                  >
                    Live Demo
                  </a>
                  <a 
                    href={project.codeLink} 
                    className="project-button project-button-secondary"
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
