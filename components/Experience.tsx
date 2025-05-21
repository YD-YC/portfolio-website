"use client";

import React from 'react';

const experiences = [
    { 
        id: '01', 
        company: 'Ripple Healthcare', 
        position: 'Embedded Hardware Intern',
        duration: 'March 2025 – Present',
        type: 'Onsite (Gurgaon)',
        responsibilities: [
            'Exploring innovative solutions in healthcare technology using embedded hardware platforms',
        ]
    },
    { 
        id: '02', 
        company: 'Humble Bee @ Buzzworthy', 
        position: 'Embedded Intern',
        duration: 'March 2025 – May 2025',
        type: 'Remote',
        responsibilities: [
            'Developed and maintained firmware for InHive sensor and gateway systems, including audio capture, transmission, modem control, and bug resolution',
            'Engineered Raspberry Pi logic for timed video capture; collaborated on firmware integration for next-gen embedded hardware'
        ]
    },
    { 
        id: '03', 
        company: 'Sphere.ai', 
        position: 'IoT and Hardware Developer Intern',
        duration: 'Feb 2025 – March 2025',
        type: 'Hybrid',
        responsibilities: [
            'Developed and integrated memory systems, microphones, and speakers with ESP 32, ensuring seamless communication between hardware components',
            'Enhanced problem-solving skills by debugging and troubleshooting hardware-software interactions in an unfamiliar domain'
        ]
    },
    { 
        id: '04', 
        company: 'lvlAlpha Private Limited', 
        position: 'EEE System Design Associate',
        duration: 'Dec 2023 – Feb 2024',
        type: 'Remote',
        responsibilities: [
            'Assisted in TTMS Tool and Asset Tracking system Preliminary Technical Documentation',
            'Worked on the New Product Development - "Arch Eon and Had Eon" Wearable Health Monitors',
        ]
    }
];

const Experience = () => {
    return (
        <section id="experience" className="py-20 bg-black text-white">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row">
                    {/* Left side - Title */}
                    <div className="lg:w-1/3 mb-12 lg:mb-0">
                        <div className="lg:sticky lg:top-20">
                            <h2 className="text-6xl text-purple-300 font-extrabold mb-6">
                                EXPERIENCE
                            </h2>
                            <div className="w-16 h-1 bg-purple-500 mb-6"></div>
                            <p className="text-gray-300">
                                My professional journey in embedded systems and hardware development.
                            </p>
                        </div>
                    </div>

                    {/* Right side - Timeline */}
                    <div className="lg:w-2/3 relative">
                        {/* Timeline line */}
                        <div className="absolute left-3 top-0 h-full w-0.5 bg-purple-500 hidden md:block"></div>

                        {/* Experience items */}
                        <div className="space-y-16">
                            {experiences.map((exp) => (
                                <div key={exp.id} className="group relative">
                                    {/* Timeline dot */}
                                    <div className="absolute left-3 top-8 w-3 h-3 bg-purple-400 rounded-full 
                                                  transform -translate-x-1/2 hidden md:block
                                                  group-hover:bg-purple-300 group-hover:scale-150 transition-all duration-300"></div>

                                    {/* Experience content */}
                                    <div className="md:ml-12 flex flex-col bg-gray-900 border border-gray-800 
                                                   rounded-lg p-6 hover:border-purple-500/50 hover:shadow-lg 
                                                   hover:shadow-purple-500/10 transition-all duration-300">
                                        {/* Header with ID */}
                                        <div className="flex items-start mb-4">
                                            <div className="text-6xl text-purple-500/30 font-bold mr-4 leading-none">
                                                {exp.id}
                                            </div>
                                            <div className="flex-1 pt-2">
                                                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-1">
                                                    <h3 className="text-2xl font-bold">{exp.company}</h3>
                                                    <span className="text-gray-400 text-sm bg-gray-800 px-3 py-1 rounded-full mt-2 sm:mt-0 w-fit">
                                                        {exp.duration}
                                                    </span>
                                                </div>
                                                <div className="text-purple-300 mb-2">
                                                    <span className="font-medium">{exp.position}</span>
                                                    <span className="mx-2 hidden sm:inline">•</span>
                                                    <span className="text-sm">{exp.type}</span>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Responsibilities */}
                                        <ul className="list-disc pl-5 space-y-2 text-gray-300 mt-2 ml-12">
                                            {exp.responsibilities.map((item, idx) => (
                                                <li key={idx}>{item}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;