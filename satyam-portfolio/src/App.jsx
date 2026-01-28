import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProjectDetail from './components/ProjectDetail';
import BlogDetail from './components/BlogDetail';

function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero /> 
        <About />
        <Projects />
        <Blog />
        <Contact />
      </main>
       <Footer /> 
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="font-sans scroll-smooth dark">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project/:id" element={
            <>
              <Navbar />
              <ProjectDetail />
              <Footer />
            </>
          } />
          <Route path="/blog/:id" element={
            <>
              <Navbar />
              <BlogDetail />
              <Footer />
            </>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
