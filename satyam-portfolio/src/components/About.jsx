
//cpmonent/about.jsx
import { motion } from 'framer-motion';

const About = () => (
//   <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900 text-center font-sans">
//     <motion.div
//       initial={{ opacity: 0, y: 60 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{ duration: 1 }}
//       viewport={{ once: true }}
//       className="max-w-4xl mx-auto px-6"
//     >
//       <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-6">🙋‍♂️ About Me</h2>
//       <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
//         I'm <span className="font-semibold text-blue-600 dark:text-blue-400">Satyam Prajapati</span>, a passionate and dedicated full-stack developer from India with a knack for turning ideas into impactful digital products. I specialize in building responsive web apps using the <span className="font-semibold">MERN Stack</span>, and I love solving real-world problems through clean code and elegant UI.
//       </p>
//       <p className="mt-4 text-md text-gray-600 dark:text-gray-400">
//         I thrive on challenges, constantly pushing myself to learn new technologies and improve my development workflow. Whether it's creating intuitive user experiences or building scalable backend systems, I'm always looking to collaborate on exciting projects and contribute to meaningful work.
//       </p>
//       <div className="mt-8">
//         <a
//           href="#contact"
//           className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full shadow hover:bg-blue-700 transition duration-300"
//         >
//           💬 Let's Connect
//         </a>
//       </div>
//     </motion.div>
//   </section>

<section id="about" class="py-20 bg-gray-900">
        <div class="container mx-auto px-6">
            <div class="max-w-4xl mx-auto">
                <h2 class="text-4xl md:text-5xl font-bold text-center mb-16">
                    <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
                        About Me
                    </span>
                </h2>
                
                <div class="grid md:grid-cols-2 gap-12 items-center">
                    <div class="glass p-8 rounded-2xl ">
                        <h3 class="text-2xl font-bold mb-6 text-blue-400">👨‍💻 Who Am I?</h3>
                        <p class="text-gray-300 leading-relaxed mb-6">
                           I'm a full-stack web developer from India, currently on an exciting journey of learning and building real-world applications. I have a strong grasp of modern web technologies and a growing command over the MERN stack — using React.js, Node.js, Express, and MongoDB to create functional and responsive web applications.
                        </p>
                        <p class="text-gray-300 leading-relaxed mb-6">
                           While I may not have years of experience or dozens of deployed client projects yet, I’ve worked on several personal and practice projects that reflect my skills, dedication, and willingness to improve. I'm focused on writing clean, maintainable code and building applications that are both useful and user-friendly.

I’m committed to continuous learning, and becoming a better developer every day — one project at a time.
                        </p>
                        <div class="flex flex-wrap gap-2">
                            <span class="tech-stack-item px-3 py-1 rounded-full text-sm">React</span>
                            <span class="tech-stack-item px-3 py-1 rounded-full text-sm">Node.js</span>
                            <span class="tech-stack-item px-3 py-1 rounded-full text-sm">MongoDB</span>
                            <span class="tech-stack-item px-3 py-1 rounded-full text-sm">Express</span>
                            <span class="tech-stack-item px-3 py-1 rounded-full text-sm">TypeScript</span>
                            <span class="tech-stack-item px-3 py-1 rounded-full text-sm">Next Js</span>
                        </div>
                    </div>
                    
                    <div class="glass p-8 rounded-2xl ">
                        <h3 class="text-2xl font-bold mb-6 text-blue-400">🎯 What I Do</h3>
                        <div class="space-y-4">
                            <div class="flex items-start gap-4">
                                <div class="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                                    <i class="fas fa-globe text-sm"></i>
                                </div>
                                <div>
                                    <h4 class="font-semibold mb-2">Full Stack Development</h4>
                                    <p class="text-gray-400 text-sm">End-to-end web application development using modern technologies</p>
                                </div>
                            </div>
                            <div class="flex items-start gap-4">
                                <div class="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                                    <i class="fas fa-mobile-alt text-sm"></i>
                                </div>
                                <div>
                                    <h4 class="font-semibold mb-2">Responsive Design</h4>
                                    <p class="text-gray-400 text-sm">Mobile-first approach ensuring perfect user experience on all devices</p>
                                </div>
                            </div>
                            <div class="flex items-start gap-4">
                                <div class="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                                    <i class="fas fa-rocket text-sm"></i>
                                </div>
                                <div>
                                    <h4 class="font-semibold mb-2">Performance Optimization</h4>
                                    <p class="text-gray-400 text-sm">Optimizing applications for speed, SEO, and user experience</p>
                                </div>
                            </div>
                            <div class="flex items-start gap-4">
                                <div class="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0">
                                    <i class="fas fa-users text-sm"></i>
                                </div>
                                <div>
                                    <h4 class="font-semibold mb-2">Collaboration</h4>
                                    <p class="text-gray-400 text-sm">Working closely with clients to bring their vision to life</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default About;