import React from 'react';
import ReactTypingEffect from 'react-typing-effect';
import { FaLaptopCode, FaReact, FaNodeJs, FaDatabase, FaArrowRight } from "react-icons/fa6";
import { TbBrandNextjs } from "react-icons/tb";
import { Button } from '@mui/material';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const data = [
  {
    id: 1,
    title: 'BUYHIVE',
    img: 'https://via.placeholder.com/100',
    description: `BUYHIVE is an e-commerce landing page for selling electronic products, built with React, Tailwind CSS, and Redux for state management.`,
    link: 'https://buyhive1.netlify.app/',
  },
  {
    id: 2,
    title: 'SKYCAST',
    img: 'https://via.placeholder.com/100',
    description: `SKYCAST is a weather app offering real-time weather updates and forecasts. Built with Next.js, React, TypeScript, and Redux, it uses advanced meteorological data for hyper-local predictions.`,
    link: 'https://skycast.app',
  },
  {
    id: 3,
    title: 'My Portfolio',
    img: 'https://via.placeholder.com/100',
    description: `This portfolio website showcases my skills, projects, and experience. It’s built with React, Tailwind CSS, Node.js, Material UI, and Bootstrap to highlight both full-stack and front-end development projects.`,
    link: '/portfolio',
  },
  {
    id: 4,
    title: 'Babycryptos',
    img: 'https://via.placeholder.com/100',
    description: `Babycryptos is a cryptocurrency application providing live market data and news, built with Next.js, React, and Tailwind CSS.`,
    link: 'https://babycryptos.com',
  },
];


const Projects = () => {
  const chartData = [
    { name: 'React', value: 35 },
    { name: 'Node.js', value: 45},
    { name: 'SQL', value: 15 },
    { name: 'Next.js', value: 20 },
  ];

  return (
    <div className="min-h-screen flex bg-gray-50 dark:bg-gray-900 dark:text-white duration-200">
      <div className="w-full">
        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-12 bg-primary bg-opacity-10 p-10 sm:p-6">
          <a
            className="flex items-center text-5xl sm:text-3xl font-bold font-poppins hover:text-primary transition-all duration-300 p-4"
            href="/Resume"
          >
            <FaLaptopCode className="inline-block mr-2 text-5xl sm:text-3xl" />
            My Projects
          </a>
          <ReactTypingEffect
            text={"Below, you will find a comprehensive list of all the projects I did in the past."}
            typingDelay={10}
            speed={70}
            eraseDelay={9999999}
            className="text-gray-250 text-3xl sm:text-xl mb-5"
          />
          <Button
            variant="outlined"
            color="primary"
            className="mt-5"
            href="mailto:abdelaziz@azizmoustakim.com"
          >
            Hire me
          </Button>
        </div>
        {/* Centered Header for Projects */}
        <div className="flex justify-center mb-6">
          <h1 className="dark:text-gray-400 text-gray-600 font-semibold tracking-widest text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl uppercase ">My Full-Stack Projects</h1>
        </div>
        {/* Projects List */}
        <div className="flex mt-10 relative p-6">
          {/* Vertical Line with Rocket Icons */}
          <div className="absolute left-0 top-0 h-full flex flex-col justify-between items-center ml-10">
            <FaLaptopCode className="text-4xl sm:text-3xl text-primary ml-10" />
            <div className="h-full border-l-2 border-gray-400 ml-10 mb-30"></div>
            <FaLaptopCode className="text-4xl sm:text-3xl text-primary ml-10" />
          </div>
          {/* Project Sections */}
          <div className="flex flex-col ml-20">
            {data.map((project) => (
              <div key={project.id} className="flex items-start mb-10 ml-7">
                <div className="relative flex-shrink-0 mr-4">
                  {/* Add project image here if needed */}
                </div>
                {/* Project Details */}
                <div className="flex flex-col">
                  <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                  <p className="text-lg mb-2">{project.description}</p>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    Learn more
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
        <br />
      {/* Chart Section */}
      <div className="flex justify-center mb-6">
          <h1 className="dark:text-gray-400 text-gray-600 font-semibold tracking-widest text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl uppercase ">My Software Engineering projects </h1>
        </div>
        {/* Projects List */}
        <div className="flex mt-10 relative p-6">
          {/* Vertical Line with Rocket Icons */}
          <div className="absolute left-0 top-0 h-full flex flex-col justify-between items-center ml-10">
            <FaLaptopCode className="text-4xl sm:text-3xl text-primary ml-10" />
            <div className="h-full border-l-2 border-gray-400 ml-10 mb-30"></div>
            <FaLaptopCode className="text-4xl sm:text-3xl text-primary ml-10" />
          </div>
        </div>

      </div>
    </div>
  );
};
export default Projects;