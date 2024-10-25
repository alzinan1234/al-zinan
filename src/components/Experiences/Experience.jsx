import React from "react";
import "./Experiences.css";

const Experience = () => {
  const experiences = [
    {
      title: "Completed Junior Web Development Course",
      provider: "Programming Hero",
      duration: "Aug 2022 - march 2023",
      description: `Completed an intensive, project-based web development course offered by Programming Hero, covering essential front-end and JavaScript frameworks. This hands-on course emphasized real-world applications, guiding students from foundational concepts to advanced web development techniques.`,
      accomplishments: [
        "Gained proficiency in HTML, CSS, and JavaScript, learning best practices for building responsive, user-friendly web interfaces.",
        "Built and deployed multiple front-end projects using frameworks such as Bootstrap and Tailwind CSS for responsive design.",
        "Developed skills in React.js and Next.js, understanding component-based architecture and creating dynamic, interactive web applications.",
        "Created and presented capstone projects that incorporated complex features like API integration, state management, and routing.",
        "Applied key web development principles, including Test-Driven Development (TDD) and best practices for debugging and code optimization.",
        "Participated in collaborative coding sessions and hands-on coding challenges, gaining real-time feedback from instructors and peers.",
        "Utilized Git and GitHub for version control, contributing to team projects and maintaining organized code repositories.",
        "Enhanced problem-solving abilities by debugging and refining code, following industry standards for quality and readability.",
        "Completed assessments and received constructive feedback, enabling continuous improvement throughout the course.",
      ],
    },

    {
      title: "Web Development Intern",
      company: "Creative IT Institute",
      duration: "Jun 2024 - Aug 2024",
      description: `Creative IT Institute is a leading training center offering hands-on courses in web development and other IT fields. As a Web Development Intern, I contributed to projects and supported the instructional team in developing effective teaching materials.`,
      accomplishments: [
        "Assisted in creating and refining curriculum content for HTML, CSS, and JavaScript, focusing on beginner-friendly projects.",
        "Supported instructors during live sessions, helping students troubleshoot code and understand key concepts.",
        "Developed small web projects using HTML, CSS, and JavaScript, practicing responsive design and modern web practices.",
        "Created example projects and exercises to reinforce learning objectives and engage students in practical coding.",
        "Collaborated with team members on updating course materials to align with current web development standards.",
        "Helped manage student progress tracking and answered student questions on course forums and messaging channels.",
        "Gained hands-on experience with industry tools and frameworks, including Bootstrap and Tailwind CSS.",
        "Learned foundational skills in React.js and Next.js, helping instructors prepare introductory materials for future sessions.",
      ],
    },
  ];
  return (
    <>
      <div id="experience" className="py-10">
        <div className="maxWidth mx-auto ">
          <div className="title-line mb-10"></div>
          <div className="text-center mb-10 flex justify-center items-center">
            <h1 className="text-4xl md:text-[84px] mt-8 font-bold uppercase ">
              Work Experience
            </h1>
          </div>
          <div className="title-line mt-4"></div>
        </div>
      </div>

      <div>
        <div className="maxWidth mx-auto py-10 px-5">
          <div className="md:flex md:gap-10">
            {experiences.map((experience, index) => (
              <div
                key={index}
                className="bg-white shadow-2xl shadow-green-500 rounded-lg mb-8 p-6 border border-gray-200 "
              >
                <h2 className="text-3xl font-bold text-black-600 mb-4">
                  {experience.title}
                </h2>
                <p className="text-lg text-green-500">
                  {experience.company} - {experience.duration}
                </p>
                <p className="text-gray-700 mt-4">{experience.description}</p>
                <ul className="list-disc list-inside mt-4 space-y-2">
                  {experience.accomplishments.map((item, idx) => (
                    <li key={idx} className="text-gray-800">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Experience;
