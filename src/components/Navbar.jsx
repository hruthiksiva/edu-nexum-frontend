import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import logo from '../assets/react.svg'

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const getLinkClass = (path) => {
    return `hover:text-blue-800 ${
      location.pathname === path ? 'text-blue-800' : 'text-gray-600'
    }`;
  };

  return (
    <nav className="bg-white shadow-md py-6 px-6 fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo/Brand */}
        <a href='/'>
          <div className="text-2xl flex items-center">
            <img src={logo} width={50} alt="Logo" />
          </div>
        </a>

        {/* Hamburger Menu for Mobile */}
        <button
          onClick={toggleMobileMenu}
          className="md:hidden text-gray-800 hover:text-gray-600 focus:outline-none p-2"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>

        {/* Navigation Links - Desktop */}
        <ul className="hidden md:flex space-x-6 font-medium">
          <li>
            <a href="/" className={getLinkClass('/')}>
              Home
            </a>
          </li>
          <li>
            <a href="/teacher-profile/1" className={getLinkClass('/teacher-profile/1')}>
              Profile
            </a>
          </li>
          <li>
            <a href="/find-tutor" className={getLinkClass('/services')}>
              Find Tutor
            </a>
          </li>
          <li>
            <a href="/become-a-tutor" className={getLinkClass('/portfolio')}>
              Become A Tutor
            </a>
          </li>
          <li>
            <a href="/about" className={getLinkClass('/about')}>
              About
            </a>
          </li>
          <li>
            <a href="/login" className={getLinkClass('/contact')}>
              Login
            </a>
          </li>
          <li>
            <a href="/signup" className={getLinkClass('/contact')}>
              Sign Up
            </a>
          </li>
        </ul>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 w-full bg-white shadow-md z-10">
            <ul className="flex flex-col items-center space-y-4 py-4">
              <li>
                <a
                  href="/"
                  className={getLinkClass('/')}
                  onClick={toggleMobileMenu}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/find-tutor"
                  className={getLinkClass('/find-tutor')}
                  onClick={toggleMobileMenu}
                >
                  Find Tutor
                </a>
              </li>
              <li>
                <a
                  href="/become-a-tutor"
                  className={getLinkClass('/become-a-tutor')}
                  onClick={toggleMobileMenu}
                >
                  Become a Tutor
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className={getLinkClass('/about')}
                  onClick={toggleMobileMenu}
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="/login"
                  className={getLinkClass('/login')}
                  onClick={toggleMobileMenu}
                >
                  Login
                </a>
              </li>
              <li>
                <a
                  href="/signup"
                  className={getLinkClass('/signup')}
                  onClick={toggleMobileMenu}
                >
                  Sign Up
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;