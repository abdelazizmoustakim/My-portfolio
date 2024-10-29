import React, { useState } from 'react';
import DarkMode from './Darkmode';
import ReactTypingEffect from 'react-typing-effect';
import { FaBars, FaTimes } from 'react-icons/fa';

const links = [
    { id: 1, name: "Services", link: '/Services' },
    { id: 2, name: "Courses", link: '/Courses' },
    { id: 3, name: "Resume", link: '/Resume' },
    { id: 4, name: "Projects", link: '/Projects' },
    { id: 5, name: "Writing", link: "/Writing" }
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-md dark:bg-gray-900 dark:text-white duration-200">
      <div className="container mx-auto flex justify-between items-center px-4 py-3 h-16">
        {/* Left Section: Name with responsive shrinking effect */}
        <a className="flex items-center h-full cursor-pointer" href='/'>
          <ReactTypingEffect
            text={["ABDELAZIZ MOUSTAKIM"]}
            typingDelay={1}
            speed={60}
            eraseDelay={999999}
            className="text-black font-semibold tracking-widest text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl uppercase h-full flex items-center px-3 transition duration-200 hover:text-primary truncate dark:text-gray-100 dark:hover:text-primary cursor-pointer"
          />
        </a>

        {/* Right Section: Links (Hidden on mobile) */}
        <div className="hidden lg:flex space-x-5 h-full items-center">
          {links.map((linkItem) => (
            <a 
              key={linkItem.id} 
              href={linkItem.link} 
              className="text-black font-semibold tracking-widest text-sm uppercase h-full flex items-center px-2 transition duration-200 hover:text-primary dark:text-gray-100"
            >
              {linkItem.name}
            </a>
          ))}
          <DarkMode />
        </div>

        {/* Mobile Menu Toggle Button */}
        <div className="lg:hidden flex items-center">
          <button onClick={toggleMenu} className="text-black focus:outline-none dark:text-gray-100">
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu (Visible only on smaller screens) */}
      {isOpen && (
        <div className="lg:hidden bg-white px-4 pb-2 dark:bg-gray-900">
          <ul className="space-y-4">
            {links.map((linkItem) => (
              <li key={linkItem.id}>
                <a 
                  href={linkItem.link} 
                  className="block text-black font-semibold tracking-widest text-sm uppercase py-2 border-b border-gray-300 hover:text-primary dark:text-gray-50"
                  onClick={() => setIsOpen(false)}
                >
                  {linkItem.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};
export default Navbar;