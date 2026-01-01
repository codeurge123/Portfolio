import React, { useState, useEffect, useRef } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import ProjectsPage from './components/ProjectsPage';
import ResumePage from './components/Resume';
import ContactPage from './components/ContactPage';
import ScrollToTop from './components/ScrollToTop';
import RouteLoader from './components/RouteLoader';

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


  const [bubbles, setBubbles] = useState([]);

  const MAX_BUBBLES = 6;

  const inactivityTimer = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = e.clientX;
      const y = e.clientY;

      setMousePos({ x, y });

      // clear inactivity timer
      if (inactivityTimer.current) {
        clearTimeout(inactivityTimer.current);
      }

      // add new bubble
      setBubbles((prev) => {
        const newBubble = {
          id: Math.random(),
          x,
          y,
          size: Math.random() * 8 + 8,
          active: true,
        };

        return [...prev.slice(-MAX_BUBBLES + 1), newBubble];
      });

      // when mouse stops → fade bubbles
      inactivityTimer.current = setTimeout(() => {
        setBubbles((prev) =>
          prev.map((b) => ({ ...b, active: false }))
        );

        // remove after fade animation
        setTimeout(() => {
          setBubbles([]);
        }, 400); // must match CSS duration
      }, 120);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (inactivityTimer.current) clearTimeout(inactivityTimer.current);
    };
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

          <RouteLoader />

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

      {/* Bubble Trail */}
      {bubbles.map((b) => (
        <div
          key={b.id}
          className="pointer-events-none fixed z-[9998] rounded-full"
          style={{
            left: b.x,
            top: b.y,
            width: b.size,
            height: b.size,
            transform: `
        translate(-50%, -50%)
        scale(${b.active ? 1 : 0.3})
      `,
            opacity: b.active ? 0.8 : 0,
            background: "rgba(255,255,255,0.35)",
            boxShadow: "0 0 12px rgba(255,255,255,0.5)",
            transition: "opacity 0.4s ease, transform 0.4s ease",
          }}
        />
      ))}



    </HashRouter>
  );
}
