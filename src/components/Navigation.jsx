import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  BriefcaseBusiness,
  FileText,
  Folder,
  Github,
  Home,
  Linkedin,
  Mail,
  Rss,
} from 'lucide-react';
import { RiTwitterXFill } from 'react-icons/ri';
import { SiLeetcode } from 'react-icons/si';
import { VIEW_API_END_POINT } from '../utils/constant.js';

const navItems = [
  { label: 'Home', to: '/', icon: Home },
  { label: 'Projects', to: '/projects', icon: BriefcaseBusiness },
  { label: 'Resume', to: '/resume', icon: FileText },
  { label: 'Contact', to: '/contact', icon: Folder },
];


export default function Navigation() {
  const [socialOpen, setSocialOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [view, setView] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    axios.get(`${VIEW_API_END_POINT}/api/v1/views`)
      .then((res) => res.data)
      .then((data) => setView(data.count))
      .catch(() => setView(0));
  }, []);

  const formatTime = (date) =>
    date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
      timeZone: 'Asia/Kolkata',
    });

  const isActive = (path) => location.pathname === path;

  return (
    <>
      <div className=" absolute top-4 left-1/2 z-40 hidden w-full max-w-4xl -translate-x-1/2 justify-end px-8 md:flex md:px-10">
        <div className="rounded-full border border-white/10 bg-[#0b0f0f]/80 px-3 py-1.5 text-xs font-mono text-zinc-400 shadow-[0_0_0_3px_rgba(255,255,255,0.035),0_12px_28px_rgba(0,0,0,0.5)] backdrop-blur-md">
          Views #{view} | IST {formatTime(currentTime)}
        </div>
      </div>

      <nav
        className="
          fixed right-3 top-1/2 z-50 hidden -translate-y-1/2 sm:block
          md:right-5 xl:right-[calc((100vw-56rem)/2-5rem)]
        "
        aria-label="Primary navigation"
      >
        <div className="relative">
          <div
            className="
              flex w-[50px] flex-col items-center gap-2.5 rounded-full
              border border-white/10 bg-[#0b0f0f]/95 px-2 py-3.5
              shadow-[0_0_0_3px_rgba(255,255,255,0.035),0_12px_28px_rgba(0,0,0,0.5)]
              backdrop-blur-md
            "
          >
            {navItems.map(({ label, to, icon: Icon }) => {
              const active = isActive(to);

              return (
                <Link
                  key={to}
                  to={to}
                  aria-label={label}
                  title={label}
                  className={`
                    group relative flex h-[34px] w-[34px] items-center justify-center rounded-full
                    transition-all duration-200
                    ${active
                      ? 'bg-white text-[#0b0f0f] shadow-[0_0_0_3px_rgba(255,255,255,0.08),inset_0_0_0_1px_rgba(0,0,0,0.18)]'
                      : 'text-zinc-400 hover:bg-white/8 hover:text-white'
                    }
                  `}
                >
                  {React.createElement(Icon, {
                    className: 'h-[18px] w-[18px]',
                    strokeWidth: active ? 2.5 : 2.2,
                  })}
                  <span className="pointer-events-none absolute right-[calc(100%+12px)] rounded-md border border-white/10 bg-zinc-950 px-2 py-1 text-xs text-zinc-200 opacity-0 shadow-lg transition-opacity group-hover:opacity-100">
                    {label}
                  </span>
                </Link>
              );
            })}

            <div className="relative h-[34px] w-[34px]">
              <a
                href="https://github.com/codeurge123"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open GitHub profile"
                title="GitHub"
                className={`
      group relative flex h-[34px] w-[34px] items-center justify-center rounded-full
      transition-all duration-200
      ${socialOpen
                    ? "bg-white text-[#0b0f0f] shadow-[0_0_0_3px_rgba(255,255,255,0.08),inset_0_0_0_1px_rgba(0,0,0,0.18)]"
                    : "text-zinc-400 hover:bg-white/8 hover:text-white"
                  }
    `}
              >
                <Github className="h-[18px] w-[18px]" strokeWidth={2.3} />
                <span className="pointer-events-none absolute right-[calc(100%+12px)] rounded-md border border-white/10 bg-zinc-950 px-2 py-1 text-xs text-zinc-200 opacity-0 shadow-lg transition-opacity group-hover:opacity-100">
                  GitHub
                </span>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
