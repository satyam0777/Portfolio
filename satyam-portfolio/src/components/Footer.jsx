import React from 'react';

const Footer = () => {
  const socialLinks = [
    { icon: "fab fa-github", href: "https://github.com/satyam0777" },
    { icon: "fab fa-linkedin", href: "https://www.linkedin.com/in/satyam-prajapati-13a690256/" },
    { icon: "fas fa-code", href: "https://leetcode.com/satyam0777/" },
    { icon: "fab fa-twitter", href: "https://x.com/satyam9352" }
  ];

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white py-6 border-t border-gray-800/50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Left: Name */}
          <div className="text-center md:text-left">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} <span className="font-semibold text-white">Satyam Prajapati</span>
            </p>
          </div>
          
          {/* Center: Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-800 rounded-lg transition-all"
              >
                <i className={social.icon}></i>
              </a>
            ))}
          </div>
          
          {/* Right: Email */}
          <div className="text-center md:text-right">
            <a href="mailto:officialsatyam0777@gmail.com" className="text-sm text-gray-400 hover:text-blue-400 transition-colors">
              officialsatyam0777@gmail.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;