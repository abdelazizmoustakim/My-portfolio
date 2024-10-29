import React from 'react';
import ReactTypingEffect from 'react-typing-effect';
import { FaLaptopCode } from "react-icons/fa6";
import { Button } from '@mui/material';

const data = [
  {
    id: 1,
    title: 'BUYHIVE',
    img: 'https://via.placeholder.com/100', 
    description: 'A B2B e-commerce platform for streamlined procurement.',
    link: 'https://buyhive.com',
  },
  {
    id: 2,
    title: 'SKYCAST',
    img: 'https://via.placeholder.com/100', 
    description: 'Weather forecasting app with real-time updates.',
    link: 'https://skycast.app',
  },
  {
    id: 3,
    title: 'My Portfolio',
    img: 'https://via.placeholder.com/100', 
    description: 'Showcasing my web development projects and achievements.',
    link: '/portfolio',
  },
  {
    id: 4,
    title: 'Babycryptos',
    img: 'https://via.placeholder.com/100', 
    description: 'A platform to learn crypto investments safely.',
    link: 'https://babycryptos.com',
  },
];

const Projects = () => {
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
        {/* Projects List */}
        <div className="space-y-8">
          {data.map((project) => (
            <div
              key={project.id}
              className="flex flex-col items-center text-center rounded-lg p-5 border-b border-gray-300 dark:border-gray-700"
            >
              {/* Image and Title Row */}
              <div className="flex items-center mb-2">
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-20 h-20 object-cover mr-4"
                />
                <h2 className="text-2xl font-semibold">{project.title}</h2>
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline mb-2 ml-9"
              >
                {project.link}
              </a>
              <p className="text-gray-700 dark:text-gray-300">{project.description}</p>
              <hr className=" mt-4 border-gray-300 dark:border-gray-700" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Projects;