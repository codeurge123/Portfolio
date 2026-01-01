import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import ProjectsPage from './components/ProjectsPage';
import ResumePage from './components/Resume';
import ContactPage from './components/ContactPage';

export default function App() {
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

    </HashRouter>
  );
}
