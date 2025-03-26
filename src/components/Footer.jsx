import { FaArrowRight } from 'react-icons/fa';
import Aurumn_logo from "../assets/Aurum_Logo.png";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-blue-100 to-blue-200 text-gray-800 py-8">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">

        {/* Logo & Description */}
        <div>
          <img src={Aurumn_logo} alt="Aurum Logo" className="h-12 mb-4" />
          <p className="text-sm leading-relaxed">
            World-class technical solutions for elevated jewellery store operations.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold mb-4">QUICKLINKS</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-blue-600 transition-colors">Product</a></li>
            <li><a href="#" className="hover:text-blue-600 transition-colors">Contact Us</a></li>
          </ul>
        </div>

        {/* Solutions */}
        <div>
          <h3 className="font-semibold mb-4">SOLUTIONS</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-blue-600 transition-colors">AU Pay</a></li>
            <li><a href="#" className="hover:text-blue-600 transition-colors">AU Sales</a></li>
            <li><a href="#" className="hover:text-blue-600 transition-colors">AU Shop</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="font-semibold mb-4">Contact</h3>
          <p className="text-sm mb-4">0422 4957575</p>
          <h3 className="font-semibold mb-4">Email</h3>
          <p className="text-sm">support@atts.in</p>
        </div>
      </div>

      {/* Call to Action */}
      <div className="mt-12 max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between bg-white shadow-lg rounded-lg p-6">
        <p className="text-lg font-semibold mb-4 sm:mb-0">Ready To Begin?</p>
        <button className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-500 flex items-center gap-2 transition-transform transform hover:scale-105">
          Get a Demo <FaArrowRight />
        </button>
      </div>

      {/* Copyright */}
      <div className="text-center mt-8 text-sm">
        Aurumm made by <span className="font-bold">ATTS Technologies.</span> All Rights Reserved &copy; 2024.
      </div>
    </footer>
  );
}