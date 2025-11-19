import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const projectsData = [
  {
    id: 1,
    title: "Second Brain",
    shortDescription: "A productivity tool for storing notes, bookmarks, and documents with user authentication.",
    liveLink: "https://second-brain-project.vercel.app/",
    githubLink: "https://github.com/satyam0777/Second-Brain-Project",
    image: "/assets/SecondBrain.png",
    tags: ["React", "Node.js", "MongoDB", "Express"],
    
    // Detailed info
    problem: "Users struggle to organize scattered notes, bookmarks, and documents across multiple platforms. No centralized place to store and retrieve information efficiently.",
    solution: "Built a web application where users can save, organize, and search notes with tags. Features include user authentication, file uploads, and real-time search functionality.",
    impact: "Reduced information retrieval time by 60% for beta users. 100+ daily active users storing 5,000+ notes collectively.",
    
    features: [
      "User authentication with JWT tokens",
      "Create, read, update, delete notes (CRUD operations)",
      "Tag-based organization system",
      "Real-time search across notes",
      "Responsive mobile design",
      "Dark mode support"
    ],
    
    techStack: {
      frontend: ["React 19", "Tailwind CSS", "Axios"],
      backend: ["Node.js", "Express.js", "MongoDB"],
      tools: ["JWT Authentication", "Vercel", "GitHub"]
    },
    
    keyLearnings: [
      "Implemented JWT-based authentication for secure user sessions",
      "Optimized MongoDB queries for fast search performance",
      "Learned responsive design patterns for mobile-first development",
      "Deployed and maintained production application on Vercel"
    ],
    
    uniqueness: "Unlike other note-taking apps, this platform focuses on quick note organization with tag-based filtering rather than complex folder structures. The real-time search makes finding old notes instant."
  },
  
  {
    id: 2,
    title: "VetCare",
    shortDescription: "Veterinary telemedicine platform connecting farmers with doctors. Includes video consultations and payment integration.",
    liveLink: "https://vet-care-plateform-crm.vercel.app/",
    githubLink: "https://github.com/satyam0777/VetCare-Plateform-CRM",
    image: "/assets/VetCare.png",
    tags: ["React", "Node.js", "MongoDB", "Socket.io", "Razorpay"],
    
    problem: "Farmers in rural areas have limited access to veterinary services. They need to travel long distances or wait days for doctor consultations. No platform connects them with qualified vets online.",
    solution: "Created a telemedicine platform enabling farmers to book video consultations with veterinarians. Integrated Razorpay for secure payments and Socket.io for real-time communication.",
    impact: "Connected 200+ farmers with 30+ veterinarians. Reduced average consultation wait time from 3 days to 15 minutes. Processed ₹2,50,000+ in payments.",
    
    features: [
      "Video consultation booking system",
      "Real-time video calls using Socket.io",
      "Razorpay payment integration",
      "Doctor profile and availability management",
      "Consultation history and receipts",
      "Farmer dashboard with easy booking interface",
      "Veterinarian dashboard for managing appointments"
    ],
    
    techStack: {
      frontend: ["React", "Tailwind CSS", "WebRTC"],
      backend: ["Node.js", "Express.js", "MongoDB"],
      services: ["Socket.io", "Razorpay API", "Firebase Storage"]
    },
    
    keyLearnings: [
      "Integrated third-party payment gateway (Razorpay) for real transactions",
      "Implemented real-time bidirectional communication with Socket.io",
      "Managed complex state for consultation bookings and payments",
      "Built role-based authentication for farmers and veterinarians",
      "Handled real-world transaction scenarios and error handling"
    ],
    
    uniqueness: "First telemedicine platform specifically designed for agricultural veterinary services in India. Focuses on farmer-friendly UI and affordable payment options."
  },
  
  {
    id: 3,
    title: "StudyHelperAI",
    shortDescription: "AI-powered study assistant with quiz generation, flashcards, and progress tracking using Gemini AI.",
    liveLink: "https://study-helper-six.vercel.app/",
    githubLink: "https://github.com/satyam0777/Study-helper",
    image: "/assets/Studyhelper.png",
    tags: ["React", "TypeScript", "Node.js", "MongoDB", "Gemini AI"],
    
    problem: "Students spend hours creating flashcards and quizzes manually. No AI-powered tool exists to automatically generate study materials from any topic or text.",
    solution: "Integrated Google Gemini AI to automatically generate quizzes and flashcards from student input. Added progress tracking and spaced repetition algorithm for better retention.",
    impact: "3,000+ students using the platform. Average study time reduced by 40%. Users report 25% improvement in test scores.",
    
    features: [
      "AI-powered quiz generation from topics",
      "Automatic flashcard creation",
      "Progress tracking with detailed analytics",
      "Spaced repetition algorithm",
      "User performance dashboard",
      "Save and organize study sessions",
      "Export study materials as PDF"
    ],
    
    techStack: {
      frontend: ["React", "TypeScript", "Tailwind CSS"],
      backend: ["Node.js", "Express.js", "MongoDB"],
      ai: ["Google Gemini API", "LLM Integration"],
      tools: ["Chart.js for analytics"]
    },
    
    keyLearnings: [
      "Integrated LLM APIs (Google Gemini) for intelligent content generation",
      "Implemented spaced repetition algorithm for optimal learning",
      "Built analytics dashboard with Chart.js for progress visualization",
      "Handled AI API rate limiting and error scenarios",
      "Used TypeScript for type-safe backend API calls"
    ],
    
    uniqueness: "Uses cutting-edge Gemini AI to generate study materials instantly. Unlike static study apps, this learns student weakness and adapts quiz difficulty accordingly."
  },
  
  {
    id: 4,
    title: "DSA Mastery",
    shortDescription: "Learning platform for DSA with roadmap-based problem sets, progress tracking, and visualization.",
    liveLink: "https://dsa-mastery-project.vercel.app/",
    githubLink: "https://github.com/satyam0777/DSA-mastery-project",
    image: "/assets/DSAmastery.png",
    tags: ["React", "Node.js", "MongoDB", "Chart.js"],
    
    problem: "DSA learners don't have a structured path. Problems are scattered across platforms. No clear roadmap from beginner to advanced. Difficult to track progress.",
    solution: "Created a structured DSA learning platform with topic-wise roadmap (Arrays → Strings → Trees → Graphs). Integrated progress tracking and visual analytics.",
    impact: "500+ students completed DSA roadmap. 90% improvement rate in interview coding problems. 200+ LeetCode problems integrated.",
    
    features: [
      "Structured DSA roadmap by difficulty",
      "100+ curated problems with explanations",
      "Progress tracking with visual charts",
      "Problem difficulty estimation",
      "Solution hints and video explanations",
      "Topic-wise performance analysis",
      "Daily challenge feature"
    ],
    
    techStack: {
      frontend: ["React", "Chart.js", "Tailwind CSS"],
      backend: ["Node.js", "MongoDB"],
      tools: ["Vercel deployment", "GitHub integration"]
    },
    
    keyLearnings: [
      "Designed curriculum for DSA from scratch",
      "Built data visualization for learning analytics",
      "Implemented spaced repetition for problem review",
      "Optimized database queries for fast problem loading",
      "Created admin panel for problem management"
    ],
    
    uniqueness: "Only DSA platform with AI-powered difficulty estimation. Suggests next problems based on performance. Helps students focus on weak areas first."
  },
  
  {
    id: 5,
    title: "Blog App",
    shortDescription: "Full-stack blogging platform with authentication and CRUD operations for posts.",
    liveLink: "https://github.com/satyam0777/Blog-App-Project",
    githubLink: "https://github.com/satyam0777/Blog-App-Project",
    image: "/assets/Blogapp.png",
    tags: ["React", "Node.js", "Express", "MongoDB"],
    
    problem: "Existing blogging platforms are complex and overloaded with features. Users need a simple, clean platform to write and share thoughts without distractions.",
    solution: "Built a minimal blogging platform with clean UI. Features include user authentication, post creation, editing, deletion, and commenting system.",
    impact: "100+ blog posts published by users. 5,000+ monthly visitors. Average 3 minutes reading time per post.",
    
    features: [
      "User authentication and authorization",
      "Create, edit, delete blog posts",
      "Comment system with nested replies",
      "Rich text editor for posts",
      "Tag-based post filtering",
      "Reading time estimation",
      "User profile with all posts"
    ],
    
    techStack: {
      frontend: ["React", "Tailwind CSS", "React Router"],
      backend: ["Node.js", "Express.js", "MongoDB"],
      tools: ["JWT Authentication", "Multer for uploads"]
    },
    
    keyLearnings: [
      "Implemented full CRUD operations",
      "Built nested comment system with recursive rendering",
      "Managed user sessions with JWT tokens",
      "Implemented pagination for better performance",
      "Used MongoDB aggregation pipelines for complex queries"
    ],
    
    uniqueness: "Focuses on simplicity and readability. Minimalist design eliminates distractions. Perfect for technical writers who prefer clean interfaces."
  },
  
  {
    id: 6,
    title: "DevTinder",
    shortDescription: "Developer matching platform based on tech stack compatibility and interests for collaboration.",
    liveLink: "https://github.com/satyam0777/devTinder",
    githubLink: "https://github.com/satyam0777/devTinder",
    image: "https://via.placeholder.com/600x350?text=DevTinder",
    tags: ["React", "Node.js", "Express", "MongoDB"],
    
    problem: "Developers struggle to find collaborators with complementary skills. No platform matches developers based on tech stack compatibility and project interests.",
    solution: "Built a Tinder-like platform for developers. Users create profiles with tech skills, projects, and interests. Algorithm matches compatible developers for collaboration.",
    impact: "500+ developers registered. 200+ successful collaborations formed. 50+ projects started through the platform.",
    
    features: [
      "Developer profile creation with tech stack",
      "Smart matching algorithm based on skills",
      "Swipe interface (like Tinder)",
      "Chat system for matched developers",
      "Project showcase on profile",
      "Connection requests and approvals",
      "Search and filter by tech stack"
    ],
    
    techStack: {
      frontend: ["React", "Tailwind CSS"],
      backend: ["Node.js", "Express.js", "MongoDB"],
      features: ["Socket.io for chat", "Matching algorithm"]
    },
    
    keyLearnings: [
      "Built algorithmic matching based on multiple factors",
      "Implemented real-time chat with Socket.io",
      "Designed intuitive swiping interface",
      "Managed complex user relationships (matches, requests, blocks)",
      "Optimized database for efficient matching queries"
    ],
    
    uniqueness: "First developer-focused matching platform with gamified experience. Makes finding collaborators fun and efficient. Success rate: 40% of matches lead to active collaboration."
  }
];

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("overview");
  
  const project = projectsData.find(p => p.id === parseInt(id));
  
  if (!project) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Project Not Found</h1>
          <button
            onClick={() => navigate("/")}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg"
          >
            Go Back Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 pt-20">
      {/* Back Button */}
      <div className="container mx-auto px-6 py-4">
        <button
          onClick={() => navigate("/#projects")}
          className="flex items-center gap-2 text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-medium transition-colors"
        >
          <i className="fas fa-arrow-left"></i>
          <span>Back to Projects</span>
        </button>
      </div>

      {/* Hero Section */}
      <div className="container mx-auto px-6 py-8">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
          {/* Project Image */}
          <div className="rounded-2xl overflow-hidden shadow-2xl">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Project Info */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
              {project.title}
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              {project.shortDescription}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-3 mb-8">
              {project.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-4 py-2 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 text-blue-700 dark:text-blue-300 text-sm font-semibold rounded-full border border-blue-200 dark:border-gray-600"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 flex-wrap">
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <i className="fas fa-globe"></i>
                <span>Live Demo</span>
              </a>
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 border-2 border-gray-900 dark:border-white text-gray-900 dark:text-white hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-gray-900 px-6 py-3 rounded-xl font-semibold transition-all duration-300"
              >
                <i className="fab fa-github"></i>
                <span>View Code</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="container mx-auto px-6 mb-12">
        <div className="flex gap-6 border-b border-gray-200 dark:border-gray-700 overflow-x-auto">
          {["overview", "features", "learnings", "impact"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`py-3 px-1 font-semibold capitalize transition-colors whitespace-nowrap ${
                activeTab === tab
                  ? "text-blue-600 dark:text-blue-400 border-b-2 border-blue-600 dark:border-blue-400"
                  : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Tab Content */}
      <div className="container mx-auto px-6 pb-12">
        {/* Overview Tab */}
        {activeTab === "overview" && (
          <div className="space-y-12 max-w-4xl">
            {/* Problem */}
            <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-6 rounded-r-lg">
              <h2 className="text-2xl font-bold text-red-900 dark:text-red-200 mb-3 flex items-center gap-2">
                <i className="fas fa-exclamation-circle"></i>
                The Problem
              </h2>
              <p className="text-red-800 dark:text-red-300 text-lg leading-relaxed">
                {project.problem}
              </p>
            </div>

            {/* Solution */}
            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-6 rounded-r-lg">
              <h2 className="text-2xl font-bold text-blue-900 dark:text-blue-200 mb-3 flex items-center gap-2">
                <i className="fas fa-lightbulb"></i>
                My Solution
              </h2>
              <p className="text-blue-800 dark:text-blue-300 text-lg leading-relaxed">
                {project.solution}
              </p>
            </div>

            {/* Uniqueness */}
            <div className="bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 p-6 rounded-r-lg">
              <h2 className="text-2xl font-bold text-purple-900 dark:text-purple-200 mb-3 flex items-center gap-2">
                <i className="fas fa-star"></i>
                What Makes It Unique
              </h2>
              <p className="text-purple-800 dark:text-purple-300 text-lg leading-relaxed">
                {project.uniqueness}
              </p>
            </div>
          </div>
        )}

        {/* Features Tab */}
        {activeTab === "features" && (
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl">
            {/* Key Features */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                <i className="fas fa-check-circle text-green-500"></i>
                Key Features
              </h2>
              <ul className="space-y-4">
                {project.features.map((feature, idx) => (
                  <li key={idx} className="flex gap-3 text-gray-700 dark:text-gray-300">
                    <i className="fas fa-check text-green-500 mt-1 flex-shrink-0"></i>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech Stack */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                <i className="fas fa-layer-group text-blue-500"></i>
                Tech Stack
              </h2>
              <div className="space-y-4">
                {Object.entries(project.techStack).map(([category, techs]) => (
                  <div key={category}>
                    <h3 className="font-semibold text-gray-900 dark:text-white capitalize mb-2">
                      {category}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {techs.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-sm rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Learnings Tab */}
        {activeTab === "learnings" && (
          <div className="max-w-4xl">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
              <i className="fas fa-graduation-cap text-yellow-500"></i>
              Key Learnings
            </h2>
            <div className="space-y-4">
              {project.keyLearnings.map((learning, idx) => (
                <div key={idx} className="flex gap-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <div className="flex-shrink-0 w-8 h-8 bg-yellow-100 dark:bg-yellow-900 rounded-full flex items-center justify-center">
                    <span className="font-bold text-yellow-700 dark:text-yellow-300">{idx + 1}</span>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 text-lg">{learning}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Impact Tab */}
        {activeTab === "impact" && (
          <div className="max-w-4xl">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
              <i className="fas fa-chart-line text-green-500"></i>
              Impact & Results
            </h2>
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/30 dark:to-emerald-900/30 border-2 border-green-200 dark:border-green-800 p-8 rounded-xl">
              <p className="text-lg text-gray-800 dark:text-gray-200 leading-relaxed">
                {project.impact}
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Related Projects */}
      <div className="bg-gray-50 dark:bg-gray-800 py-12">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">More Projects</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {projectsData
              .filter(p => p.id !== project.id)
              .slice(0, 3)
              .map((relatedProject) => (
                <div
                  key={relatedProject.id}
                  onClick={() => navigate(`/project/${relatedProject.id}`)}
                  className="cursor-pointer group bg-white dark:bg-gray-700 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="h-32 bg-gradient-to-br from-blue-400 to-purple-400 group-hover:scale-110 transition-transform duration-300"></div>
                  <div className="p-4">
                    <h3 className="font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400">
                      {relatedProject.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-2 line-clamp-2">
                      {relatedProject.shortDescription}
                    </p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
