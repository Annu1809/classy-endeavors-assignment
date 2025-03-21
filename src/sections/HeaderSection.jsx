import React, { useState } from "react";
import { FaDiscord, FaBars, FaTimes } from "react-icons/fa";
import Button from "../components/Button";
import logo from "../assets/logo.png";

const HeaderSection = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        const offset = 80; // Adjust this based on your header height
        if (section) {
            const sectionPosition = section.offsetTop - offset;
            window.scrollTo({ top: sectionPosition, behavior: "smooth" });
            setMenuOpen(false); // Close menu after clicking
        }
    };

    return (
        <header className="w-full fixed top-0 left-0 bg-white  z-50 ">
            {/* Top Banner */}
            <div className="bg-[#244a78] text-white text-center py-2 text-lg">
                No Sign up required
            </div>

            {/* Navbar */}
            <nav className="flex justify-between items-center p-5 m-2 px-6 ml-8 mr-8 py-4 md:px-8 relative">
                {/* Logo */}
                <div className="text-2xl font-bold text-[#244a78] flex items-center cursor-pointer">
                    <svg width="34" height="35" viewBox="0 0 34 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3.77778 0.75C1.6941 0.75 0 2.65586 0 5V30.5C0 32.8441 1.6941 34.75 3.77778 34.75H18.8889C20.9726 34.75 22.6667 32.8441 22.6667 30.5V29.2184C22.5073 29.2914 22.3479 29.3512 22.1826 29.3977L18.6351 30.3937C18.458 30.4402 18.2809 30.4734 18.1038 30.4867C18.0507 30.4934 17.9976 30.5 17.9444 30.5H14.1667C13.8066 30.5 13.4819 30.2742 13.3226 29.9156L12.8031 28.7402C12.7028 28.5145 12.5021 28.375 12.2837 28.375C12.0653 28.375 11.8587 28.5145 11.7642 28.7402L11.2448 29.9156C11.0736 30.3074 10.7017 30.5398 10.3181 30.5C9.93437 30.4602 9.60382 30.1613 9.49757 29.7496L8.5 26.0508L7.92153 28.2289C7.56146 29.577 6.45764 30.5 5.20625 30.5H4.72222C4.20278 30.5 3.77778 30.0219 3.77778 29.4375C3.77778 28.8531 4.20278 28.375 4.72222 28.375H5.20625C5.62535 28.375 5.99132 28.0695 6.10938 27.618L6.98889 24.3309C7.18958 23.5805 7.80347 23.0625 8.5 23.0625C9.19653 23.0625 9.81042 23.5805 10.0111 24.3309L10.6958 26.8941C11.1326 26.4824 11.6875 26.25 12.2778 26.25C13.2163 26.25 14.0722 26.8477 14.4913 27.7906L14.751 28.375H15.2764C15.0934 27.7906 15.058 27.1531 15.1937 26.5289L16.0792 22.5379C16.2444 21.7875 16.5868 21.1102 17.0708 20.5656L22.6667 14.2703V11.375H15.1111C14.0663 11.375 13.2222 10.4254 13.2222 9.25V0.75H3.77778ZM15.1111 0.75V9.25H22.6667L15.1111 0.75ZM32.4535 10.027C31.5326 8.99102 30.0392 8.99102 29.1125 10.027L27.3771 11.9793L31.5681 16.6941L33.3035 14.7418C34.2243 13.7059 34.2243 12.0258 33.3035 10.9832L32.4535 10.027ZM18.4108 22.0664C18.1687 22.3387 17.9976 22.6773 17.9149 23.0559L17.0295 27.0469C16.9469 27.4121 17.0413 27.7906 17.2774 28.0563C17.5135 28.3219 17.85 28.4281 18.1747 28.3352L21.7222 27.3391C22.0528 27.2461 22.3597 27.0535 22.6017 26.7812L30.2281 18.1949L26.0372 13.4801L18.4108 22.0664Z" fill="#254A76" />
                    </svg>
                    <span className="ml-2">DocuTech</span>
                </div>

                {/* Desktop Navigation */}
                <ul className="hidden md:flex space-x-8 font-light ">
                    <li className="hover:text-blue-600 cursor-pointer" onClick={() => scrollToSection("features")}>
                        Features
                    </li>
                    <li className="hover:text-blue-600 cursor-pointer" onClick={() => scrollToSection("why-choose-us")}>
                        Why Choose Us
                    </li>
                    <li className="hover:text-blue-600 cursor-pointer" onClick={() => scrollToSection("pricing")}>
                        Pricing
                    </li>
                    <li className="hover:text-blue-600 cursor-pointer" onClick={() => scrollToSection("faq")}>
                        FAQ
                    </li>
                </ul>

                {/* Mobile Menu Button */}
                <button className="md:hidden text-[#244a78] text-2xl" onClick={() => setMenuOpen(!menuOpen)}>
                    {menuOpen ? <FaTimes /> : <FaBars />}
                </button>

                {/* Mobile Menu */}
                {menuOpen && (
                    <div className="absolute top-full left-0 w-full bg-white shadow-md md:hidden">
                        <ul className="flex flex-col items-center py-4 space-y-4 text-gray-700 font-medium ">
                            <li className="hover:text-blue-600 cursor-pointer" onClick={() => scrollToSection("features")}>
                                Features
                            </li>
                            <li className="hover:text-blue-600 cursor-pointer" onClick={() => scrollToSection("why-choose-us")}>
                                Why Choose Us
                            </li>
                            <li className="hover:text-blue-600 cursor-pointer" onClick={() => scrollToSection("pricing")}>
                                Pricing
                            </li>
                            <li className="hover:text-blue-600 cursor-pointer" onClick={() => scrollToSection("faq")}>
                                FAQ
                            </li>
                        </ul>
                    </div>
                )}

                {/* Get Started Button & Discord Icon */}
                <div className="hidden md:flex items-center text-[#244a78]">
                    <FaDiscord className="h-9 w-9 mr-2 cursor-pointer" />
                    <Button className="text-white px-4 py-2 rounded-lg flex items-center font-light">
                        Get Started
                    </Button>
                </div>
            </nav>
        </header>
    );
};

export default HeaderSection;
