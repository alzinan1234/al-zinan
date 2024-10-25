"use client";

import React from "react";
import {
  FaJsSquare,
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaNodeJs,
} from "react-icons/fa";
import {
  SiPostman,
  SiAdobe,
  SiFigma,
  SiFirebase,
  SiExpress,
  SiMongodb,
  SiMongoose,
  SiTypescript,
  SiCanva,
} from "react-icons/si";
import "./Expertise.css";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri"; // Use CSS module for scoped styles
import { FaReact } from "react-icons/fa6";

const Expertise = () => {
  const skills = [
    { name: "HTML", icon: <FaHtml5 />, color: "#ff5733" },
    {
      name: "CSS",
      icon: <FaCss3Alt />,
      color: "#2563ED",
    },
    {
      name: "Bootstrap",
      icon: <FaBootstrap />,
      color: "#7A10F1",
    },
    {
      name: "Tailwind CSS",
      icon: <RiTailwindCssFill />,
      color: "#36B7F2",
    },
    { name: "JavaScript", icon: <FaJsSquare />, color: "#E9D44D" },
    {
      name: "React.Js",
      icon: <FaReact />,
      color: "#05D3F6",
    },
    {
      name: "Next JS",
      icon: <RiNextjsFill />,
      color: "#000000",
    },
    {
      name: "Node JS",
      icon: <FaNodeJs />,
      color: "#509942", // Double-check if you need a custom icon for Angular
    },
    {
      name: "Express Js",
      icon: <SiExpress />,
      color: "#000000", // Double-check if you need a custom icon for Angular
    },
    {
      name: "MongoDb",
      icon: <SiMongodb />,
      color: "#51A543", // Double-check if you need a custom icon for Angular
    },
    {
      name: "Mongoose",
      icon: <SiMongoose />,
      color: "#A03538",
    },
    {
      name: "TypeScript",
      icon: <SiTypescript />,
      color: "#2563ED",
    },

    { name: "Postman", icon: <SiPostman />, color: "#F66836" },

    { name: "Adobe XD", icon: <SiAdobe />, color: "#F30F01" },
    {
      name: "Canva",
      icon: <SiCanva />,
      color: "#6E33EB",
    },
    { name: "Figma", icon: <SiFigma />, color: "#D0527E" },
    { name: "Firebase Analytics", icon: <SiFirebase />, color: "#F6C62F" },
  ];

  return (
    <>
      <div id="expertise" className="py-10">
        <div className="maxWidth mx-auto">
          <div className="title-line mb-10"></div>
          <div className="text-center mb-10 flex justify-center items-center">
            <h1 className="text-4xl md:text-[84px] mt-8 font-bold uppercase">
              Expertise
            </h1>
          </div>
          <div className="title-line mt-4"></div>
        </div>
      </div>

      <div className="py-12 bg-gray-100">
        <div className="maxWidth mx-auto text-center">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="flex flex-col items-center p-4 bg-white shadow-2xl rounded-lg hover:bg-indigo-100 transition-all shadow-[#3fff5c]"
              >
                <div
                  style={{ color: skill.color }}
                  className={`text-5xl  mb-4 transition-transform transform hover:-scale-y-100 duration-500`}
                >
                  {skill.icon}
                </div>
                <p className="text-lg font-semibold">{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Expertise;
