import React from "react";
import { Award, Code, Briefcase, Download } from 'lucide-react';

export default function ResumePage() {
  return (
    <div className="min-h-screen px-4 sm:px-6 pt-14 md:pt-24 pb-10">
      <div className="max-w-4xl mx-auto animate-fade-in">

        {/* Header */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3">
          Resume 📄
        </h1>
        <p className="text-gray-400 text-base sm:text-lg mb-10 sm:mb-12">
          Download my resume to learn more about my experience and qualifications.
        </p>

        {/* Work Experience */}
        <div className="mb-10 sm:mb-12">
          <h2 className="text-xl sm:text-2xl font-bold mb-5 text-orange-400 flex items-center gap-3">
            <Briefcase className="w-6 h-6" />
            Work Experience
          </h2>

          <div className="bg-gray-900/50 p-4 sm:p-6 rounded-lg border border-gray-800 hover:border-orange-500 transition-colors">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2 gap-1">
              <h3 className="text-lg sm:text-xl font-semibold">
                Delhi Transco Limited (DTL)
              </h3>
              <span className="text-xs sm:text-sm text-gray-400">
                June 2025 – July 2025
              </span>
            </div>

            <p className="text-gray-400 mb-1 text-sm sm:text-base">
              Intern – Communication and Network Theory
            </p>

            <p className="text-gray-500 mb-3 text-sm">
              SLDC (State Load Dispatch Centre), Delhi, India
            </p>

            <ul className="list-disc list-inside text-gray-400 space-y-2 text-sm sm:text-base">
              <li>
                Worked on applications of <span className="text-gray-300">network theory</span> and
                <span className="text-gray-300"> communication protocols</span> in power system automation.
              </li>
              <li>
                Gained hands-on exposure to <span className="text-gray-300">telecom infrastructure</span>
                used in state-level power transmission and grid monitoring.
              </li>
            </ul>
          </div>
        </div>

        <hr className="border-slate-600 mb-6 sm:mb-8" />

        {/* Education */}
        <div className="mb-10 sm:mb-12">
          <h2 className="text-xl sm:text-2xl font-bold mb-5 text-blue-400">
            Education
          </h2>

          <div className="bg-gray-900/50 p-4 sm:p-6 rounded-lg border border-gray-800 hover:border-blue-400 transition-colors">
            <div className="flex flex-col sm:flex-row sm:justify-between gap-1 mb-2">
              <h3 className="text-lg sm:text-xl font-semibold">
                Jaypee Institute of Information Technology
              </h3>
              <span className="text-xs sm:text-sm text-gray-400">
                Sep 2022 – July 2026
              </span>
            </div>

            <p className="text-gray-400 text-sm sm:text-base">
              B.Tech in ECE
            </p>
            <p className="text-green-400 font-semibold mt-1">
              CGPA: 8.3/10
            </p>
          </div>
        </div>

        <hr className="border-slate-600 mb-6 sm:mb-8" />

        {/* Skills */}
        <div className="mb-10 sm:mb-12">
          <h2 className="text-xl sm:text-2xl font-bold mb-6 text-purple-400">
            Technical Skills
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {[
              { title: "Languages", items: ['C++', 'Python', 'MySQL', 'MATLAB', 'JavaScript', 'HTML', 'CSS'] },
              { title: "Frameworks", items: ['React', 'Tailwind CSS', 'Node.js', 'Bootstrap', 'Express.js', 'Sass'] },
              { title: "Tools", items: ['Git', 'GitHub', 'Google Colab', 'Postman', 'Figma'] },
              { title: "Databases / Cloud", items: ['Firebase', 'MongoDB'] },
            ].map(section => (
              <div key={section.title} className="bg-gray-900/50 p-4 sm:p-6 rounded-lg border border-gray-800">
                <h3 className="text-base sm:text-lg font-semibold mb-3 text-gray-300">
                  {section.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {section.items.map(item => (
                    <span key={item} className="bg-gray-800 px-3 py-1 rounded-md text-xs sm:text-sm">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <hr className="border-slate-600 mb-6 sm:mb-8" />

        {/* Achievements */}
        <div className="mt-10 sm:mt-16">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 flex items-center gap-3">
            <Award className="w-7 h-7" />
            Achievements
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            <div className="bg-gray-900/50 p-4 sm:p-6 rounded-lg border border-gray-800 hover:border-orange-500">
              <Code className="w-7 h-7 text-orange-400 mb-3" />
              <h3 className="text-lg font-semibold mb-1">LeetCode Excellence</h3>
              <p className="text-gray-400 text-sm sm:text-base">
                Solved 450+ problems with a max rating of 1544
              </p>
            </div>

            <div className="bg-gray-900/50 p-4 sm:p-6 rounded-lg border border-gray-800 hover:border-green-500">
              <Code className="w-7 h-7 text-green-400 mb-3" />
              <h3 className="text-lg font-semibold mb-1">GeeksforGeeks 3-Star</h3>
              <p className="text-gray-400 text-sm sm:text-base">
                Solved 100+ problems with 3-star rating
              </p>
            </div>

            <div className="bg-gray-900/50 p-4 sm:p-6 rounded-lg border border-gray-800 hover:border-blue-500 sm:col-span-2">
              <Award className="w-7 h-7 text-blue-400 mb-3" />
              <h3 className="text-lg font-semibold mb-1">IEEE Publication</h3>
              <p className="text-gray-400 text-sm sm:text-base">
                Research paper accepted for IEEE publication on bandwidth enhancement
                using Koch fractal DGS for WLAN/Wi-Fi applications.
              </p>
            </div>
          </div>
        </div>

        {/* Download */}
        <div className="text-center mt-10">
          <a
            href=".././public/YASHBANSAL.pdf"
            download
            className="inline-flex items-center gap-2 bg-white text-black px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
          >
            <Download className="w-5 h-5" />
            Download Full Resume
          </a>
        </div>

      </div>
    </div>
  );
}
