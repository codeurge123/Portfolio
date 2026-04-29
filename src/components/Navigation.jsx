import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { VIEW_API_END_POINT } from '../utils/constant.js';
// import { useTheme } from './ThemeContext.jsx';

export default function Navigation() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  // const { isDark, toggleTheme } = useTheme();

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);


  const [view, setView] = useState(0);

  useEffect(() => {
    axios.get(`${VIEW_API_END_POINT}/api/v1/views`)
      .then(res => res.data)
      .then(data => setView(data.count))
      .catch(err => console.error("Error fetching view count:", err));
  }, []);

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
      ? 'text-black dark:text-white font-semibold'
      : 'text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white'
    }`;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-black/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-3 sm:py-4">

        {/* Top Row */}
        <div className="flex justify-between items-center">
          {/* Desktop Links or Mobile Menu Button */}
          <div className="flex items-center gap-8">
            {/* Mobile Menu Button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="sm:hidden text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white text-xl"
              aria-label="Toggle menu"
            >
              {menuOpen ? '✕' : '☰'}
            </button>

            {/* Desktop Links */}
            <div className="hidden sm:flex gap-8">
              <Link to="/" className={linkClasses('/')}>Home</Link>
              <Link to="/projects" className={linkClasses('/projects')}>Projects</Link>
              <Link to="/resume" className={linkClasses('/resume')}>Resume</Link>
              <Link to="/contact" className={linkClasses('/contact')}>Contact</Link>
            </div>
          </div>

          {/* Theme Toggle and Clock */}
          <div className="flex items-center gap-4">
            {/* <button
              type="button"
              onClick={toggleTheme}
              className="relative w-7 h-6 bg-gray-300 dark:bg-gray-700 rounded transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label="Toggle theme"
            >
              {isDark ? <>
                <div className="absolute left-1 top-1 w-5 h-5 bg-white rounded-full shadow-md transform transition-transform duration-300 ">
                </div>
              </> : <>
                <div className="absolute left-1 top-1 w-5 h-5 bg-white rounded-full shadow-md transform transition-transform duration-300">
                </div>
              </>}
            </button> */}

            {/* Clock */}
            <div className="text-gray-400 dark:text-gray-400 text-sm font-mono">
              Views :  {view} |
              IST {formatTime(currentTime)}
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {
          menuOpen && (
            <div className="sm:hidden mt-4 space-y-3 border-t border-gray-800 pt-4">
              <Link to="/" className={linkClasses('/')} onClick={() => setMenuOpen(false)}>Home</Link>
              <Link to="/projects" className={linkClasses('/projects')} onClick={() => setMenuOpen(false)}>Projects</Link>
              <Link to="/resume" className={linkClasses('/resume')} onClick={() => setMenuOpen(false)}>Resume</Link>
              <Link to="/contact" className={linkClasses('/contact')} onClick={() => setMenuOpen(false)}>Contact</Link>
            </div>
          )
        }
      </div >
    </nav >
  );
}


// No need for this -- agar mobile ke refernce mein bola to
