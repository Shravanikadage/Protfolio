// eslint-disable-next-line no-unused-vars
import React from "react";
import image1 from "../assets/img1.png";
import image2 from "../assets/img2.png";
import image3 from "../assets/img3.png";

const projects = [
  {
    id: 1,
    name: "Online Organic Food Store",
    image: image1,
    description:
      "An immersive e-commerce platform dedicated to the sale of organic fruits and vegetables, blending convenience with sustainability. With an elegant interface, user-friendly navigation, and secure checkout options, it ensures a hassle-free shopping journey. From a rich product catalog to effortless transactions.",
  },
  {
    id: 2,
    name: "Hall Ticket Generator with QR Code",
    image: image2,
    description:
      "A state-of-the-art system crafted to transform hall ticket distribution by incorporating QR code technology for secure and hassle-free access. Featuring a modern, user-friendly interface and a powerful backend for efficient data management and ticket generation, this solution is ideal for events and examinations. It enhances operational efficiency and delivers an exceptional user experience.",
  },
  {
    id: 3,
    name: "Online Monitoring and Evaluation Platform",
    image: image3,
    description:
      "An advanced platform built for real-time tracking and assessment of project milestones and internship tasks. It fosters collaboration with live updates and transparent reporting, simplifying the evaluation process to boost efficiency and communication. The system leverages a scalable and reliable database for effective data management.",
  },
];

const Projects = () => {
  return (
    <div className="bg-black text-white py-20" id="project">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        {/* Title */}
        <h2 className="text-4xl font-bold text-center mb-4">My Projects</h2>
        
        {/* Horizontal Line */}
        <hr className="border-t-2 border-gray-500 mb-12" />

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-800 p-6 rounded-lg hover:shadow-lg 
            transform transition-transform duration-300 hover:scale-105"
            >
              <img
                src={project.image}
                alt={project.name}
                className="rounded-lg mb-4 
              w-full h-48 object-cover"
              />
              <h3 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-red-400 mb-2">{project.name}</h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};


export default Projects;
