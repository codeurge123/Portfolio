import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navigation() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const location = useLocation();

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (date) => {
    return date.toLocaleTimeString('en-US', { 
      hour: '2-digit', 
      minute: '2-digit',
      hour12: false,
      timeZone: 'Asia/Kolkata'
    });
  };

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm border-b border-gray-800">
      <div className="max-w-4xl mx-auto px-6 py-4 flex justify-between items-center ">
        <div className="flex gap-8">
          <Link 
            to="/" 
            className={`transition-colors text-sm ${isActive('/') ? 'text-white font-semibold' : 'text-gray-300 hover:text-white'}`}
          >
            Home
          </Link>
          <Link 
            to="/projects" 
            className={`transition-colors text-sm ${isActive('/projects') ? 'text-white font-semibold' : 'text-gray-300 hover:text-white'}`}
          >
            Projects
          </Link>
          <Link 
            to="/resume" 
            className={`transition-colors text-sm ${isActive('/resume') ? 'text-white font-semibold' : 'text-gray-300 hover:text-white'}`}
          >
            Resume
          </Link>
          <Link 
            to="/contact" 
            className={`transition-colors text-sm ${isActive('/contact') ? 'text-white font-semibold' : 'text-gray-300 hover:text-white'}`}
          >
            Contact
          </Link>
        </div>
        <div className="text-gray-400 text-sm font-mono">
          IST {formatTime(currentTime)}
        </div>
      </div>
    </nav>
  );
}
