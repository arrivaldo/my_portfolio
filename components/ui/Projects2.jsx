"use client";

import { useMotionValue, motion, useSpring, useTransform } from "framer-motion";
import React, { useRef, useEffect } from "react";
import { FiArrowRight } from "react-icons/fi";
import { IoIosLink } from "react-icons/io";
// import Spotlight from "../Spotlight";
import { FiGithub } from "react-icons/fi";
import { GoLinkExternal } from "react-icons/go";
import Spotlight from "../SpotlighBorder";
import './Projects2.css'

const Projects2 = () => {

   const spotlightRef = useRef(null);

   useEffect(() => {
     if (spotlightRef.current) {
       new Spotlight(spotlightRef.current);
     }
   }, []);


  return (
    <section className='p-proyects' style={{ marginTop: '10%' }}>
      <h1 style={{ fontWeight: '700' }} className="proyects-title">Check out some of my work.</h1>

      <div ref={spotlightRef} className="mx-auto checkmate-container ">


        <div
          className="group"
            style={{ padding: "2px",  border: '1px solid #c1c1c194' }}
          >
            <div
              style={{    background: 'rgb(0 0 69)' ,                  }}
              className="relative h-full   rounded-[inherit]  overflow-visible"
            >
            <Link
              heading="Integrating Algolia Search with WordPress Multisite"
              subheading="Building a custom multisite compatible WordPress plugin to build global search with Algoliae"
              imgSrc="  https://cdn.dribbble.com/userupload/11047215/file/original-0fcb53ef1a6000c5766118565fca7413.png?resize=752x"
              href="#"
              items="React Tailwind Next.js JavaScript"
            />

          </div>
        </div>


        <div
          className="group"
            style={{ padding: "2px",  border: '1px solid #c1c1c194' }}
          >
            <div
              style={{    background: 'rgb(0 0 69)' ,                  }}
              className="relative h-full   rounded-[inherit]  overflow-visible"
            >
            <Link
              heading="Time to Have More Fun a custom multisite press. "
              subheading="A single page web app for helping me choose where to travel, built with Next.js, Firebase, and Tailwind CSS"
              imgSrc="/images/nedelka.png"
              href="#"
              items="React Tailwind Next.js JavaScript"

            />

          </div>
        </div>


        <div
          className="group"
            style={{ padding: "2px",  border: '1px solid #c1c1c194' }}
          >
            <div
              style={{    background: 'rgb(0 0 69)' ,                  }}
              className="relative h-full   rounded-[inherit]  overflow-visible"
            >

            <Link
              heading="Building a Headless Mobile App CMS From Scratch"
              subheading="Find out how we built a custom headless CMS with Node, Express, and Firebase for a project at Upstatement"
              imgSrc="https://cdn.dribbble.com/userupload/11047215/file/original-0fcb53ef1a6000c5766118565fca7413.png?resize=752x"
              href="#"
              items="React Tailwind Next.js JavaScript"

            />

          </div>
        </div>


        <div
          className="group"
            style={{ padding: "2px",  border: '1px solid #c1c1c194' }}
          >
            <div
              style={{    background: 'rgb(0 0 69)' ,                  }}
              className="relative h-full   rounded-[inherit]  overflow-visible"
            >

            <Link
              heading="Apple Music Embeddable Web Player Widget"
              subheading="Embeddable web player widget for Apple Music that lets users log in and listen to full song playback in the browser leveraging "
              imgSrc="  https://cdn.dribbble.com/userupload/11047215/file/original-0fcb53ef1a6000c5766118565fca7413.png?resize=752x"
              href="#"
              items="React Tailwind Next.js JavaScript"

            />


          </div>
        </div>

        <div
          className="group"
            style={{ padding: "2px", border: '1px solid #c1c1c194' }}
          >
            <div
              style={{    background: 'rgb(0 0 69)' ,                  }}
              className="relative h-full   rounded-[inherit]  overflow-visible"
            >
            <Link
              heading="Building a Headless Mobile App CMS From Scratch"
              subheading="Find out how we built a custom headless CMS with Node, Express, and Firebase for a project at Upstatement"
              imgSrc="https://cdn.dribbble.com/userupload/11047215/file/original-0fcb53ef1a6000c5766118565fca7413.png?resize=752x"
              href="#"
              items="React Tailwind Next.js JavaScript"

            />
          </div>
        </div>


        <div
          className="group"
            style={{ padding: "2px",    border: '1px solid #c1c1c194' }}
          >
            <div
              style={{    background: 'rgb(0 0 69)' ,                  }}
              className="relative h-full   rounded-[inherit]  overflow-visible"
            >
            <Link
              heading="Time to Have More Fun a custom multisite press. "
              subheading="A single page web app for helping me choose where to travel, built with Next.js, Firebase, and Tailwind CSS"
              imgSrc="/images/nedelka.png"
              href="#"
              items="React Tailwind Next.js JavaScript"

            />
          </div>
        </div>
      </div>
    </section>
  );
};

const Link = ({ heading, imgSrc, subheading, href, items }) => {
  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const top = useTransform(mouseYSpring, [0.5, -0.5], ["40%", "60%"]);
  const left = useTransform(mouseXSpring, [0.5, -0.5], ["60%", "70%"]);

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  return (
    <motion.a
      href={href}
      ref={ref}
      onMouseMove={handleMouseMove}
      initial="initial"
      whileHover="whileHover"
      className="group relative flex items-center justify-between  transition-colors duration-500 hover:border-neutral-50 md:py-8"
      style={{
        // backgroundColor: '#2b2b2b',
       padding: '1rem'
      }}

    >



      <div>
        <div style={{ marginBottom: '7%' }} className="flex items-center justify-between w-full">
          {/* <div>
          <svg style={{ width: '15%' }} xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="feather feather-folder"><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>

          </div>
          
          <div className="flex items-center gap-3">
          <FiGithub />
          <svg style={{ width: '10%' }} xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-external-link"><title>External Link</title><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>

          </div> */}

          <div>
          <svg style={{ width: '15%' }} xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="feather feather-folder"><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>

          </div>
          <div className="flex items-center gap-3" >
          <FiGithub />
          <GoLinkExternal />


          </div>
          
        </div>
        <motion.span
 
          className="relative z-10 block text-xl tinyMobile:text-[0.9rem] mobile:text-[0.9rem] mobileBig:text-[1.05rem] font-bold text-neutral-500 transition-colors duration-500 group-hover:text-neutral-50 "
        >
            <motion.span
      
              className="inline-block"
              style={{ color: "#e3e3e3",  }}
              
            >
              {heading}
            </motion.span>
        </motion.span>
        <span style={{
                  filter: "brightness(1.3)",
                  color: "#8d93a0",
                }}   className="relative z-10 mt-2 block text-base tinyMobile:text-[0.7rem] mobile:text-[0.7rem] mobileBig:text-[0.9rem] text-neutral-500 transition-colors duration-500 group-hover:text-neutral-50">
          {subheading}
        </span>
        <span style={{ marginTop: '7%', filter: "brightness(1.3)",
                  color: "#8d93a0",  }} className="relative z-10 mt-2 block text-base tinyMobile:text-[0.7rem] mobile:text-[0.7rem] mobileBig:text-[0.9rem] text-neutral-400 transition-colors duration-500 group-hover:text-neutral-50">
          {items}
        </span>
      </div>
    </motion.a>
  );
};

export default Projects2;