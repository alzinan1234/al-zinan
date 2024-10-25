"use client";

import React from "react";
import {
  FaJava,
  FaJsSquare,
  FaGitAlt,
  FaJenkins,
  FaDatabase,
  FaBug,
} from "react-icons/fa";
import {
  SiSelenium,
  SiPlaywright,
  SiPostman,
  SiJunit,
  SiTestng,
  SiJira,
  SiBugzilla,
  SiTestrail,
  SiAdobe,
  SiFigma,
  SiFirebase,
  SiJunit5,
  SiTestin,
  SiTestinglibrary,
  SiApachejmeter,
} from "react-icons/si";
import "./Expertise.css"; // Use CSS module for scoped styles

const Expertise = () => {
  const skills = [
    { name: "Java", icon: <FaJava /> },
    { name: "JavaScript", icon: <FaJsSquare /> },
    { name: "Playwright", icon: <SiPlaywright /> },
    { name: "Selenium Webdriver", icon: <SiSelenium /> },
    { name: "JUnit", icon: <SiJunit5 /> },

    { name: "TestNG", icon: <SiTestinglibrary /> },
    { name: "Jenkins", icon: <FaJenkins /> },
    { name: "MySQL", icon: <FaDatabase /> },
    { name: "Git", icon: <FaGitAlt /> },
    { name: "JMeter", icon: <SiApachejmeter /> }, // Double-check if you need a custom icon for JMeter
    { name: "Postman", icon: <SiPostman /> },
    { name: "JIRA", icon: <SiJira /> },
    { name: "Bugzilla", icon: <FaBug /> },
    { name: "TestRail", icon: <SiTestrail /> },
    { name: "Adobe XD", icon: <SiAdobe /> },
    { name: "Figma", icon: <SiFigma /> },
    { name: "Firebase Analytics", icon: <SiFirebase /> },
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
                className="flex flex-col items-center p-4 bg-white shadow-2xl rounded-lg hover:bg-indigo-100 transition-all shadow-red-600"
              >
                <div className="text-5xl text-indigo-600 mb-4 transition-transform transform hover:-scale-y-100 duration-500">
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
