import React, { useEffect } from 'react';
import { TiPlus, TiMinus } from "react-icons/ti";
import { IoMdRocket } from "react-icons/io";
import { FaAws } from "react-icons/fa";
import { LiaSalesforce } from "react-icons/lia";
import AOS from 'aos';
import { SiComptia } from "react-icons/si";
import { FaUniversity } from "react-icons/fa";
import { VscBracketDot } from "react-icons/vsc";
import { FaSchool } from "react-icons/fa6";
import { FaPersonRunning } from "react-icons/fa6";
import { SiBuymeacoffee } from "react-icons/si";


import 'aos/dist/aos.css';
const Education = () => {
  // Initialize AOS
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);
  const iconComptia = <SiComptia className="text-8xl text-red-600" />; // Styled icon
  const iconUni = <FaUniversity className="text-8xl text-green-600"/>
  const iconGomycode = <VscBracketDot className='text-8xl text-primary'/>
  const iconHighschool = <FaSchool  className='text-8xl text-yellow-300' />
  return (
    <div className="p-6">
      {/* Educational Background Section */}
      <div className="block text-center text-4xl sm:text-2xl font-bold font-poppins transition-all duration-300 p-4 border-b-[0.5px] border-black shadow-none flex items-center justify-center sm:flex-shrink">
        Educational Background
      </div>
      <div className="flex mt-10">
        <div className="relative flex-grow">
          {/* Vertical Line with Rocket Icons */}
          <div className="absolute left-0 h-full flex flex-col justify-between items-center">
            <IoMdRocket className="text-4xl sm:text-3xl text-primary rotate-180" />
            <div className="h-full border-l-2 border-gray-400"></div>
            <IoMdRocket className="text-4xl sm:text-3xl text-primary rotate-180" />
          </div>
          {/* Education Sections: Responsive Layout */}
          {[{
            title: "High School Diploma in Economics",
            date: iconHighschool,
            description: "I graduated from a prestigious high school in 2022, where I developed a solid foundation in economic principles and critical thinking.",
            list: []
          }, {
            title: "Coding School in Morocco",
            date: iconGomycode,
            description: "I recently completed a software development program at GoMyCode in Morocco, specializing in modern technologies.",
            list: [
              "React.js",
              "Angular",
              "TypeScript",
              "SASS and CSS",
              "Tailwind CSS",
              "Node.js",
              "Express.js",
              "MongoDB",
              "APIs and Microservices"
            ]
          }, {
            title: "Accredited American University - Computer Science",
            date: iconUni,
            description: "I am pursuing a Bachelor's degree in Computer Science with a focus on Software Engineering and Software Development.",
            list: [
              "Data Structures and Algorithms",
              "Software Design and Architecture",
              "Machine Learning and AI",
              "Web Development and Cloud Computing",
              "Mobile Application Development",
              "Cybersecurity Principles"
            ]},
            {
              title: "CompTIA Security+",
              date: iconComptia ,
              description: "I hold the CompTIA Security+ certification, which has equipped me with foundational skills in IT security and risk management. This certification has provided me with knowledge of critical security concepts, essential for pursuing a career in cybersecurity.",
              list: [
                "Network Security",
                "Compliance and Operational Security",
                "Threats and Vulnerabilities",
                "Application, Data, and Host Security",
                "Access Control and Identity Management",
                "Cryptography",
                "Risk Management"
              ]
          }].map((section, index) => (
            <div key={index} className="flex flex-col mb-10 mx-4 relative ml-7">
              <div className="flex items-center">
                <h3 className="block text-center text-1xl sm:text-xl font-bold font-poppins hover:text-primary transition-all duration-300 p-4 flex-shrink">
                  {section.title}
                </h3>
                <span className="text-sm text-gray-500 ml-2">{section.date}</span>
              </div>
              <div className="mt-2 dark:text-yellow-50 text-lg sm:text-base">
                <p>{section.description}</p>
                {section.list.length > 0 && (
                  <ul className="list-disc ml-5 mt-2">
                    {section.list.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Certifications Section */}
      {/* <div className="mt-16">
        <div data-aos="fade-up" className="block text-center text-4xl sm:text-1xl font-bold font-poppins transition-all duration-300 p-4 border-b-[0.5px] border-black shadow-none flex items-center justify-center sm:flex-shrink">
          Certifications
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 text-center">
          {[{
            title: "CompTIA Security+",
            icon: <SiComptia className="text-5xl text-primary" />,
            date: ""
          }, 
          {
            title: "Salesforce Certified Administrator",
            icon: <LiaSalesforce className="text-5xl text-primary" />,
            date: ""
          },
          {
            title: "AWS Certified Solutions Architect",
            icon: <FaAws className="text-5xl text-primary" />,
            date: ""
          }].map((cert, index) => (
            <div key={index} data-aos="zoom-in" className="rounded-lg p-6 transition-all duration-300 ">
              {cert.icon}
              <h3 className="mt-4 text-2xl sm:text-xl font-bold text-gray-700">{cert.title}</h3>
              <span className="text-sm text-gray-500">{cert.date}</span>
            </div>
          ))}
        </div>
      </div> */}
      <div className="w-full flex flex-col items-center mt-16 mb-10 p-6 from-blue-500 to-purple-500 rounded-lg shadow-lg border-t-[0.5px] dark:border-white shadow-none">
          <FaPersonRunning className='text-9xl text-green-600 transform transition duration-500 hover:scale-110' /> {/* Adjust size to your preference */}
          <p className="text-4xl font-bold dark:text-white mb-2 dark:text-yellow-50 text-center mt-4">
              Running towards more achievement
          </p>
          <hr className="w-1/2 border-t-2 dark:border-white mt-4 mb-4" />
          <p className="text-lg dark:text-gray-200 text-center">
              Your support can make a significant impact on my journey. If you appreciate my work and wish to contribute, please consider supporting me.
              <a 
                  href="https://buymeacoffee.com/code_withabdo" // Replace with your actual Buy Me a Coffee link
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center mt-2 text-yellow-400 hover:text-yellow-300 transition duration-200 "
              >
                  <SiBuymeacoffee className="text-5xl duration-500 mr-1 hover:scale-110" /> Support My Work on Buy Me a Coffee
              </a>
          </p>
      </div>
    </div>
  );
};
export default Education;