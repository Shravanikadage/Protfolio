// eslint-disable-next-line no-unused-vars
import React from "react";
import { useTypewriter, Cursor } from 'react-simple-typewriter';

const Home = () => {
  const [text] = useTypewriter({
    words: ["Software Engineer.", "Front-End Specialist.", "Innovative Thinker.", "Lifelong Learner."],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });

  return (
    <div className="bg-black text-white py-3" id="home">
    <div className="bg-black text-white flex items-center justify-center min-h-screen">
      <div className="text-center">
        <h4 className="text-lg font-normal text-gray-300 mb-4">WELCOME TO MY WORLD</h4>
        <h1 className="text-6xl font-bold">
          Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-red-400">Shravani Kadage</span>
        </h1>
        <h2 className="text-4xl font-bold mt-6">
          a <span>{text}</span>
          <Cursor cursorBlinking="false" cursorStyle="|" cursorColor="#ff014f" />
        </h2>
        <div className="mt-12 space-x-4">
          <a
            href="#resume"
            className="bg-gradient-to-r from-purple-500 to-pink-500 text-white transform transition-transform duration-300 hover:scale-105 px-6 py-3 text-xl rounded-full"
          >
            Resume
          </a>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Home;
