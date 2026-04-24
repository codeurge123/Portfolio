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
import yb from '../../public/yb.png';

export default function HomePage() {
    return (
        <div className="min-h-screen flex items-start justify-center px-4 sm:px-6 pt-16 sm:pt-20">
            <div className="max-w-4xl w-full animate-fade-in">

                {/* Hero Section */}
                <div className="mb-8 sm:mb-10 flex items-center gap-6">
                    <img
                        src={yb}
                        alt="Yash Bansal"
                        className="w-24 h-24 sm:w-32 sm:h-32 rounded-full border-2 border-gray-800"
                    />

                    <div className="flex flex-col gap-2">
                        <p className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2">
                            Hey, I'm Yash Bansal 👋
                        </p>

                        <span className="inline-block w-fit bg-green-900/30 text-green-400 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm border border-green-700">
                            <span className='animate-pulse text-green-500 mr-1 [animation-duration:1s]'>●</span> Available for freelance
                        </span>
                    </div>

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
                <div className="mb-14">
                    <h2 className="text-xl sm:text-2xl font-bold mb-6">
                        Open Source Contributions
                    </h2>

                    <p className="text-gray-300 mb-6 text-justify">
                        I build and publish open-source developer tools used by engineers worldwide.
                        My NPM packages focus on improving developer productivity and workflow efficiency.
                        Currently used by 1000+ developers across multiple projects.
                    </p>

                    <div className="grid sm:grid-cols-2 gap-6">

                        {/* create-prod-backend */}
                        <a
                            href="https://www.npmjs.com/package/create-prod-backend"
                            target="_blank"
                            className="group border border-gray-800 rounded-xl p-6 bg-gray-900/40 hover:bg-gray-900 transition"
                        >

                            <div className="flex items-center justify-between mb-3">
                                <h3 className="text-lg font-semibold">
                                    create-prod-backend
                                </h3>
                                <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-white" />
                            </div>

                            <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                                CLI-based developer tool that automates the creation of production-ready
                                backend folder structures, enabling consistent architecture, faster project
                                setup, and improved code organization.
                            </p>

                            <img
                                src="https://img.shields.io/npm/dw/create-prod-backend?label=weekly%20downloads"
                                alt="npm downloads"
                            />

                            <p className="text-xs text-green-400 mt-3">
                                Used by 1000+ developers
                            </p>

                        </a>


                        {/* test-api-endpoints */}
                        <a
                            href="https://www.npmjs.com/package/test-api-endpoints"
                            target="_blank"
                            className="group border border-gray-800 rounded-xl p-6 bg-gray-900/40 hover:bg-gray-900 transition"
                        >

                            <div className="flex items-center justify-between mb-3">
                                <h3 className="text-lg font-semibold">
                                    test-api-endpoints
                                </h3>
                                <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-white" />
                            </div>

                            <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                                Lightweight package that simplifies testing of API endpoints by providing
                                quick request execution and response validation, enabling faster and more
                                efficient backend debugging.
                            </p>

                            <img
                                src="https://img.shields.io/npm/dw/test-api-endpoints?label=weekly%20downloads"
                                alt="npm downloads"
                            />

                            <p className="text-xs text-gray-400 mt-3">
                                Open source utility for backend testing (500+ weekly downloads)
                            </p>

                        </a>

                    </div>
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