import React from "react";

const PricingToggleButton = ({ billingCycle, setBillingCycle }) => {
  return (
    <div className="flex justify-center mb-6">
      <button
        className={`px-6 py-2 rounded-l-full transition ${
          billingCycle === "monthly" ? "bg-blue-950 text-white" : "bg-gray-200 text-gray-800"
        }`}
        onClick={() => setBillingCycle("monthly")}
      >
        Monthly
      </button>
      <button
        className={`px-6 py-2 rounded-r-full transition ${
          billingCycle === "annually" ? "bg-blue-950 text-white" : "bg-gray-200 text-gray-800"
        }`}
        onClick={() => setBillingCycle("annually")}
      >
        Annually
      </button>
    </div>
  );
};

export default PricingToggleButton;
