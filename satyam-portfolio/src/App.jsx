import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-sans scroll-smooth">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      {/* // Footer.jsx */}
      <Footer/>
     
  {/* <footer className="bg-gray-200 dark:bg-gray-800 text-center py-6 text-sm text-gray-700 dark:text-gray-300 font-sans">
    <p>© {new Date().getFullYear()} Satyam Prajapati. All rights reserved.</p>
    <p className="mt-1">Made with  using React & Tailwind</p>
  </footer> */}


{/* export default Footer; */}
    </div>
  );
}

export default App;
