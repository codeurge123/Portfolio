import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import ProjectsPage from './components/ProjectsPage';
import ResumePage from './components/Resume';
import ContactPage from './components/ContactPage';
import ScrollToTop from './components/ScrollToTop';
// import RouteLoader from './components/RouteLoader';
import MobileApp from './MobileApp';
// import { Analytics } from "@vercel/analytics/next"
import useIsMobile from './components/useIsMobile';

export default function App() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return <MobileApp />;
  }

  return (
    <HashRouter>

      {/* <Analytics /> */}
      <div
        className="min-h-screen text-white font-sans flex justify-center selection:bg-gray-600 selection:text-white"
        style={{
          backgroundColor: '#0b0f0f',
          backgroundImage:
            'repeating-linear-gradient(45deg, rgba(255,255,255,0.045) 0 1px, transparent 1px 7px), repeating-linear-gradient(-45deg, rgba(255,255,255,0.04) 0 1px, transparent 1px 7px)',
        }}
      >

        {/* Centered Reading Column */}
        <div
          className="
            w-full
            max-w-4xl
            min-h-screen
            bg-[#0b0f0f]
            border-x
            border-white/10
            px-8
            md:px-10
          "

        >

          {/* <RouteLoader /> */}

          <ScrollToTop />
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
