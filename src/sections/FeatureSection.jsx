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

const FeatureSection = () => {
  return (
    <section id="features" className="py-12 px-4 bg-gradient-to-b from-white to-gray-200 text-center">
      {/* Heading */}
      <h2 className="text-3xl md:text-6xl font-bold">
        <div>AI-Powered Unified Platform;</div>
        <span className="bg-gradient-to-r from-blue-300 via-blue-700 to-blue-950 text-transparent bg-clip-text">
          Create
        </span>{" "}
        Effortlessly
      </h2>
      <p className="text-gray-800 mt-2 text-lg">
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
      <div className="flex flex-col md:flex-row items-center justify-center gap-4 mt-6">
        <label
          htmlFor="fileUpload"
          className="flex items-center justify-between w-full md:w-[300px] px-3 py-2 border rounded-full cursor-pointer bg-white shadow-md"
        >
          <span>Drop your file here</span>
          <span className="flex items-center gap-2 text-white p-2 border rounded-full font-light bg-blue-950">
            <FaCloudUploadAlt /> Upload File
          </span>
        </label>
        <input type="file" id="fileUpload" className="hidden" />
        <h1>or</h1>
        <Button>
          <FaMagic /> Generate with AI
        </Button>
      </div>

      {/* Large Content Box */}
      <div className="mt-6">
        <ContentBox className="shadow-md shadow-fuchsia-500" />
      </div>

      {/* Trusted By Section */}
      <p className="mt-8 text-3xl font-semibold">
        <span className="font-bold bg-gradient-to-r from-blue-300 via-blue-700 to-blue-950 text-transparent bg-clip-text">
          64.0k{" "}
        </span>
        businesses and individuals have
        <br />
        signed with
        <span className="font-bold bg-gradient-to-r from-blue-300 via-blue-700 to-blue-950 text-transparent bg-clip-text">
          {" "}
          DocuTech
        </span>
      </p>

      {/* Company Logos */}
      <div className="flex flex-wrap justify-center gap-6 mt-6 items-center">
        <div className="h-20 w-20 flex items-center"><img src={Uc} alt="" /></div>
        <div className="h-20 w-28 flex items-center"><img src={ivirma} alt="" /></div>
        <div className="h-20 w-32 flex items-center"><img src={HowardLogo} alt="" /></div>
        <div className="h-20 w-28 flex items-center"><img src={pharmbills} alt="" /></div>
        <div className="h-12 w-12 flex items-center"><img src={absa} alt="" /></div>
        <div className="h-20 w-28 flex items-center"><img src={B2B} alt="" /></div>
      </div>
    </section>
  );
};

export default FeatureSection;
