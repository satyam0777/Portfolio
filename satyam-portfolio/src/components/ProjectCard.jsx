

// ProjectCard.jsx
import { motion } from 'framer-motion';

const ProjectCard = ({ title, description, liveLink, githubLink, image, reverse }) => (
  <motion.div
    className={`flex flex-col lg:flex-row ${reverse ? 'lg:flex-row-reverse' : ''} items-center gap-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden p-6 transform transition-transform duration-500 hover:rotate-[-1deg] hover:scale-[1.015]`}
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
  >
    <div className="relative w-full lg:w-1/2 h-64 overflow-hidden rounded-md shadow-md">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center opacity-0 hover:opacity-100 transition duration-300">
        <p className="text-white text-lg font-semibold">Click below to view more 🔍</p>
      </div>
    </div>
    <div className="flex-1 text-left">
      <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-2">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
      <div className="flex gap-4">
        <a
          href={liveLink}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md shadow"
        >
          🔗 Live
        </a>
        <a
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-700 hover:bg-gray-800 text-white px-4 py-2 rounded-md shadow"
        >
          💻 GitHub
        </a>
      </div>
    </div>
  </motion.div>
);

export default ProjectCard;