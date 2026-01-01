import React from 'react';
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Briefcase,
  Code
} from 'lucide-react';

export default function Footer() {
  return (
    < div className="flex  flex-col gap-6 mb-0 mt-15" >
      <div className="flex justify-center gap-6 mb-18 text-gray-400">
        <SocialLink
          icon={Github} href="https://github.com/codeurge123" />
        <SocialLink icon={Linkedin} href="https://www.linkedin.com/in/yash-bansal-a67562286" />
        <SocialLink icon={Code} href="https://leetcode.com/code_urgyb316_" />
        <SocialLink icon={Mail} href="mailto:your-email@bansalyash316@gmail.com" />
      </div>
    </ div >
  );
}
function SocialLink({ icon: Icon, href }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-white transition-colors hover:bg-slate-900 p-3 rounded-full"
    >
      <Icon className="w-6 h-6" />
    </a>
  );
}
