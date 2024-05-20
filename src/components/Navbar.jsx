import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaHome, FaChartBar, FaTachometerAlt, FaLightbulb, FaUsers, FaBars, FaTimes } from 'react-icons/fa'; // Added FaUsers for "About Us"

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const location = useLocation(); // To determine the active route

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const getLinkClasses = (path) => {
    const baseClasses = "text-white hover:text-gray-300 flex items-center";
    const isActive = location.pathname === path;

    return isActive ? `${baseClasses} font-bold underline` : baseClasses;
  };

  return (
    <nav className="bg-gradient-to-r from-teal-500 to-blue-600 p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        {/* Brand/Logo */}
        <Link to="/" className="text-white text-3xl font-bold flex items-center">
          InvestCraft
        </Link>

        {/* Toggle Button for Mobile */}
        <button
          className="text-white lg:hidden"
          onClick={toggleMenu}
          aria-label="Toggle navigation"
        >
          {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>

        {/* Navigation Links */}
        <div className={`lg:flex lg:space-x-6 ${isMenuOpen ? 'block' : 'hidden'}`}>
          <Link to="/" className={getLinkClasses('/')} aria-label="Home">
            <FaHome className="mr-1" /> Home
          </Link>
          <Link
            to="/portfolio"
            className={getLinkClasses('/portfolio')}
            aria-label="Portfolio"
          >
            <FaChartBar className="mr-1" /> Portfolio
          </Link>
          <Link
            to="/dashboard"
            className={getLinkClasses('/dashboard')}
            aria-label="Dashboard"
          >
            <FaTachometerAlt className="mr-1" /> Dashboard
          </Link>
          <Link
            to="/financial-advice"
            className={getLinkClasses('/financial-advice')}
            aria-label="Financial Advice"
          >
            <FaLightbulb className="mr-1" /> Financial Advice
          </Link>
          {/* New About Us Link */}
          <Link
            to="/about-us"
            className={getLinkClasses('/about-us')}
            aria-label="About Us"
          >
            <FaUsers className="mr-1" /> About Us
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
