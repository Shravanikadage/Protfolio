// eslint-disable-next-line no-unused-vars
import React from "react";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaBootstrap,
  FaJava,
  FaReact,
  FaNodeJs,
  FaLaptopCode,
} from "react-icons/fa";
import { SiMysql, SiMongodb } from "react-icons/si";

const education = [
  {
    title: "Bachelor of Technology",
    duration: "2021 – 2025",
    institution:
      "Sharad Institute Of Technology College of Engineering, Ichalkaranji, Maharashtra",
  },
  {
    title: "Higher Secondary School",
    duration: "2019 – 2021",
    institution:
      "Shri Rajarshi Shahu Maharaj Junior College of Science, Sangli, Maharashtra",
  },
];

const experience = [
  {
    title: "Codsoft (Virtual)",
    duration: "2024",
    role: "Java Developer Intern",
    description:
      "Developed and implemented a variety of software applications, featuring an ATM system with a user-friendly GUI, a student grade calculator, a number guessing game, and a student course registration system with seamless database management. These projects highlight my ability to design practical, innovative solutions while ensuring a focus on functionality and user experience.",
  },
  {
    title: "Happy Visitor, Kolhapur",
    duration: "2023",
    role: "Web Development Intern",
    description:
      "Worked on developing engaging and user-friendly web pages with intuitive interfaces, ensuring a seamless user experience. Managed web hosting efficiently to guarantee reliability, while implementing innovative web solutions to meet diverse requirements and optimize overall functionality.",
  },
];

const Resume = () => {
  return (
    <div className="bg-black text-white py-20" id="resume">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        {/* Title */}
        <h2 className="text-4xl font-bold text-center mb-4">Resume</h2>
        {/* Horizontal line */}
        <hr className="border-t-2 border-gray-500 mb-12" />

        {/* My Education Section */}
        <h3 className="text-3xl font-bold text-center mb-10">My Education</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {education.map((edu) => (
            <div
              key={edu.title}
              className="p-6 bg-gray-800 hover:bg-gray-700 border-l-4 border-pink-500 transform transition-transform duration-300 hover:scale-105 rounded-lg shadow-lg"
            >
              <h3 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-red-400 mb-2">
                {edu.title}
              </h3>
              <p className="text-gray-300">{edu.duration}</p>
              <p className="text-gray-400 mt-2">{edu.institution}</p>
            </div>
          ))}
        </div>

        {/* My Skills Section */}
        <h3 className="text-3xl font-bold text-center mb-10 mt-20">
          My Skills
        </h3>
        <div className="flex flex-wrap justify-center gap-6">
          <span className="p-3 bg-gray-800 flex items-center rounded-2xl">
            <FaHtml5 color="#E34F26" size={50} />
          </span>
          <span className="p-3 bg-gray-800 flex items-center rounded-2xl">
            <FaCss3 color="#1572B6" size={50} />
          </span>
          <span className="p-3 bg-gray-800 flex items-center rounded-2xl">
            <FaJs color="#F7DF1E" size={50} />
          </span>
          <span className="p-3 bg-gray-800 flex items-center rounded-2xl">
            <FaBootstrap color="#7952B3" size={50} />
          </span>
          <span className="p-3 bg-gray-800 flex items-center rounded-2xl">
            <FaJava color="#007396" size={50} />
          </span>
          <span className="p-3 bg-gray-800 flex items-center rounded-2xl">
            <FaReact color="#61DAFB" size={50} />
          </span>
          <span className="p-3 bg-gray-800 flex items-center rounded-2xl">
            <FaNodeJs color="#68A063" size={50} />
          </span>
          <span className="p-3 bg-gray-800 flex items-center rounded-2xl">
            <SiMysql color="#4479A1" size={50} />
          </span>
          <span className="p-3 bg-gray-800 flex items-center rounded-2xl">
            <SiMongodb color="#47A248" size={50} />
          </span>
        </div>

        {/* My Experience Section */}
        <h3 className="text-3xl font-bold text-center mb-12 mt-20">
          My Experience
        </h3>
        <div className="space-y-8">
          {experience.map((exp) => (
            <div
              key={exp.title}
              className="flex items-start space-x-6 hover:scale-105 transform transition-all duration-300"
            >
              <div className="flex-shrink-0">
                <FaLaptopCode className="text-4xl text-gradient-to-r from-green-400 to-blue-500" />
              </div>
              <div className="text-left w-full bg-gray-800 p-6 rounded-lg shadow-md hover:bg-gray-700">
                <h3 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-yellow-600">
                  {exp.title}
                </h3>
                <p className="text-gray-300">{exp.duration}</p>
                <p className="text-gray-400 mt-1">{exp.role}</p>
                <p className="text-gray-300 mt-2">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Resume;
