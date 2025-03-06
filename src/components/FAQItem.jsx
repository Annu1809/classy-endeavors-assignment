import React from "react";
import { Plus, Minus } from "lucide-react"; // Icons for expand/collapse

const FAQItem = ({ question, answer, isOpen, onToggle }) => {
  return (
    <div className="border rounded-lg overflow-hidden shadow-md mb-3">
      <button
        className={`w-full flex justify-between items-center p-4 text-lg font-semibold transition 
        ${isOpen ? "bg-blue-950 text-white" : "bg-blue-950 text-white"}`}
        onClick={onToggle}
      >
        {question}
        {isOpen ? <Minus size={20} /> : <Plus size={20} />}
      </button>

      {/* Show answer only if isOpen is true */}
      {isOpen && (
        <div className="p-4 bg-white text-gray-700 text-sm border-t shadow-md shadow-fuchsia-600">{answer}</div>
      )}
    </div>
  );
};

export default FAQItem;
