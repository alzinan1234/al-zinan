import React from "react";
import logoMaker from "../../app/assets/reviews/logo.png";
import remote from "../../app/assets/reviews/remote.png";
import vpn from "../../app/assets/reviews/Screenshot_5.png";
import photoGenerate from "../../app/assets/reviews/image.png";
import Image from "next/image";

const Projects = () => {
  const projects = [
    {
      id: 1,
      name: "Logo Maker",
      description:
        "Create stunning logos with ease using our powerful design tools.",
      image: logoMaker,
      link: "https://apps.apple.com/us/app/logo-maker-design-creator/id1463935485",
    },
    {
      id: 2,
      name: "Universal TV Remote and Cast",
      description: "Control your TV and cast media directly from your device.",
      image: remote,
      link: "https://apps.apple.com/ca/app/tv-remote-universal-control/id6443671916",
    },
    {
      id: 3,
      name: "Nolog VPN",
      description:
        "Secure your online privacy with fast, stable, and reliable VPN service.",
      image: vpn,
      link: "https://apps.apple.com/gb/app/nolog-vpn-fast-stable-proxy/id1516805757",
    },
    {
      id: 4,
      name: "AI GIF Art",
      description: "Generate creative and artistic GIFs using AI technology.",
      image: photoGenerate,
      link: "https://apps.apple.com/us/app/ai-gif-maker-photo-generator/id6502057569",
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
              <p className="">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-indigo-800 font-medium bg-orange-600 p-2 px-5 rounded"
                >
                  Learn More
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
