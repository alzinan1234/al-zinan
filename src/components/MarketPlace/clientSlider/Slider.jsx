/* eslint-disable react/prop-types */
"use client";

import { useEffect, useState } from "react";
import "./reviewsClient.css";
import Image from "next/image";

const Slider = ({ datas }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % datas.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + datas.length) % datas.length
    );
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 7000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, [datas]);

  return (
    <div className="story-slider-border w-full  ">
      {datas?.map((item, index) => (
        <>
          {/* // --------- only lg size ------- */}
          <div
            key={index}
            className={`story-container  left-0 w-full mx-auto h-full transition-opacity ${
              index === currentIndex ? "flex " : "hidden"
            } md:px-[100px] `}
          >
            {/* --------------- body slider ------ */}
            <div className="story-body flex flex-col md:gap-x-[40px] justify-center items-center px-2">
              <div className="story-img  md:w-[100%] h-[350px] flex items-start justify-center  ">
                <div className=" p-5 bg-[#ffff] rounded-[10px] pb-5 lg:mt-10  ">
                  <Image
                    width={200}
                    height={120}
                    src={item?.image}
                    alt={`Slide ${index + 1}`}
                    className="slider-image object-cover rounded-full pb-5"
                  />
                  <p className="text-[25px] text-[#000]  ">{item?.name}</p>
                  <p className="text-[14px] text-[#000]  pt-1">
                    {item?.datetitle}
                  </p>
                </div>
              </div>
              <div className="flex items-start justify-center  ">
                <div className="story-contain md:w-[100%] text-black">
                  <p className=" text-justify story-title-32 ">
                    {item?.title01}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </>
      ))}

      <button
        onClick={prevSlide}
        className="btn-prev absolute top-1/2 left-2 transform -translate-y-1/2  text-white px-8 py-2 rounded"
      >
        {/* <Image onClick={prevSlide} src={prev} width={20} height={20} alt="" /> */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="16"
          viewBox="0 0 30 16"
          fill="none"
        >
          <path
            d="M0.292915 7.29289C-0.0976085 7.68341 -0.0976086 8.31658 0.292915 8.7071L6.65688 15.0711C7.0474 15.4616 7.68056 15.4616 8.07109 15.0711C8.46161 14.6805 8.46161 14.0474 8.07109 13.6569L2.41424 8L8.07109 2.34314C8.46162 1.95262 8.46162 1.31945 8.07109 0.92893C7.68057 0.538406 7.0474 0.538406 6.65688 0.92893L0.292915 7.29289ZM29.0356 7L1.00002 7L1.00002 9L29.0356 9L29.0356 7Z"
            fill="#FAFAFA"
          />
        </svg>
      </button>

      <button
        className="btn-next absolute top-1/2 right-2 transform -translate-y-1/2 text-white px-8 py-2 rounded"
        onClick={nextSlide}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="16"
          viewBox="0 0 30 16"
          fill="none"
        >
          <path
            d="M28.7428 8.70711C29.1333 8.31658 29.1333 7.68342 28.7428 7.29289L22.3788 0.928932C21.9883 0.538407 21.3551 0.538407 20.9646 0.928932C20.5741 1.31946 20.5741 1.95262 20.9646 2.34315L26.6214 8L20.9646 13.6569C20.5741 14.0474 20.5741 14.6805 20.9646 15.0711C21.3551 15.4616 21.9883 15.4616 22.3788 15.0711L28.7428 8.70711ZM28.0356 7L1.91528e-05 7L1.89942e-05 9L28.0356 9L28.0356 7Z"
            fill="white"
          />
        </svg>
      </button>
    </div>
  );
};

export default Slider;
