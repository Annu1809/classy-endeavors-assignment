import React from "react";

const ContentBox = ({ className }) => {
  return (
    <div
      className={`mt-8 mx-auto w-56 sm:w-[220px] h-96  border rounded-3xl bg-white shadow-md ${className}`}
    ></div>
  );
};

export default ContentBox;
