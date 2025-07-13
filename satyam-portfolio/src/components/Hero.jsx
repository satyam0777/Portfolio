// Hero.jsx
// import { motion } from 'framer-motion';

// const Hero = () => (
//   <section className="h-screen flex items-center justify-center text-center bg-gradient-to-b from-black to-gray-900 text-white font-sans">
//     <motion.div
//       initial={{ opacity: 0, y: 50 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 1 }}
//     >
//       <h1 className="text-4xl md:text-6xl font-bold mb-2">Hi, I'm Satyam 👋</h1>
//       <motion.p
//         className="text-xl md:text-2xl text-gray-300"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 0.5 }}
//       >
//         Full Stack Developer | MERN | Freelancer
//       </motion.p>
//       <motion.a
//         href="#projects"
//         className="mt-6 inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-full text-white font-medium transition"
//         initial={{ scale: 0 }}
//         animate={{ scale: 1 }}
//         transition={{ delay: 1, duration: 0.3 }}
//       >
//         🚀 View My Work
//       </motion.a>
//     </motion.div>
//   </section>
// );

// export default Hero;

// Hero.jsx
// import { motion } from 'framer-motion';

// const Hero = () => (
//   <section
//     id="hero"
//     className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 overflow-hidden font-sans bg-tech bg-[length:200%_200%] animate-techWaves"
//   >
//     <div className="z-10">
//       <motion.h1
//         initial={{ opacity: 0, y: -40 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1 }}
//         className="text-white text-5xl sm:text-6xl font-bold mb-4"
//       >
//         Hi, I'm <span className="text-blue-400 font-signature">Satyam</span>
//       </motion.h1>
//       <motion.p
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1, delay: 0.3 }}
//         className="text-gray-300 text-lg sm:text-xl max-w-2xl"
//       >
//         A Full Stack Developer crafting elegant and scalable web applications using modern technologies like React, Node.js, MongoDB, and Express.
//       </motion.p>
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1, delay: 0.6 }}
//         className="mt-8 flex justify-center gap-6"
//       >
//         <a href="#projects" className="bg-blue-500 text-white px-5 py-3 rounded-full hover:bg-blue-600 transition duration-300">View Projects</a>
//         <a href="#contact" className="border border-white text-white px-5 py-3 rounded-full hover:bg-white hover:text-gray-900 transition duration-300">Contact Me</a>
//       </motion.div>
//     </div>
//     <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-indigo-900/10 z-0" />
//   </section>
// );

// export default Hero;

// Hero.jsx
// import { motion } from 'framer-motion';
// import webImage from '/assets/web-design.png';
// import setupImage from '/assets/setup-desk.png';

// const Hero = () => (
//   <section
//     id="hero"
//     className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 overflow-hidden font-sans bg-tech bg-[length:200%_200%] animate-techWaves"
//   >
//     <div className="absolute top-0 left-0 h-full w-full pointer-events-none z-0">
//       <img src={webImage} alt="web design" className="absolute top-10 left-10 w-32 md:w-48 opacity-30 animate-floatAround" />
//       <img src={setupImage} alt="system setup" className="absolute bottom-10 right-10 w-40 md:w-56 opacity-30 animate-floatAround" />
//     </div>
//     <div className="z-10">
//       <motion.h1
//         initial={{ opacity: 0, y: -40 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1 }}
//         className="text-white text-5xl sm:text-6xl font-bold mb-4"
//       >
//         Hi, I'm <span className="text-blue-400 font-signature">Satyam Prajapati</span>
//       </motion.h1>
//       <motion.p
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1, delay: 0.3 }}
//         className="text-gray-300 text-lg sm:text-xl max-w-2xl"
//       >
//         A Full Stack Developer crafting elegant and scalable web applications using modern technologies like React, Node.js, MongoDB, and Express.
//       </motion.p>
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1, delay: 0.6 }}
//         className="mt-8 flex justify-center gap-6"
//       >
//         <a href="#projects" className="bg-blue-500 text-white px-5 py-3 rounded-full hover:bg-blue-600 transition duration-300">View Projects</a>
//         <a href="#contact" className="border border-white text-white px-5 py-3 rounded-full hover:bg-white hover:text-gray-900 transition duration-300">Contact Me</a>
//           <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="bg-blue-500 text-white px-5 py-3 rounded-full hover:bg-blue-600 transition duration-300">📄 View Resume</a>
//       </motion.div>
//     </div>
//     <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-indigo-900/10 z-0" />
//   </section>
// );

// export default Hero;

import { motion } from 'framer-motion';


const Hero = () => (


//  <section id="home" class="min-h-screen flex items-center justify-center relative overflow-hidden cyber-grid">
//         <div class="code-bg"></div>
//         <div class="container mx-auto px-6 text-center relative z-10">
//             <div class="availability-badge inline-flex items-center px-4 py-2 rounded-full text-sm font-medium mb-8 mt-20 sm:mt-0">
//                 <span class="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
//                 Available for Work
//             </div>
            
//             <h1 class="text-5xl md:text-7xl font-bold mb-6 leading-tight">
               
//                  <motion.h1
//         initial={{ opacity: 0, y: -40 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1 }}
//         className="text-white text-5xl sm:text-6xl font-bold mb-4"
//       >
//         Hi, I'm <span className="text-blue-400 font-signature">Satyam Prajapati</span>
//       </motion.h1>
//             </h1>
            
//             <div class="text-2xl md:text-3xl mb-8 text-gray-300">
//                 <span class="typing-animation">Full Stack Developer & Problem Solver</span>
//             </div>
            
//             <p class="text-xl mb-12 max-w-3xl mx-auto text-gray-400 leading-relaxed">
//                 I craft exceptional digital experiences using modern technologies. 
//                 Specializing in <span class="text-blue-400 font-semibold">MERN Stack</span>, 
//                 I transform ideas into scalable, user-friendly applications.
//             </p>
            
            
            
//             <div class="flex flex-wrap gap-6 justify-center">
//                 <a href="#projects" class="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-full hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 glow">
//                     <i class="fas fa-code mr-2"></i>
//                     View My Work
//                 </a>
//                 <a href="#contact" class="glass border-2 border-blue-500 text-white px-8 py-4 rounded-full hover:bg-blue-500 hover:bg-opacity-20 transition-all duration-300">
//                     <i class="fas fa-envelope mr-2"></i>
//                     Let's Connect
//                 </a>
//                 <a href="../public/assets/resume.pdf" target="_blank" class="bg-gray-800 text-white px-8 py-4 rounded-full hover:bg-gray-700 transition-all duration-300">
//                     <i class="fas fa-download mr-2"></i>
//                     Download Resume
//                 </a>
//             </div>
            
//             <div class="social-links flex justify-center gap-6 mt-12">
//                 <a href="https://github.com/satyam0777" target="_blank" class="glass w-12 h-12 rounded-full flex items-center justify-center hover:bg-blue-500 hover:bg-opacity-20">
//                     <i class="fab fa-github text-xl"></i>
//                 </a>
//                 <a href="https://www.linkedin.com/in/satyam-prajapati-13a690256/" target="_blank" class="glass w-12 h-12 rounded-full flex items-center justify-center hover:bg-blue-500 hover:bg-opacity-20">
//                     <i class="fab fa-linkedin text-xl"></i>
//                 </a>
//                 <a href="https://twitter.com/satyam9352" target="_blank" class="glass w-12 h-12 rounded-full flex items-center justify-center hover:bg-blue-500 hover:bg-opacity-20">
//                     <i class="fab fa-twitter text-xl"></i>
//                 </a>
//                 <a href="mailto:officialsatyam0777@gmail.com" class="glass w-12 h-12 rounded-full flex items-center justify-center hover:bg-blue-500 hover:bg-opacity-20">
//                     <i class="fas fa-envelope text-xl"></i>
//                 </a>
//             </div>
//         </div>

//            <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 floating">
//             <div class="w-6 h-10 border-2 border-blue-400 rounded-full flex justify-center">
//                 <div class="w-1 h-3 bg-blue-400 rounded-full mt-2 animate-bounce"></div>
//             </div>
//         </div>
//         </section>
    

//    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden cyber-grid">
<main>
<section id="home" className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden cyber-grid">

  <div className="code-bg"></div>

  <div className="container mx-auto px-6 text-center relative z-10">
    <div className="availability-badge inline-flex items-center px-4 py-2 rounded-full text-sm font-medium mb-8 mt-20 sm:mt-0">
      <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
      Available for Work
    </div>

    <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-white text-5xl sm:text-6xl font-bold mb-4"
      >
        Hi, I'm <span className="text-blue-400 font-signature">Satyam Prajapati</span>
      </motion.h1>
    </h1>

    <div className="text-2xl md:text-3xl mb-8 text-gray-300">
      <span className="typing-animation">Full Stack Developer & Problem Solver</span>
    </div>

    <p className="text-xl mb-12 max-w-3xl mx-auto text-gray-400 leading-relaxed">
      I craft exceptional digital experiences using modern technologies.
      Specializing in <span className="text-blue-400 font-semibold">MERN Stack</span>,
      I transform ideas into scalable, user-friendly applications.
    </p>

    <div className="flex flex-wrap gap-6 justify-center">
      <a
        href="#projects"
        className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-full hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 glow"
      >
        <i className="fas fa-code mr-2"></i>
        View My Work
      </a>
      {/* <a
        href="#contact"
        className="glass border-2 border-blue-500 text-white px-8 py-4 rounded-full hover:bg-blue-500 hover:bg-opacity-20 transition-all duration-300"
      >
        <i className="fas fa-envelope mr-2"></i>
        Let's Connect
      </a> */}
      <a href="#contact" class="glass border-2 border-blue-500 text-white px-8 py-4 rounded-full hover:bg-blue-500 hover:bg-opacity-20 transition-all duration-300">
  <i class="fas fa-briefcase mr-2"></i>
  Hire Me
</a>
      <a
        href="../public/assets/resume.pdf"
        target="_blank"
        className="bg-gray-800 text-white px-8 py-4 rounded-full hover:bg-gray-700 transition-all duration-300"
      >
        <i className="fas fa-download mr-2"></i>
        Download Resume
      </a>
    </div>

    <div className="social-links flex justify-center gap-6 mt-12">
      <a
        href="https://github.com/satyam0777"
        target="_blank"
        className="glass w-12 h-12 rounded-full flex items-center justify-center hover:bg-blue-500 hover:bg-opacity-20"
      >
        <i className="fab fa-github text-xl"></i>
      </a>
      <a
        href="https://www.linkedin.com/in/satyam-prajapati-13a690256/"
        target="_blank"
        className="glass w-12 h-12 rounded-full flex items-center justify-center hover:bg-blue-500 hover:bg-opacity-20"
      >
        <i className="fab fa-linkedin text-xl"></i>
      </a>
      <a
        href="https://twitter.com/satyam9352"
        target="_blank"
        className="glass w-12 h-12 rounded-full flex items-center justify-center hover:bg-blue-500 hover:bg-opacity-20"
      >
        <i className="fab fa-twitter text-xl"></i>
      </a>
      <a
        href="mailto:officialsatyam0777@gmail.com"
        className="glass w-12 h-12 rounded-full flex items-center justify-center hover:bg-blue-500 hover:bg-opacity-20"
      >
        <i className="fas fa-envelope text-xl"></i>
      </a>
    </div>
  </div>

  <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 floating">
    <div className="w-6 h-10 border-2 border-blue-400 rounded-full flex justify-center">
      <div className="w-1 h-3 bg-blue-400 rounded-full mt-2 animate-bounce"></div>
    </div>
  </div>

 


</section>


<section id="leetcode" className="py-16 px-4 sm:px-6  bg-[#0f172a] text-white">
  <div className="max-w-4xl mx-auto text-center">
    <h2 className="text-3xl sm:text-4xl font-bold mb-4">📚 LeetCode Journey</h2>
    <p className="text-gray-400 mb-8 text-base sm:text-lg">
      I regularly solve problems on <span className="text-yellow-400 font-semibold">LeetCode</span> to improve my data structures and algorithms skills. 
    </p>

    <div className="bg-gray-800 rounded-xl p-6 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-lg">
      <div className="text-left">
        <h3 className="text-xl sm:text-2xl font-semibold mb-2">📈 My Progress</h3>
        <ul className="text-gray-300 text-sm sm:text-base leading-relaxed">
          <li>🟢 Easy: 70+</li>
          <li>🟡 Medium: 80+</li>
          <li>🔴 Hard: 15+</li>
        </ul>
      </div>

      <div>
        <a
          href="https://leetcode.com/satyam0777/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-yellow-400 hover:bg-yellow-500 text-black px-6 py-3 rounded-full font-medium transition-all duration-300 inline-block"
        >
          View LeetCode Profile
        </a>
      </div>
    </div>
  </div>
</section>
</main>

  
);

export default Hero;