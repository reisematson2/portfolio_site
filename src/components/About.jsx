import { motion } from 'framer-motion';

const About = () => {
  const skills = [
    'React', 'Next.js', 'Vue.js', 'JavaScript', 'TypeScript',
    'Tailwind CSS', 'Node.js', 'GraphQL', 'MongoDB', 'Firebase',
    'Git', 'CI/CD', 'Figma', 'Jest', 'Webpack'
  ];

  return (
    <section id="about" className="py-20 px-4">
      <div className="container max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image Column */}
          <motion.div
            className="order-2 md:order-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative">
              <div className="w-full h-72 md:h-96 rounded-2xl overflow-hidden">
                <img 
                  src="https://placehold.co/800x1000/0f172a/3b82f6?text=Profile+Image" 
                  alt="Jane Doe" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -bottom-5 -left-5 w-24 h-24 rounded-full bg-accent opacity-20 blur-xl"></div>
              <div className="absolute -top-5 -right-5 w-32 h-32 rounded-full bg-accent opacity-10 blur-xl"></div>
            </div>
          </motion.div>
          
          {/* Text Column */}
          <motion.div
            className="order-1 md:order-2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-accent text-xl mb-2">About Me</h2>
            <h3 className="text-4xl font-bold mb-6">A passionate developer crafting digital experiences</h3>
            
            <div className="space-y-4 mb-8 text-white/80">
              <p>
                I'm Jane Doe, a full-stack web developer with over 5 years of experience building robust web applications. 
                I specialize in creating responsive, performant, and accessible websites using modern technologies.
              </p>
              <p>
                My approach combines technical expertise with a keen eye for design to deliver solutions that not only function 
                flawlessly but also provide exceptional user experiences. I'm passionate about clean code, performance optimization, 
                and staying current with the latest web development trends.
              </p>
              <p>
                When I'm not coding, you can find me hiking, reading sci-fi novels, or experimenting with new cooking recipes.
              </p>
            </div>
            
            {/* Skills */}
            <div>
              <h4 className="text-xl font-semibold mb-3">My Technical Skills</h4>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <motion.span
                    key={index}
                    className="px-3 py-1 bg-white/10 rounded-full text-sm"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.2, delay: index * 0.05 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
