import React, { useState } from "react";
import { Github, ExternalLink } from "lucide-react";
import {
  SiMongodb,
  SiExpress,
  SiReact,
  SiNodedotjs,
  SiTailwindcss,
  SiSocket,
  SiNpm,
  SiHtml5,
  SiJavascript,
  SiCss,
  SiTensorflow,
  SiPython,
  SiFramer
} from "react-icons/si";

import creatx from "../assets/creatx.png";
import getbugged from "../assets/getbugged.png";
import npm from "../assets/npm.png";
import pulse from "../assets/pulse.png";
import codeforgood from "../assets/codeforgood.png";
import blog from "../assets/blog.png";
import codeurge from "../assets/codeurge.png";
import skincurex from "../assets/skincurex.png";

export default function ProjectsPage() {
  const [openIndex, setOpenIndex] = useState(null);

  const projects = [
    {
      title: "Creatx",
      description:
        "A MERN Stack developer-centric UI component platform with animated reusable components.",
      image: creatx,
      github: "https://github.com/codeurge123/creatx",
      live: "http://creatxui.codeurge.online/",
      tech: [SiMongodb, SiExpress, SiReact, SiNodedotjs, SiTailwindcss, SiFramer],
      status: "done"
    },
    {
      title: "GetBugged",
      description:
        "Platform for developers to discover, report and track bugs collaboratively.",
      image: getbugged,
      github: "https://github.com/codeurge123/getBugged",
      live: "https://getbugged.codeurge.online/",
      tech: [SiReact, SiNodedotjs, SiMongodb, SiTailwindcss, SiExpress],
      status: "done"
    },
    {
      title: "Pulse",
      description:
        "Full-stack social media platform with posts, likes, comments and authentication.",
      image: pulse,
      github: "https://github.com/codeurge123/Pulse",
      live: "https://drive.google.com/file/d/1_mRe8fQlF_FuJPysItbuY0shjLUAgmhg/view",
      tech: [SiReact, SiNodedotjs, SiMongodb, SiTailwindcss, SiExpress, SiSocket],
      status: "done"
    },
    {
      title: "LeetCode Heatmap",
      description:
        "NPM package that visualizes LeetCode activity heatmap with 900+ downloads.",
      image: npm,
      github: "https://github.com/codeurge123/npm-LeetcodeHeatMap",
      live: "http://npmjs.com/package/leetcode-heatmap-track",
      tech: [SiReact, SiNpm],
      status: "done"
    },
    {
      title: "The Unwritten Code",
      description:
        "Collaborative platform for sharing real-world dev insights.",
      image: blog,
      github: "https://github.com/codeurge123/TheUnwrittenCode",
      live: "https://unwrittencodeblog.codeurge.online/",
      tech: [SiReact, SiNodedotjs, SiMongodb, SiExpress, SiTailwindcss],
      status: "in progress"
    },
    {
      title: "Codeurge - TypeRush",
      description:
        "Developer style typing speed test with real-time multiplayer and global leaderboard.",
      image: codeurge,
      github: "https://github.com/codeurge123/codeurge",
      live: "https://www.codeurge.online/",
      tech: [SiReact, SiNodedotjs, SiMongodb, SiExpress, SiTailwindcss],
      status: "in progress"
    },
    {
      title: "SkinCureX",
      description:
        "AI-powered skin disease diagnosis and treatment recommendation platform with real-time chat support.",
      image: skincurex,
      github: "https://github.com/codeurge123/SkinCureX",
      tech: [SiHtml5, SiJavascript, SiCss, SiTensorflow, SiPython],
      status: "done"
    },
    {
      title: "codeforgood",
      description:
        "Platform to help developers contribute to genuine repos.",
      image: codeforgood,
      tech: [SiReact],
      status: "in progress"
    }
  ];

  return (
    <div className="min-h-screen px-6 pt-20 pb-10">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <h1 className="text-4xl font-bold mb-3">Projects 🚀</h1>

        <p className="text-gray-400 mb-12">
          Real-world projects where I build scalable web applications and experiment with AI-powered solutions.
        </p>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="relative bg-slate-950 border border-gray-800 rounded-xl overflow-hidden transition hover:border-gray-700 hover:ring-1 hover:ring-gray-700 hover:shadow-xl"
            >

              {/* Status Badge */}
              <div
                className={`absolute bottom-4 right-3 text-xs px-3 py-1 rounded-md font-medium z-10
    ${project.status === "done"
                    ? "bg-green-500/20 text-green-400 border border-green-500/30"
                    : "bg-yellow-500/20 text-yellow-400 border border-yellow-500/30"
                  }`}
              >
                {project.status === "done" ? "Completed" : "In Progress"}
              </div>

              {/* Toggle Button */}
              <button
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                className="absolute top-2 right-3 cursor-pointer text-xs px-3 py-1 bg-gray-900 text-white rounded-md hover:bg-gray-800 transition z-10"
              >
                {openIndex === index ? "Hide" : "Tech"}
              </button>

              {/* Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover hover:scale-105 transition-all duration-200"
              />

              {/* Content */}
              <div className="p-5">
                <h2 className="text-xl font-semibold mb-2">
                  {project.title}
                </h2>

                <p className="text-gray-400 text-sm mb-2">
                  {project.description}
                </p>

                {/* Animated Tech Stack */}
                <div
                  className={`flex gap-3 overflow-hidden transition-all duration-500 ${openIndex === index
                    ? "max-h-20 opacity-100 mt-3 mb-4"
                    : "max-h-0 opacity-0"
                    }`}
                >
                  {project.tech?.map((Icon, i) => (
                    <div
                      key={i}
                      className="p-2 bg-gray-900 rounded-lg hover:bg-gray-800 transition"
                    >
                      <Icon size={18} />
                    </div>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4 mt-2">
                  {project.github ? (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-gray-400 hover:text-white text-sm"
                    >
                      <Github size={18} /> GitHub
                    </a>
                  ) : ""}

                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-gray-400 hover:text-white text-sm"
                    >
                      <ExternalLink size={18} /> Live
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <p className="text-gray-500 text-center mt-12">
          More projects on my{" "}
          <a
            href="https://github.com/codeurge123?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-100 hover:underline"
          >
            GitHub
          </a>
        </p>
      </div>

    </div>
  );
}