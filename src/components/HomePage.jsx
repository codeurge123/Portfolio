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


// Home Page
export default function HomePage() {
    return (
        <div className="min-h-screen flex items-start justify-center px-4 sm:px-6 pt-16 sm:pt-20">
            <div className="max-w-4xl w-full animate-fade-in">

                {/* Hero Section */}
                <div className="mb-8 sm:mb-10">
                    <p className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
                        Sup, I&apos;m Yash Bansal 👋
                    </p>
                    <span className="inline-block bg-green-900/30 text-green-400 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm border border-green-700">
                        <span className='animate-pulse text-green-500 [animation-duration:1s]'>●</span> Available for freelance
                    </span>
                </div>

                <p className="text-base sm:text-lg text-gray-300 leading-relaxed mb-10 sm:mb-14 text-justify">
                    I build things for the web that are fast, reliable, and actually useful.
                    I'm a developer who enjoys turning ideas into
                    real-world products. From crafting smooth user interfaces to building
                    scalable backend systems, I enjoy solving problems through clean,
                    well-structured code and thoughtful engineering.
                </p>

                <hr className="border-slate-600 mb-6 sm:mb-8" />

                {/* Professional Work */}
                <div className="mb-10 sm:mb-14">
                    <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">
                        Professional Work
                    </h2>

                    <LinkPreviewProfileSection />

                    <p className="text-gray-300 text-md sm:text-md leading-relaxed mb-4 text-justify">
                        I actively work on personal and collaborative projects involving
                        product design, frontend engineering, and backend integration.
                        These projects are built with production-level thinking—authentication
                        flows, API design, state management, and scalable UI systems.
                    </p>

                    <p className="text-gray-300 text-md sm:text-md leading-relaxed text-justify">
                        Alongside development, I enjoy exploring how real products are
                        built, deployed, and scaled, continuously improving my workflow by
                        learning from open-source projects and industry best practices.
                    </p>
                </div>

                <hr className="border-slate-600 mb-6 sm:mb-8" />

                {/* What Makes Me Different */}
                <div className="mb-10 sm:mb-14">
                    <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">
                        What Makes Me Different
                    </h2>

                    <p className="text-gray-300 text-md sm:text-md leading-relaxed mb-4 text-justify">
                        I take complete ownership of the work I do. I don’t just aim to make
                        things work—I care deeply about code quality, structure, and
                        long-term maintainability.
                    </p>

                    <p className="text-gray-300 text-md sm:text-md leading-relaxed mb-4 text-justify">
                        I approach development with both a technical and problem-solving
                        mindset. Good software isn’t just about writing code—it’s about
                        understanding users, constraints, and real-world use cases.
                    </p>

                    <p className="text-gray-300 text-md sm:text-md leading-relaxed text-justify">
                        I also use AI-assisted development to speed up learning and
                        execution, but always with proper review, testing, and architectural
                        control—ensuring the final output remains reliable and
                        well-engineered.
                    </p>
                </div>

                <hr className="border-slate-600 mb-6 sm:mb-8" />

                {/* GitHub Contributions */}
                <div className="mb-10 sm:mb-14 ">
                    <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">
                        GitHub Contributions
                    </h2>

                    <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-4 md:p-4 overflow-x-auto">
                        <div className="min-w-[700px] "
                            data-no-swipe>
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
