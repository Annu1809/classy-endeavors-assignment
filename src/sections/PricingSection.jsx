import React, { useState } from "react";
import PricingToggleButton from "../components/PricingToggleButton";
import PricingCard from "../components/PricingCard";

const PricingSection = () => {
  const [billingCycle, setBillingCycle] = useState("monthly");
  const [selectedPlan, setSelectedPlan] = useState(null); // Track selected plan

  const pricingPlans = {
    monthly: [
      {
        name: "FREE",
        price: "0",
        features: ["5 documents a month", "Activity timeline"],
        note: "No Credit Card required",
      },
      {
        name: "Premium",
        price: "10",
        features: [
          "Unlimited documents",
          "Unlimited signees",
          "Activity timeline",
          "Certificate of completion",
        ],
      },
      {
        name: "Teams",
        price: "8",
        features: [
          "Everything from Premium",
          "Team management",
          "Transferable contracts",
        ],
        additionalText: "Minimum total of USD 24/month",
        totalPrice: "24",
      },
    ],
    annually: [
      {
        name: "FREE",
        price: "0",
        features: ["5 documents a month", "Activity timeline"],
        note: "No Credit Card required",
      },
      {
        name: "Premium",
        price: "100",
        features: [
          "Unlimited documents",
          "Unlimited signees",
          "Activity timeline",
          "Certificate of completion",
        ],
        discount: "Save 20% annually",
      },
      {
        name: "Teams",
        price: "80",
        features: [
          "Everything from Premium",
          "Team management",
          "Transferable contracts",
        ],
        additionalText: "Minimum total of USD 240/year",
        totalPrice: "240",
        discount: "Save 20% annually",
      },
    ],
  };

  return ( 
    <div className="bg-gradient-to-b from-white to-gray-200 ">
    <section id="pricing" className=" text-center md:py-14 md:px-12 px-8  mx-auto  ">
      <h2 className="text-3xl font-bold mb-4">Pick your plan. We make this part easy too.</h2>

      {/* Toggle Button Component */}
      <PricingToggleButton billingCycle={billingCycle} setBillingCycle={setBillingCycle} />

      {/* Pricing Cards */}
      
      <div className="flex justify-evenly mt-6 flex-wrap flex-row py-4 gap-y-20">
  {pricingPlans[billingCycle].map((plan, index) => (
    <PricingCard
      key={index}
      plan={plan}
      isSelected={selectedPlan === index} // Highlight selected card
      onSelect={() => setSelectedPlan(index)} // Set selected card on click
    />
  ))}
</div>

    </section>
    </div>
  );
};

export default PricingSection;
