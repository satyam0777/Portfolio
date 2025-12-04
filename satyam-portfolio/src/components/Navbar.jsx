const Navbar = () => (
  <nav className="fixed top-0 w-full z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200/50 dark:border-gray-800/50">
    <div className="max-w-7xl mx-auto px-6 py-3">
      <div className="flex items-center justify-between">
        <a href="#home" className="group relative">
          <span className="text-3xl font-bold font-signature bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent hover:from-blue-700 hover:to-purple-700 transition-all">
            Satyam
          </span>
          <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
        </a>
        
        <div className="hidden md:flex items-center gap-6">
          <a href="#home" className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Home</a>
          <a href="#about" className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">About</a>
          <a href="#projects" className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Projects</a>
          <a href="#blog" className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Blog</a>
          <a href="#contact" className="px-4 py-1.5 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white text-sm font-semibold rounded-lg transition-all shadow-md hover:shadow-lg">
            Contact
          </a>
        </div>
        
        <button className="md:hidden text-gray-700 dark:text-gray-300" id="mobileMenuBtn">
          <i className="fas fa-bars text-lg"></i>
        </button>
      </div>
    </div>
    
    <div className="mobile-menu md:hidden fixed top-0 left-0 w-full h-full bg-black/95 backdrop-blur-lg z-40 -translate-x-full transition-transform" id="mobileMenu">
      <div className="flex flex-col items-center justify-center h-full space-y-6">
        <a href="#home" className="text-xl text-white hover:text-blue-400 transition-colors">Home</a>
        <a href="#about" className="text-xl text-white hover:text-blue-400 transition-colors">About</a>
        <a href="#projects" className="text-xl text-white hover:text-blue-400 transition-colors">Projects</a>
        <a href="#blog" className="text-xl text-white hover:text-blue-400 transition-colors">Blog</a>
        <a href="#contact" className="text-xl text-white hover:text-blue-400 transition-colors">Contact</a>
      </div>
    </div>
  </nav>
);

export default Navbar;