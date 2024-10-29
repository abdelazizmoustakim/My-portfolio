import React from 'react';
import { LiaChalkboardTeacherSolid } from "react-icons/lia";
import ReactTypingEffect from 'react-typing-effect';
import { Button } from '@mui/material';

const Courses = () => {
  return (
    <div className='min-h-screen flex flex-col bg-gray-50 bg-gray-50 dark:bg-gray-900 dark:text-white duration-200'>
    {/* First section with icon */}
    <div className="w-full bg-primary bg-opacity-10 p-10 border-b-[0.5px] border-black shadow-none">
        <div className="flex justify-center items-center">
          <a 
            className="flex items-center justify-center text-5xl sm:text-3xl font-bold font-poppins hover:text-primary transition-all duration-300 p-4 whitespace-nowrap flex-shrink-0" 
            href='/Resume'
        >
          <LiaChalkboardTeacherSolid className="inline-block mr-2 text-5xl sm:text-3xl flex-shrink-0" />
          My Courses
        </a>
      </div>
      {/* Typing effect */}
      <div className="flex justify-center items-center h-30">
        <ReactTypingEffect
          text={"Below, you will find a comprehensive list of all the courses I offer."}
          typingDelay={10}
          speed={70}
          eraseDelay={9999999}
          className="text-gray-250 text-3xl sm:text-xl mb-5 text-center"
        />
      </div>
      <div className="flex justify-center items-center whitespace-nowrap text-2xl sm:text-lg italic text-gray mt-4 text-center sm:text-left flex-shrink-0 flex-shrink dark:text-gray-70">
           <Button variant="outlined" color="primary" className="mt-5 ml-10" href="mailto:abdelaziz@azizmoustakim.com" >
              Hire me
            </Button>
        </div>
    </div>
  </div>
);
};
export default Courses;