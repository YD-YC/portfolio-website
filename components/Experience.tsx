const experiences = [
    { 
        id: '01', 
        company: 'Humble Bee @ Buzzworthy', 
        position: 'Embedded Intern',
        duration: 'March 2025 – Present',
        type: 'Hybrid',
        responsibilities: [
            'Developing real-time signal processing solutions using ESP32 for embedded applications',
            'Implementing audio signal acquisition and preprocessing using ADC and filtering techniques'
        ]
    },
    { 
        id: '02', 
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
        id: '03', 
        company: 'lvlAlpha Private Limited', 
        position: 'EEE System Design Associate',
        duration: 'Dec 2023 – Feb 2024',
        type: 'Remote',
        responsibilities: [
            'Assisted in TTMS Tool and Asset Tracking system Preliminary Technical Documentation',
            'Worked on the New Product Development - "Arch Eon and Had Eon" Wearable Health Monitors',
            'Built Vendor Management and Development for lvlAlpha Manufacturing Process'
        ]
    }
];

export const Experience = () => {
    return (
        <section id="experience" className="text-white py-20">
            <div className="container mx-auto flex flex-col md:flex-row">
                <div className="md:w-1/4 pr-8 mb-12 md:mb-0">
                    <h2 className="text-6xl text-purple-300 font-extrabold sticky top-20">
                        EXPERIENCE
                    </h2>
                </div>

                <div className="md:w-3/4 grid grid-cols-1 gap-12">
                    {experiences.map((experience) => (
                        <div key={experience.id} className="flex items-start">
                            <div className="text-gray-400 font-bold text-5xl mr-6">
                                {experience.id}
                            </div>
                            <div className="flex-1">
                                <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                                    <h3 className="text-2xl font-bold">{experience.company}</h3>
                                    <span className="text-gray-300">{experience.duration}</span>
                                </div>
                                <div className="flex flex-col md:flex-row md:items-center gap-2 text-purple-300 mb-4">
                                    <span className="font-medium">{experience.position}</span>
                                    <span className="hidden md:block">•</span>
                                    <span>{experience.type}</span>
                                </div>
                                <ul className="list-disc pl-5 space-y-2">
                                    {experience.responsibilities.map((item, index) => (
                                        <li key={index}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
