"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay"; // Import autoplay module CSS

import Image from "next/image";
import place1 from "../../app/assets/reviews/upwork.webp";
import "./MarketPlace.css";

const ProductSlider = () => {
  const products = [
    {
      image: place1,
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH-fVj3UuCUFAjclmOpoRRI5JhQx4Gxy33AA&usqp=CAU",
    },
    {
      image: "https://i.ytimg.com/vi/wTBJF-UTIrY/maxresdefault.jpg",
    },
    {
      image: "https://i.ytimg.com/vi/wTBJF-UTIrY/maxresdefault.jpg",
    },
    {
      image: "https://www.toptal.com/toptal-logo.png",
    },
    {
      image: "https://i.ytimg.com/vi/wTBJF-UTIrY/maxresdefault.jpg",
    },
  ];

  return (
    <div className="py-12">
      <div className="maxWidth mx-auto ">
        <Swiper
          spaceBetween={30}
          loop={true}
          autoplay={{
            delay: 0, // No delay between slides
            disableOnInteraction: false, // Keep autoplay running even when interacted with
            pauseOnMouseEnter: false, // Keep it moving even on mouse hover
          }}
          speed={2000} // Faster sliding speed for marquee-like effect
          modules={[Autoplay]}
          breakpoints={{
            // Adjust the number of slides based on screen size
            320: {
              slidesPerView: 1, // 1 slide on small screens (phones)
            },
            640: {
              slidesPerView: 2, // 2 slides on tablets
            },
            1024: {
              slidesPerView: 3, // 3 slides on small desktops
            },
            1280: {
              slidesPerView: 4, // 4 slides on large desktops
            },
            1536: {
              slidesPerView: 5, // 5 slides on extra large screens
            },
          }}
          className="product-slider"
        >
          {products.map((product, index) => (
            <SwiperSlide key={index}>
              <div className="xl:w-[280px] 2xl:w-[320px] sm:h-[125px] h-[90px] rounded-[10px] flex gap-5 p-10 items-center justify-center">
                <Image
                  src={product.image}
                  alt={`Product ${index + 1}`}
                  width={300}
                  height={200}
                  className="object-contain md:p-2 product_image"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ProductSlider;
