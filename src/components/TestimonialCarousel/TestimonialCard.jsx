import React from "react";
import { FaStar } from "react-icons/fa";

const TestimonialCard = ({ image, review }) => {
  return (
    <div className="bg-white shadow-lg rounded-xl p-7 flex flex-col items-center transition-transform duration-300 transform hover:scale-105">
      <img
        src={image}
        alt="User"
        className="w-10 h-10 relative ml-5 mr-4 lg:ml-5 lg:mr-72 rounded-full border-2 border-white -mt-6"
      />
      <p className="text-gray-700 mt-3 text-center">{review}</p>
      <div className="flex mt-4 text-yellow-500">
        {[...Array(5)].map((_, index) => (
          <FaStar key={index} />
        ))}
      </div>
    </div>
  );
};

export default TestimonialCard;
