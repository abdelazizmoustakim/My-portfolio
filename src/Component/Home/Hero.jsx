import React, { useEffect, useState  } from 'react';
import { FaGithub, FaEnvelope, FaInstagram, FaTwitter, FaNewspaper } from 'react-icons/fa'; 
import { SiBuymeacoffee } from 'react-icons/si';
import { SiSkillshare } from "react-icons/si";
import ReactTypingEffect from 'react-typing-effect';
import { ReactTyped } from "react-typed";
import image from './image1.jpg';
import { SiFiverr } from "react-icons/si";
import { TbBrandUpwork } from "react-icons/tb";
import { SiFreelancer } from "react-icons/si";
const Hero = () => {
  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-50 dark:bg-gray-900 dark:text-white duration-200">
      {/* First Section: Full-Width with Transparent Background */}
      <div className="w-full bg-primary bg-opacity-10 p-10 border-b-[0.5px] border-black shadow-none">
        {/* Circular Photo */}
        <div className="flex flex-col items-center">
          <div className="w-32 h-32 mb-3 relative">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-300 to-purple-500 opacity-50 blur-md" />
              <img
                  src={image}
                  alt="Profile"
                  className="rounded-full w-full h-full object-cover border-4 border-white dark:border-gray-600 shadow-lg relative z-10"
              />
          </div>
          <br />
          {/* Typing Effect for Description */}
          <div className="w-full text-center">
            <a className="text-gray-600 font-semibold tracking-widest text-4xl sm:text-4xl text-center hover:text-primary mb-5 dark:text-gray-200 dark:hover:text-primary">
              <span className="block sm:inline">Abdelaziz</span> {/* Responsive adjustment */}
              <span className="block sm:inline">Moustakim</span> {/* Responsive adjustment */}
            </a> 
              <br className='s:hidden'/>
              <br />
            <a href="/Resume" className="hover:cursor-pointer">
              <ReactTyped
                strings={[
                  "I am an <span class='text-primary text-1xl'>aspiring software engineer</span> and <span class='text-primary text-1xl'>Full-Stack Developer</span>, currently studying <span class='text-primary text-1xl'>Computer Science</span> with a strong passion for technology."
                ]}
                typeSpeed={50}
                onComplete={(self) => self.cursor.remove()} // Optional: remove the cursor after typing
                className="text-gray-500 text-2xl mb-5 dark:text-gray-400"
                style={{ fontFamily: 'Quicksand, sans-serif' }} // Default font for the main text
              />
            </a>
            <br />
            <br />
            <div>
              <br />
              <ReactTypingEffect
                text={[
                  "I’m a content creator in the tech space.",
                  "I'm a lifelong computer science student and tech entrepreneur.",
                ]}
                typingDelay={8000}
                speed={60}
                eraseDelay={2500}
                className="text-black-600 text-1xl mb-5 text-2xl text-black mt-4 dark:text-blue-100"
                />
            </div>
            <p className="italic text-2xl text-gray mt-4 dark:text-yellow-50">
              "I write clean code."
            </p>
          </div>
        </div>
      </div>
      {/* Adjust layout for smaller screens */}
      <div className="mt-10 flex flex-col md:flex-row max-w-4xl mx-auto space-y-10 md:space-y-0">
        {/* More About Me Section */}
      <div className="md:flex-2 md:flex md:flex-col md:text-left">
        <h2 className="text-2xl font-bold mb-4 ml-3 text-gray-700 dark:text-gray-400" >More About Me</h2>
        <p className="text-gray-600 text-1xl mb-4 text-left ml-3 dark:text-gray-100">
          I am currently studying at an <a className="text-third font-bold" href='/Resume'>American-accredited university</a>, where I enjoy learning about <a className="text-third font-bold" href='/Resume'>computer science</a>. I started coding at <a className="text-third font-bold" href="/Resume">17 years old</a>, and to this day I'm still impressed by the <a className="text-third font-bold" href='/Services'>endless possibilities of technology</a>.
        </p>
        <p className="text-gray-600 text-1xl mb-4 text-left ml-3 dark:text-gray-100">
          I am <a className="text-third font-bold" href='/Resume'>curious</a>, <a className="text-third font-bold" href='/Resume'>ambitious</a>, <a className="text-third font-bold" href='/Resume'>personable</a>, and always eager to learn and grow. My passion for <a className="text-third font-bold" href='/Resume'>software</a> motivates me to create <a className="text-third font-bold" href='/Resume'>innovative solutions</a> that help people and contribute positively to the <a className="text-third font-bold" href='/Resume'>tech community</a>. As a lifelong learner and content creator in the tech space, I love teaching others what I have learned over the years and encouraging collaboration. I’m driven by using technology to create meaningful solutions to <a className="text-third font-bold" href='/Resume'>real-world problems</a>, but I also think those solutions will be driven by people sharing what they know throughout the tech space.
        </p>
        <p className="text-gray-600 text-1xl mb-4 text-left ml-3 dark:text-gray-100" >
          The tech world can be <a className="text-third font-bold" href='/Resume'>competitive</a>; however, I think many people, including myself, want to see it become more <a className="text-third font-bold" href='/Resume'>cooperative</a> and <a className="text-third font-bold" href='/Resume'>collaborative</a>. We have the ability to fix problems everyone faces, and we should all understand what a great responsibility that is.
        </p>
      </div>
        {/* Vertical Line for larger screens */}
        <div className="hidden md:block w-px bg-gray-300 mx-4"></div>

        {/* Contact Me Section */}
        <div className="hidden md:flex flex flex-col items-start ">
        <h2 className="text-2xl font-bold mb-4 text-center text-gray-700 dark:text-gray-400" >Contact</h2>
          <div className="flex flex-col items-start space-y-4">
            {[
              { href: "https://github.com/abdelazizmoustakim", label: "GitHub", icon: <FaGithub /> },
              { href: "mailto:abdelaziz@azizmoustakim.com", label: "Email", icon: <FaEnvelope /> },
              { href: "https://twitter.com/code_withabdo", label: "X (Twitter)", icon: <FaTwitter /> },
              { href: "https://www.instagram.com/code_withabdo/", label: "Instagram", icon: <FaInstagram /> },
              { href: "https://substack.com/@codewithabdo", label: "Substack", icon: <FaNewspaper /> },
              { href: "", label: "Skillshare", icon: <SiSkillshare /> },
              { href: "https://buymeacoffee.com/code_withabdo", label: "Fiverr", icon: <SiFiverr /> },
              { href: "https://www.upwork.com/freelancers/~01c0ce3652498ab140?mp_source=share", label: "Upwork", icon: <TbBrandUpwork /> },
              { href: "https://www.freelancer.com/u/azizmous", label: "Freelancer", icon: <SiFreelancer /> },
              { href: "https://buymeacoffee.com/code_withabdo", label: "Buy Me a Coffee", icon: <SiBuymeacoffee /> }
            ].map(({ href, label, icon }) => (
              <a 
                key={label}
                href={href}
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center text-gray-900 hover:text-primary transition duration-200 space-x-2 w-full justify-start dark:text-primary dark:hover:text-gray-100"
              >
                <span className="text-3xl dark:text-primary dark:hover:text-gray-100">{icon}</span>
                <span className="text-lg">{label}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
      {/* Quote Section */}
      <div className="w-full text-center mt-16 mb-10">
        <p className="italic text-2xl text-gray-700 mb-2 dark:text-yellow-50">
          "Any sufficiently advanced technology is indistinguishable from magic."
        </p>
        <p className="text-lg text-gray-600 dark:text-yellow-50" >– Arthur C. Clarke</p>
      </div>
       <div className="w-full text-center mt-16 mb-10">
        <div 
          className="text-center p-8 rounded-lg transition-all duration-500 from-primary to-blue-500"
        >
          <p className="text-3xl font-bold text-gray-600 mb-4 dark:text-gray-50">
            Let's Work Together!
          </p>
          <a 
            href="mailto:abdelaziz@azizmoustakim.com" 
            className="text-xl text-gray-600 hover:text-primary font-poppins transition-all duration-300 dark:text-gray-100 dark:hover:text-primary"
          >  
            Contact me at{' '}
            <span className="font-semibold text-1xl text-primary hover:text-gray-600">
              abdelaziz@azizmoustakim.com
            </span>
          </a>
          <p className="text-xl text-gray-70 mt-2 ">
            For any business inquiries or collaborations.
          </p>
        </div>
      </div>
    </div>
  );
};
export default Hero;