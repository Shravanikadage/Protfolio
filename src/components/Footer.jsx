// eslint-disable-next-line no-unused-vars 
import React from "react"; 
import { FaGithub, FaInstagram, FaLinkedin, FaEnvelope } from "react-icons/fa";
import Swal from 'sweetalert2';

const Footer = () => {
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
        title: "Thank You !",
        text: "You're now subscribed! Stay tuned for updates!",
        icon: "success",
        customClass: {
          popup: "bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg shadow-lg",
          title: "text-white text-2xl font-bold",
          confirmButton: "bg-white text-purple-500 font-semibold px-6 py-2 rounded-full hover:bg-purple-200"
        }
      });
    }
  };

  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <div className="flex flex-col md:flex-row md:space-x-12 items-center mb-4">
          <div className="flex-1 mb-4 md:mb-0">
            <h3 className="text-2xl font-bold mb-2">Shravani</h3>
            <p className="text-gray-400"> Software Developer </p>
          </div>
          <div className="flex-1 w-full">
            <form className="flex items-center justify-center" onSubmit={onSubmit}>
              <input type="email" name="email" placeholder="Your email" className="w-full p-2 rounded-l-lg bg-gray-800 border border-gray-600 focus:outline-none focus:border-pink-400" />
              <button type="submit" className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-r-lg" > Subscribe </button>
            </form>
          </div>
        </div>
        <div className="border-t border-gray-600 pt-4 flex flex-col md:flex-row justify-between items-center" >
          <p className="text-gray-400"> &copy; {new Date().getFullYear()} Shravani. All rights reserved. </p>
          <div className="flex space-x-4 my-4 md:my-0">
            <a href="#" className="text-gray-400 hover:text-white"> <FaEnvelope /> </a>
            <a href="#" className="text-gray-400 hover:text-white"> <FaInstagram /> </a>
            <a href="#" className="text-gray-400 hover:text-white"> <FaLinkedin /> </a>
            <a href="#" className="text-gray-400 hover:text-white"> <FaGithub /> </a>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white"> Privacy </a>
            <a href="#" className="text-gray-400 hover:text-white"> Terms of Service </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
