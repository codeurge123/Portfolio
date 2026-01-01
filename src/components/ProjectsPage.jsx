import React from "react";
import { Github, Linkedin, Mail, ExternalLink, Award, Code, Briefcase, Download } from 'lucide-react';

export default function ProjectsPage() {
  const projects = [
    {
      title: 'Creatx.',
      date: 'Nov 2025 – Present',
      description:
        'Developer-centric UI component platform featuring modern, animated, and reusable components for rapid frontend development.',
      tech: ['React', 'Tailwind CSS', 'JavaScript'],
      color: 'blue',
      github: 'https://github.com/codeurge123/creatx',
      Live: 'https://creatxui.vercel.app'
    },
    {
      title: 'SkinCureX',
      date: 'July 2025',
      description:
        'AI-powered web platform that enables users to upload skin images and receive disease predictions.',
      tech: ['Python', 'Machine Learning', 'HTML/CSS', 'JavaScript'],
      color: 'green',
      github: 'https://github.com/codeurge123/skincurex'
    },
    {
      title: 'SwiftRoute',
      date: 'Sept 2025',
      description:
        'AI-driven trip planning platform that generates optimized multi-day itineraries.',
      tech: ['React', 'Firebase', 'Gemini API'],
      color: 'purple',
      github: 'https://github.com/codeurge123/swiftroute'
    },
    {
      title: "QueryDocs",
      date: "2025",
      description:
        "QueryDocs is a documentation-focused project designed to simplify querying, organizing, and navigating technical documentation. It aims to improve developer productivity by making structured information easily searchable and accessible.",
      tech: ["JavaScript", "Documentation", "Web"],
      color: "orange",
      github: "https://github.com/codeurge123/QueryDocs",
      Live: 'https://query-docs-sql.vercel.app/#install'
    },
    {
      title: "DIJI-YATRA",
      date: "2024",
      description:
        "DIJI-YATRA is a C++ based travel simulation project that uses graph theory and Dijkstra’s algorithm to find the shortest path between cities, simulate real-world traffic conditions, and estimate travel fares. It also includes an admin panel to configure routes, traffic conditions, and fare data.",
      tech: ["C++", "STL", "Algorithms"],
      color: "green",
      github: "https://github.com/codeurge123/DIJI-YATRA"
    },
    {
      title: "Alexa-PersonalAssistant",
      date: "2024",
      description:
        "Alexa-PersonalAssistant is a voice-enabled assistant built using Amazon’s Alexa Skills Kit. It performs tasks such as answering questions, providing weather updates, and executing custom voice commands, enhancing hands-free productivity and convenience.",
      tech: ["Alexa Skills Kit", "Python"],
      color: "purple",
      github: "https://github.com/codeurge123/Alexa-PersonalAssistant"
    },
    {
      title: 'Theme Switcher Bundler',
      date: '2025',
      description:
        'Lightweight npm package for managing dark/light themes with zero config.',
      tech: ['JavaScript', 'NPM'],
      color: 'amber',
      github: 'https://github.com/codeurge123/npm-theme-switcher-bundler'
    },
    {
      title: 'LeetCode Heatmap Track',
      date: '2025',
      description:
        'Open-source npm package to visualize LeetCode activity as a heatmap.',
      tech: ['React', 'NPM', 'API'],
      color: 'cyan',
      github: 'https://github.com/codeurge123/npm-LeetcodeHeatMap'
    }
  ];


  const [showAll, setShowAll] = React.useState(false);


  return (
    <div className="min-h-screen px-6 pt-26 pb-10">
      <div className="max-w-4xl mx-auto animate-fade-in">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 flex items-center gap-3">
          Projects 🚀
        </h1>
        <p className="text-gray-400 text-lg mb-12">
          Here are some of my recent projects showcasing my skills in web development and AI.
        </p>

        <div className="space-y-8">
          {projects
            .slice(0, showAll ? projects.length : 3)
            .map((project, index) => (
              <div
                key={index}
                className="bg-black border border-gray-800 rounded-lg p-6 hover:border-gray-700 transition-all hover:shadow-lg hover:shadow-gray-900/50"
              >
                <div className="flex items-start justify-between mb-3">
                  <h2 className="text-2xl font-semibold">{project.title}</h2>

                  <div className="flex items-center gap-3">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        title="View on GitHub"
                        className="text-gray-400 hover:text-white transition-colors"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                    )}

                    {project.Live && (
                      <a
                        href={project.Live}
                        target="_blank"
                        rel="noopener noreferrer"
                        title="View Live"
                        className="text-gray-400 hover:text-white transition-colors"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>


                <p className="text-sm text-gray-400 mb-3">{project.date}</p>

                <p className="text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className={`bg-${project.color}-900/30 text-${project.color}-400 px-3 py-1 rounded-md text-sm border border-${project.color}-700/50`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          {showAll && (
            <div className="flex justify-center gap-4">
              For More Projects -  <a
                href="https://github.com/codeurge123"
                target="_blank"
                rel="noopener noreferrer"
                title="View on GitHub"
                className="text-gray-400 text-lg border-b hover:text-white transition-colors"
              >
                GitHub
              </a>
            </div>
          )}
          {projects.length > 3 && (
            <div className="mt-10 flex justify-center">
              <button
                onClick={() => setShowAll(!showAll)}
                className="text-gray-300 hover:text-white underline underline-offset-4 transition-colors font-medium cursor-pointer"
              >
                {showAll ? 'Show less projects' : 'View all projects'}
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}