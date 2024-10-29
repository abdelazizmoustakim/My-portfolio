import React, { useState, useEffect } from 'react';
import { FaNode, FaReact, FaAngular, FaSass } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiFlask, SiNextdotjs, SiTypescript } from "react-icons/si";
import { DiDjango, DiMongodb } from "react-icons/di";
import { TiPlus, TiMinus } from "react-icons/ti";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Technologies = () => {
  const [showTechnologies, setShowTechnologies] = useState(false);

  const toggleTechnologies = () => {
    setShowTechnologies(!showTechnologies);
  };

  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with a 2000ms duration for animations
  }, []);

  const icons = [
    { icon: <FaNode />, color: 'text-green-500' },
    { icon: <FaReact />, color: 'text-blue-600' },
    { icon: <FaAngular />, color: 'text-red-600' },
    { icon: <FaSass />, color: 'text-pink-500' },
    { icon: <RiTailwindCssFill />, color: 'text-blue-600' },
    { icon: <SiFlask />, color: 'text-black' },
    { icon: <SiNextdotjs />, color: 'text-gray-800' },
    { icon: <DiDjango />, color: 'text-green-800' },
    { icon: <DiMongodb />, color: 'text-green-600' },
    { icon: <SiTypescript />, color: 'text-blue-600' },
  ];

  return (
    <div>
      {/* Technologies Mastered */}
      <div className="block text-center text-4xl sm:text-1xl font-bold font-poppins transition-all duration-300 p-4 border-b-[0.5px] border-black shadow-none flex items-center justify-center sm:flex-shrink">
        Technologies Mastered
        <button onClick={toggleTechnologies} className="ml-4 text-primary">
          {showTechnologies ? <TiMinus /> : <TiPlus />}
        </button>
      </div>

      {showTechnologies && (
        <div className="w-full overflow-hidden py-10 relative border-b-[0.2px] border-black shadow-none bg-purple bg-opacity-10">
          {/* Animated Icons Row */}
          <div className="flex w-full space-x-20 animate-scrollIcons">
            {/* First set of icons */}
            {icons.map((iconObj, index) => (
              <div
                key={index}
                className={`text-8xl text-gray-700 hover:text-primary ${iconObj.color}`}
                data-aos="fade-right"
              >
                {iconObj.icon}
              </div>
            ))}
            {/* Duplicate the icons for seamless scrolling */}
            {icons.map((iconObj, index) => (
              <div
                key={index + icons.length}
                className={`text-8xl text-gray-700 hover:text-primary ${iconObj.color}`}
                data-aos="fade-right"
              >
                {iconObj.icon}
              </div>
            ))}
            {icons.map((iconObj, index) => (
              <div
                key={index + 2 * icons.length}
                className={`text-8xl text-gray-700 hover:text-primary ${iconObj.color}`}
                data-aos="fade-right"
              >
                {iconObj.icon}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Technologies;
