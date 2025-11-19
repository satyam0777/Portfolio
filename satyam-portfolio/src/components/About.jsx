
// //cpmonent/about.jsx
// import { motion } from 'framer-motion';

// const About = () => (

// <section id="about" class="py-20 bg-gray-900">
//         <div class="container mx-auto px-6">
//             <div class="max-w-4xl mx-auto">
//                 <h2 class="text-4xl md:text-5xl font-bold text-center mb-16">
//                     <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
//                         About Me
//                     </span>
//                 </h2>
                
//                 <div class="grid md:grid-cols-2 gap-12 items-center">
//                     <div class="glass p-8 rounded-2xl ">
//                         <h3 class="text-2xl font-bold mb-6 text-blue-400">👨‍💻 Who Am I?</h3>
//                         <p class="text-gray-300 leading-relaxed mb-6">
//                            I'm a full-stack web developer from India, currently on an exciting journey of learning and building real-world applications. I have a strong grasp of modern web technologies and a growing command over the MERN stack — using React.js, Node.js, Express, and MongoDB to create functional and responsive web applications.
//                         </p>
//                         <p class="text-gray-300 leading-relaxed mb-6">
//                            While I may not have years of experience or dozens of deployed client projects yet, I’ve worked on several personal and practice projects that reflect my skills, dedication, and willingness to improve. I'm focused on writing clean, maintainable code and building applications that are both useful and user-friendly.

// I’m committed to continuous learning, and becoming a better developer every day — one project at a time.
//                         </p>
//                         <div class="flex flex-wrap gap-2">
//                             <span class="tech-stack-item px-3 py-1 rounded-full text-sm">React</span>
//                             <span class="tech-stack-item px-3 py-1 rounded-full text-sm">Node.js</span>
//                             <span class="tech-stack-item px-3 py-1 rounded-full text-sm">MongoDB</span>
//                             <span class="tech-stack-item px-3 py-1 rounded-full text-sm">Express</span>
//                             <span class="tech-stack-item px-3 py-1 rounded-full text-sm">TypeScript</span>
//                             <span class="tech-stack-item px-3 py-1 rounded-full text-sm">Next Js</span>
//                         </div>
//                     </div>
                    
//                     <div class="glass p-8 rounded-2xl ">
//                         <h3 class="text-2xl font-bold mb-6 text-blue-400">🎯 What I Do</h3>
//                         <div class="space-y-4">
//                             <div class="flex items-start gap-4">
//                                 <div class="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
//                                     <i class="fas fa-globe text-sm"></i>
//                                 </div>
//                                 <div>
//                                     <h4 class="font-semibold mb-2">Full Stack Development</h4>
//                                     <p class="text-gray-400 text-sm">End-to-end web application development using modern technologies</p>
//                                 </div>
//                             </div>
//                             <div class="flex items-start gap-4">
//                                 <div class="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
//                                     <i class="fas fa-mobile-alt text-sm"></i>
//                                 </div>
//                                 <div>
//                                     <h4 class="font-semibold mb-2">Responsive Design</h4>
//                                     <p class="text-gray-400 text-sm">Mobile-first approach ensuring perfect user experience on all devices</p>
//                                 </div>
//                             </div>
//                             <div class="flex items-start gap-4">
//                                 <div class="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
//                                     <i class="fas fa-rocket text-sm"></i>
//                                 </div>
//                                 <div>
//                                     <h4 class="font-semibold mb-2">Performance Optimization</h4>
//                                     <p class="text-gray-400 text-sm">Optimizing applications for speed, SEO, and user experience</p>
//                                 </div>
//                             </div>
//                             <div class="flex items-start gap-4">
//                                 <div class="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0">
//                                     <i class="fas fa-users text-sm"></i>
//                                 </div>
//                                 <div>
//                                     <h4 class="font-semibold mb-2">Collaboration</h4>
//                                     <p class="text-gray-400 text-sm">Working closely with clients to bring their vision to life</p>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </section>
// );

// export default About;


// components/About.jsx
// import { motion } from 'framer-motion';

// const About = () => {
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.3,
//         duration: 0.6
//       }
//     }
//   };

//   const cardVariants = {
//     hidden: { opacity: 0, y: 50 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 0.8,
//         ease: "easeOut"
//       }
//     }
//   };

//   const techStack = [
//     "React", "Node.js", "MongoDB", "Express", "TypeScript", "Next.js"
//   ];

//   const services = [
//     {
//       icon: "🌐",
//       title: "Full Stack Development",
//       description: "End-to-end web application development using modern technologies and best practices"
//     },
//     {
//       icon: "📱",
//       title: "Responsive Design",
//       description: "Mobile-first approach ensuring perfect user experience across all devices"
//     },
//     {
//       icon: "🚀",
//       title: "Performance Optimization",
//       description: "Optimizing applications for speed, SEO, and exceptional user experience"
//     },
//     {
//       icon: "👥",
//       title: "Collaboration",
//       description: "Working closely with teams and clients to bring innovative ideas to life"
//     }
//   ];

//   return (
//     <section id="about" className="py-20 bg-gray-900 text-white">
//       <div className="container mx-auto px-6">
//         <div className="max-w-6xl mx-auto">
//           <motion.h2 
//             className="text-4xl md:text-5xl font-bold text-center mb-16"
//             initial={{ opacity: 0, y: -30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//           >
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
//               About Me
//             </span>
//           </motion.h2>
          
//           <motion.div 
//             className="grid md:grid-cols-2 gap-8"
//             variants={containerVariants}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//           >
//             {/* Who Am I Card */}
//             <motion.div 
//               className="glass p-8 rounded-2xl bg-gray-800/50 backdrop-blur-sm border border-gray-700 hover:border-blue-500/50 transition-all duration-300 flex flex-col h-full"
//               variants={cardVariants}
//               whileHover={{ scale: 1.02 }}
//             >
//               <div className="flex-grow">
//                 <h3 className="text-2xl font-bold mb-6 text-blue-400 flex items-center gap-3">
//                   <span className="text-3xl">👨‍💻</span>
//                   Who Am I?
//                 </h3>
//                 <div className="space-y-4 text-gray-300 leading-relaxed">
//                   <p>
//                     I'm a passionate full-stack web developer from India, currently on an exciting journey of learning and building real-world applications. I have a strong grasp of modern web technologies and a growing command over the MERN stack.
//                   </p>
//                   <p>
//                     While I may not have years of experience yet, I've worked on several personal and practice projects that reflect my skills, dedication, and willingness to improve. I'm focused on writing clean, maintainable code and building applications that are both useful and user-friendly.
//                   </p>
//                   <p className="text-blue-200 font-medium">
//                     I'm committed to continuous learning and becoming a better developer every day — one project at a time.
//                   </p>
//                 </div>
//               </div>
              
//               <div className="mt-6 pt-6 border-t border-gray-600">
//                 <h4 className="text-lg font-semibold mb-3 text-blue-300">Tech Stack</h4>
//                 <div className="flex flex-wrap gap-2">
//                   {techStack.map((tech, index) => (
//                     <motion.span
//                       key={tech}
//                       className="px-3 py-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-full text-sm text-blue-200 hover:from-blue-500/30 hover:to-purple-500/30 transition-all duration-300"
//                       initial={{ opacity: 0, scale: 0.8 }}
//                       whileInView={{ opacity: 1, scale: 1 }}
//                       transition={{ delay: index * 0.1, duration: 0.3 }}
//                       viewport={{ once: true }}
//                       whileHover={{ scale: 1.05 }}
//                     >
//                       {tech}
//                     </motion.span>
//                   ))}
//                 </div>
//               </div>
//             </motion.div>
            
//             {/* What I Do Card */}
//             <motion.div 
//               className="glass p-8 rounded-2xl bg-gray-800/50 backdrop-blur-sm border border-gray-700 hover:border-purple-500/50 transition-all duration-300 flex flex-col h-full"
//               variants={cardVariants}
//               whileHover={{ scale: 1.02 }}
//             >
//               <h3 className="text-2xl font-bold mb-6 text-purple-400 flex items-center gap-3">
//                 <span className="text-3xl">🎯</span>
//                 What I Do
//               </h3>
//               <div className="space-y-6 flex-grow">
//                 {services.map((service, index) => (
//                   <motion.div 
//                     key={service.title}
//                     className="flex items-start gap-4 p-4 rounded-lg bg-gray-700/30 hover:bg-gray-700/50 transition-all duration-300"
//                     initial={{ opacity: 0, x: -20 }}
//                     whileInView={{ opacity: 1, x: 0 }}
//                     transition={{ delay: index * 0.15, duration: 0.5 }}
//                     viewport={{ once: true }}
//                     whileHover={{ x: 5 }}
//                   >
//                     <div className="text-2xl flex-shrink-0 mt-1">
//                       {service.icon}
//                     </div>
//                     <div className="flex-grow">
//                       <h4 className="font-semibold mb-2 text-white text-lg">
//                         {service.title}
//                       </h4>
//                       <p className="text-gray-400 text-sm leading-relaxed">
//                         {service.description}
//                       </p>
//                     </div>
//                   </motion.div>
//                 ))}
//               </div>
//             </motion.div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;



// components/About.jsx
// import { motion } from 'framer-motion';

// const About = () => {
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.2,
//         duration: 0.6
//       }
//     }
//   };

//   const cardVariants = {
//     hidden: { opacity: 0, y: 30 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 0.6,
//         ease: "easeOut"
//       }
//     }
//   };

//   const techStack = [
//     { name: "React", color: "from-blue-400 to-cyan-400" },
//     { name: "Node.js", color: "from-green-400 to-emerald-400" },
//     { name: "MongoDB", color: "from-green-500 to-teal-500" },
//     { name: "Express", color: "from-gray-400 to-gray-600" },
//     { name: "TypeScript", color: "from-blue-500 to-indigo-500" },
//     { name: "Next.js", color: "from-purple-400 to-pink-400" }
//   ];

//   const highlights = [
//     { 
//       icon: "⚡", 
//       title: "Fast Learner", 
//       subtitle: "Quick to adapt new technologies",
//       color: "yellow"
//     },
//     { 
//       icon: "🎯", 
//       title: "Problem Solver", 
//       subtitle: "Clean, efficient solutions",
//       color: "blue"
//     },
//     { 
//       icon: "🚀", 
//       title: "Performance Focused", 
//       subtitle: "Optimized user experiences",
//       color: "purple"
//     },
//     { 
//       icon: "💡", 
//       title: "Innovation Driven", 
//       subtitle: "Creative approach to challenges",
//       color: "green"
//     }
//   ];

//   const stats = [
//     { number: "50+", label: "Hours of Coding Weekly" },
//     { number: "10+", label: "Projects Completed" },
//     { number: "100%", label: "Commitment Level" }
//   ];

//   return (
//     <section id="about" className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
//       {/* Background Pattern */}
//       <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(120,119,198,0.1),transparent_50%)] pointer-events-none"></div>
//       <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,105,180,0.1),transparent_50%)] pointer-events-none"></div>
      
//       <div className="container mx-auto px-6 relative z-10">
//         <div className="max-w-7xl mx-auto">
//           {/* Header */}
//           <motion.div 
//             className="text-center mb-16"
//             initial={{ opacity: 0, y: -30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//           >
//             <motion.div
//               className="inline-block px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full border border-blue-500/30 mb-6"
//               whileHover={{ scale: 1.05 }}
//             >
//               <span className="text-blue-300 text-sm font-medium">💼 About Developer</span>
//             </motion.div>
//             <h2 className="text-5xl md:text-6xl font-black mb-4">
//               <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
//                 Meet The Developer
//               </span>
//             </h2>
//             <p className="text-xl text-gray-300 max-w-2xl mx-auto">
//               Passionate full-stack developer crafting digital experiences with modern technologies
//             </p>
//           </motion.div>

//           {/* Stats Row */}
//           <motion.div 
//             className="grid grid-cols-3 gap-6 mb-16"
//             variants={containerVariants}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//           >
//             {stats.map((stat, index) => (
//               <motion.div
//                 key={stat.label}
//                 className="text-center p-6 rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300"
//                 variants={cardVariants}
//                 whileHover={{ y: -5, scale: 1.02 }}
//               >
//                 <div className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-2">
//                   {stat.number}
//                 </div>
//                 <div className="text-gray-400 text-sm font-medium">
//                   {stat.label}
//                 </div>
//               </motion.div>
//             ))}
//           </motion.div>

//           {/* Main Content Grid */}
//           <motion.div 
//             className="grid lg:grid-cols-3 gap-8"
//             variants={containerVariants}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//           >
//             {/* Profile Card */}
//             <motion.div 
//               className="lg:col-span-2 p-8 rounded-3xl bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm border border-gray-700/50 hover:border-purple-500/50 transition-all duration-500 relative overflow-hidden"
//               variants={cardVariants}
//               whileHover={{ scale: 1.01 }}
//             >
//               <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl"></div>
              
//               <div className="relative z-10">
//                 <div className="flex items-center gap-4 mb-6">
//                   <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center text-2xl">
//                     👨‍💻
//                   </div>
//                   <div>
//                     <h3 className="text-2xl font-bold text-white">Full Stack Developer</h3>
//                     <p className="text-purple-300">Based in India 🇮🇳</p>
//                   </div>
//                 </div>

//                 <div className="space-y-4 text-gray-300 leading-relaxed mb-8">
//                   <p className="text-lg">
//                     <span className="text-blue-400 font-semibold">Passionate learner</span> with strong foundations in the <span className="text-purple-400 font-semibold">MERN stack</span>. I build functional, responsive web applications with clean, maintainable code.
//                   </p>
//                   <p>
//                     Currently focused on expanding my skills through hands-on projects and staying updated with the latest web development trends and best practices.
//                   </p>
//                 </div>

//                 {/* Tech Stack Pills */}
//                 <div className="space-y-3">
//                   <h4 className="text-lg font-semibold text-white flex items-center gap-2">
//                     <span className="text-yellow-400">⚡</span> Tech Arsenal
//                   </h4>
//                   <div className="flex flex-wrap gap-2">
//                     {techStack.map((tech, index) => (
//                       <motion.div
//                         key={tech.name}
//                         className={`px-4 py-2 rounded-full bg-gradient-to-r ${tech.color} text-white text-sm font-medium shadow-lg hover:shadow-xl transition-all duration-300`}
//                         initial={{ opacity: 0, scale: 0.8 }}
//                         whileInView={{ opacity: 1, scale: 1 }}
//                         transition={{ delay: index * 0.1, duration: 0.4 }}
//                         viewport={{ once: true }}
//                         whileHover={{ scale: 1.1, y: -2 }}
//                       >
//                         {tech.name}
//                       </motion.div>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             </motion.div>
            
//             {/* Highlights Card */}
//             <motion.div 
//               className="p-8 rounded-3xl bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm border border-gray-700/50 hover:border-blue-500/50 transition-all duration-500 relative overflow-hidden"
//               variants={cardVariants}
//               whileHover={{ scale: 1.01 }}
//             >
//               <div className="absolute top-0 left-0 w-24 h-24 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full blur-2xl"></div>
              
//               <div className="relative z-10">
//                 <h3 className="text-2xl font-bold mb-8 text-white flex items-center gap-3">
//                   <span className="text-2xl">🎯</span>
//                   Key Strengths
//                 </h3>
                
//                 <div className="space-y-6">
//                   {highlights.map((item, index) => (
//                     <motion.div 
//                       key={item.title}
//                       className="group p-4 rounded-xl bg-gray-700/20 hover:bg-gray-700/40 transition-all duration-300 border border-transparent hover:border-gray-600/50"
//                       initial={{ opacity: 0, x: -20 }}
//                       whileInView={{ opacity: 1, x: 0 }}
//                       transition={{ delay: index * 0.15, duration: 0.5 }}
//                       viewport={{ once: true }}
//                       whileHover={{ x: 5 }}
//                     >
//                       <div className="flex items-start gap-4">
//                         <div className="text-2xl group-hover:scale-110 transition-transform duration-300">
//                           {item.icon}
//                         </div>
//                         <div>
//                           <h4 className="font-bold text-white text-lg mb-1 group-hover:text-blue-300 transition-colors duration-300">
//                             {item.title}
//                           </h4>
//                           <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300">
//                             {item.subtitle}
//                           </p>
//                         </div>
//                       </div>
//                     </motion.div>
//                   ))}
//                 </div>

//                 {/* CTA */}
//                 <motion.div 
//                   className="mt-8 p-4 rounded-xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20"
//                   whileHover={{ scale: 1.02 }}
//                 >
//                   <p className="text-center text-blue-300 font-medium">
//                     🚀 Ready to collaborate and build amazing things together!
//                   </p>
//                 </motion.div>
//               </div>
//             </motion.div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;



// components/About.jsx
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
                <span>🛠️</span> Tech Stack
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