import React from "react";
import { Github, ExternalLink } from "lucide-react";
import creatx from '../assets/creatx.png'
import getbugged from '../assets/getbugged.png'
import npm from '../assets/npm.png'
import pulse from '../assets/pulse.png'
import codeforgood from '../assets/codeforgood.png'
import blog from '../assets/blog.png'

export default function ProjectsPage() {

  const projects = [
    {
      title: "Creatx",
      description: "A MERN Stack developer-centric UI component platform with animated reusable components.",
      image: creatx,
      github: "https://github.com/codeurge123/creatx",
      live: "https://creatxui.vercel.app"
    },
    {
      title: "GetBugged",
      description: "Platform for developers to discover, report and track bugs collaboratively.",
      image: getbugged,
      github: "https://github.com/codeurge123/getBugged",
      live: "https://getbugged.codeurge.online/"
    },
    {
      title: "Pulse",
      description: "Full-stack social media platform with posts, likes, comments and authentication.",
      image: pulse,
      github: "https://github.com/codeurge123/Pulse"
    },
    {
      title: "LeetCode Heatmap",
      description: "NPM package that visualizes LeetCode activity heatmap with 900+ downloads.",
      image: npm,
      github: "https://github.com/codeurge123/npm-LeetcodeHeatMap",
      live: "http://npmjs.com/package/leetcode-heatmap-track"
    },
    {
      title: "The Unwritten Code",
      description: "TheUnwrittenCode is a collaborative platform that captures and shares the hidden lessons, insights, and experiences developers gain while building real-world software.",
      image: blog,
      github: "https://github.com/codeurge123/TheUnwrittenCode",
      live: "https://unwrittencodeblog.codeurge.online/"
    },
    {
      title: "codeforgood",
      description: "A platform for developer which help them to contribute in genuine repo.",
      image: codeforgood,
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

        {/* Project Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-8">

          {projects.map((project, index) => (

            <div
              key={index}
              className="bg-black border border-gray-800 rounded-xl overflow-hidden hover:border-gray-700 transition hover:shadow-xl"
            >

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

                <p className="text-gray-400 text-sm mb-4">
                  {project.description}
                </p>

                {/* Links */}
                <div className="flex gap-4">

                  {project.github ? (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-gray-400 hover:text-white text-sm"
                    >
                      <Github size={18} /> GitHub
                    </a>
                  ) : (<div className="border border-gray-700 gap-1 p-1 rounded ">Currently In Progress</div>)}

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
    </div>
  );
}