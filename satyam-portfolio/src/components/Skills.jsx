// src/components/Skills.jsx
import React from "react";

const SkillBar = ({ name, percentage, color }) => (
  <div className={`p-4 rounded-lg bg-gray-700 hover:bg-${color}-500 hover:bg-opacity-20 transition-all`}>
    <div className="flex justify-between mb-2">
      <span>{name}</span>
      <span>{percentage}%</span>
    </div>
    <div className="w-full h-2 bg-gray-600 rounded-full">
      <div className={`h-2 bg-${color}-500 rounded-full`} style={{ width: `${percentage}%` }}></div>
    </div>
  </div>
);

const Skills = () => {
  return (
    // <section id="skills" className="py-20 bbg-gray-800 text-white min-h-screen">
    <section id="skills" className="py-20 bg-tech bg-[length:200%_200%] animate-techWaves text-white min-h-screen">

      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
            Skills & Technologies
          </span>
        </h2>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Frontend */}
            <div className="glass p-6 rounded-2xl bg-gray-800">
              <h3 className="text-xl font-bold mb-6 text-blue-400">Frontend</h3>
              <div className="space-y-4">
                <SkillBar name="HTML" percentage={98} color="blue" />
                <SkillBar name="CSS" percentage={95} color="blue" />
                <SkillBar name="Tailwind CSS" percentage={92} color="blue" />
                <SkillBar name="JavaScript" percentage={96} color="blue" />
                <SkillBar name="React.js" percentage={94} color="blue" />
                <SkillBar name="Next.js" percentage={90} color="blue" />
                <SkillBar name="TypeScript" percentage={85} color="blue" />
              </div>
            </div>

            {/* Backend */}
            <div className="glass p-6 rounded-2xl bg-gray-800">
              <h3 className="text-xl font-bold mb-6 text-green-400">Backend</h3>
              <div className="space-y-4">
                <SkillBar name="Node.js" percentage={92} color="green" />
                <SkillBar name="Express.js" percentage={90} color="green" />
                <SkillBar name="MongoDB" percentage={88} color="green" />
                <SkillBar name="Prisma ORM" percentage={85} color="green" />
                <SkillBar name="PostgreSQL" percentage={84} color="green" />
                <SkillBar name="REST APIs" percentage={90} color="green" />
              </div>
            </div>

            {/* Tools & DevOps */}
            <div className="glass p-6 rounded-2xl bg-gray-800">
              <h3 className="text-xl font-bold mb-6 text-purple-400">Tools & DevOps</h3>
              <div className="space-y-4">
                <SkillBar name="Git & GitHub" percentage={95} color="purple" />
                <SkillBar name="Postman" percentage={90} color="purple" />
                <SkillBar name="Ubuntu" percentage={85} color="purple" />
                <SkillBar name="Linux CLI" percentage={84} color="purple" />
                <SkillBar name="Firebase" percentage={80} color="purple" />
                <SkillBar name="Vercel" percentage={88} color="purple" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
