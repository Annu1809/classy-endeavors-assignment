import React from "react";
import { FaCircleChevronLeft, FaCircleChevronRight } from "react-icons/fa6";

const CarouselNavigation = () => {
  return (
    <>
      <button className="swiper-button-prev absolute left-0 top-1/2 transform -translate-y-1/2 bg-[#244a78] text-white p-3 rounded-full shadow-md z-10">
      <FaCircleChevronLeft />
      </button>
      <button className="swiper-button-next absolute right-0 top-1/2 transform -translate-y-1/2 bg-[#244a78] text-white p-3 rounded-full shadow-md z-10">
        <FaCircleChevronRight/>
      </button>
    </>
  );
};

export default CarouselNavigation;

