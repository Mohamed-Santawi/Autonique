import React, { useState } from "react";
import { motion } from "framer-motion";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 left-0 right-0 z-50 bg-black bg-opacity-20 backdrop-blur-md border-b border-white border-opacity-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center"
          >
            <h1 className="text-2xl font-bold text-white">Autonique</h1>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex flex-row gap-8">
            <motion.a
              href="#home"
              whileHover={{ scale: 1.05 }}
              className="text-white hover:text-blue-300 transition-colors duration-300 font-medium"
            >
              الرئيسية
            </motion.a>
            <motion.a
              href="#solutions"
              whileHover={{ scale: 1.05 }}
              className="text-white hover:text-blue-300 transition-colors duration-300 font-medium"
            >
              الحلول السيبرانية
            </motion.a>
            <motion.a
              href="#services"
              whileHover={{ scale: 1.05 }}
              className="text-white hover:text-blue-300 transition-colors duration-300 font-medium"
            >
              خدماتنا
            </motion.a>
            <motion.a
              href="#about"
              whileHover={{ scale: 1.05 }}
              className="text-white hover:text-blue-300 transition-colors duration-300 font-medium"
            >
              من نحن؟
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              className="text-white hover:text-blue-300 transition-colors duration-300 font-medium"
            >
              تواصل معنا
            </motion.a>
          </nav>

          {/* Contact Info */}
          <div className="hidden lg:flex items-center space-x-6 space-x-reverse">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-600 text-white cursor-pointer px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors border-2 border-blue-600 hover:border-blue-700"
            >
              احصل على استشارة
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white p-2"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </motion.button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-black bg-opacity-90 backdrop-blur-md rounded-lg mt-4 p-4"
          >
            <nav className="flex flex-col space-y-4">
              <a
                href="#home"
                className="text-white hover:text-blue-300 transition-colors font-medium"
              >
                الرئيسية
              </a>
              <a
                href="#solutions"
                className="text-white hover:text-blue-300 transition-colors font-medium"
              >
                الحلول السيبرانية
              </a>
              <a
                href="#services"
                className="text-white hover:text-blue-300 transition-colors font-medium"
              >
                خدماتنا
              </a>
              <a
                href="#about"
                className="text-white hover:text-blue-300 transition-colors font-medium"
              >
                من نحن؟
              </a>
              <a
                href="#contact"
                className="text-white hover:text-blue-300 transition-colors font-medium"
              >
                تواصل معنا
              </a>
            </nav>
            <div className="mt-4 pt-4 border-t border-white border-opacity-20">
              <p className="text-white text-sm mb-2">+971 50 123 4567</p>
              <p className="text-gray-300 text-sm mb-4">info@autonique.ae</p>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors w-full">
                احصل على استشارة
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
};

export default Header;
