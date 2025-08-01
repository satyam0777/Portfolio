// // src/components/Skills.jsx
// import React from "react";

// const SkillBar = ({ name, percentage, color }) => (
//   <div className={`p-4 rounded-lg bg-gray-700 hover:bg-${color}-500 hover:bg-opacity-20 transition-all`}>
//     <div className="flex justify-between mb-2">
//       <span>{name}</span>
//       <span>{percentage}%</span>
//     </div>
//     <div className="w-full h-2 bg-gray-600 rounded-full">
//       <div className={`h-2 bg-${color}-500 rounded-full`} style={{ width: `${percentage}%` }}></div>
//     </div>
//   </div>
// );

// const Skills = () => {
//   return (
//     // <section id="skills" className="py-20 bbg-gray-800 text-white min-h-screen">
//     <section id="skills" className="py-20 bg-tech bg-[length:200%_200%] animate-techWaves text-white min-h-screen">

//       <div className="container mx-auto px-6">
//         <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
//           <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
//             Skills & Technologies
//           </span>
//         </h2>

//         <div className="max-w-6xl mx-auto">
//           <div className="grid md:grid-cols-3 gap-8">
//             {/* Frontend */}
//             <div className="glass p-6 rounded-2xl bg-gray-800">
//               <h3 className="text-xl font-bold mb-6 text-blue-400">Frontend</h3>
//               <div className="space-y-4">
//                 <SkillBar name="HTML" percentage={98} color="blue" />
//                 <SkillBar name="CSS" percentage={95} color="blue" />
//                 <SkillBar name="Tailwind CSS" percentage={92} color="blue" />
//                 <SkillBar name="JavaScript" percentage={96} color="blue" />
//                 <SkillBar name="React.js" percentage={94} color="blue" />
//                 <SkillBar name="Next.js" percentage={90} color="blue" />
//                 <SkillBar name="TypeScript" percentage={85} color="blue" />
//               </div>
//             </div>

//             {/* Backend */}
//             <div className="glass p-6 rounded-2xl bg-gray-800">
//               <h3 className="text-xl font-bold mb-6 text-green-400">Backend</h3>
//               <div className="space-y-4">
//                 <SkillBar name="Node.js" percentage={92} color="green" />
//                 <SkillBar name="Express.js" percentage={90} color="green" />
//                 <SkillBar name="MongoDB" percentage={88} color="green" />
//                 <SkillBar name="Prisma ORM" percentage={85} color="green" />
//                 <SkillBar name="PostgreSQL" percentage={84} color="green" />
//                 <SkillBar name="REST APIs" percentage={90} color="green" />
//               </div>
//             </div>

//             {/* Tools & DevOps */}
//             <div className="glass p-6 rounded-2xl bg-gray-800">
//               <h3 className="text-xl font-bold mb-6 text-purple-400">Tools & DevOps</h3>
//               <div className="space-y-4">
//                 <SkillBar name="Git & GitHub" percentage={95} color="purple" />
//                 <SkillBar name="Postman" percentage={90} color="purple" />
//                 <SkillBar name="Ubuntu" percentage={85} color="purple" />
//                 <SkillBar name="Linux CLI" percentage={84} color="purple" />
//                 <SkillBar name="Firebase" percentage={80} color="purple" />
//                 <SkillBar name="Vercel" percentage={88} color="purple" />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Skills;


// src/components/Skills.jsx
// import React from "react";

// const SkillCard = ({ name, color }) => (
//   <div className={`p-4 rounded-lg bg-gray-700 hover:bg-${color}-500 hover:bg-opacity-20 transition-all duration-300 hover:scale-105 cursor-pointer border border-gray-600 hover:border-${color}-500`}>
//     <div className="flex items-center justify-center">
//       <span className={`text-${color}-400 font-medium text-center`}>{name}</span>
//     </div>
//   </div>
// );

// const Skills = () => {
//   return (
//     <section id="skills" className="py-20 bg-tech bg-[length:200%_200%] animate-techWaves text-white min-h-screen">
//       <div className="container mx-auto px-6">
//         <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
//           <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
//             Skills & Technologies
//           </span>
//         </h2>

//         <div className="max-w-6xl mx-auto">
//           <div className="grid md:grid-cols-3 gap-8">
//             {/* Frontend */}
//             <div className="glass p-6 rounded-2xl bg-gray-800">
//               <h3 className="text-xl font-bold mb-6 text-blue-400 text-center">Frontend</h3>
//               <div className="grid grid-cols-1 gap-3">
//                 <SkillCard name="HTML" color="blue" />
//                 <SkillCard name="CSS" color="blue" />
//                 <SkillCard name="Tailwind CSS" color="blue" />
//                 <SkillCard name="JavaScript" color="blue" />
//                 <SkillCard name="React.js" color="blue" />
//                 <SkillCard name="Next.js" color="blue" />
//                 <SkillCard name="TypeScript" color="blue" />
//               </div>
//             </div>

//             {/* Backend */}
//             <div className="glass p-6 rounded-2xl bg-gray-800">
//               <h3 className="text-xl font-bold mb-6 text-green-400 text-center">Backend</h3>
//               <div className="grid grid-cols-1 gap-3">
//                 <SkillCard name="Node.js" color="green" />
//                 <SkillCard name="Express.js" color="green" />
//                 <SkillCard name="MongoDB" color="green" />
//                 <SkillCard name="Prisma ORM" color="green" />
//                 <SkillCard name="PostgreSQL" color="green" />
//                 <SkillCard name="REST APIs" color="green" />
//               </div>
//             </div>

//             {/* Tools & DevOps */}
//             <div className="glass p-6 rounded-2xl bg-gray-800">
//               <h3 className="text-xl font-bold mb-6 text-purple-400 text-center">Tools & DevOps</h3>
//               <div className="grid grid-cols-1 gap-3">
//                 <SkillCard name="Git & GitHub" color="purple" />
//                 <SkillCard name="Postman" color="purple" />
//                 <SkillCard name="Ubuntu" color="purple" />
//                 <SkillCard name="Linux CLI" color="purple" />
//                 <SkillCard name="Firebase" color="purple" />
//                 <SkillCard name="Vercel" color="purple" />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Skills;


// import React, { useState } from "react";

// const SkillOrbit = ({ skills, radius, duration, color, reverse = false }) => {
//   return (
//     <div 
//       className={`absolute rounded-full border border-opacity-20 ${color === 'blue' ? 'border-blue-400' : color === 'green' ? 'border-green-400' : 'border-purple-400'}`}
//       style={{
//         width: `${radius * 2}px`,
//         height: `${radius * 2}px`,
//         left: '50%',
//         top: '50%',
//         transform: 'translate(-50%, -50%)',
//         animation: `${reverse ? 'spin-reverse' : 'spin'} ${duration}s linear infinite`
//       }}
//     >
//       {skills.map((skill, index) => {
//         const angle = (360 / skills.length) * index;
//         const x = Math.cos((angle * Math.PI) / 180) * (radius - 30);
//         const y = Math.sin((angle * Math.PI) / 180) * (radius - 30);
        
//         return (
//           <div
//             key={skill.name}
//             className={`absolute w-16 h-16 rounded-full bg-gradient-to-br ${skill.gradient} flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 cursor-pointer group border-2 ${skill.borderColor}`}
//             style={{
//               left: '50%',
//               top: '50%',
//               transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px)) ${reverse ? 'rotate(' + duration + 's)' : 'rotate(-' + duration + 's)'}`
//             }}
//           >
//             <div className="text-white text-xl group-hover:scale-125 transition-transform duration-300">
//               {skill.icon}
//             </div>
//             <div className={`absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs font-semibold ${skill.textColor} opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap bg-gray-900 px-2 py-1 rounded-lg`}>
//               {skill.name}
//             </div>
//           </div>
//         );
//       })}
//     </div>
//   );
// };

// const CentralHub = () => {
//   return (
//     <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center shadow-2xl animate-pulse">
//       <div className="text-3xl text-white">👨‍💻</div>
//       <div className="absolute inset-0 rounded-full bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 animate-ping opacity-20"></div>
//     </div>
//   );
// };

// const Skills = () => {
//   const [hoveredSkill, setHoveredSkill] = useState(null);

//   const frontendSkills = [
//     { name: "HTML", icon: "🌐", gradient: "from-orange-400 to-red-500", textColor: "text-orange-400", borderColor: "border-orange-400" },
//     { name: "CSS", icon: "🎨", gradient: "from-blue-400 to-blue-600", textColor: "text-blue-400", borderColor: "border-blue-400" },
//     { name: "JavaScript", icon: "⚡", gradient: "from-yellow-400 to-yellow-600", textColor: "text-yellow-400", borderColor: "border-yellow-400" },
//     { name: "React", icon: "⚛️", gradient: "from-cyan-400 to-blue-500", textColor: "text-cyan-400", borderColor: "border-cyan-400" },
//     { name: "Next.js", icon: "🔺", gradient: "from-gray-700 to-black", textColor: "text-gray-300", borderColor: "border-gray-400" },
//     { name: "TypeScript", icon: "📘", gradient: "from-blue-500 to-indigo-600", textColor: "text-blue-500", borderColor: "border-blue-500" }
//   ];

//   const backendSkills = [
//     { name: "Node.js", icon: "🟢", gradient: "from-green-400 to-green-600", textColor: "text-green-400", borderColor: "border-green-400" },
//     { name: "Express", icon: "🚀", gradient: "from-gray-600 to-gray-800", textColor: "text-gray-400", borderColor: "border-gray-400" },
//     { name: "MongoDB", icon: "🍃", gradient: "from-green-500 to-green-700", textColor: "text-green-500", borderColor: "border-green-500" },
//     { name: "PostgreSQL", icon: "🐘", gradient: "from-blue-600 to-indigo-700", textColor: "text-blue-600", borderColor: "border-blue-600" },
//     { name: "Prisma", icon: "🔷", gradient: "from-indigo-400 to-purple-500", textColor: "text-indigo-400", borderColor: "border-indigo-400" }
//   ];

//   const toolsSkills = [
//     { name: "Git", icon: "📝", gradient: "from-orange-500 to-red-600", textColor: "text-orange-500", borderColor: "border-orange-500" },
//     { name: "GitHub", icon: "🐙", gradient: "from-gray-700 to-gray-900", textColor: "text-gray-400", borderColor: "border-gray-400" },
//     { name: "Postman", icon: "📮", gradient: "from-orange-400 to-orange-600", textColor: "text-orange-400", borderColor: "border-orange-400" },
//     { name: "Ubuntu", icon: "🐧", gradient: "from-orange-500 to-red-500", textColor: "text-orange-500", borderColor: "border-orange-500" },
//     { name: "Firebase", icon: "🔥", gradient: "from-yellow-400 to-orange-500", textColor: "text-yellow-400", borderColor: "border-yellow-400" },
//     { name: "Vercel", icon: "▲", gradient: "from-gray-800 to-black", textColor: "text-gray-300", borderColor: "border-gray-400" }
//   ];

//   return (
//     <>
//       <style jsx>{`
//         @keyframes spin {
//           from { transform: translate(-50%, -50%) rotate(0deg); }
//           to { transform: translate(-50%, -50%) rotate(360deg); }
//         }
//         @keyframes spin-reverse {
//           from { transform: translate(-50%, -50%) rotate(0deg); }
//           to { transform: translate(-50%, -50%) rotate(-360deg); }
//         }
//         .skill-orbit {
//           animation: spin 20s linear infinite;
//         }
//         .skill-orbit-reverse {
//           animation: spin-reverse 25s linear infinite;
//         }
//       `}</style>
      
//       <section id="skills" className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white min-h-screen relative overflow-hidden">
//         {/* Background Effects */}
//         <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(120,119,198,0.1),transparent_50%)] pointer-events-none"></div>
//         <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,105,180,0.1),transparent_50%)] pointer-events-none"></div>
//         <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_80%,rgba(59,130,246,0.1),transparent_50%)] pointer-events-none"></div>
        
//         <div className="container mx-auto px-6 relative z-10">
//           <h2 className="text-5xl md:text-6xl font-black text-center mb-8">
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
//               Tech Universe
//             </span>
//           </h2>
//           <p className="text-xl text-gray-300 text-center mb-16 max-w-2xl mx-auto">
//             Explore my technical solar system - each skill orbiting in perfect harmony
//           </p>

//           {/* Solar System Container */}
//           <div className="relative w-full max-w-4xl mx-auto" style={{ height: '600px' }}>
//             {/* Central Hub */}
//             <CentralHub />
            
//             {/* Inner Orbit - Frontend */}
//             <SkillOrbit 
//               skills={frontendSkills} 
//               radius={140} 
//               duration={30} 
//               color="blue"
//             />
            
//             {/* Middle Orbit - Backend */}
//             <SkillOrbit 
//               skills={backendSkills} 
//               radius={220} 
//               duration={40} 
//               color="green" 
//               reverse={true}
//             />
            
//             {/* Outer Orbit - Tools */}
//             <SkillOrbit 
//               skills={toolsSkills} 
//               radius={300} 
//               duration={50} 
//               color="purple"
//             />
            
//             {/* Orbit Lines */}
//             <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full border border-blue-500/20"></div>
//             <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full border border-green-500/20"></div>
//             <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full rounded-full border border-purple-500/20" style={{maxWidth: '600px', maxHeight: '600px'}}></div>
//           </div>

//           {/* Legend */}
//           <div className="mt-16 grid md:grid-cols-3 gap-8 max-w-3xl mx-auto">
//             <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-blue-500/10 to-blue-600/10 border border-blue-500/20">
//               <div className="w-4 h-4 bg-blue-500 rounded-full mx-auto mb-3"></div>
//               <h3 className="text-lg font-bold text-blue-400 mb-2">Inner Orbit</h3>
//               <p className="text-gray-300 text-sm">Frontend Technologies</p>
//             </div>
//             <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-green-500/10 to-green-600/10 border border-green-500/20">
//               <div className="w-4 h-4 bg-green-500 rounded-full mx-auto mb-3"></div>
//               <h3 className="text-lg font-bold text-green-400 mb-2">Middle Orbit</h3>
//               <p className="text-gray-300 text-sm">Backend & Database</p>
//             </div>
//             <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-purple-500/10 to-purple-600/10 border border-purple-500/20">
//               <div className="w-4 h-4 bg-purple-500 rounded-full mx-auto mb-3"></div>
//               <h3 className="text-lg font-bold text-purple-400 mb-2">Outer Orbit</h3>
//               <p className="text-gray-300 text-sm">Tools & DevOps</p>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default Skills;


// import React, { useState } from "react";

// const SkillOrbit = ({ skills, radius, duration, color, reverse = false }) => {
//   return (
//     <div 
//       className={`absolute rounded-full border border-opacity-30 ${color === 'blue' ? 'border-blue-400' : color === 'green' ? 'border-green-400' : 'border-purple-400'}`}
//       style={{
//         width: `${radius * 2}px`,
//         height: `${radius * 2}px`,
//         left: '50%',
//         top: '50%',
//         transform: 'translate(-50%, -50%)',
//         animation: `${reverse ? 'spin-reverse' : 'spin'} ${duration}s linear infinite`
//       }}
//     >
//       {skills.map((skill, index) => {
//         const angle = (360 / skills.length) * index;
//         const x = Math.cos((angle * Math.PI) / 180) * (radius - 40);
//         const y = Math.sin((angle * Math.PI) / 180) * (radius - 40);
        
//         return (
//           <div
//             key={skill.name}
//             className="absolute group"
//             style={{
//               left: '50%',
//               top: '50%',
//               transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`
//             }}
//           >
//             {/* Skill Planet */}
//             <div
//               className={`w-20 h-20 rounded-full bg-gradient-to-br ${skill.gradient} flex flex-col items-center justify-center shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 cursor-pointer border-2 ${skill.borderColor} relative`}
//               style={{
//                 animation: `${reverse ? 'counter-spin' : 'counter-spin'} ${duration}s linear infinite`
//               }}
//             >
//               <div className="text-white text-2xl mb-1">
//                 {skill.icon}
//               </div>
//               <div className="text-white text-xs font-bold text-center leading-tight">
//                 {skill.name}
//               </div>
//             </div>
            
//             {/* Hover Glow Effect */}
//             <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${skill.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-md`}></div>
//           </div>
//         );
//       })}
//     </div>
//   );
// };

// const CentralHub = () => {
//   return (
//     <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center shadow-2xl animate-pulse">
//       <div className="text-3xl text-white">👨‍💻</div>
//       <div className="absolute inset-0 rounded-full bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 animate-ping opacity-20"></div>
//     </div>
//   );
// };

// const Skills = () => {
//   const [hoveredSkill, setHoveredSkill] = useState(null);

//   const frontendSkills = [
//     { name: "HTML", icon: "🌐", gradient: "from-orange-400 to-red-500", textColor: "text-orange-400", borderColor: "border-orange-400" },
//     { name: "CSS", icon: "🎨", gradient: "from-blue-400 to-blue-600", textColor: "text-blue-400", borderColor: "border-blue-400" },
//     { name: "JavaScript", icon: "⚡", gradient: "from-yellow-400 to-yellow-600", textColor: "text-yellow-400", borderColor: "border-yellow-400" },
//     { name: "React", icon: "⚛️", gradient: "from-cyan-400 to-blue-500", textColor: "text-cyan-400", borderColor: "border-cyan-400" },
//     { name: "Next.js", icon: "▲", gradient: "from-gray-700 to-black", textColor: "text-gray-300", borderColor: "border-gray-400" },
//     { name: "TypeScript", icon: "📘", gradient: "from-blue-500 to-indigo-600", textColor: "text-blue-500", borderColor: "border-blue-500" }
//   ];

//   const backendSkills = [
//     { name: "Node.js", icon: "🟢", gradient: "from-green-400 to-green-600", textColor: "text-green-400", borderColor: "border-green-400" },
//     { name: "Express", icon: "🚀", gradient: "from-gray-600 to-gray-800", textColor: "text-gray-400", borderColor: "border-gray-400" },
//     { name: "MongoDB", icon: "🍃", gradient: "from-green-500 to-green-700", textColor: "text-green-500", borderColor: "border-green-500" },
//     { name: "PostgreSQL", icon: "🐘", gradient: "from-blue-600 to-indigo-700", textColor: "text-blue-600", borderColor: "border-blue-600" },
//     { name: "REST API", icon: "🔗", gradient: "from-indigo-400 to-purple-500", textColor: "text-indigo-400", borderColor: "border-indigo-400" }
//   ];

//   const toolsSkills = [
//     { name: "Git", icon: "📝", gradient: "from-orange-500 to-red-600", textColor: "text-orange-500", borderColor: "border-orange-500" },
//     { name: "GitHub", icon: "🐙", gradient: "from-gray-700 to-gray-900", textColor: "text-gray-400", borderColor: "border-gray-400" },
//     { name: "Postman", icon: "📮", gradient: "from-orange-400 to-orange-600", textColor: "text-orange-400", borderColor: "border-orange-400" },
//     { name: "Ubuntu", icon: "🐧", gradient: "from-orange-500 to-red-500", textColor: "text-orange-500", borderColor: "border-orange-500" },
//     { name: "Firebase", icon: "🔥", gradient: "from-yellow-400 to-orange-500", textColor: "text-yellow-400", borderColor: "border-yellow-400" },
//     { name: "Vercel", icon: "▲", gradient: "from-gray-800 to-black", textColor: "text-gray-300", borderColor: "border-gray-400" }
//   ];

//   return (
//     <>
//       <style jsx>{`
//         @keyframes spin {
//           from { transform: translate(-50%, -50%) rotate(0deg); }
//           to { transform: translate(-50%, -50%) rotate(360deg); }
//         }
//         @keyframes spin-reverse {
//           from { transform: translate(-50%, -50%) rotate(0deg); }
//           to { transform: translate(-50%, -50%) rotate(-360deg); }
//         }
//         @keyframes counter-spin {
//           from { transform: rotate(0deg); }
//           to { transform: rotate(-360deg); }
//         }
//         .skill-orbit {
//           animation: spin 20s linear infinite;
//         }
//         .skill-orbit-reverse {
//           animation: spin-reverse 25s linear infinite;
//         }
//       `}</style>
      
//       <section id="skills" className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white min-h-screen relative overflow-hidden">
//         {/* Background Effects */}
//         <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(120,119,198,0.1),transparent_50%)] pointer-events-none"></div>
//         <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,105,180,0.1),transparent_50%)] pointer-events-none"></div>
//         <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_80%,rgba(59,130,246,0.1),transparent_50%)] pointer-events-none"></div>
        
//         <div className="container mx-auto px-6 relative z-10">
//           <h2 className="text-5xl md:text-6xl font-black text-center mb-8">
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
//               Tech Universe
//             </span>
//           </h2>
//           <p className="text-xl text-gray-300 text-center mb-16 max-w-2xl mx-auto">
//             Explore my technical solar system - each skill orbiting in perfect harmony
//           </p>

//           {/* Solar System Container */}
//           <div className="relative w-full max-w-4xl mx-auto" style={{ height: '600px' }}>
//             {/* Central Hub */}
//             <CentralHub />
            
//             {/* Inner Orbit - Frontend */}
//             <SkillOrbit 
//               skills={frontendSkills} 
//               radius={140} 
//               duration={30} 
//               color="blue"
//             />
            
//             {/* Middle Orbit - Backend */}
//             <SkillOrbit 
//               skills={backendSkills} 
//               radius={220} 
//               duration={40} 
//               color="green" 
//               reverse={true}
//             />
            
//             {/* Outer Orbit - Tools */}
//             <SkillOrbit 
//               skills={toolsSkills} 
//               radius={300} 
//               duration={50} 
//               color="purple"
//             />
            
//             {/* Orbit Lines */}
//             <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full border border-blue-500/20"></div>
//             <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full border border-green-500/20"></div>
//             <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full rounded-full border border-purple-500/20" style={{maxWidth: '600px', maxHeight: '600px'}}></div>
//           </div>

//           {/* Legend */}
//           <div className="mt-16 grid md:grid-cols-3 gap-8 max-w-3xl mx-auto">
//             <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-blue-500/10 to-blue-600/10 border border-blue-500/20">
//               <div className="w-4 h-4 bg-blue-500 rounded-full mx-auto mb-3"></div>
//               <h3 className="text-lg font-bold text-blue-400 mb-2">Inner Orbit</h3>
//               <p className="text-gray-300 text-sm">Frontend Technologies</p>
//             </div>
//             <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-green-500/10 to-green-600/10 border border-green-500/20">
//               <div className="w-4 h-4 bg-green-500 rounded-full mx-auto mb-3"></div>
//               <h3 className="text-lg font-bold text-green-400 mb-2">Middle Orbit</h3>
//               <p className="text-gray-300 text-sm">Backend & Database</p>
//             </div>
//             <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-purple-500/10 to-purple-600/10 border border-purple-500/20">
//               <div className="w-4 h-4 bg-purple-500 rounded-full mx-auto mb-3"></div>
//               <h3 className="text-lg font-bold text-purple-400 mb-2">Outer Orbit</h3>
//               <p className="text-gray-300 text-sm">Tools & DevOps</p>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default Skills;


import React, { useState } from "react";

const SkillOrbit = ({ skills, radius, duration, color, reverse = false }) => {
  return (
    <div 
      className={`absolute rounded-full border border-opacity-30 ${color === 'blue' ? 'border-blue-400' : color === 'green' ? 'border-green-400' : 'border-purple-400'}`}
      style={{
        width: `${radius * 2}px`,
        height: `${radius * 2}px`,
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)',
        animation: `${reverse ? 'spin-reverse' : 'spin'} ${duration}s linear infinite`
      }}
    >
      {skills.map((skill, index) => {
        const angle = (360 / skills.length) * index;
        const x = Math.cos((angle * Math.PI) / 180) * (radius - 30);
        const y = Math.sin((angle * Math.PI) / 180) * (radius - 30);
        
        return (
          <div
            key={skill.name}
            className="absolute group"
            style={{
              left: '50%',
              top: '50%',
              transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`
            }}
          >
            {/* Responsive Skill Planet */}
            <div
              className={`w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br ${skill.gradient} flex flex-col items-center justify-center shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 cursor-pointer border-2 ${skill.borderColor} relative`}
              style={{
                animation: `${reverse ? 'counter-spin' : 'counter-spin'} ${duration}s linear infinite`
              }}
            >
              <div className="text-white text-lg md:text-2xl mb-0.5 md:mb-1">
                {skill.icon}
              </div>
              <div className="text-white text-xs md:text-xs font-bold text-center leading-tight px-1">
                {skill.name}
              </div>
            </div>
            
            {/* Hover Glow Effect */}
            <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${skill.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-md`}></div>
          </div>
        );
      })}
    </div>
  );
};

const CentralHub = () => {
  return (
    <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center shadow-2xl animate-pulse">
      <div className="text-3xl text-white">👨‍💻</div>
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 animate-ping opacity-20"></div>
    </div>
  );
};

const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const frontendSkills = [
    { name: "HTML", icon: "🌐", gradient: "from-orange-400 to-red-500", textColor: "text-orange-400", borderColor: "border-orange-400" },
    { name: "CSS", icon: "🎨", gradient: "from-blue-400 to-blue-600", textColor: "text-blue-400", borderColor: "border-blue-400" },
    { name: "JavaScript", icon: "⚡", gradient: "from-yellow-400 to-yellow-600", textColor: "text-yellow-400", borderColor: "border-yellow-400" },
    { name: "React", icon: "⚛️", gradient: "from-cyan-400 to-blue-500", textColor: "text-cyan-400", borderColor: "border-cyan-400" },
    { name: "Next.js", icon: "▲", gradient: "from-gray-700 to-black", textColor: "text-gray-300", borderColor: "border-gray-400" },
    { name: "TypeScript", icon: "📘", gradient: "from-blue-500 to-indigo-600", textColor: "text-blue-500", borderColor: "border-blue-500" }
  ];

  const backendSkills = [
    { name: "Node.js", icon: "🟢", gradient: "from-green-400 to-green-600", textColor: "text-green-400", borderColor: "border-green-400" },
    { name: "Express", icon: "🚀", gradient: "from-gray-600 to-gray-800", textColor: "text-gray-400", borderColor: "border-gray-400" },
    { name: "MongoDB", icon: "🍃", gradient: "from-green-500 to-green-700", textColor: "text-green-500", borderColor: "border-green-500" },
    { name: "PostgreSQL", icon: "🐘", gradient: "from-blue-600 to-indigo-700", textColor: "text-blue-600", borderColor: "border-blue-600" },
    { name: "REST API", icon: "🔗", gradient: "from-indigo-400 to-purple-500", textColor: "text-indigo-400", borderColor: "border-indigo-400" }
  ];

  const toolsSkills = [
    { name: "Git", icon: "📝", gradient: "from-orange-500 to-red-600", textColor: "text-orange-500", borderColor: "border-orange-500" },
    { name: "GitHub", icon: "🐙", gradient: "from-gray-700 to-gray-900", textColor: "text-gray-400", borderColor: "border-gray-400" },
    { name: "Postman", icon: "📮", gradient: "from-orange-400 to-orange-600", textColor: "text-orange-400", borderColor: "border-orange-400" },
    { name: "Ubuntu", icon: "🐧", gradient: "from-orange-500 to-red-500", textColor: "text-orange-500", borderColor: "border-orange-500" },
    { name: "Firebase", icon: "🔥", gradient: "from-yellow-400 to-orange-500", textColor: "text-yellow-400", borderColor: "border-yellow-400" },
    { name: "Vercel", icon: "▲", gradient: "from-gray-800 to-black", textColor: "text-gray-300", borderColor: "border-gray-400" }
  ];

  return (
    <>
      <style jsx>{`
        @keyframes spin {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to { transform: translate(-50%, -50%) rotate(360deg); }
        }
        @keyframes spin-reverse {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to { transform: translate(-50%, -50%) rotate(-360deg); }
        }
        @keyframes counter-spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(-360deg); }
        }
        .skill-orbit {
          animation: spin 20s linear infinite;
        }
        .skill-orbit-reverse {
          animation: spin-reverse 25s linear infinite;
        }
      `}</style>
      
      <section id="skills" className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white min-h-screen relative overflow-hidden">
      

        {/* Background Effects */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(120,119,198,0.1),transparent_50%)] pointer-events-none"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,105,180,0.1),transparent_50%)] pointer-events-none"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_80%,rgba(59,130,246,0.1),transparent_50%)] pointer-events-none"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          {/* Cool Header Section */}
          <div className="text-center mb-12 md:mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/30 mb-6">
              <span className="text-purple-400">⚡</span>
              <span className="text-sm font-semibold text-purple-300">TECH STACK</span>
              <span className="text-blue-400">🚀</span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-black mb-4 tracking-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
                My Tech Universe
              </span>
            </h2>
            
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              🌌 Interactive solar system showcasing my technical skills
              <br />
              <span className="text-purple-400 font-medium">Each orbit represents a different technology domain</span>
            </p>
          </div>

          {/* Responsive Solar System Container */}
          {/* <div className="relative w-full mx-auto mb-8 mt-5"  */}
          <div className="relative w-full mx-auto mb-8 md:my-24"

               style={{ 
                 height: 'clamp(400px, 50vh, 600px)',
                 maxWidth: 'min(90vw, 800px)'
               }}>
            {/* Central Hub */}
            <CentralHub />
            
            {/* Responsive Orbits with conditional rendering */}
            <div className="hidden md:block">
              {/* Desktop View - All 3 Orbits */}
              <SkillOrbit 
                skills={frontendSkills} 
                radius={120} 
                duration={30} 
                color="blue"
              />
              
              <SkillOrbit 
                skills={backendSkills} 
                radius={200} 
                duration={40} 
                color="green" 
                reverse={true}
              />
              
              <SkillOrbit 
                skills={toolsSkills} 
                radius={280} 
                duration={50} 
                color="purple"
              />
              
              {/* Desktop Orbit Lines */}
              <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 rounded-full border border-blue-500/30"></div>
              <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full border border-green-500/30"></div>
              <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full rounded-full border border-purple-500/30" style={{maxWidth: '560px', maxHeight: '560px'}}></div>
            </div>
            
            {/* Mobile/Tablet View - 2 Orbits */}
            <div className="block md:hidden">
              <SkillOrbit 
                skills={[...frontendSkills.slice(0, 4), ...backendSkills.slice(0, 3)]} 
                radius={100} 
                duration={25} 
                color="blue"
              />
              
              <SkillOrbit 
                skills={[...backendSkills.slice(3), ...toolsSkills.slice(0, 4)]} 
                radius={160} 
                duration={35} 
                color="purple" 
                reverse={true}
              />
              
              {/* Mobile Orbit Lines */}
              <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full border border-blue-500/30"></div>
              <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full border border-purple-500/30"></div>
            </div>
          </div>

          {/* Mobile Skills Grid Fallback */}
          <div className="block sm:hidden mt-8">
            <div className="grid grid-cols-2 gap-4 max-w-sm mx-auto">
              {[...frontendSkills, ...backendSkills, ...toolsSkills].map((skill, index) => (
                <div
                  key={skill.name}
                  className={`p-3 rounded-xl bg-gradient-to-br ${skill.gradient} flex flex-col items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border-2 ${skill.borderColor}`}
                >
                  <div className="text-white text-2xl mb-1">
                    {skill.icon}
                  </div>
                  <div className="text-white text-xs font-bold text-center">
                    {skill.name}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Cool Legend */}
          <div className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-blue-500/10 to-blue-600/10 border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300 group">
              <div className="w-6 h-6 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full mx-auto mb-4 group-hover:scale-110 transition-transform duration-300"></div>
              <h3 className="text-xl font-bold text-blue-400 mb-2 flex items-center justify-center gap-2">
                <span>🌐</span> Frontend
              </h3>
              <p className="text-gray-300 text-sm">User Interface & Experience</p>
            </div>
            <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-green-500/10 to-green-600/10 border border-green-500/20 hover:border-green-400/40 transition-all duration-300 group">
              <div className="w-6 h-6 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full mx-auto mb-4 group-hover:scale-110 transition-transform duration-300"></div>
              <h3 className="text-xl font-bold text-green-400 mb-2 flex items-center justify-center gap-2">
                <span>⚙️</span> Backend
              </h3>
              <p className="text-gray-300 text-sm">Server & Database Logic</p>
            </div>
            <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-purple-500/10 to-purple-600/10 border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 group">
              <div className="w-6 h-6 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full mx-auto mb-4 group-hover:scale-110 transition-transform duration-300"></div>
              <h3 className="text-xl font-bold text-purple-400 mb-2 flex items-center justify-center gap-2">
                <span>🛠️</span> Tools
              </h3>
              <p className="text-gray-300 text-sm">Development & Deployment</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;