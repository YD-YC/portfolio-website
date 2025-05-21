"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import project1 from "@/assets/proj2.png";
import project2 from "@/assets/proj1.png";
import project3 from "@/assets/proj3.png";
import { motion, useMotionTemplate, useMotionValue, animate } from "framer-motion";

const projects = [
    {
        id: 1,
        year: 'May 2024',
        title: "Ardumist",
        description:
            "A portable humidifier using an Arduino UNO micro controller to maintain room humidity levels above 75%.",
        image: project1,
    },
    {
        id: 2,
        year: 'Jan 2024',
        title: "Weather Monitor",
        description:
            "Designed and deployed an IoT weather station that continuously monitors room temperature and humidity using precision sensors.",
        image: project2,
    },
    {
        id: 3,
        year: 'Feb 2024',
        title: "Automatic Plant Irrigation System",
        description:
            "Developed an automated irrigation system that uses an Arduino-based control board to continuously measure soil moisture via analog sensor.",
        image: project3,
    },
];

const COLORS_TOP = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];

export const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(projects[0]);
    const color = useMotionValue(COLORS_TOP[0]);

    useEffect(() => {
        if (typeof window !== "undefined") {
            animate(color, COLORS_TOP, {
                ease: "easeInOut",
                duration: 10,
                repeat: Infinity,
                repeatType: "mirror",
            });
        }
    }, [color]);

    const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #000 50%, ${color})`;

    return (
        <motion.section
            style={{
                backgroundImage,
            }}
            id="projects"
            className="py-32 text-white"
        >
            <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
                {/* Left Section: Project Details */}
                <div>
                    <h2 className="text-6xl font-bold mb-10">
                        Selected <span className="text-gray-400">Projects</span>
                    </h2>
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            onClick={() => setSelectedProject(project)}
                            className={`cursor-pointer mb-8 group transition-all duration-300 ${
                                selectedProject.id === project.id
                                    ? "border-l-4 border-gray-200 pl-4"
                                    : "pl-0"
                            }`}
                        >
                            <p className="text-gray-400 text-lg mb-2">{project.year}</p>
                            <h3
                                className={`text-3xl font-semibold transition-colors duration-300 ${
                                    selectedProject.id === project.id
                                        ? "text-gray-200"
                                        : "group-hover:text-gray-400"
                                }`}
                            >
                                {project.title}
                            </h3>
                            {selectedProject.id === project.id && (
                                <>
                                    <div className="border-b-2 border-gray-200 my-4"></div>
                                    <p className="text-gray-400 transition-all duration-500 ease-in-out">
                                        {project.description}
                                    </p>
                                </>
                            )}
                        </div>
                    ))}
                </div>

                {/* Right Section: Project Image */}
                <div className="flex justify-center items-center">
                    <Image
                        src={selectedProject.image}
                        alt={selectedProject.title}
                        className="rounded-xl shadow-lg transition-transform duration-500 ease-in-out hover:scale-105"
                        width={800}
                        height={450}
                    />
                </div>
            </div>
        </motion.section>
    );
};
