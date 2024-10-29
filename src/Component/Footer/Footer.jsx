import React from 'react';
import { FaGithub, FaEnvelope, FaInstagram, FaTwitter, FaNewspaper } from 'react-icons/fa'; // Import necessary icons
import { SiBuymeacoffee } from 'react-icons/si'; // Import SiBuymeacoffee

const Footer = () => {
  return (
    <footer className="flex flex-col md:flex-row justify-between items-center p-4  bg-white dark:bg-gray-900 dark:text-white duration-200 ">
      <div className="text-gray-600 text-sm text-center md:text-left">
        © 2024 Abdelaziz Moustakim
      </div>
      <div className="flex space-x-4 mt-2 md:mt-0">
        <a 
          href="https://github.com/abdelazizmoustakim" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-gray-600 hover:text-blue-600"
        >
          <FaGithub />
        </a>
        <a 
          href="mailto:abdelaziz@azizmoustakim.com" 
          className="text-gray-600 hover:text-blue-600"
        >
          <FaEnvelope />
        </a>
        <a 
          href="https://twitter.com/code_withabdo" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-gray-600 hover:text-blue-600"
        >
          <FaTwitter />
        </a>
        <a 
          href="https://instagram.com/code_withabdo" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-gray-600 hover:text-blue-600"
        >
          
          <FaInstagram />
        </a>
        <a 
          href="https://substack.com/@codewithabdo" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-gray-600 hover:text-blue-600"
        >
          <FaNewspaper />
        </a>
        <a 
          href="https://buymeacoffee.com/code_withabdo" 
          target="_blank"
          
          rel="noopener noreferrer" 
          className="text-gray-600 hover:text-blue-600"
        >
          <SiBuymeacoffee />
        </a>
      </div>
    </footer>
  );
};
export default Footer;