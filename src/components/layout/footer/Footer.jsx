import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";
import { MdPhone, MdEmail } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";

const Footer = () => {
  return (
    <footer className="bg-green-700 text-white  px-5  ">
      <div className="max-w-7xl py-24 mx-auto flex flex-col lg:flex-row justify-between items-center space-y-5 lg:space-y-0">
        {/* Left Section: Get in Touch */}
        <div className="text-center lg:text-left">
          <h2 className="text-6xl text-black font-bold mb-2">Get in Touch</h2>
          <p className="text-2xl text-black mt-3">
            Interested to work together? Lets talk.
          </p>
          <p className="text-2xl text-black flex items-center gap-2 mt-3">
            <span>
              <IoLocationSharp className="w-5 h-6" />
            </span>
            40, Mohakhli, Dhaka-1212
          </p>
        </div>

        {/* Middle Section: Contact Info */}
        <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-8">
          <div className="flex items-center border-2 border-white p-8 rounded-md space-x-2">
            <MdPhone className="text-3xl font-bold  bg-[#2CBB02] rounded p-1" />
            <span className="text-black font-bold text-sm">
              +880 1788499970
            </span>
          </div>
          <div className="flex items-center border-2 border-white p-8 rounded-md space-x-2 ">
            <MdEmail className="text-3xl font-bold bg-blue-500 rounded-full p-1" />
            <span className="text-black font-bold text-sm">
              {" "}
              alzinan314@gmail.com
            </span>
          </div>
        </div>

        {/* Right Section: Social Icons */}
        <div className="flex space-x-6">
          <a
            href="https://www.facebook.com/alzinan.73"
            className="text-white text-2xl bg-blue-500 rounded p-2 hover:text-gray-300"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://www.instagram.com/alzinan4/"
            className="text-white bg-[#F24D56] p-2 rounded text-2xl hover:text-gray-300"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.linkedin.com/in/al-zinan-bb7464248/"
            className="text-white text-2xl bg-[#0270AD] p-2 rounded hover:text-gray-300"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="https://github.com/alzinan1234"
            className="text-white bg-[black] p-2 rounded text-2xl hover:text-gray-300"
          >
            <FaGithub />
          </a>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="mt-10 text-center text-sm text-white p-2">
        © Copyright 2024 | Al-Zinan | All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
