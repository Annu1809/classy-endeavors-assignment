import { useState } from "react";
import TestimonialCarousel from "../components/TestimonialCarousel/TestimonialCarousel";
import ContentBox from "../components/ContentBox";

const features = [
  { title: "Trusted by Thousands", content: "DocuTech is trusted by thousands of businesses and individuals worldwide." },
  { title: "SOC-2 Certified", content: "We follow strict SOC-2 security standards to protect your data." },
  { title: "GDPR & HIPAA Compliant", content: "Our platform is fully compliant with GDPR and HIPAA regulations." },
  { title: "End-to-end encryption", content: "Your documents are securely encrypted from end to end." },
];


const FeatureButton = ({ title }) => {
  return (
    <button
      className="w-full p-3 text-left rounded-lg border bg-gray-100 transition-all duration-300 
                 hover:bg-white hover:shadow-md hover:shadow-fuchsia-400 hover:border-2 
                 hover:border-blue-950 hover:font-bold"
    >
      {title}
    </button>
  );
};


const WhyChooseUsSection = () => {
  const [selectedFeature, setSelectedFeature] = useState(features[0]);

  return (
    <section id="why-choose-us" className="py-10 px-4 bg-gradient-to-b from-gray-200 to-white ">  
    <TestimonialCarousel/>    
      <h2 className="text-2xl font-bold text-center mb-6">Why Choose DocuTech</h2>
      <div className="flex flex-col md:flex-row items-center md:items-start gap-6 max-w-4xl mx-auto flex-wrap">
        {/* Feature List */}
        <div className="flex flex-col w-full md:w-1/3 space-y-4">
          {features.map((feature) => (
            <FeatureButton
              key={feature.title}
              title={feature.title}
              isSelected={selectedFeature.title === feature.title}
              onClick={() => setSelectedFeature(feature)}
            />
          ))}
        </div>
          {/* Container */}
          <div className="w-full md:flex-1 p-6 rounded-lg border border-blue-950 bg-white shadow-lg min-h-[20rem] md:min-h-[32rem] flex">

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
