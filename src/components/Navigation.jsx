import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navigation() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  const formatTime = (date) =>
    date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
      timeZone: 'Asia/Kolkata',
    });

  const isActive = (path) => location.pathname === path;

  const linkClasses = (path) =>
    `block transition-colors text-sm ${isActive(path)
      ? 'text-white font-semibold'
      : 'text-gray-300 hover:text-white'
    }`;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm border-b border-gray-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-3 sm:py-4">

        {/* Top Row */}
        {/* Top Row */}
        <div className="flex justify-between items-center">
          {/* Desktop Links */}
          <div className="hidden sm:flex gap-8">
            <Link to="/" className={linkClasses('/')}>Home</Link>
            <Link to="/projects" className={linkClasses('/projects')}>Projects</Link>
            <Link to="/resume" className={linkClasses('/resume')}>Resume</Link>
            <Link to="/contact" className={linkClasses('/contact')}>Contact</Link>
          </div>

          {/* Mobile Menu Button (Left) */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="sm:hidden text-gray-300 hover:text-white text-xl"
          >
            {menuOpen ? '✕' : '☰'}
          </button>

          {/* Clock (Right – Mobile + Desktop) */}
          <div className="text-gray-400 text-sm font-mono">
            IST {formatTime(currentTime)}
          </div>
        </div>


        {/* Mobile Menu */}
        {menuOpen && (
          <div className="sm:hidden mt-4 space-y-3 border-t border-gray-800 pt-4">
            <Link to="/" className={linkClasses('/')}>Home</Link>
            <Link to="/projects" className={linkClasses('/projects')}>Projects</Link>
            <Link to="/resume" className={linkClasses('/resume')}>Resume</Link>
            <Link to="/contact" className={linkClasses('/contact')}>Contact</Link>
          </div>
        )}
      </div>
    </nav>
  );
}


// No need for this -- agar mobile ke refernce mein bola to
