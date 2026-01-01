import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import ProjectsPage from './components/ProjectsPage';
import ResumePage from './components/Resume';
import ContactPage from './components/ContactPage';

export default function App() {

  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <HashRouter>
      <div className="min-h-screen bg-black text-white font-sans flex justify-center">

        {/* Centered Reading Column */}
        <div
          className="
            w-full
            max-w-4xl
            border-white/15
            px-8
            md:px-10
          "
        >
          <Navigation />

          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/resume" element={<ResumePage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>

          <Footer />
        </div>
      </div>

      {/* Cursor Follower */}
      <div
        className="
    pointer-events-none
    fixed top-0 left-0 z-[9999]
    w-6 h-6 rounded-full
    border border-white
    mix-blend-difference
    transition-transform duration-300 ease-out
  "
        style={{
          transform: `translate(${mousePos.x - 10}px, ${mousePos.y - 8}px)`
        }}
      />

    </HashRouter>
  );
}
