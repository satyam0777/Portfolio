import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const projects = [
  {
    id: 1,
    title: "Second Brain",
    description: "A productivity tool for storing notes, bookmarks, and documents with user authentication.",
    liveLink: "https://second-brain-project.vercel.app/",
    githubLink: "https://github.com/satyam0777/Second-Brain-Project",
    image: "/assets/SecondBrain.png",
    tags: ["React", "Node.js", "MongoDB", "Express"],
    problem: "Information scattered across platforms",
    impact: "100+ daily active users"
  },
  {
    id: 2,
    title: "VetCare",
    description: "Veterinary telemedicine platform connecting farmers with doctors. Includes video consultations and payment integration.",
    liveLink: "https://vet-care-plateform-crm.vercel.app/",
    githubLink: "https://github.com/satyam0777/VetCare-Plateform-CRM",
    image: "/assets/VetCare.png",
    tags: ["React", "Node.js", "MongoDB", "Socket.io", "Razorpay"],
    problem: "Limited access to veterinary services",
    impact: "Connected 100+ farmers with vets"
  },
  {
    id: 3,
    title: "StudyHelperAI",
    description: "AI-powered study assistant with quiz generation, flashcards, and progress tracking using Gemini AI.",
    liveLink: "https://study-helper-six.vercel.app/",
    githubLink: "https://github.com/satyam0777/Study-helper",
    image: "/assets/Studyhelper.png",
    tags: ["React", "TypeScript", "Node.js", "MongoDB", "Gemini AI"],
    problem: "Manual study material creation",
    impact: "500+ students, 40% time saved"
  },
  {
    id: 4,
    title: "DSA Mastery",
    description: "Learning platform for DSA with roadmap-based problem sets, progress tracking, and visualization.",
    liveLink: "https://dsa-mastery-project.vercel.app/",
    githubLink: "https://github.com/satyam0777/DSA-mastery-project",
    image: "/assets/DSAmastery.png",
    tags: ["React", "Node.js", "MongoDB", "Chart.js"],
    problem: "No structured DSA learning path",
    impact: "200+ students completed roadmap"
  },
  {
    id: 5,
    title: "Blog App",
    description: "Full-stack blogging platform with authentication and CRUD operations for posts.",
    liveLink: "https://github.com/satyam0777/Blog-App-Project",
    githubLink: "https://github.com/satyam0777/Blog-App-Project",
    image: "/assets/Blogapp.png",
    tags: ["React", "Node.js", "Express", "MongoDB"],
    problem: "Blogging platforms too complex",
    impact: "100+ published posts, 2K+ visitors"
  },
  {
    id: 6,
    title: "DevTinder",
    description: "Developer matching platform based on tech stack compatibility and interests for collaboration.",
    liveLink: "https://github.com/satyam0777/devTinder",
    githubLink: "https://github.com/satyam0777/devTinder",
    image: "https://via.placeholder.com/600x350?text=DevTinder",
    tags: ["React", "Node.js", "Express", "MongoDB"],
    problem: "Developers can't find collaborators",
    impact: "200+ successful collaborations"
  }
];

const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  const navigate = useNavigate();
  const displayedProjects = showAll ? projects : projects.slice(0, 3);

  return (
    <section id="projects" className="py-12 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section header - compact */}
          <div className="mb-8">
            <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
              Production-ready applications with real impact
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayedProjects.map((project, index) => (
              <div
                key={project.id}
                className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-all duration-500 hover:-translate-y-2 cursor-pointer"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Project image with overlay */}
                <div className="relative h-48 overflow-hidden bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Quick action buttons on hover */}
                  <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300 shadow-lg transform hover:scale-110"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <i className="fas fa-external-link-alt"></i>
                    </a>
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center text-gray-700 dark:text-gray-300 hover:bg-gray-900 hover:text-white transition-all duration-300 shadow-lg transform hover:scale-110"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <i className="fab fa-github"></i>
                    </a>
                  </div>
                </div>

                {/* Project info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  
                  {/* Problem & Impact */}
                  <div className="space-y-2 mb-4">
                    <div className="text-xs text-gray-500 dark:text-gray-400 flex items-start gap-2">
                      <i className="fas fa-exclamation-circle mt-0.5 flex-shrink-0"></i>
                      <span><strong>Problem:</strong> {project.problem}</span>
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400 flex items-start gap-2">
                      <i className="fas fa-chart-line mt-0.5 flex-shrink-0"></i>
                      <span><strong>Impact:</strong> {project.impact}</span>
                    </div>
                  </div>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.slice(0, 3).map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-700 dark:to-gray-600 text-blue-700 dark:text-blue-300 text-xs font-medium rounded-full border border-blue-200 dark:border-gray-600"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="px-3 py-1 text-gray-500 dark:text-gray-400 text-xs font-medium">
                        +{project.tags.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Action buttons */}
                  <div className="flex gap-3">
                    <button
                      onClick={() => navigate(`/project/${project.id}`)}
                      className="flex-1 text-center bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-4 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 shadow-md hover:shadow-lg"
                    >
                      View Details
                    </button>
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-gray-900 dark:hover:border-white hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-gray-900 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300"
                    >
                      Code
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View More/Less Button */}
          {projects.length > 3 && (
            <div className="mt-10 text-center">
              <button
                onClick={() => setShowAll(!showAll)}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
              >
                <span>{showAll ? 'Show Less' : 'View More Projects'}</span>
                <i className={`fas fa-chevron-${showAll ? 'up' : 'down'} text-sm transition-transform`}></i>
              </button>
            </div>
          )}

          {/* GitHub Link */}
          {showAll && (
            <div className="mt-8 text-center">
              <a
                href="https://github.com/satyam0777"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors text-sm"
              >
                <i className="fab fa-github"></i>
                <span>View all projects on GitHub</span>
                <i className="fas fa-arrow-right text-xs"></i>
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;
