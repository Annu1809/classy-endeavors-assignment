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
        <header className="w-full fixed top-0 left-0 bg-white  z-50">
            {/* Top Banner */}
            <div className=" bg-blue-950 text-white text-center py-2 text-lg">
                No Sign up required
            </div>

            {/* Navbar */}
            <nav className="flex justify-between items-center px-6 py-4 md:px-8 relative">
                {/* Logo */}
                <div className="text-2xl font-bold text-blue-950 flex items-center cursor-pointer">
                    <img src={logo} alt="Logo" className="h-10 w-10 mr-2" />
                    DocuTech
                </div>

                {/* Desktop Navigation */}
                <ul className="hidden md:flex space-x-8 font-semibold">
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
                <button className="md:hidden text-blue-950 text-2xl" onClick={() => setMenuOpen(!menuOpen)}>
                    {menuOpen ? <FaTimes /> : <FaBars />}
                </button>

                {/* Mobile Menu */}
                {menuOpen && (
                    <div className="absolute top-full left-0 w-full bg-white shadow-md md:hidden">
                        <ul className="flex flex-col items-center py-4 space-y-4 text-gray-700 font-medium">
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
                <div className="hidden md:flex items-center text-blue-950">
                    <FaDiscord className="h-9 w-9 mr-2 cursor-pointer" />
                    <Button className="text-white px-4 py-2 rounded-lg flex items-center">
                        Get Started
                    </Button>
                </div>
            </nav>
        </header>
    );
};

export default HeaderSection;
