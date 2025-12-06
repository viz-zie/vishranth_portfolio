import React from "react";
// import frontendImg from '../../images/front-end.png';
import backendImg from "../../images/backend.png";
// import uiImg from '../../images/design.png';
// import appsImg from '../../images/apps.png';
import java from "../../images/java.svg";
import html from "../../images/html.svg";
import javascript from "../../images/javascript.svg";
import react from "../../images/react.svg";
import pyImage from "../../images/pyImage.png";
import figma from "../../images/figma.svg";
import mysql from "../../images/mysql.png";
import javaImage from "../../images/images_java3.png";
import github from "../../images/github.png";
import giticon from "../../images/giticon.png";

import { FaLinux } from "react-icons/fa";
import { MdOutlineSecurity } from "react-icons/md";
import { TbNetwork } from "react-icons/tb";
import { FaAws } from "react-icons/fa6";
import { SiQualys } from "react-icons/si";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'

// import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'
// // Specify all properties: name, family, style
// icon({name: 'user', family: 'classic', style: 'solid'})
// icon({name: 'user', family: 'classic', style: 'regular'})
// icon({name: 'twitter', family: 'classic', style: 'brands'})

// // 'classic' is the default family, you can leave that off
// icon({name: 'user', style: 'solid'})
// icon({name: 'user', style: 'regular'})
// icon({name: 'twitter', style: 'brands'})

// // 'solid' is the default style, you can leave that off
// icon({name: 'user'})

// module.exports = function (api) {
//   return {
//     plugins: ['macros'],
//   }
// }
// module.exports = {
//   'fontawesome-svg-core': {
//     'license': 'free'
//   }
// }

const Services = () => {
  return (
    <section id="services">
      <div className="container lg:pt-5">
        <div className="text-center">
          <h2 className="text-headingColor font-[800] text-[2.4rem] mb-5">
            Technical Skills
          </h2>
          <p className="lg:max-w-[600px] lg:max-auto justify-between text-headingcolor font-[500] text-[16px] leading-7 "></p>
        </div>

        <div className="flex flex-col justify-center sm:py-12">
          <div className="w-full px-2 py-3 sm:max-w-xl sm:mx-auto sm:px-0">
            <div className="relative text-sm antialiased font-semibold text-gray-700">
              {/* vertical line  */}
              <div className="absolute hidden w-1 h-full bg-indigo-300 sm:block left-1/2 transform-translate-x-1/2"></div>

              {/* left card */}
              <div className="mt-6 sm:mt-0 sm:mb-12">
                <div className="flex flex-col items-center sm:flex-row">
                  <div className="flex items-center justify-start w-full mx-auto">
                    <div className="w-full sm:w-1/2 sm:pr-8">
                      <div
                        data-aos="fade-right"
                        data-aos-duration="1200"
                        className="flex justify-center gap-3 p-4 duration-150 ease-in bg-white rounded shadow cursor-pointer group"
                      >
                        <FaLinux size={40} />
                        <h3 className="flex items-center text-[20px] group-hover:">
                          Linux & OS Fundamentals
                        </h3>
                      </div>
                    </div>
                  </div>

                  <div className="absolute flex items-center justify-center w-10 h-10 transform -translate-x-1/2 -translate-y-4 bg-black border-4 border-white rounded-full left-1/2 sm:translate-y-0">
                    <figure>
                      <img src={backendImg} alt="" />
                    </figure>
                  </div>
                </div>
              </div>

              {/* right card */}

              <div className="mt-6 sm:mt-0 sm:mb-12">
                <div className="flex flex-col items-center sm:flex-row">
                  <div className="flex items-center justify-end w-full mx-auto">
                    <div className="w-full sm:w-1/2 sm:pl-8">
                      <div
                        data-aos="fade-left"
                        data-aos-duration="1200"
                        className="flex justify-center gap-3 p-4 duration-150 ease-in bg-white rounded shadow cursor-pointer group"
                      >
                        <MdOutlineSecurity size={40} />
                        <h3 className="flex items-center text-[20px] group-hover:">
                          Security Fundamentals
                        </h3>
                      </div>
                    </div>
                  </div>

                  <div className="absolute flex items-center justify-center w-10 h-10 transform -translate-x-1/2 -translate-y-4 bg-black border-4 border-white rounded-full left-1/2 sm:translate-y-0">
                    <figure>
                      <img src={backendImg} alt="" />
                    </figure>
                  </div>
                </div>
              </div>

              {/* left card */}
              <div className="mt-6 sm:mt-0 sm:mb-12">
                <div className="flex flex-col items-center sm:flex-row">
                  <div className="flex items-center justify-start w-full mx-auto">
                    <div className="w-full sm:w-1/2 sm:pr-8">
                      <div
                        data-aos="fade-right"
                        data-aos-duration="1200"
                        className="flex justify-center gap-3 p-4 duration-150 ease-in bg-white rounded shadow cursor-pointer group"
                      >
                        <TbNetwork size={40} />
                        <h3 className="flex items-center text-[20px] group-hover:">
                          Network Fundamentals
                        </h3>
                      </div>
                    </div>
                  </div>

                  <div className="absolute flex items-center justify-center w-10 h-10 transform -translate-x-1/2 -translate-y-4 bg-black border-4 border-white rounded-full left-1/2 sm:translate-y-0">
                    <figure>
                      <img src={backendImg} alt="" />
                    </figure>
                  </div>
                </div>
              </div>

              {/* right card */}
              <div className="mt-6 sm:mt-0 sm:mb-12">
                <div className="flex flex-col items-center sm:flex-row">
                  <div className="flex items-center justify-end w-full mx-auto">
                    <div className="w-full sm:w-1/2 sm:pl-8">
                      <div
                        data-aos="fade-left"
                        data-aos-duration="1200"
                        className="flex justify-center gap-3 p-4 duration-150 ease-in bg-white rounded shadow cursor-pointer group"
                      >
                        <FaAws size={40} />
                        <h3 className="flex items-center text-[20px] group-hover:">
                          Cloud Fundamentals
                        </h3>
                      </div>
                    </div>
                  </div>

                  <div className="absolute flex items-center justify-center w-10 h-10 transform -translate-x-1/2 -translate-y-4 bg-black border-4 border-white rounded-full left-1/2 sm:translate-y-0">
                    <figure>
                      <img src={backendImg} alt="" />
                    </figure>
                  </div>
                </div>
              </div>

              {/* left card */}
              <div className="mt-6 sm:mt-0 sm:mb-12">
                <div className="flex flex-col items-center sm:flex-row">
                  <div className="flex items-center justify-start w-full mx-auto">
                    <div className="w-full sm:w-1/2 sm:pr-8">
                      <div
                        data-aos="fade-right"
                        data-aos-duration="1200"
                        className="flex justify-center gap-3 p-4 duration-150 ease-in bg-white rounded shadow cursor-pointer group"
                      >
                        <SiQualys size={40} />
                        <h3 className="flex items-center text-[20px] group-hover:">
                          Vulnerability Management
                        </h3>
                      </div>
                    </div>
                  </div>

                  <div className="absolute flex items-center justify-center w-10 h-10 transform -translate-x-1/2 -translate-y-4 bg-black border-4 border-white rounded-full left-1/2 sm:translate-y-0">
                    <figure>
                      <img src={backendImg} alt="" />
                    </figure>
                  </div>
                </div>
              </div>

              {/* right card */}
              <div className="mt-6 sm:mt-0 sm:mb-12">
                <div className="flex flex-col items-center sm:flex-row">
                  <div className="flex items-center justify-end w-full mx-auto">
                    <div className="w-full sm:w-1/2 sm:pl-8">
                      <div
                        data-aos="fade-left"
                        data-aos-duration="1200"
                        className="flex justify-center gap-3 p-4 duration-150 ease-in bg-white rounded shadow cursor-pointer group"
                      >
                        <SiQualys size={40} />
                        <h3 className="flex items-center text-[20px] group-hover:">
                          Security Asset Management
                        </h3>
                      </div>
                    </div>
                  </div>

                  <div className="absolute flex items-center justify-center w-10 h-10 transform -translate-x-1/2 -translate-y-4 bg-black border-4 border-white rounded-full left-1/2 sm:translate-y-0">
                    <figure>
                      <img src={backendImg} alt="" />
                    </figure>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
