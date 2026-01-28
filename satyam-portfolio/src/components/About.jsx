
const About = () => {
  return (
    <section id="about" className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
              About Me
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              MERN Stack Developer • Problem Solver • 250+ LeetCode
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            {/* Left: Profile Card */}
            <div className="bg-gray-100 dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-xl">
                  👨‍💻
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    Full Stack Developer
                  </h3>
                  <p className="text-xs text-gray-600 dark:text-gray-400">Based in India 🇮🇳</p>
                </div>
              </div>

              <div className="space-y-3 text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                <p>
                  Specialized in <span className="font-semibold text-blue-600 dark:text-blue-400">MERN stack</span>, building production-ready applications from AI-powered study tools to telemedicine platforms with focus on performance and scalability.
                </p>
                <p>
                  Strong foundation in <span className="font-semibold text-green-600 dark:text-green-400">DSA</span> (250+ LeetCode) ensures clean, efficient, and maintainable code.
                </p>
              </div>

              <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-2 text-green-600 dark:text-green-400">
                  <div className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                  </div>
                  <span className="text-sm font-semibold">Open to full-time opportunities</span>
                </div>
              </div>
            </div>

            {/* Right: Tech Stack Card */}
            <div className="bg-gray-100 dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                {/* <span>🛠️</span> */}
                 Tech Stack
              </h3>
              
              <div className="space-y-4">
                {/* Frontend */}
                <div>
                  <h4 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-2">Frontend</h4>
                  <div className="flex flex-wrap gap-1.5">
                    {['React', 'Next.js', 'TypeScript', 'Tailwind', 'Redux'].map((tech) => (
                      <span key={tech} className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded text-xs font-medium hover:bg-blue-200 dark:hover:bg-blue-900/50 transition-colors">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Backend */}
                <div>
                  <h4 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-2">Backend</h4>
                  <div className="flex flex-wrap gap-1.5">
                    {['Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'REST APIs'].map((tech) => (
                      <span key={tech} className="px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded text-xs font-medium hover:bg-green-200 dark:hover:bg-green-900/50 transition-colors">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Tools */}
                <div>
                  <h4 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-2">Tools</h4>
                  <div className="flex flex-wrap gap-1.5">
                    {['Git', 'Socket.io', 'Razorpay', 'Gemini AI', 'Docker', 'Vercel'].map((tech) => (
                      <span key={tech} className="px-2 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded text-xs font-medium hover:bg-purple-200 dark:hover:bg-purple-900/50 transition-colors">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Stats */}
                <div className="pt-3 border-t border-gray-200 dark:border-gray-700">
                  <div className="grid grid-cols-3 gap-3 text-center">
                    <div>
                      <div className="text-xl font-bold text-blue-600 dark:text-blue-400">6+</div>
                      <div className="text-xs text-gray-600 dark:text-gray-400">Projects</div>
                    </div>
                    <div>
                      <div className="text-xl font-bold text-green-600 dark:text-green-400">250+</div>
                      <div className="text-xs text-gray-600 dark:text-gray-400">LeetCode</div>
                    </div>
                    <div>
                      <div className="text-xl font-bold text-purple-600 dark:text-purple-400">2+</div>
                      <div className="text-xs text-gray-600 dark:text-gray-400">Years</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

