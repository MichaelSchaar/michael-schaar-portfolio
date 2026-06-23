import "./App.css";

import { HashRouter, Routes, Route, Link } from "react-router-dom";

import Home from "./pages/Home";
import Experience from "./pages/Experience";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

function App() {
  return (
    <HashRouter>

      <main className="page">
        <nav className="navbar">
          <Link to="/">HOME</Link>
          <Link to="/about">ABOUT</Link>
          <Link to="/projects">PROJECTS</Link>
          <Link to="/contact">CONTACT</Link>
          <Link to="/experience">EXPERIENCE</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/experience" element={<Experience />} />
      </Routes>
  
      </main>
    </HashRouter>
  );
}

export default App;