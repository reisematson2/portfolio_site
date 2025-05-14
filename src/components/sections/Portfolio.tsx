import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt } from 'react-icons/fa';
import portfolio1 from '../../assets/portfolio1.webp';
import portfolio2 from '../../assets/portfolio2.webp';
import portfolio3 from '../../assets/portfolio3.webp';

type ProjectCategory = 'all' | 'teams' | 'athletes' | 'leagues';

type Project = {
  id: number;
  title: string;
  category: ProjectCategory[];
  image: string;
  description: string;
  link: string;
};

const projects: Project[] = [
  {
    id: 1,
    title: "Chicago Wolves Rebrand",
    category: ["teams"],
    image: portfolio1,
    description: "A complete digital transformation for a professional hockey team with enhanced fan engagement features.",
    link: "#",
  },
  {
    id: 2,
    title: "Elite Athlete Portfolio",
    category: ["athletes"],
    image: portfolio2,
    description: "Personalized website for a professional athlete showcasing achievements and sponsorship opportunities.",
    link: "#",
  },
  {
    id: 3,
    title: "Regional Basketball League",
    category: ["leagues"],
    image: portfolio3,
    description: "Digital platform for a basketball league featuring schedules, stats, and streaming integration.",
    link: "#",
  },
  {
    id: 4,
    title: "Marathon Event Series",
    category: ["leagues", "athletes"],
    image: portfolio2,
    description: "Registration and results platform for a national running event with athlete profiles.",
    link: "#",
  },
  {
    id: 5,
    title: "College Baseball Team",
    category: ["teams"],
    image: portfolio3,
    description: "Recruitment-focused website for a Division I college baseball program.",
    link: "#",
  },
  {
    id: 6,
    title: "Pro Tennis Player",
    category: ["athletes"],
    image: portfolio1,
    description: "Brand-building platform for an international tennis star with multi-language support.",
    link: "#",
  },
];

const Portfolio = () => {
  const [filter, setFilter] = useState<ProjectCategory>('all');
  
  const filteredProjects = projects.filter(
    project => filter === 'all' || project.category.includes(filter)
  );

  return (
    <section id="portfolio" className="py-20">
      <div className="section-container">
        <h2 className="section-title">Portfolio</h2>
        
        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {['all', 'teams', 'athletes', 'leagues'].map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category as ProjectCategory)}
              className={`px-4 py-2 rounded-full transition-colors ${
                filter === category
                  ? 'bg-primary text-white'
                  : 'bg-neutral-100 hover:bg-neutral-200'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-primary-dark bg-opacity-0 group-hover:bg-opacity-70 flex items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100">
                  <a
                    href={project.link}
                    className="text-white bg-secondary p-3 rounded-full hover:bg-secondary-dark transition-colors"
                    aria-label={`View ${project.title} project`}
                  >
                    <FaExternalLinkAlt />
                  </a>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-display font-bold text-lg mb-2">
                  {project.title}
                </h3>
                <p className="text-neutral-dark text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.category.map((cat) => (
                    <span
                      key={cat}
                      className="text-xs py-1 px-2 bg-neutral rounded-full"
                    >
                      {cat}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
