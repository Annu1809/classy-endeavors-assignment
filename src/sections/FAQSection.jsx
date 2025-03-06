import React, { useState } from "react";
import FAQItem from "../components/FAQItem";

const faqs = [
 
  { question: "Are DocuTech Signature legally binding?", answer: "Yep! DocuTech signatures are totally binding, just like signing with a pen-except digital and way cooler. As long as they follow the right security rules, courts accepts them , so no worries there. Plus they're encrypted and tracked, so it's safer than losing a paper contract in your junk drawer ! " },
  { question: "Are DocuTech Signature legally binding?", answer: "Yep! DocuTech signatures are totally binding, just like signing with a pen-except digital and way cooler. As long as they follow the right security rules, courts accepts them , so no worries there. Plus they're encrypted and tracked, so it's safer than losing a paper contract in your junk drawer ! " },
  { question: "Are DocuTech Signature legally binding?", answer: "Yep! DocuTech signatures are totally binding, just like signing with a pen-except digital and way cooler. As long as they follow the right security rules, courts accepts them , so no worries there. Plus they're encrypted and tracked, so it's safer than losing a paper contract in your junk drawer ! " },
  { question: "Are DocuTech Signature legally binding?", answer: "Yep! DocuTech signatures are totally binding, just like signing with a pen-except digital and way cooler. As long as they follow the right security rules, courts accepts them , so no worries there. Plus they're encrypted and tracked, so it's safer than losing a paper contract in your junk drawer ! " },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index); // Toggle open/close
  };

  return (
    <div id="faq" className="max-w-3xl mx-auto p-6 ">
      <h2 className="text-2xl font-bold text-center mb-4 ">FAQs</h2>
      {faqs.map((faq, index) => (
        <FAQItem
          key={index}
          question={faq.question}
          answer={faq.answer}
          isOpen={openIndex === index}
          onToggle={() => handleToggle(index)}
        />
      ))}
    </div>
  );
};

export default FAQSection;
