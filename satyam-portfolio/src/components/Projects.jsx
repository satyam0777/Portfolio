
import React, { useState, useRef } from 'react';
import { motion, useInView, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ExternalLink, Github, Eye, Code, Zap, Sparkles, ArrowRight, Filter, Grid3X3, List } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: "Second Brain",
    description: "A second-brain productivity tool where users can store notes, bookmarks, documents and manage their digital knowledge effectively. Built using the MERN stack with authentication.",
    liveLink: "https://second-brain-project.vercel.app/",
    githubLink: "https://github.com/satyam0777/Second-Brain-Project",
    image: "/assets/SecondBrain.png",
    tags: ["React", "Node.js", "MongoDB", "Express"],
    category: "Full Stack",
    featured: true,
    color: "from-blue-500 to-purple-600"
  },
  {
    id: 2,
    title: "VetCare",
    description: "A responsive veterinary appointment booking app with login functionality and dashboard, allowing pet owners to book appointments with veterinarians seamlessly.",
    liveLink: "https://vetcare-project.vercel.app/",
    githubLink: "https://github.com/satyam0777/vetcare-project",
    image: "/assets/VetCare.png",
    tags: ["React", "Firebase", "Tailwind CSS", "JavaScript"],
    category: "Frontend",
    featured: true,
    color: "from-green-500 to-teal-600"
  },
  {
    id: 3,
    title: "Blog App",
    description: "A full-stack blogging platform allowing users to write, edit, and delete blog posts. Features include authentication and real-time rendering using React and Node.js.",
    liveLink: "https://myblog.vercel.app",
    githubLink: "https://github.com/satyam0777/Blog-App-Project",
    image: "/assets/Blogapp.png",
    tags: ["React", "Node.js", "Express", "MongoDB"],
    category: "Full Stack",
    featured: false,
    color: "from-orange-500 to-red-600"
  },
   {
    id: 4,
    title: "DevTinder",
    description: "A Tinder-style app that connects developers based on tech stack compatibility, goals, and interests. Once matched, users can decide how to collaborate. A creative way to form dev teams or co-build side projects. ",
    liveLink: "https://github.com/satyam0777/devTinder",
    githubLink: "https://github.com/satyam0777/devTinder",
    image: "https://via.placeholder.com/600x350?text=Blog+App",
    tags: ["React", "Node.js", "Express", "MongoDB"],
    category: "Full Stack",
    featured: false,
    color: "from-orange-500 to-red-600"
  },
];

const ProjectCard = ({ project, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, margin: "-100px" });

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  // const rotateX = useSpring(useTransform(y, [-100, 100], [30, -30]));
  // const rotateY = useSpring(useTransform(x, [-100, 100], [-30, 30]));
  const rotateX = useSpring(useTransform(y, [-100, 100], [8, -8]));
const rotateY = useSpring(useTransform(x, [-100, 100], [-8, 8]));


  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set(e.clientX - centerX);
    y.set(e.clientY - centerY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsHovered(false);
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 25, rotateX: -5 }}
      animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      className="group relative"
    >
      <div className="relative h-[580px] rounded-3xl overflow-hidden bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 dark:border-gray-700/20 shadow-2xl">
        {/* Glowing Border Effect */}
        <div className={`absolute inset-0 bg-gradient-to-r ${project.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-3xl`} />
        
        {/* Image Container */}
        <div className="relative h-60 overflow-hidden">
          <motion.img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.6 }}
          />
          
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          
          {/* Featured Badge */}
          {project.featured && (
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
              className="absolute top-4 left-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1"
            >
              <Sparkles className="w-4 h-4" />
              Featured
            </motion.div>
          )}
          
          {/* Action Buttons */}
          <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <motion.a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
            >
              <ExternalLink className="w-5 h-5" />
            </motion.a>
            <motion.a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
            >
              <Github className="w-5 h-5" />
            </motion.a>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 h-60 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className={`px-3 py-1 bg-gradient-to-r ${project.color} text-white text-xs rounded-full font-medium`}>
                {project.category}
              </span>
              <motion.div
                animate={{ rotate: isHovered ? 45 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <Zap className="w-5 h-5 text-yellow-500" />
              </motion.div>
            </div>
            
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-300">
              {project.title}
            </h3>
            
            <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4">
              {project.description}
            </p>
          </div>
          
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag, tagIndex) => (
              <motion.span
                key={tag}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 + tagIndex * 0.1 }}
                className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              >
                {tag}
              </motion.span>
            ))}
          </div>
          
          {/* Bottom Actions */}
          <div className="flex gap-3">
            <motion.a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex-1 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-xl font-medium text-sm hover:from-blue-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Eye className="w-4 h-4" />
              Live Demo
            </motion.a>
            <motion.a
              href={projects.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex-1 bg-gray-800 dark:bg-gray-700 text-white px-4 py-2 rounded-xl font-medium text-sm hover:bg-gray-700 dark:hover:bg-gray-600 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Code className="w-4 h-4" />
              Source
            </motion.a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const [filter, setFilter] = useState('All');
  const [viewMode, setViewMode] = useState('grid');
  
  const categories = ['All', 'Full Stack', 'Frontend', 'Backend'];
  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(project => project.category === filter);

  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
   
  return (
    // <section id="projects" className="relative py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-hidden">
    <section id="projects" className="relative py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">

      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-96 h-96 bg-gradient-to-r from-blue-400/5 to-purple-400/5 rounded-full blur-3xl"
            animate={{
              x: [0, 200, 0],
              y: [0, 200, 0],
              scale: [1, 1.2, 0],
            }}
            transition={{
              duration: 25 + i * 3,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div ref={containerRef} className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-6"
            initial={{ scale: 0.9 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Featured Projects
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Discover my latest work showcasing modern web technologies and creative solutions
          </motion.p>
        </motion.div>

        {/* Filter Controls */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-12"
        >
          <div className="flex items-center gap-2 bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl p-2 border border-white/20 dark:border-gray-700/20">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setFilter(category)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-4 py-2 rounded-xl font-medium text-sm transition-all duration-300 ${
                  filter === category
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
                    : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>
          
          <div className="flex items-center gap-2 bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl p-2 border border-white/20 dark:border-gray-700/20">
            <motion.button
              onClick={() => setViewMode('grid')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`p-2 rounded-xl transition-all duration-300 ${
                viewMode === 'grid' 
                  ? 'bg-blue-500 text-white' 
                  : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
            >
              <Grid3X3 className="w-5 h-5" />
            </motion.button>
            <motion.button
              onClick={() => setViewMode('list')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`p-2 rounded-xl transition-all duration-300 ${
                viewMode === 'list' 
                  ? 'bg-blue-500 text-white' 
                  : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
            >
              <List className="w-5 h-5" />
            </motion.button>
          </div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          layout
          className={`grid gap-8 mb-16 ${
            viewMode === 'grid' 
              ? 'md:grid-cols-2 lg:grid-cols-3' 
              : 'md:grid-cols-1 lg:grid-cols-2'
          }`}
        >
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </motion.div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center"
        >
          <motion.a
            href="https://github.com/satyam0777"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 bg-gradient-to-r from-gray-800 to-gray-900 dark:from-gray-700 dark:to-gray-800 text-white px-8 py-4 rounded-2xl font-semibold shadow-2xl hover:shadow-3xl transition-all duration-300 group"
          >
            <Github className="w-6 h-6" />
            <span>View All Projects on GitHub</span>
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.div>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;