import React, { useEffect, useState  } from 'react';
import { FaGithub, FaEnvelope,   FaNode, FaReact, FaAngular, FaSass } from "react-icons/fa";
import {   FaInstagram, FaTwitter, FaNewspaper } from 'react-icons/fa'; // Use FaNewspaper for Substack
import { SiBuymeacoffee } from 'react-icons/si'; // Import SiBuymeacoffee
import { SiSkillshare } from "react-icons/si";
import { SiFlask, SiNextdotjs, SiTypescript } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { DiDjango, DiMongodb } from "react-icons/di";
import ReactTypingEffect from 'react-typing-effect';
import AOS from 'aos';
import 'aos/dist/aos.css';
const Technologie = () => {
    useEffect(() => {
        AOS.init({ duration: 2000 }); // Initialize AOS with a 2000ms duration for animations
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
      
    )
}
export default Technologie;