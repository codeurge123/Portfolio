import React from "react";
import { Github, Linkedin, Mail, ExternalLink, Award, Code, Briefcase, Download } from 'lucide-react';

export default function ResumePage() {
  return (
    <div className="min-h-screen px-6 pt-22 pb-10">
      <div className="max-w-4xl mx-auto animate-fade-in">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Resume 📄</h1>
        <p className="text-gray-400 text-lg mb-12">
          Download my resume to learn more about my experience and qualifications.
        </p>

        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-blue-400">Education</h2>
          <div className="space-y-6">
            <div className="bg-gray-900/50 p-6 rounded-lg border border-gray-800">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-semibold">Jaypee Institute of Information Technology</h3>
                <span className="text-sm text-gray-400">Sep 2022 – July 2026</span>
              </div>
              <p className="text-gray-400">B.Tech in ECE</p>
              <p className="text-green-400 font-semibold mt-1">CGPA: 8.3/10</p>
            </div>
          </div>
        </div>

        <hr className='border-slate-600 mb-8' />


        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-purple-400">Technical Skills</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-900/50 p-6 rounded-lg border border-gray-800">
              <h3 className="text-lg font-semibold mb-3 text-gray-300">Languages</h3>
              <div className="flex flex-wrap gap-2">
                {['C++', 'Python', 'MySQL', 'MATLAB', 'JavaScript', 'HTML', 'CSS'].map(lang => (
                  <span key={lang} className="bg-gray-800 px-3 py-1 rounded-md text-sm">{lang}</span>
                ))}
              </div>
            </div>

            <div className="bg-gray-900/50 p-6 rounded-lg border border-gray-800">
              <h3 className="text-lg font-semibold mb-3 text-gray-300">Frameworks</h3>
              <div className="flex flex-wrap gap-2">
                {['React', 'Tailwind CSS', 'Node.js', 'Bootstrap', 'Express.js', 'Sass'].map(fw => (
                  <span key={fw} className="bg-gray-800 px-3 py-1 rounded-md text-sm">{fw}</span>
                ))}
              </div>
            </div>

            <div className="bg-gray-900/50 p-6 rounded-lg border border-gray-800">
              <h3 className="text-lg font-semibold mb-3 text-gray-300">Tools</h3>
              <div className="flex flex-wrap gap-2">
                {['Git', 'GitHub', 'Google Colab', 'Postman', 'Figma'].map(tool => (
                  <span key={tool} className="bg-gray-800 px-3 py-1 rounded-md text-sm">{tool}</span>
                ))}
              </div>
            </div>

            <div className="bg-gray-900/50 p-6 rounded-lg border border-gray-800">
              <h3 className="text-lg font-semibold mb-3 text-gray-300">Databases/Cloud</h3>
              <div className="flex flex-wrap gap-2">
                {['Firebase', 'MongoDB'].map(db => (
                  <span key={db} className="bg-gray-800 px-3 py-1 rounded-md text-sm">{db}</span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <hr className='border-slate-600 mb-8' />


        <div className="mt-16">
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
            <Award className="w-8 h-8" />
            Achievements
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-900/50 p-6 rounded-lg border border-gray-800 hover:border-orange-500 transition-colors">
              <Code className="w-8 h-8 text-orange-400 mb-3" />
              <h3 className="text-xl font-semibold mb-2">LeetCode Excellence</h3>
              <p className="text-gray-400">Solved 450+ problems with a max. rating of 1544</p>
            </div>

            <div className="bg-gray-900/50 p-6 rounded-lg border border-gray-800 hover:border-green-500 transition-colors">
              <Code className="w-8 h-8 text-green-400 mb-3" />
              <h3 className="text-xl font-semibold mb-2">GeeksforGeeks 3-Star</h3>
              <p className="text-gray-400">Solved 100+ problems with 3-star rating</p>
            </div>

            <div className="bg-gray-900/50 p-6 rounded-lg border border-gray-800 hover:border-blue-500 transition-colors md:col-span-2">
              <Award className="w-8 h-8 text-blue-400 mb-3" />
              <h3 className="text-xl font-semibold mb-2">IEEE Publication</h3>
              <p className="text-gray-400">
                Research paper accepted for IEEE publication: "Bandwidth Enhancement of Microstrip Antenna by Incorporation
                Koch Fractal Defected Ground Structure for WLAN/Wi-Fi Applications"
              </p>
            </div>
          </div>
        </div>

        {/* Download Button */}
        <div className="text-center mt-8">
          <a
            href="/public/YASHBANSAL.pdf"
            download
            className="inline-flex items-center gap-2 bg-white text-black px-8 py-4 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
          >
            <Download className="w-5 h-5" />
            Download Full Resume
          </a>
        </div>

      </div>
    </div>
  );
}
