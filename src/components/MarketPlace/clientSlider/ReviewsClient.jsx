// ReviewsClient.jsx

"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";

import image01 from "../../../app/assets/reviews/01.jpg";
import image02 from "../../../app/assets/reviews/02.jpg";

export const ReviewsClient = () => {
  const datas = [
    {
      image: image01,
      name: "Lorem bc",
      datetitle: "CEO, Luck IT",
      title01:
        "An outstanding full-stack web developer with a versatile skill set. Proficient in both front-end and back-end technologies, consistently delivering robust and visually appealing web applications. Strong problem-solving abilities and a keen eye for detail. Collaborative team player, with excellent communication skills. Proven track record in meeting project goals and deadlines. A top choice for comprehensive web development projects.",
    },
    {
      image: image02,
      name: "Sheck Ali",
      datetitle: "CEO, Today Ltd",
      title01:
        "An outstanding full-stack web developer with a versatile skill set. Proficient in both front-end and back-end technologies, consistently delivering robust and visually appealing web applications. Strong problem-solving abilities and a keen eye for detail. Collaborative team player, with excellent communication skills. Proven track record in meeting project goals and deadlines.",
    },
    {
      image: image01,
      name: "Lorem bc",
      datetitle: "CEO, Bangla IT",
      title01:
        "An outstanding full-stack web developer with a versatile skill set. Proficient in both front-end and back-end technologies, consistently delivering robust and visually appealing web applications. Strong problem-solving abilities and a keen eye for detail. Collaborative team player, with excellent communication skills. Proven track record in meeting project goals and deadlines. A top choice for comprehensive web development projects.",
    },
  ];

  return (
    <div className=" mt-10 py-10">
      <div
        id="reviews"
        className=" maxWidth max-auto flex justify-center items-center py-[20px]"
      >
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          modules={[Navigation]}
          className="mySwiper"
          style={{ height: "500px" }}
        >
          {datas.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white shadow-md rounded-lg p-6 max-w-[400px] mx-auto">
                <Image
                  src={item.image}
                  alt={`Picture of ${item.name}`}
                  width={100}
                  height={100}
                  className="rounded-full mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold text-center">
                  {item.name}
                </h3>
                <p className="text-gray-600 text-center">{item.datetitle}</p>
                <p className="mt-4 text-gray-800 text-sm">{item.title01}</p>
              </div>
            </SwiperSlide>
          ))}

          {/* Custom Arrows */}
          <div className="swiper-button-prev cursor-pointer text-gray-700 hover:text-black">
            &#8592;
          </div>
          <div className="swiper-button-next cursor-pointer text-gray-700 hover:text-black">
            &#8594;
          </div>
        </Swiper>
      </div>
    </div>
  );
};
