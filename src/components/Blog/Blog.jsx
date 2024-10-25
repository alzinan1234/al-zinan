import Image from "next/image";
import image1 from "../../app/assets/reviews/ccddb3583f1.avif";
import images2 from "../../app/assets/reviews/image2.avif";
import images3 from "../../app/assets/reviews/image3.avif";
import React from "react";
import { FaArrowRight } from "react-icons/fa";
import "./Blog.css";

const Blog = () => {
  const blogData = [
    {
      title: "Exploring Next.js for Web Development",
      description:
        "Next.js is a powerful framework built on top of React. It simplifies the process of building optimized web applications...",
      imageUrl: image1,
      link: "https://x.com/elayadesigns/status/1838932477022216216/photo/1",
    },
    {
      title: "Tailwind CSS for Rapid UI Development",
      description:
        "Tailwind CSS is a utility-first CSS framework that allows developers to quickly build modern and responsive designs...",
      imageUrl: images2,
      link: "https://x.com/elayadesigns/status/1838932477022216216/photo/1",
    },
    {
      title: "React Hooks: The Essentials",
      description:
        "Learn the essentials of React Hooks, a powerful feature that allows you to manage state and side effects in function components...",
      imageUrl: images3,
      link: "https://x.com/elayadesigns/status/1838932477022216216/photo/1",
    },
  ];

  return (
    <>
      <div>
        <div id="blog" className="py-16">
          <div className="maxWidth mx-auto ">
            <div className="title-line mb-10"></div>
            <div className="text-center mb-10 flex justify-center items-center">
              <h1 className="text-4xl md:text-[84px] mt-8 font-bold uppercase ">
                blog
              </h1>
            </div>
            <div className="title-line mt-4"></div>
          </div>
        </div>
      </div>

      {/* Blog content */}

      <div className="">
        <div className="blog-Bg maxWidth mx-auto px-4 sm:px-6 lg:px-8 ">
          <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-10">
            {blogData.map((blog, index) => (
              <div
                key={index}
                className="bg-white shadow-2xl rounded-lg overflow-hidden shadow-[#3fff5c] "
              >
                <a href={blog.link}>
                  <Image
                    src={blog.imageUrl}
                    alt={blog.title}
                    className="w-full h-56 object-cover transition-transform transform hover:-scale-x-100 duration-500"
                    width={500}
                    height={300}
                  />
                  <div className="p-6">
                    <h2 className="text-2xl font-semibold mb-2 hover:text-blue-500 duration-500">
                      {blog.title}
                    </h2>
                    <p className="text-gray-600 mb-4">{blog.description}</p>
                    <div className=" flex items-center gap-4 group">
                      <p
                        href={blog.link}
                        className="text-red-500 flex items-center gap-2 borders hover:bg-indigo-500 hover:group-hover:text-white   transition-all duration-700 "
                      >
                        {" "}
                        Read more{" "}
                        <FaArrowRight className="w-4 h-4 text-red-500  hover:group-hover:text-white" />
                      </p>
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
