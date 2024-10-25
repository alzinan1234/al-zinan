import React from "react";
import "./About.css";
import image from "../../app/assets/home/1.png";
import Image from "next/image";
import {
  FaEnvelope,
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiGmail, SiLeetcode } from "react-icons/si";

const About = () => {
  return (
    <div id="about" className="py-20 px-4">
      <div className="maxWidth mx-auto">
        <div className="title-line mb-10"></div>
        <div className="text-center mb-10 flex justify-center items-center">
          <h1 className="text-4xl md:text-[84px] mt-8 font-bold uppercase ">
            About me
          </h1>
        </div>
        <div className="title-line mt-4"></div>

        <div className=" blog-Bg flex flex-col lg:flex-row items-center gap-10 lg:gap-20">
          {/* Text Section */}

          <div className="lg:w-1/2 text-center lg:text-left mb-10">
            <div>
              <h1 className="text-black font-extrabold text-3xl  md:mb-5">
                Experience & Education
              </h1>
            </div>
            <p className="text-lg md:text-2xl">
              Hello,{" "}
              <span className="text-green-600 font-semibold">
                I am Al-Zinan
              </span>
              , With 2 years of hands-on experience as a React.js developer, I
              specialize in building dynamic and responsive web applications. I
              have been dedicated to learning various programming languages and
              modern technologies. complemented by a 3-month internship at
              Creative IT Institute, where I honed my skills in front-end
              development and modern technologies.
            </p>
            <p className="mt-4 text-lg">
              Im a CSE student with a 4-year Diploma in Computer Science and
              Technology. As class CR, I lead with creativity and innovation,
              focusing on pursuing a BSC in Software Engineering and modern
              technologies.
            </p>
          </div>

          {/* Image & Social Section */}
          <div className="flex flex-col items-center">
            <div className="relative w-60 h-60 sm:w-80 sm:h-80 md:w-[500px] md:h-[500px] mb-7 mt-10 rounded-full overflow-hidden">
              <div className="absolute inset-0 bg-cover bg-center "></div>
              <Image
                className="rounded-full border-radius"
                src={image}
                alt="Profile Pic"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/alzinan.73"
                className="text-[40px] text-[#fff] bg-[#0867FF] p-1 rounded hover:text-green-500 transition-all duration-500"
              >
                <FaFacebook />
              </a>
              <a
                href="https://www.linkedin.com/in/al-zinan-bb7464248/"
                className="text-[40px] text-[#fff] bg-[#0B66C2] p-1 rounded hover:text-green-500 transition-all duration-500"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://x.com/Alzinan02"
                className="text-[40px] text-[#fff] bg-[#000]  p-1 rounded hover:text-green-500 transition-all duration-500"
              >
                <FaXTwitter />
              </a>
              <a
                href="https://github.com/alzinan1234"
                className="text-[40px] text-[#fff] bg-[#000]  p-1 rounded hover:text-green-500 transition-all duration-500"
              >
                <FaGithub />
              </a>
              <a
                href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox"
                className="text-[40px] text-[#ff1717] bg-blue-500 p-1 rounded hover:text-green-500 transition-all duration-500"
              >
                <SiGmail />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
