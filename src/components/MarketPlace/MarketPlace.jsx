import React from "react";
import ProductSlider from "./ProductSlider";
import "./MarketPlace.css";
import { ReviewsClient } from "./clientSlider/ReviewsClient";

const MarketPlace = () => {
  return (
    <div>
      <div className="mt-[20px] ">
        <div className="py-10">
          <div className="maxWidth mx-auto">
            <div className="title-line mb-10"></div>
            <div className="text-center mb-10 flex justify-center items-center">
              <h1 className="text-4xl md:text-[84px] mt-8 font-bold uppercase">
                Market place
              </h1>
            </div>
            <div className="title-line mt-4"></div>
          </div>
        </div>
        <div className="pt-20 maxWidth my-12">
          <ProductSlider />
        </div>
      </div>

      <div className="mt-[30px] ">
        <div className="py-10">
          <div className="maxWidth mx-auto">
            <div className="title-line mb-10"></div>
            <div className="text-center mb-10 flex justify-center items-center">
              <h1 className="text-4xl md:text-[84px] mt-8 font-bold uppercase">
                Testimonial
              </h1>
            </div>
            <div className="title-line mt-4"></div>
          </div>
        </div>

        <div className="">
          <ReviewsClient />
        </div>
      </div>
    </div>
  );
};

export default MarketPlace;
