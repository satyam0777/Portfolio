const Hero = () => {
  const projects = [
    { name: "Second Brain", tech: "React + Node.js + MongoDB", status: "Deployed" },
    { name: "VetCare", tech: "MERN + Socket.io + Razorpay", status: "Deployed" },
    { name: "StudyHelperAI", tech: "React + TypeScript + Gemini AI", status: "Deployed" },
    { name: "DSA Mastery", tech: "MERN + Chart.js", status: "Deployed" },
    { name: "Blog App", tech: "React + Node.js + MongoDB", status: "Deployed" },
    { name: "DevTinder", tech: "MERN Stack", status: "Deployed" }
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900 relative overflow-hidden pt-16 md:pt-0">
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 rounded-full blur-3xl opacity-50"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 rounded-full blur-3xl opacity-50"></div>

      <div className="container mx-auto px-4 md:px-6 py-12 md:py-20 relative z-10">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="space-y-4 md:space-y-6">
            <div className="inline-flex items-center gap-2 px-3 md:px-4 py-1.5 md:py-2 bg-green-50 dark:bg-green-900/20 rounded-full border border-green-200 dark:border-green-800">
              <div className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </div>
              <span className="text-xs md:text-sm font-medium text-green-700 dark:text-green-300">Open to Opportunities</span>
            </div>

            <div>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-2 md:mb-3 tracking-tight">Satyam Prajapati</h1>
              <p className="text-lg md:text-2xl text-gray-600 dark:text-gray-400 font-semibold tracking-wide">Full Stack Developer</p>
            </div>

            <p className="text-sm md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              Building production-ready web applications with <span className="font-semibold text-blue-600 dark:text-blue-400">React</span>, <span className="font-semibold text-green-600 dark:text-green-400">Node.js</span>, and <span className="font-semibold text-purple-600 dark:text-purple-400">MongoDB</span>. Passionate about creating scalable solutions with clean code.
            </p>

            <div className="flex flex-wrap gap-2 md:gap-3">
              <a href="#projects" className="px-4 md:px-6 py-2 md:py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-lg font-semibold transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 text-xs md:text-sm">
                View Projects
              </a>
              <a href="#contact" className="px-4 md:px-6 py-2 md:py-2.5 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg font-semibold border-2 border-gray-300 dark:border-gray-700 hover:border-gray-900 dark:hover:border-white transition-all shadow-sm hover:shadow-lg hover:-translate-y-0.5 text-xs md:text-sm">
                Contact Me
              </a>
              <a href="/assets/resume.pdf" target="_blank" className="px-4 md:px-6 py-2 md:py-2.5 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg font-semibold border border-gray-300 dark:border-gray-700 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all text-xs md:text-sm flex items-center gap-2">
                <i className="fas fa-file-alt"></i>
                <span>Resume</span>
              </a>
            </div>

            <div className="flex items-center gap-3 md:gap-4 pt-2 md:pt-4">
              <a href="https://github.com/satyam0777" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"><i className="fab fa-github text-xl md:text-2xl"></i></a>
              <a href="https://www.linkedin.com/in/satyam-prajapati-13a690256/" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"><i className="fab fa-linkedin text-xl md:text-2xl"></i></a>
              <a href="https://leetcode.com/satyam0777/" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-yellow-600 dark:hover:text-yellow-400 transition-colors"><i className="fas fa-code text-xl md:text-2xl"></i></a>
              <a href="mailto:officialsatyam0777@gmail.com" className="text-gray-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-400 transition-colors"><i className="fas fa-envelope text-xl md:text-2xl"></i></a>
            </div>
          </div>

          {/* Terminal-style Project Showcase */}
          <div className="bg-gray-900 dark:bg-gray-950 rounded-xl shadow-2xl border border-gray-700 overflow-hidden">
            {/* Terminal Header */}
            <div className="bg-gray-800 dark:bg-gray-900 px-3 md:px-4 py-2 md:py-3 flex items-center gap-2 border-b border-gray-700">
              <div className="flex gap-1.5 md:gap-2">
                <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-red-500"></div>
                <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-yellow-500"></div>
                <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="ml-2 md:ml-4 text-xs md:text-sm text-gray-400 font-mono">satyam@portfolio:~$</div>
            </div>

            {/* Terminal Content - Scrolling Projects */}
            <div className="p-4 md:p-6 h-64 md:h-96 overflow-hidden font-mono text-xs md:text-sm">
              <div className="space-y-3 md:space-y-4 animate-scroll">
                <div className="text-green-400">$ ls -la projects/</div>
                <div className="text-gray-400">total 6 projects</div>
                
                {projects.map((project, index) => (
                  <div key={index} className="mt-3 md:mt-4 border-l-2 border-blue-500 pl-3 md:pl-4">
                    <div className="text-blue-400">📁 {project.name}</div>
                    <div className="text-gray-500 text-xs mt-1">├─ Stack: {project.tech}</div>
                    <div className="text-green-500 text-xs">└─ Status: ✓ Deployed</div>
                  </div>
                ))}

                <div className="mt-4 md:mt-6 text-purple-400">$ leetcode stats</div>
                <div className="text-gray-400">
                  <div className="flex items-center gap-2 mt-2">
                    <span className="text-green-500">●</span>
                    <span>250+ Problems Solved</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-yellow-500">●</span>
                    <span>Data Structures & Algorithms</span>
                  </div>
                </div>

                <div className="mt-4 md:mt-6 text-cyan-400">$ tech-stack --list</div>
                <div className="text-gray-400 space-y-1 mt-2">
                  <div><span className="text-blue-500">→</span> Frontend: React, Next.js, TypeScript</div>
                  <div><span className="text-green-500">→</span> Backend: Node.js, Express, MongoDB</div>
                  <div><span className="text-purple-500">→</span> Tools: Git, Docker, Postman</div>
                </div>

                <div className="mt-4 md:mt-6">
                  <span className="text-gray-500">$ </span>
                  <span className="animate-pulse">▊</span>
                </div>

                {/* Repeat for continuous scroll */}
                <div className="mt-6 md:mt-8 text-green-400">$ ls -la projects/</div>
                <div className="text-gray-400">total 6 projects</div>
                
                {projects.map((project, index) => (
                  <div key={`repeat-${index}`} className="mt-3 md:mt-4 border-l-2 border-blue-500 pl-3 md:pl-4">
                    <div className="text-blue-400">📁 {project.name}</div>
                    <div className="text-gray-500 text-xs mt-1">├─ Stack: {project.tech}</div>
                    <div className="text-green-500 text-xs">└─ Status: ✓ Deployed</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
