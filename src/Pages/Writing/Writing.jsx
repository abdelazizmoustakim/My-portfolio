import React from 'react';
import ReactTypingEffect from 'react-typing-effect';
import { PiBooksDuotone } from "react-icons/pi";
import { Button } from '@mui/material';
const Writing = () => {
  return (
    <div className="min-h-screen flex flex-col  bg-gray-50 dark:bg-gray-900 dark:text-white duration-200">
      <div className="w-full bg-primary bg-opacity-10 p-10 sm:p-6 border-b-[0.5px] border-black shadow-none">
        {/* First Section */}
        <div className="flex justify-center items-center">
          <a 
            className="flex items-center justify-center text-5xl sm:text-3xl font-bold font-poppins hover:text-primary transition-all duration-300 p-4 whitespace-nowrap flex-shrink-0" 
            href='/Writing'
          >
            <PiBooksDuotone className="inline-block mr-2 text-5xl sm:text-3xl flex-shrink-0" />
            My Writing
          </a>
        </div>

        {/* Centering the typing effect */}
        <div className="flex justify-center items-center h-30">
          <ReactTypingEffect
            text={[
              "Explore my books and blogs, focusing on software engineering, computer science, and cutting-edge technology."
            ]}
            typingDelay={10}
            speed={60}
            eraseDelay={9999999} // Ensure the text stays without erasing
            className="text-gray-250 text-3xl sm:text-xl mb-5 text-center"
          />
        </div>
        <div className="flex justify-center items-center whitespace-nowrap text-2xl sm:text-lg italic text-gray mt-4 text-center sm:text-left flex-shrink-0 flex-shrink dark:text-gray-70">
           <Button variant="outlined" color="primary" className="mt-5 ml-10"  href="mailto:abdelaziz@azizmoustakim.com" >
              Hire me
            </Button>
        </div>
      </div>
    </div>
  );
};
export default Writing;