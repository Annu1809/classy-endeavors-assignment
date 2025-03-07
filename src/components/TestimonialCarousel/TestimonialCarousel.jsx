import React, { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import TestimonialCard from "./TestimonialCard";

const testimonials = [
  { id: 1, image: "https://randomuser.me/api/portraits/women/3.jpg", review: "Create contracts, agreements & forms in seconds using advanced AI technology" },
  { id: 2, image: "https://randomuser.me/api/portraits/women/3.jpg", review: "Create contracts, agreements & forms in seconds using advanced AI technology" },
  { id: 3, image: "https://randomuser.me/api/portraits/women/3.jpg", review: "Create contracts, agreements & forms in seconds using advanced AI technology" },
  { id: 4, image: "https://randomuser.me/api/portraits/women/3.jpg", review: "Create contracts, agreements & forms in seconds using advanced AI technology" },
];

const TestimonialCarousel = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef(null);

  useEffect(() => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.params.navigation.prevEl = prevRef.current;
      swiperRef.current.swiper.params.navigation.nextEl = nextRef.current;
      swiperRef.current.swiper.navigation.init();
      swiperRef.current.swiper.navigation.update();
    }
  }, []);

  return (
    <section className="py-12 px-4 text-center max-w-6xl mx-auto relative">
      <h2 className="text-2xl md:text-3xl font-bold mb-6">What our users say</h2>

      {/* Swiper Container */}
      <div className="relative">
        <Swiper
          ref={swiperRef}
          modules={[Navigation]}
          slidesPerView={1}
          spaceBetween={20}
          loop={true}
          navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="relative"
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <TestimonialCard image={testimonial.image} review={testimonial.review} />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation Buttons */}
        <button
          ref={prevRef}
          className="absolute left-2 md:left-0 top-1/2 transform -translate-y-1/2 bg-[#244a78] text-white p-3 md:p-4 rounded-full shadow-md z-10 hover:bg-gray-900 transition flex items-center justify-center w-10 h-10 md:w-12 md:h-12"
        >
          <span className="text-xl md:text-2xl">&lt;</span>
        </button>

        <button
          ref={nextRef}
          className="absolute right-2 md:right-0 top-1/2 transform -translate-y-1/2 bg-[#244a78] text-white p-3 md:p-4 rounded-full shadow-md z-10 hover:bg-gray-900 transition flex items-center justify-center w-10 h-10 md:w-12 md:h-12"
        >
          <span className="text-xl md:text-2xl">&gt;</span>
        </button>
      </div>
    </section>
  );
};

export default TestimonialCarousel;
