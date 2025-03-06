import React from "react";

const Button = ({ onClick, children, className }) => {
  return (
    <button
      className={`flex items-center gap-2 px-6 py-3 bg-blue-950 text-white rounded-full shadow-md hover:bg-blue-900 transition cursor-pointer ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
