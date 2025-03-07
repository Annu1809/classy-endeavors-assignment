import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaCloudUploadAlt, FaMagic } from "react-icons/fa";
import Button from "../components/Button";
import ContentBox from "../components/ContentBox";
import HowardLogo from "../assets/Howard University-02.png";
import B2B from "../assets/B2B.png";
import Uc from "../assets/UC San Diego.png";
import absa from "../assets/absa.png";
import ivirma from "../assets/ivirma.png";
import pharmbills from "../assets/pharmbills.png";
import verifiedlogo from "../assets/verifiedlogo.png";

const words = ["Create", "Sign", "Convert"];

const FeatureSection = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 1000); // Change word every 2 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="features" className=" py-5 md:py-12 md:px-4 bg-gradient-to-b from-white to-gray-200 text-center flex flex-col justify-center items-center ">
      {/* Heading */}
      <div className="md:h-[130px] lg:w-[924px]  md:mt-3 mt-10 m-5 ">
        <h2 className="text-2xl md:text-5xl lg:text-6xl font-bold">
          <div>AI-Powered Unified Platform;</div>
          <div className=" flex-row inline-flex justify-center justify-items-center gap-1 ">
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-r from-[#80BBEB] to-[#254A76] text-transparent bg-clip-text sm:w-36 w-28 md:w-72 p-2"
            >
              {words[index]}
            </motion.span>{" "}
            <div className="p-2">Effortlessly</div>
          </div>

        </h2>
      </div>

      {/* Subtitle */}
      <p className="text-gray-800 mt-2 text-lg max-w-[948px] w-full">
        Fast, Smart & Secure – Works with Google Drive, Dropbox, Salesforce & Your Favorite Business Tools
      </p>

      {/* Compliance Badges */}
      <div className="flex flex-wrap justify-center gap-6 mt-4 text-sm text-gray-800">
        {["ESIGN Compliant", "UETA Approved", "eIDAS Certified"].map((text, index) => (
          <span key={index} className="flex items-center gap-2">
            <img src={verifiedlogo} alt="" className="h-8 w-14" />
            <h2>{text}</h2>
          </span>
        ))}
      </div>

      {/* Upload & AI Buttons */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-4 mt-6 w-full">
        <label
          htmlFor="fileUpload"
          className="flex items-center justify-between w-[300px] px-3 py-1 border flex-col md:flex-row rounded-full cursor-pointer bg-white shadow-md gap-y-3 lg:w-[484px] lg:h-[63px] font-light text-sm"
        >
          <span className="lg:ml-6">Drop your file here</span>
          <span className="flex items-center justify-center gap-2 text-white p-2 lg:py-3 border rounded-full font-light bg-[#244a78] lg:w-[149px] lg:[47px]">
            <FaCloudUploadAlt /> Upload File
          </span>
        </label>
        <input type="file" id="fileUpload" className="hidden" />
        <h1>or</h1>
        <Button className="font-light">
          <FaMagic /> Generate with AI
        </Button>
      </div>

      {/* Large Content Box */}
      <div className="mt-6 ">
        <ContentBox className="md:w-[704px] md:h-[681px] shadow-fuchsia-300  " />

      </div>

      {/* Trusted By Section */}
      <p className="mt-8 text-2xl md:text-3xl font-semibold ">
        <span className="font-bold bg-gradient-to-r from-blue-300 via-blue-700 to-[#244a78] text-transparent bg-clip-text">
          64.0k{" "}
        </span>
        businesses and individuals have
        <br />
        signed with
        <span className="font-bold bg-gradient-to-r from-blue-300 via-blue-700 to-[#244a78] text-transparent bg-clip-text">
          {" "}
          DocuTech
        </span>
      </p>

      {/* Company Logos */}
      <div className="flex flex-wrap justify-center gap-4 md:gap-6 mt-6 items-center">
        <div className="h-16 w-16 md:h-20 md:w-20 flex items-center"><img src={Uc} alt="" /></div>
        <div className="h-16 w-24 md:h-20 md:w-28 flex items-center"><img src={ivirma} alt="" /></div>
        <div className="h-16 w-28 md:h-20 md:w-32 flex items-center"><img src={HowardLogo} alt="" /></div>
        <div className="h-16 w-24 md:h-20 md:w-28 flex items-center"><img src={pharmbills} alt="" /></div>
        <div className="h-12 w-12 flex items-center"><img src={absa} alt="" /></div>
        <div className="h-16 w-24 md:h-20 md:w-28 flex items-center"><img src={B2B} alt="" /></div>
      </div>
    </section>
  );
};

export default FeatureSection;
