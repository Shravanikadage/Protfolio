// eslint-disable-next-line no-unused-vars
import React from "react";
import {
  FaEnvelope,
  FaMobileAlt,  // Changed phone icon
  FaMapMarkerAlt,  // Changed location icon
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import Swal from 'sweetalert2'

const Contact = () => {

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "ea0f2eb3-ab65-4a61-98cc-101198b49c9f");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      
      Swal.fire({
        title: "Success!",
        text: "Message sent successfully!",
        icon: "success", // This keeps the tick mark icon in its default centered position
        customClass: {
          popup: "bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg shadow-lg",
          title: "text-white text-2xl font-bold",
          confirmButton: "bg-white text-purple-500 font-semibold px-6 py-2 rounded-full hover:bg-purple-200",
        },
      });      
      
    }
  };


  return (
    <div className="bg-black text-white py-20" id="contact">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-6">Contact Me</h2>{" "}
        {/* Reduced margin-bottom */}
        {/* Horizontal Line */}
        <hr className="border-t-2 border-gray-500 mb-12" />{" "}
        {/* Increased margin-bottom */}
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          {/* Contact Info */}
          <div className="flex-1">
            <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-red-400 mb-4">
              Let's Talk
            </h3>
            <div className="mb-4 mt-8">
              <FaEnvelope
                className="inline-block text-pink-400 mr-2"
                size={20}
              />
              <a href="mailto:shravanikadage@gmail.com" className="hover:underline">
                shravanikadage@email.com
              </a>
            </div>
            <div className="mb-4">
              <FaMobileAlt className="inline-block text-pink-400 mr-2" size={20} /> {/* Updated phone icon */}
              <span>+91 8928754644</span>
            </div>
            <div className="mb-4">
              <FaMapMarkerAlt
                className="inline-block text-pink-400 mr-2"
                size={20} /> {/* Updated location icon */}
              <span>Jaysingpur, Maharastra, India</span>
            </div>
            <div className="mb-4">
              <FaGithub className="inline-block text-pink-400 mr-2" size={20} />
              <a href="http://github.com/Shravanikadage" className="hover:underline">
                GitHub
              </a>
            </div>
            <div className="mb-4">
              <FaLinkedin
                className="inline-block text-pink-400 mr-2"
                size={20}
              />
              <a href="https://www.linkedin.com/in/shravani-kadage-19148a271" className="hover:underline">
                LinkedIn
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="flex-1 w-full mt-8 md:mt-0">
            <form className="space-y-4" onSubmit={onSubmit}>
              <div>
                <label htmlFor="name" className="block mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  className="w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-pink-400"
                  placeholder="Enter Your Name" name="name" required
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2">
                  Email
                </label>
                <input
                  type="text"
                  className="w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-pink-400"
                  placeholder="Enter Your Email" name="email" required
                />
              </div>
              <div>
                <label htmlFor="message" className="block mb-2">
                  Message
                </label>
                <textarea
                  type="text"
                  className="w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-pink-400"
                  rows="5"
                  placeholder="Enter Your Message" name="message" required
                />
              </div>
              <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white transform transition-transform duration-300 hover:scale-105 px-8 py-2 rounded-full">
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
