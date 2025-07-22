
const Navbar = () => (


  <nav class="fixed top-0 w-full z-50 glass">
        <div class="container mx-auto px-6 py-4">
            <div class="flex items-center justify-between">
                
                {/* <h1 class="text-3xl font-signature font-bold neon-text text-blue-600 tracking-wider">Satyam</h1> */}
          <h1
  className="text-3xl font-signature font-bold text-blue-600 tracking-wider"
  style={{ textShadow: "0 0 1px #3b82f6, 0 0 0.5px #3b82f6" }}
>
  Satyam
</h1>


                
                {/* <!-- Desktop Menu --> */}
                <div class="hidden md:flex space-x-8">
                    <a href="#home" class="nav-link px-4 py-2 rounded-lg hover:text-blue-400 transition-colors">Home</a>
                    <a href="#about" class="nav-link px-4 py-2 rounded-lg hover:text-blue-400 transition-colors">About</a>
                    {/* <a href="#experience" class="nav-link px-4 py-2 rounded-lg hover:text-blue-400 transition-colors">Experience</a> */}
                    <a href="#projects" class="nav-link px-4 py-2 rounded-lg hover:text-blue-400 transition-colors">Projects</a>
                    <a href="#skills" class="nav-link px-4 py-2 rounded-lg hover:text-blue-400 transition-colors">Skills</a>
                    {/* <a href="#services" class="nav-link px-4 py-2 rounded-lg hover:text-blue-400 transition-colors">Services</a> */}
                    <a href="#contact" class="nav-link px-4 py-2 rounded-lg hover:text-blue-400 transition-colors">Contact</a>
                </div>
                
                {/* <!-- Mobile Menu Button --> */}
                <button class="md:hidden text-white" id="mobileMenuBtn">
                    <i class="fas fa-bars text-xl"></i>
                </button>
            </div>
        </div>
        
        {/* <!-- Mobile Menu --> */}
        <div class="mobile-menu md:hidden fixed top-0 left-0 w-full h-full bg-black bg-opacity-90 backdrop-blur-lg z-40" id="mobileMenu">
            <div class="flex flex-col items-center justify-center h-full space-y-8">
                <a href="#home" class="text-2xl hover:text-blue-400 transition-colors">Home</a>
                <a href="#about" class="text-2xl hover:text-blue-400 transition-colors">About</a>
             
                <a href="#projects" class="text-2xl hover:text-blue-400 transition-colors">Projects</a>
                <a href="#skills" class="text-2xl hover:text-blue-400 transition-colors">Skills</a>
                
                <a href="#contact" class="text-2xl hover:text-blue-400 transition-colors">Contact</a>
            </div>
        </div>
    </nav>
);

export default Navbar;