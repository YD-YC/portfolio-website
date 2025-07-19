"use client";
import { useEffect } from "react";
import Image from "next/image";
import profilepic from "@/assets/profilepic.png";
import obj from "@/assets/obj1.png";
import { animate, useMotionTemplate, useMotionValue } from "framer-motion";
import { motion } from "framer-motion";

const COLORS_TOP = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];

export const Hero = () => {
  const color = useMotionValue(COLORS_TOP[0]);

  useEffect(() => {
    animate(color, COLORS_TOP, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, [color]);

  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #000 50%, ${color})`;

  return (
    <motion.section
      style={{
        backgroundImage,
      }}
      className="relative grid min-h-screen place-content-center overflow-hidden px-4 py-24 text-gray-200 text-center"
    >
      <div className="z-10 flex flex-col items-center">
        <span className="mb-1.5 inline-block rounded-full bg-gray-600/50 px-3 py-1.5 text-sm">
          Open for work
        </span>
        <h1 className="text-white/40 text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-black">
          Hi, I am
        </h1>
        <h1 className="max-w-3xl bg-gradient-to-br from-white to-gray-400 bg-clip-text font-black leading-tight text-transparent text-3xl sm:text-5xl md:text-7xl lg:text-8xl">
          Yash Chakerverti
        </h1>
        <div className="flex flex-col items-center">
          <Image
            src={profilepic}
            alt="Profile picture of Yash Chakerverti"
            width={250}
            className="rounded-full mx-auto"
          />
          <motion.a
            href="https://drive.google.com/drive/folders/1qwzAJaEmjRQpZYxQnv3tBdvohjmHHpe6?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            className="flex justify-center items-center m-1 gap-2 px-4 py-2 bg-gray-800 mb-4 rounded-full"
          >
            <Image
              src={obj}
              alt="Download Resume icon"
              width={30}
              className="rounded-2xl mx-auto"
            />
            <p className="font-medium text-center">Download Resume</p>
          </motion.a>
          <p className="flex justify-center font-medium max-w-xl text-center">
            Software Quality Analyst @ JTG | Embedded Systems & IoT Enthusiast
          </p>
          <p className="flex justify-center font-medium max-w-xl text-center mt-2">
            GATE 2025 Qualified in Electronics & Communication
          </p>
        </div>
      </div>
      <div className="bg-circle-container">
        <div className="bg-circle-background"></div>
        <div className="bg-circle"></div>
      </div>
    </motion.section>
  );
};
