import React from "react";
// import heroImg from '../../images/hero.svg';
// import frontimageImg from '../../images/frontimage.svg';
import vishranth from "../../images/hero7.png";
// import nodedotjsImg from '../../images/nextdotjs.svg';

import CountUp from "react-countup";
import { FaAws } from "react-icons/fa";
import { SiQualys } from "react-icons/si";

const Hero = () => {
  const [title, setTitle] = React.useState("Vishranth | Portfolio");
  React.useEffect(() => {
    setTitle((document.title = title));
  }, [window.onload]);

  return (
    <section className="pt-0 m-10" id="about">
      <div className="container pt-40 pb-24">
        <div className="items-center justify-between md:flex sm:flex-col md:flex-row">
          {/* her left start */}
          <div className="w-full md:basis-1/2">
            <h5
              data-aos="fade-right"
              data-aos-duration="1500"
              className="text-headingColor font-[600]
                        text-[25px]"
            >
              Hi,
            </h5>

            <h1
              data-aos="fade-right"
              data-aos-duration="1500"
              className="text-headingColor font-[800]
                        text-[1.8rem] sm-text[40px] leading-[35px] sm:leading-[46px] mt-5"
            >
              I'm Vishranth Karthikheyan
            </h1>

            <h1
              data-aos="fade-right"
              data-aos-duration="1500"
              className="text-headingColor font-[400]
                        text-[1.8rem] sm-text[40px] leading-[35px] sm:leading-[46px] mt-5"
            >
              {" "}
              Cybersecurity Consultant
            </h1>

            <div
              data-aos="fade-right"
              data-aos-duration="1500"
              data-aos-delay="150"
              className="flex items-center gap-6 mt-7"
            >
              <a href="#contact">
                <button
                  className="flex items-center gap-2 bg-black text-white font-[600] border border-solid
             py-2 px-4 rounded-[8px] max-h-[40px] hover:bg-smallTextColor ease-in duration-100"
                >
                  <i class="ri-mall-line"></i>Hire Me
                </button>
              </a>

              <a
                href="#portfolio"
                className="text-smallTextColor font-[600] text-[16px] border-b border-solid border-smallTextColor"
              >
                See Portfolio
              </a>
            </div>

            <p
              data-aos="fade-left"
              data-aos-duration="1500"
              className="flex gap-2 text-headingColor mt-12 font-[500] text-[15px] leading-7 sm:pl-14 sm:pr-10"
            >
              <span class="ri-apps-2-line"></span>
              <b>
                Hey there! I’m a cybersecurity consultant who somehow turned
                clicking suspicious links (for research, obviously) into a
                legitimate career. When I’m not hunting vulnerabilities, I’m
                probably googling things I should already know. I approach
                security with equal parts logic, curiosity, and a steady
                commitment to learning. This space showcases the skills I’ve
                built and the challenges I enjoy solving.
              </b>
            </p>
            <div className="flex items-center gap-9 mt-14">
              <span className="text-smallTextColor text-[20px] font-[600]">
                Connect
              </span>
              <span>
                <a
                  title="instagram"
                  target="_blank"
                  href="https://www.instagram.com/vishranth__/"
                  className="text-smallTextColor text-[25px] font-[600]"
                >
                  <i class="ri-instagram-fill"></i>
                </a>
              </span>
             
              <span>
                <a
                  title="github"
                  target="_blank"
                  href="https://github.com/viz-zie"
                  className="text-smallTextColor text-[25px] font-[600]"
                >
                  <i class="ri-github-line"></i>
                </a>
              </span>
              <span>
                <a
                  title="LinkedIn"
                  target="_blank"
                  href="https://www.linkedin.com/in/vishranth-karthikheyan-5b63b0227/"
                  className="text-smallTextColor text-[25px] font-[600]"
                >
                  <i class="ri-linkedin-box-fill"></i>
                </a>
              </span>
            </div>
          </div>
          {/* hero left end */}

          {/* hero img */}
          <div className="mt-10 basis-1/3 sm:mt-0">
            <figure className="flex items-center justify-center ">
              <img className="vishimage" src={vishranth} alt="" />
            </figure>
          </div>
          {/* hero img end */}

          {/* hero image content right */}
          <div className="flex flex-wrap justify-between gap-3 mt-10 text-center md:basis-1/5 md:mt-0 md:flex-col md:justify-end md:text-end">
            <div className="flex justify-center">
              <span>
                <SiQualys size={80} />

              </span>
              
            </div>
            <div className="flex justify-center">
              <span>
                
                <FaAws size={80} />
              </span>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
