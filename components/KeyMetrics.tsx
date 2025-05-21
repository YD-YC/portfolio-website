"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const metrics = [
    {
        id: 1,
        value: "5+",
        label: "Projects Delivered",
        description: "Successfully implemented diverse IoT solutions ",
    },
    {
        id: 2,
        value: "10+",
        label: "Devices Integrated",
        description: "Connected multiple sensors and actuators into cohesive, smart systems.",
    },
    {
        id: 3,
        value: "5+",
        label: "Protocols Mastered",
        description: "Expert in I2C, SPI, I2S, MQTT, BLE, and more for seamless connectivity.",
    },
    {
        id: 4,
        value: "6+",
        label: "Tools Mastered",
        description: "Skilled with Arduino IDE, BLYNK IOT, Firebase, MATLAB, Proteus, and LT Spice.",
    },
    {
        id: 5,
        value: "4",
        label: "Internship Experience",
        description: "Currently on my 4th internship, gaining hands-on insights in embedded systems.",
    },
    {
        id: 6,
        value: "1+",
        label: "Years in Embedded Systems",
        description: "Specializing in firmware development and hardware integration.",
    },
];


export const KeyMetrics = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false });

    return (
        <motion.section
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8 }}
            className="container mx-auto px-4 py-32 text-white"
        >
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-6xl font-bold mb-12"
            >
                Key Metrics
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {metrics.map((metric, index) => (
                    <motion.div
                        key={metric.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ delay: 0.6 + index *0.1, duration: 0.4, type:"spring" }}
                        className="flex flex-col"
                    >
                        <motion.h3 className="text-5xl font-bold text-purple-300">{metric.value}</motion.h3>
                        <motion.p className="text-xl font-semibold text-gray-400">{metric.label}</motion.p>
                        <p className="text-gray-400 mt-2">{metric.description}</p>
                    </motion.div>
                ))}
            </div>
        </motion.section>
    );
};
