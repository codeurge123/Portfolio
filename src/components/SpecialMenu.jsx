import {
  Github,
  Linkedin,
  Mail,
  Code,
} from "lucide-react";

export default function SpecialMenu({ open, onClose }) {
  return (
    <>
      {open && (
        <div
          onClick={onClose}
          className="fixed inset-0 z-40 bg-black/40"
        />
      )}

      {/* MENU */}
      <div
        className={`
          fixed bottom-16 left-1/2 -translate-x-1/2 z-50
          w-[90%] max-w-sm
          rounded-2xl border border-white/10
          bg-zinc-900 backdrop-blur
          transition-all duration-300 ease-out
          ${open ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6 pointer-events-none"}
        `}
      >
        <MenuItem icon={Github} label="GitHub" href="https://github.com/codeurge123" />
        <MenuItem icon={Code} label="LeetCode" href="https://leetcode.com/code_urgyb316_" />
        <MenuItem icon={Linkedin} label="LinkedIn" href="https://linkedin.com/in/yash-bansal-a67562286" />
        <MenuItem icon={Mail} label="Mail" href="mailto:bansalyash316@gmail.com" />
      </div>
    </>
  );
}

function MenuItem({ icon: Icon, label, href }) {
  return (
    <a
      href={href}
      target="_blank"
      className="
        flex items-center gap-3 px-4 py-3
        text-sm text-gray-300
        hover:bg-white/5 hover:text-white
        transition-colors
      "
    >
      <Icon size={16} />
      {label}
    </a>
  );
}
