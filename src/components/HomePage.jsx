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
        <div className="min-h-screen flex items-center justify-center px-6 pt-20">
            <div className="max-w-4xl w-full animate-fade-in">

                {/* Hero Section */}
                <div className="mb-10">
                    <p className="text-4xl md:text-5xl font-bold mb-6">
                        Sup, I&apos;m Yash Bansal 👋
                    </p>

                    <span className="inline-block bg-green-900/30 text-green-400 px-4 py-2 rounded-full text-sm border border-green-700">
                        ● Available for freelance
                    </span>
                </div>

                <p className="text-xl md:text-lg text-gray-300 leading-relaxed mb-14">
                    I&apos;m a Full Stack Web Developer from Uttar Pradesh, India, with several
                    years of hands-on coding experience and strong exposure to building
                    real-world products. I enjoy crafting fast, scalable, and
                    user-friendly web applications, with a simple goal—solving meaningful
                    problems through clean and reliable code.
                </p>
                <hr className='border-slate-600 mb-8' />
                {/* Professional Work */}
                <div className="mb-14">
                    <h2 className="text-2xl font-bold mb-6">Professional Work</h2>

                   <LinkPreviewProfileSection />

                    <p className="text-gray-300 text-md leading-relaxed mb-4">
                        I actively work on personal and collaborative projects involving
                        product design, frontend engineering, and backend integration.
                        These projects are built with production-level thinking—authentication
                        flows, API design, state management, and scalable UI systems.
                    </p>

                    <p className="text-gray-300 text-md leading-relaxed">
                        Alongside development, I enjoy exploring how real products are
                        built, deployed, and scaled, continuously improving my workflow by
                        learning from open-source projects and industry best practices.
                    </p>
                </div>

                <hr className='border-slate-600 mb-8' />

                {/* What Makes Me Different */}
                <div className="mb-14">
                    <h2 className="text-2xl font-bold mb-6">What Makes Me Different</h2>

                    <p className="text-gray-300 text-md leading-relaxed mb-4">
                        I take complete ownership of the work I do. I don’t just aim to make
                        things work—I care deeply about code quality, structure, and
                        long-term maintainability.
                    </p>

                    <p className="text-gray-300 text-md leading-relaxed mb-4">
                        I approach development with both a technical and problem-solving
                        mindset. Good software isn’t just about writing code—it’s about
                        understanding users, constraints, and real-world use cases.
                    </p>

                    <p className="text-gray-300 text-md leading-relaxed">
                        I also use AI-assisted development to speed up learning and
                        execution, but always with proper review, testing, and architectural
                        control—ensuring the final output remains reliable and
                        well-engineered.
                    </p>
                </div>
                <hr className='border-slate-600 mb-8' />

                {/* GitHub Contributions */}
                <div className="mb-14">
                    <h2 className="text-2xl font-bold mb-6">GitHub Contributions</h2>

                    <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6">
                        <GitHubCalendar
                            username="codeurge123"
                            blockSize={13}
                            blockMargin={3}
                            fontSize={14}
                            colorScheme="dark"
                            transformData={(contributions) =>
                                contributions.slice(-26 * 12) // last ~6 months
                            }
                        />
                    </div>
                </div>

                <hr className='border-slate-600 mb-8' />

                {/* Writing */}
                <div className="mb-14">
                    <h2 className="text-2xl font-bold mb-4">Writing</h2>

                    <LivePreviewWrittenSection />
                </div>

            </div>
        </div>
    );
}

