"use client";


import React, { useEffect, useRef } from "react";
import "./PortfolioHome.css";
import { wrap } from "framer-motion";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { IoIosContact } from "react-icons/io";
import Spotlight from "../SpotlighBorder";



// Define the type for the spotlightRef


const Home: React.FC = () => {

  const spotlightRef = useRef(null);

  useEffect(() => {
    if (spotlightRef.current) {
      new Spotlight(spotlightRef.current);
    }
  }, []);


  return (
    <>
    

     
      <div
        className="relative z-50 padding-home flex w-full justify-between items-center tinyMobile:flex-col mobile:flex-col mobileBig:flex-col tablet:flex-col tinyTablet:flex-col"
      >
        <div
          className="mainText flex flex-col justify-center"
        >
          <h3
            className="text-lg tinyMobile:text-[0.8rem] mobile:text-[0.8rem] mobileBig:text-[1rem] tablet:text-lg"
            style={{ color: "#b7bfd0" }}
          >
            Hi there, this is Erick
          </h3>
          <h2
            className="text-[2.4rem] desktop:text-[2rem] headWidth leading-relaxed tinyMobile:text-[1.2rem] mobile:text-[1.5rem] mobileBig:text-[1.5em] tablet:text-[2rem] tinyTablet:text-[1.8rem] bigTablet:text-[2rem]"
            style={{ fontWeight: "600", marginTop: "2%", color: "#fff" }}
          >
            I&apos;m a <span>Full-Stack Developer</span> and a&nbsp;
            <span>Quality Engineer</span>
          </h2>

          <p
            className="text-xl tinyMobile:hidden mobile:hidden mobileBig:hidden tinyTablet:hidden subHead leading-relaxed tinyMobile:text-[0.8rem] mobile:text-[1rem] mobileBig:text-[1rem] tablet:text-lg mobile:leading-7 mobileBig:leading-7"
            style={{
              opacity: "0.8",
              filter: "brightness(1.3)",
              color: "#8d93a0",
              marginTop: "2%",
              
            }}
          >
            Engineer based in México with experience crafting in&nbsp;
            <span
              style={{
                color: "#ccedff",
                filter: "brightness(0.8) contrast(2)",
              }}
            >
              project development&nbsp;
            </span>
            and&nbsp;
            <span
              style={{
                color: "#ccedff",
                filter: "brightness(0.8) contrast(2)",
              }}
            >
              QA engineering.&nbsp;
            </span>
          </p>

          <p
            className="hidden tinyMobile:block mobile:block mobileBig:block tinyTablet:block text-xl subHead leading-relaxed tinyMobile:text-[0.85rem] mobile:text-[0.9rem] mobileBig:text-[1rem] tablet:text-lg mobile:leading-7 mobileBig:leading-7"
            style={{
              opacity: "0.8",
              filter: "brightness(1.3)",
              color: "#8d93a0",
              marginTop: "2%",
            }}
          >
            Engineer based in México with experience in&nbsp;
            <span
              style={{
                color: "#ccedff",
                filter: "brightness(0.8) contrast(2)",
              }}
            >
              project development&nbsp;
            </span>
            and&nbsp;
            <span
              style={{
                color: "#ccedff",
                filter: "brightness(0.8) contrast(2)",
              }}
            >
              QA engineering.&nbsp;
            </span>
          </p>

          <div
            className="m-button"
            style={{ display: "flex", gap: "2%" , color: "#fff"}}
            ref={spotlightRef}

          >
            <div className="desktop:mb-5" style={{ padding: "2px" }}>
              <div className="relative h-full bg-gray-900 rounded-[inherit] z-0 overflow-hidden">
                <button
                  style={{
                    background: "rgb(0 0 69)",
                    border: "1px solid #c1c1c194",
                  }}
                  type="button"
                  className="text-[1rem] tinyMobile:text-[0.7rem] tinyMobile:px-2 mobile:text-[0.8rem] mobileBig:text-[0.8rem] flex items-center gap-2 p-1 px-4 mobile:px-[0.6rem] mobileBig:px-[0.6rem]"
                >
                  <FaLinkedinIn />
                  LinkedIn
                </button>
              </div>
            </div>

            <div style={{ padding: "2px" }}>
              <div className="relative h-full bg-gray-900 rounded-[inherit] z-0 overflow-hidden">
                <button
                  style={{
                    background: "rgb(0 0 69)",
                    border: "1px solid #c1c1c194",
                  }}
                  type="button"
                  className="text-[1rem] tinyMobile:text-[0.7rem] tinyMobile:px-2 mobile:text-[0.8rem] mobileBig:text-[0.8rem] flex items-center gap-2 p-1 px-4 mobile:px-[0.6rem]"
                >
                  <FiGithub />
                  Github
                </button>
              </div>
            </div>

            <div style={{ padding: "2px" }}>
              <div className="relative h-full bg-gray-900 rounded-[inherit] z-0 overflow-hidden">
                <button
                  style={{
                    background: "rgb(0 0 69)",
                    border: "1px solid #c1c1c194",
                  }}
                  type="button"
                  className="text-[1rem] tinyMobile:text-[0.7rem] tinyMobile:px-2 mobile:text-[0.8rem] mobileBig:text-[0.8rem] flex items-center gap-2 p-1 px-4 mobile:px-[0.6rem]"
                >
                  <IoIosContact />
                  Contact
                </button>
              </div>
            </div>
          </div>
        </div>

        <video id="myVideo" autoPlay loop muted className="relative home-video">
  <source src="/hologram22.webm" type="video/webm" />
</video>
      </div>

      <div className="relative z-50" style={{ width: "100%" }}>
        <div className="p-midHome">
          <h2
            className="text-xl tinyMobile:text-[0.9rem] mobile:text-[0.9rem] mobile:w-[105%] mobileBig:text-[1.05rem]"
            style={{ fontWeight: "600", marginBottom: "4%",color: "#fff" }}
          >
            I run a software engineering studio based in México, offering
            full-stack development.
          </h2>
          <div className="flex gap-24">
            <div>
              <p
                className="text-xl tinyMobile:text-[0.9rem] mobile:text-[0.9rem] mobileBig:text-[1.05rem] leading-normal"
                style={{
                  filter: "brightness(1.3)",
                  color: "#8d93a0",
                }}
              >
                The world of development and software engineering is constantly
                <span style={{ color: "#e3e3e3" }}> evolving&nbsp;</span>
                and so has my
                <span style={{ color: "#e3e3e3" }}>
                  {" "}
                  role over the last 5 years&nbsp;
                </span>
                by collaborating in impactful projects across the globe.
              </p>

              <br />

              <p
                className="text-xl tinyMobile:text-[0.9rem] mobile:text-[0.9rem] mobileBig:text-[1.05rem] leading-normal"
                style={{
                  filter: "brightness(1.3)",
                  color: "#8d93a0",
                  position: "relative",
                }}
              >
                During my career I&apos;ve helped international clients fulfill their
                projects during the entire life cycle by collaborating as
                a&nbsp;
                <span style={{ color: "#e3e3e3" }}>web developer,&nbsp;</span>
                <span style={{ color: "#e3e3e3" }}>quality analyst&nbsp;</span>
                and&nbsp;
                <span style={{ color: "#e3e3e3" }}>business architect</span>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
