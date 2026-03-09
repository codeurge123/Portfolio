import React from 'react';
import {
    Github,
    Linkedin,
    Mail,
    ExternalLink,
    Briefcase
} from 'lucide-react';
import { Link } from '../utils/Router';
import { GitHubCalendar } from 'react-github-calendar';
import { LinkPreviewProfileSection } from './LivePreviewProfileSection';
import { LivePreviewWrittenSection } from './LivePreviewWrittenSection';

export default function HomePage() {
    return (
        <div className="min-h-screen flex items-start justify-center px-4 sm:px-6 pt-16 sm:pt-20">
            <div className="max-w-4xl w-full animate-fade-in">

                {/* Hero Section */}
                <div className="mb-8 sm:mb-10">
                    <p className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
                        Hey, I'm Yash Bansal 👋
                    </p>

                    <span className="inline-block bg-green-900/30 text-green-400 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm border border-green-700">
                        <span className='animate-pulse text-green-500 [animation-duration:1s]'>●</span> Available for freelance
                    </span>
                </div>

                {/* Intro */}
                <p className="text-base sm:text-lg text-gray-300 leading-relaxed mb-10 sm:mb-14 text-justify">
                    I’m a <strong>full-stack developer</strong> focused on building fast,
                    reliable, and scalable web applications. I enjoy transforming ideas
                    into real products by combining strong frontend engineering with
                    robust backend systems.
                </p>

                <hr className="border-slate-600 mb-6 sm:mb-8" />

                {/* Open Source */}
                {/* Open Source */}
                <div className="mb-14">
                    <h2 className="text-xl sm:text-2xl font-bold mb-6">
                        Open Source
                    </h2>

                    <p className="text-gray-300 mb-6 text-justify">
                        I build and publish open-source developer tools used by engineers worldwide.
                        My NPM packages focus on improving developer productivity and workflow efficiency.
                        Currently used by 900+ developers across multiple projects.
                    </p>

                    <div className="grid sm:grid-cols-2 gap-6">

                        {/* LeetCode Heatmap Track */}
                        <a
                            href="https://www.npmjs.com/package/leetcode-heatmap-track"
                            target="_blank"
                            className="group border border-gray-800 rounded-xl p-6 bg-gray-900/40 hover:bg-gray-900 transition"
                        >

                            <div className="flex items-center justify-between mb-3">
                                <h3 className="text-lg font-semibold">
                                    LeetCode Heatmap Track
                                </h3>
                                <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-white" />
                            </div>

                            <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                                Developer tool that visualizes and tracks LeetCode progress
                                using a heatmap-style interface. Built to help developers
                                stay consistent with problem solving.
                            </p>

                            <img
                                src="https://img.shields.io/npm/dw/leetcode-heatmap-track?label=weekly%20downloads"
                                alt="npm downloads"
                            />

                            <p className="text-xs text-green-400 mt-3">
                                Used by 900+ developers
                            </p>

                        </a>


                        {/* Theme Switcher Bundler */}
                        <a
                            href="https://www.npmjs.com/package/theme-switcher-bundler"
                            target="_blank"
                            className="group border border-gray-800 rounded-xl p-6 bg-gray-900/40 hover:bg-gray-900 transition"
                        >

                            <div className="flex items-center justify-between mb-3">
                                <h3 className="text-lg font-semibold">
                                    Theme Switcher Bundler
                                </h3>
                                <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-white" />
                            </div>

                            <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                                Lightweight package that enables seamless light and dark
                                theme switching for modern web applications with minimal setup.
                            </p>

                            <img
                                src="https://img.shields.io/npm/dw/theme-switcher-bundler?label=weekly%20downloads"
                                alt="npm downloads"
                            />

                            <p className="text-xs text-gray-400 mt-3">
                                Open source utility for modern UI development
                            </p>

                        </a>

                    </div>
                </div>

                <hr className="border-slate-600 mb-8" />


                {/* Why Me */}
                <div className="mb-14">
                    <h2 className="text-xl sm:text-2xl font-bold mb-6">
                        Why Me
                    </h2>

                    <p className="text-gray-300 leading-relaxed mb-4 text-justify">
                        I take full ownership of the work I do. My focus is not only
                        making things work but building systems that are clean,
                        maintainable, and scalable.
                    </p>

                    <p className="text-gray-300 leading-relaxed mb-4 text-justify">
                        I enjoy solving real-world engineering problems and turning
                        ideas into production-ready applications with thoughtful
                        architecture and well-structured code.
                    </p>

                    <p className="text-gray-300 leading-relaxed text-justify">
                        I also leverage modern AI tools to speed up development
                        while maintaining strict code review and architectural
                        control.
                    </p>
                </div>

                <hr className="border-slate-600 mb-6 sm:mb-8" />

                {/* GitHub Contributions */}
                <div className="mb-10 sm:mb-14 ">
                    <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">
                        GitHub Activity
                    </h2>

                    <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-4 md:p-4 overflow-x-auto">
                        <div className="min-w-[700px]" data-no-swipe>
                            <GitHubCalendar
                                username="codeurge123"
                                blockSize={12}
                                blockMargin={4}
                                fontSize={14}
                                colorScheme="dark"
                                transformData={(contributions) =>
                                    contributions.slice(-26 * 12)
                                }
                            />
                        </div>
                    </div>
                </div>

                <hr className="border-slate-600 mb-6 sm:mb-8" />

                {/* Writing */}
                <div className="mb-10 sm:mb-14">
                    <h2 className="text-xl sm:text-2xl font-bold mb-4">
                        Writing
                    </h2>

                    <LivePreviewWrittenSection />
                </div>

            </div>
        </div>
    );
}