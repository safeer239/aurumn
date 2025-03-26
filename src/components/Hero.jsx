import { useState, useEffect } from "react";
import Aurumn_logo from "../assets/Aurum_Logo.png";
import { FaArrowRight, FaBars, FaTimes } from "react-icons/fa";

export default function Hero() {
  const [isSticky, setIsSticky] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="font-sans bg-gray-50 text-gray-800">
      {/* Navigation Bar */}
      <nav
        className={`fixed top-0 left-0 w-full bg-white shadow-md p-4 z-50 transition-all ${
          isSticky ? "shadow-lg" : ""
        }`}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <img src={Aurumn_logo} alt="Aurum Logo" className="h-10" />

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-8">
            <li className="hover:text-indigo-500 cursor-pointer">Home</li>
            <li className="hover:text-indigo-500 cursor-pointer">Products & Features</li>
            <li className="hover:text-indigo-500 cursor-pointer">Contact</li>
            <li>
              <button className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-500 flex items-center gap-2">
                Get a Free Demo <FaArrowRight />
              </button>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-2xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden mt-4 space-y-4 text-center">
            <p className="hover:text-indigo-500 cursor-pointer">Home</p>
            <p className="hover:text-indigo-500 cursor-pointer">Products & Features</p>
            <p className="hover:text-indigo-500 cursor-pointer">Contact</p>
            <button className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-500 flex items-center gap-2 mx-auto">
              Get a Free Demo <FaArrowRight />
            </button>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <header className="pt-32 pb-20 text-center bg-gradient-to-r from-blue-100 to-blue-200">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fadeIn">
          The Ultimate Jewellery E-Commerce Platform
        </h2>
        <p className="text-lg max-w-xl mx-auto mb-8">
          Open your shop to the world with a smooth shopping experience and advanced management tools.
        </p>
        <button className="bg-indigo-600 text-white px-8 py-3 rounded-lg hover:bg-indigo-500 transition shadow-lg">
          Explore Now
        </button>
      </header>
    </div>
  );
}