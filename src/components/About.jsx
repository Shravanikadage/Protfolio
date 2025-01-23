// eslint-disable-next-line no-unused-vars
import React from "react";
import AboutImage from "../assets/my-image.jpg";

const About = () => {
  return (
    <div className="bg-black text-white py-20" id="about">
    <div className="container mx-auto px-8 md:px-16 lg:px-24">
      {/* Title */}
      <h2
        className="text-4xl font-bold text-center mb-4"
      >
        About Me
      </h2>
      {/* Horizontal line */}
      <hr className="border-t-2 border-gray-500 mb-12" />

      {/* Content */}
      <div className="flex flex-col md:flex-row items-center md:space-x-12">

          {/* Image with styles */}
        <div className="relative group mb-8 md:mb-0">
          <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 rounded-lg blur-sm group-hover:blur-lg transition duration-300"></div>
          <img
            src={AboutImage}
            alt="Profile"
            className="relative z-10 w-72 h-80 rounded-lg object-cover shadow-lg transition-transform duration-300 transform group-hover:scale-105 group-hover:rotate-2"
          />
        </div>
        
         {/* Text Content inside Box Style */}
<div className="flex-1 bg-gray-800 p-6 transition-transform duration-300 hover:scale-105 rounded-lg shadow-lg">
  <p className="text-lg mb-8">
    I'm a software developer with experience in creating beautiful and
    user-friendly websites and applications. I enjoy solving problems
    and turning ideas into reality using code. With a strong
    foundation in both front-end and back-end technologies, I focus on
    delivering intuitive, responsive, and high-performance solutions.
    Passionate about staying up-to-date with the latest industry
    trends, I continuously strive to improve my skills and contribute
    to innovative projects that make a meaningful impact.
  </p>
  <p className="text-lg mb-8">
    Apart from coding, I find joy in painting, traveling, gardening,
    and cooking. These activities allow me to explore my creativity,
    recharge, and draw inspiration from the world around me. Whether
    it’s through art, exploring new cultures, cultivating a garden, or
    experimenting with new recipes, these passions enhance my
    problem-solving skills and fuel my innovative mindset.
  </p>
  <div className="mt-8 flex justify-around text-center">
    {/* Years Experience */}
    <div className="flex flex-col items-center">
      <h3
        className="text-2xl font-bold text-transparent bg-clip-text 
          bg-gradient-to-r from-pink-500 to-red-400"
      >
        2+
      </h3>
      <p>Intern Experience</p>
    </div>
    {/* Projects Completed */}
    <div className="flex flex-col items-center">
      <h3
        className="text-2xl font-bold text-transparent bg-clip-text 
          bg-gradient-to-r from-pink-500 to-red-400"
      >
        3+
      </h3>
      <p>Projects Completed</p>
    </div>
  </div>
</div>

          


          

        </div>
      </div>
    </div>
  );
};

export default About;
