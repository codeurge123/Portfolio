import React from 'react';
import {
  Github,
  Linkedin,
  Mail,
  Rss
} from 'lucide-react';
import { SiLeetcode } from "react-icons/si";


export default function Footer() {
  return (
    <div className="flex flex-col gap-6 mt-12 mb-18 px-4 sm:px-0">
      <div className="flex justify-center flex-wrap gap-4 sm:gap-6 text-gray-400">
        <SocialLink
          icon={Mail}
          href="mailto:bansalyash316@gmail.com"
        />
        <SocialLink
          icon={Github}
          href="https://github.com/codeurge123"
        />
        <SocialLink
          icon={Linkedin}
          href="https://www.linkedin.com/in/yash-bansal-a67562286"
        />
        <SocialLink
          icon={SiLeetcode}
          href="https://leetcode.com/code_urge"
        />
        <SocialLink
          icon={Rss}
          href="/rss.xml"
        />
      </div>
    </div>
  );
}

function SocialLink({ icon: Icon, href }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="
        p-3 sm:p-3.5
        rounded-full
        hover:bg-slate-800
        hover:text-white
        hover:-translate-y-2
        hover:scale-110
        transition-all
        duration-150
        flex items-center justify-center

      "
    >
      {React.createElement(Icon, {
        className: 'w-5 h-5 sm:w-6 sm:h-6',
      })}
    </a>
  );
}
