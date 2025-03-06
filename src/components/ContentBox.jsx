import React from "react";

const ContentBox = ({ className }) => {
  return (
    <div
      className={`mt-8 mx-auto w-full md:w-[600px] h-[500px] border rounded-lg bg-white shadow-lg ${className}`}
    ></div>
  );
};

export default ContentBox;
