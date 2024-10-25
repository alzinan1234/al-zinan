import React from "react";
import logoMaker from "../../app/assets/projects/Screenshot_9.png";
import remote from "../../app/assets/projects/resturent.png";
import vpn from "../../app/assets/reviews/Screenshot_5.png";
import photoGenerate from "../../app/assets/reviews/image.png";
import Image from "next/image";

const Projects = () => {
  const projects = [
    {
      id: 1,
      name: "Education Website",
      description:
        "An interactive education website designed to provide engaging learning resources, courses, and tools for students of all ages and subjects.",
      image: logoMaker,
      link: "https://education-02.vercel.app/",
      GithubLink: "https://github.com/alzinan1234/educal-02",
    },
    {
      id: 2,
      name: "Restaurant Boos",
      description:
        "A vibrant restaurant website showcasing delicious menus, reservation options, and a seamless user experience for food enthusiasts.",
      image: remote,
      link: "https://restaurant-boos.netlify.app/",
      GithubLink: "https://education-02.vercel.app/",
    },
    {
      id: 3,
      name: "Nolog VPN",
      description:
        "Secure your online privacy with fast, stable, and reliable VPN service.",
      image: vpn,
      link: "https://apps.apple.com/gb/app/nolog-vpn-fast-stable-proxy/id1516805757",
      GithubLink: "https://education-02.vercel.app/",
    },
    {
      id: 4,
      name: "AI GIF Art",
      description: "Generate creative and artistic GIFs using AI technology.",
      image: photoGenerate,
      link: "https://apps.apple.com/us/app/ai-gif-maker-photo-generator/id6502057569",
      GithubLink: "https://education-02.vercel.app/",
    },
  ];

  return (
    <>
      <div id="project" className="py-10">
        <div className="maxWidth mx-auto">
          <div className="title-line mb-10"></div>
          <div className="text-center mb-10 flex justify-center items-center">
            <h1 className="text-4xl md:text-[84px] mt-8 font-bold uppercase">
              Projects
            </h1>
          </div>
          <div className="title-line mt-4"></div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-20 max-w-6xl mx-auto px-4 py-10">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-white  rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300  shadow-lg md:w-[500px]"
          >
            <Image
              src={project.image}
              alt={project.name}
              className="w-full md:h-56 object-cover transition-transform transform hover:-scale-y-100 duration-500"
            />
            <div className="p-6">
              <h2 className="text-3xl text-black font-semibold mb-4 hover:text-green-600 transition-all duration-500">
                {project.name}
              </h2>
              <p className="text-gray-600 font-semibold mb-4">
                {project.description}
              </p>
              <p className="flex justify-between">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-indigo-800 font-medium bg-orange-600 p-2 px-5 rounded"
                >
                  Live Link
                </a>
                <a
                  href={project.GithubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-indigo-800 font-medium bg-orange-600 p-2 px-5 rounded"
                >
                  Github Link
                </a>
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Projects;
