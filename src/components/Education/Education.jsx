import React from "react";
import "./Education.css";

import logo2 from "../../app/assets/home/politecnic.png";
import logo3 from "../../app/assets/home/cantonment.jpeg";
import Image from "next/image";

const Education = () => {
  const educationData = [
    {
      institution: "Mymensingh Polytechnic Institute",
      degree: "Diploma in Engineering",
      major: "Computer Science & Technology (CST)",
      duration: "July 2020 - July 2025",

      certificate: "[Certificate]", // Add the actual link if available
      logo: logo2, // Replace with the actual path to the logo
    },
    {
      institution: "Cantonment Board High School",
      degree: "Secondary School Certificate (SSC)",
      major: "Science",
      duration: "January 2018 - March 2020",

      certificate: "[Certificate]", // Add the actual link if available
      logo: logo3, // Replace with the actual path to the logo
    },
  ];

  // Add more education items here

  return (
    <>
      <div>
        <div id="education" className="py-28">
          <div className="maxWidth mx-auto ">
            <div className="title-line mb-10"></div>
            <div className="text-center mb-10 flex justify-center items-center">
              <h1 className="text-4xl md:text-[84px] mt-8 font-bold uppercase ">
                Education
              </h1>
            </div>
            <div className="title-line mt-4"></div>
          </div>
        </div>
      </div>

      {/* title end */}

      <div className="max-w-7xl mx-auto py-5 mb-10 px-5">
        <div className="grid gap-8 md:grid-cols-1">
          {educationData.map((education, index) => (
            <div
              key={index}
              className="w-full max-w-full md:max-w-4xl mx-auto flex flex-col md:flex-row gap-6 bg-[#ffffffec] shadow-2xl shadow-green-400  hover:shadow-lg transition-shadow duration-300 rounded-lg   border-2 border-[#23c62eb8] p-5 md:p-10"
            >
              {/* Logo Section */}
              <div className="flex-shrink-0 flex items-center justify-center">
                <Image
                  src={education.logo}
                  alt={`${education.institution} Logo`}
                  width={120}
                  height={120}
                  className="object-contain"
                />
              </div>

              {/* Text Content */}
              <div className="ml-0 md:ml-5">
                <h2 className="text-3xl font-bold text-[#198c34] flex items-center">
                  {education.institution}
                  <a
                    href={education.certificate}
                    className="ml-2 text-green-600 hover:underline"
                  ></a>
                </h2>
                <p className="text-2xl  font-bold text-gray-700 mt-1">
                  {education.degree}
                </p>
                <p className="text-gray-600 mt-1 text-lg font-bold ">
                  {education.major}
                </p>
                <p className="text-gray-600 mt-1 text-lg font-bold">
                  {education.duration}
                </p>

                {/* CGPA / GPA Section */}
                {education.cgpa && (
                  <p className="text-gray-600 mt-1 font-bold">
                    CGPA:{" "}
                    <span className="text-green-600">{education.cgpa}</span>
                  </p>
                )}
                {education.gpa && (
                  <p className="text-gray-600 mt-1 font-bold">
                    GPA: <span className="text-green-600">{education.gpa}</span>
                  </p>
                )}

                {/* Certificate Link */}
                <a
                  href={education.certificate}
                  className="text-blue-600 underline mt-2 inline-block"
                >
                  [Certificate]
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Education;
