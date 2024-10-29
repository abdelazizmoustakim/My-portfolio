import React from 'react';
import ReactTypingEffect from 'react-typing-effect';
import { MdOutlineWorkOutline, MdSchool, MdWeb, MdDesignServices } from "react-icons/md";
import { Button } from '@mui/material';
const Services = () => {
  return (
    <div className='min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900 dark:text-white duration-200'>
      {/* Header Section */}
      <div className="w-full bg-primary bg-opacity-10 p-10 border-b-[0.5px] border-gray-300 dark:border-gray-700 shadow-lg">
        <div className="flex justify-center items-center">
          <a 
            className="flex items-center justify-center text-5xl sm:text-3xl font-bold font-poppins hover:text-primary transition-all duration-300 p-4 whitespace-nowrap" 
            href='/Resume'
          >
            <MdOutlineWorkOutline className="inline-block mr-2 text-5xl sm:text-3xl" />
            My Services
          </a>
        </div>
        {/* Typing effect */}
        <div className="flex justify-center items-center h-30 mt-5">
          <ReactTypingEffect
            text={"Below, you will find a comprehensive list of all the services I offer."}
            typingDelay={10}
            speed={70}
            eraseDelay={9999999}
            className="text-gray-700 text-3xl sm:text-xl mb-5 text-center dark:text-gray-300"
          />
        </div>
        <div className="flex justify-center items-center whitespace-nowrap text-2xl sm:text-lg italic text-gray mt-4 text-center sm:text-left flex-shrink-0 flex-shrink dark:text-gray-70">
           <Button variant="outlined" color="primary" className="mt-5 ml-10"  
           href="mailto:abdelaziz@azizmoustakim.com" 
           >
              Hire me
            </Button>
        </div>
      </div>
      
      {/* Services Section */}
      <div className="flex w-full flex-col md:flex-row">
        <div className="w-full md:w-1/2 p-10 border-b md:border-b-0 md:border-r-[1px] border-gray-300 dark:border-gray-700">
          <div className="text-center md:text-left">
            <MdSchool className="text-primary text-6xl mx-auto md:mx-0" />
            <h2 className="text-3xl font-bold mb-4 mt-4 text-primary">One-on-One Teaching</h2>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              Personalized one-on-one sessions to help you master programming and development. Whether you're a beginner or looking to advance, my goal is to provide clear guidance and actionable feedback.
            </p>
            <br />
            <Button variant="outlined" color="primary" className="mt-9" href=''>
              Learn More
            </Button>
          </div>
        </div>
        
        <div className="w-full md:w-1/2 p-10">
          <div className="text-center md:text-left">
            <MdWeb className="text-primary text-6xl mx-auto md:mx-0" />
            <h2 className="text-3xl font-bold mb-4 mt-4 text-primary">Landing Pages</h2>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              Beautiful, responsive landing pages designed to captivate your audience and drive conversions. Each design is crafted with modern aesthetics and usability in mind.
            </p>
            <br />
            <Button variant="outlined" color="primary" className="mt-5" href=''>
              View Portfolio
            </Button>
          </div>
        </div>
      </div>
      
      {/* Additional Services Section */}
      <div className="flex w-full flex-col md:flex-row mt-10">
        <div className="w-full md:w-1/2 p-10 border-b md:border-b-0 md:border-r-[1px] border-gray-300 dark:border-gray-700 ">
          <div className="text-center md:text-left">
            <MdDesignServices className="text-primary text-6xl mx-auto md:mx-0" />
            <h2 className="text-3xl font-bold mb-4 mt-4 text-primary">Custom Web Design</h2>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              High-quality web designs tailored to meet the needs of your business. My designs prioritize user experience, visual appeal, and functional excellence.
            </p>
            <br />
            <Button variant="outlined" color="primary" className="mt-5" href=''>
              Get Started
            </Button>
          </div>
        </div>
        
        <div className="w-full md:w-1/2 p-10">
          <div className="text-center md:text-left">
            <MdOutlineWorkOutline className="text-primary text-6xl mx-auto md:mx-0" />
            <h2 className="text-3xl font-bold mb-4 mt-4 text-primary">Consultation & Support</h2>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              Expert advice and support to help your projects succeed. I provide consultation services to troubleshoot, optimize, and enhance your development process.
            </p>
            <br />
            <Button variant="outlined" color="primary" className="mt-5" href=''>
              Contact Me
            </Button>
          </div>
        </div>
      </div>
      
      {/* Get a Free Quote Section */}
      <div className="w-full p-10 mt-10 bg-primary bg-opacity-10 rounded-lg shadow-lg dark:bg-gray-800 text-center">
        <h2 className="text-5xl font-bold text-primary mb-4" >Get a Free Quote</h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-8" 
        >
          Looking for a custom solution? Let's discuss your project and bring your vision to life.
        </p>
        <Button 
          variant="contained" 
          color="primary" 
          className="text-lg px-6 py-2"
          href="mailto:abdelaziz@azizmoustakim.com"
        >
          Request Quote
        </Button>
      </div>
    </div>
  );
};
export default Services;