import React from 'react';

        const freelanceLinks = [
  {
    name: "UpWork",
    url: "https://www.upwork.com/freelancers/your-username"
  },
  {
    name: "Fiverr",
    url: "https://www.fiverr.com/your-username"
  },
  {
    name: "Freelancer",
    url: "https://www.freelancer.com/u/your-username"
  },
  {
    name: "Email",
    url: "mailto:youremail@example.com"
  }
];

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-0 right-0 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
      </div>
      
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white rounded-full opacity-20 animate-bounce"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          ></div>
        ))}
      </div>
      
      {/* Main content */}
      <div className="relative z-10 py-10 px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo/Name with glow effect */}
          <div className="mb-8">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500 bg-clip-text text-transparent animate-pulse">
              Satyam Prajapati
            </h2>
            <div className="mt-2 h-1 w-24 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full animate-pulse"></div>
          </div>
          
          {/* Copyright with typing effect */}
          <div className="mb-6 space-y-3">
            <p className="text-lg opacity-90 hover:opacity-100 transition-opacity duration-300">
              © {new Date().getFullYear()} All rights reserved
            </p>

            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500 bg-clip-text text-transparent animate-pulse">
              Freelance with me
            </h2>
            <div className="mt-2 h-1 w-24 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full animate-pulse"></div>
            
         </div> 
          
        
  

<div className="flex justify-center space-x-6 mb-6">
  {freelanceLinks.map((item, index) => (
    <a
      key={item.name}
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <button
        className="group relative px-4 py-2 rounded-full border border-white/20 hover:border-purple-500/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25"
      >
        <span className="relative z-10 text-sm font-medium group-hover:text-purple-300 transition-colors duration-300">
          {item.name}
        </span>
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 to-pink-500/0 group-hover:from-purple-500/20 group-hover:to-pink-500/20 rounded-full transition-all duration-300"></div>
      </button>
    </a>
  ))}
</div>
          
          {/* Bottom decoration */}
          <div className="flex justify-center items-center space-x-4">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-purple-500 animate-pulse"></div>
            <div className="w-2 h-2 bg-purple-500 rounded-full animate-ping"></div>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-purple-500 animate-pulse"></div>
          </div>
        </div>
      </div>
      
      {/* Bottom glow effect */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent animate-pulse"></div>
      
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </footer>

  );

};


export default Footer;