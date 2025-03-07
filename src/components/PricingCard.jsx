import React from "react";

const PricingCard = ({ plan }) => {
  return (
    <div
      className={`flex flex-col p-8 h-[28rem] shadow-md md:h-[535px] md:w-[371.55px] shadow-fuchsia-600 border border-gray-300 relative transition-all duration-300 
        ${plan.isHighlighted ? "bg-[#244a78] text-white" : "bg-[#244a78] text-white"}
        hover:bg-white hover:text-gray-900 hover:border-blue-600`}
    >
      {/* Plan Name */}
      <h3 className="md:text-lg text-md font-bold text-left">{plan.name}</h3>

      {/* Price */}
      <p className="md:text-4xl text-xl font-bold mt-1 text-left flex items-baseline">
        USD {plan.price} <span className="text-lg text-gray-400 font-normal">/Month</span>
      </p>

      {/* Additional Text */}
      {plan.additionalText && (
        <p className="text-sm mt-1 text-left text-gray-300 hover:text-gray-700">{plan.additionalText}</p>
      )}

      {/* Discount Text */}
      {plan.discount && (
        <p className="text-sm mt-1 text-left text-green-400 hover:text-green-600">{plan.discount}</p>
      )}

      {/* Note (e.g., "No Credit Card Required") */}
      {plan.note && (
        <p className="text-xs bg-gray-200 text-gray-800 px-2 py-1 rounded mt-3 inline-block ">
          {plan.note}
        </p>
      )}

      {/* Features List */}
      <ul className="mt-6 space-y-3 text-left">
        {plan.features.map((feature, idx) => (
          <li key={idx} className="text-base flex items-center">
            • {feature}
          </li>
        ))}
      </ul>

      {/* Button */}
      <div className="absolute bottom-6 left-0 right-0  flex justify-center ">
        <button
          className="md:w-[299.28px] md:h-[40px] px-8 py-2 rounded-full bg-white text-[#244a78] font-semibold transition 
          border border-[#244a78] text-lg
          hover:bg-[#244a78] hover:text-white"
        >
          Select Plan
        </button>
      </div>
    </div>
  );
};

export default PricingCard;
