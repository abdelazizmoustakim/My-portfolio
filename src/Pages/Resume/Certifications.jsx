import React, { useState } from 'react';
import { TiPlus, TiMinus } from "react-icons/ti";
import { SiComptia } from "react-icons/si";
import { FaAws, FaSalesforce } from "react-icons/fa";

const Certifications = () => {


  return (
    <div>
      {/* Certifications Section */}
      <div className="block text-center text-4xl sm:text-1xl font-bold font-poppins transition-all duration-300 p-4 border-b-[0.5px] border-black shadow-none flex items-center justify-center sm:flex-shrink bg-gray-50 dark:bg-gray-900 dark:text-white duration-200">
        Certifications
      </div>
        <div className="mt-10 flex justify-between items-center px-10 w-full">
          {/* Certification 1 */}
          <div className="flex flex-col items-center text-center w-1/3">
            <SiComptia className="text-9xl text-red-500 mb-4 hover:text-red-600 transition-colors duration-300 hover:cursor-pointer" />
            <a
              href="https://www.comptia.org/certifications/security"
              target="_blank"
              rel="noopener noreferrer"
              className="text-1xl font-bold text-black hover:text-blue-800 transition-colors duration-300 hover:cursor-pointer"
            >
              CompTIA Security+
            </a>
          </div>

          {/* Vertical Line */}
          <div className="h-40 border-l-4 border-gray-300"></div>

          {/* Certification 2 */}
          <div className="flex flex-col items-center text-center w-1/3">
            <FaAws className="text-9xl text-orange-500 mb-4 hover:text-orange-600 transition-colors duration-300 hover:cursor-pointer" />
            <a
              href="https://aws.amazon.com/certification/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-1xl font-bold text-black hover:text-blue-800 transition-colors duration-300"
            >
              AWS Certified
            </a>
          </div>

          {/* Vertical Line */}
          <div className="h-40 border-l-4 border-gray-300"></div>

          {/* Certification 3 */}
          <div className="flex flex-col items-center text-center w-1/3">
            <FaSalesforce className="text-9xl text-blue-500 mb-4 hover:text-blue-600 transition-colors duration-300 hover:cursor-pointer" />
            <a
              href="https://trailhead.salesforce.com/en/credentials/administrator"
              target="_blank"
              rel="noopener noreferrer"
              className="text-1xl font-bold text-black hover:text-blue-800 transition-colors duration-300 hover:cursor-pointer"
            >
              Salesforce Administrator
            </a>
          </div>
        </div>
    </div>
  );
};
export default Certifications;