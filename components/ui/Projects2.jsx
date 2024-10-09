"use client";

import { useMotionValue, motion, useSpring, useTransform } from "framer-motion";
import React, { useRef, useEffect } from "react";
import { FiGithub } from "react-icons/fi";
import Spotlight from "../SpotlighBorder";
import './Projects2.css';

const Projects2 = () => {

   const spotlightRef = useRef(null);

   useEffect(() => {
     if (spotlightRef.current) {
       new Spotlight(spotlightRef.current);
     }
   }, []);

  return (
    <section id="projects" className='p-proyects' style={{ marginTop: '10%' }}>
      <h1 style={{ fontWeight: '700' }} className="proyects-title">Check out some of my work.</h1>

      <div ref={spotlightRef} className="mx-auto checkmate-container ">

        <div className="group" style={{ padding: "2px",  border: '1px solid #c1c1c194' }}>
            <div style={{ background: 'rgb(0 0 69)' }} className="relative h-full rounded-[inherit] overflow-visible">
              <Link
                heading="Integrating Algolia Search with WordPress Multisite"
                subheading="Building a custom multisite compatible WordPress plugin to build global search with Algolia"
                imgSrc="https://cdn.dribbble.com/userupload/11047215/file/original-0fcb53ef1a6000c5766118565fca7413.png?resize=752x"
                href="https://github.com/arrivaldo/project1"
                items="React Tailwind Next.js JavaScript"
              />
            </div>
        </div>

        <div className="group" style={{ padding: "2px",  border: '1px solid #c1c1c194' }}>
            <div style={{ background: 'rgb(0 0 69)' }} className="relative h-full rounded-[inherit] overflow-visible">
              <Link
                heading="Time to Have More Fun with a custom multisite press"
                subheading="A single page web app for helping me choose where to travel, built with Next.js, Firebase, and Tailwind CSS"
                imgSrc="/images/nedelka.png"
                href="https://github.com/arrivaldo/project2"
                items="React Tailwind Next.js JavaScript"
              />
            </div>
        </div>

        <div className="group" style={{ padding: "2px",  border: '1px solid #c1c1c194' }}>
            <div style={{ background: 'rgb(0 0 69)' }} className="relative h-full rounded-[inherit] overflow-visible">
              <Link
                heading="Building a Headless Mobile App CMS From Scratch"
                subheading="Find out how we built a custom headless CMS with Node, Express, and Firebase"
                imgSrc="https://cdn.dribbble.com/userupload/11047215/file/original-0fcb53ef1a6000c5766118565fca7413.png?resize=752x"
                href="https://github.com/arrivaldo/project3"
                items="React Tailwind Next.js JavaScript"
              />
            </div>
        </div>

        <div className="group" style={{ padding: "2px",  border: '1px solid #c1c1c194' }}>
            <div style={{ background: 'rgb(0 0 69)' }} className="relative h-full rounded-[inherit] overflow-visible">
              <Link
                heading="Apple Music Embeddable Web Player Widget"
                subheading="Embeddable web player widget for Apple Music that lets users log in and listen to full song playback in the browser"
                imgSrc="https://cdn.dribbble.com/userupload/11047215/file/original-0fcb53ef1a6000c5766118565fca7413.png?resize=752x"
                href="https://github.com/arrivaldo/project4"
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
              href="https://github.com/arrivaldo"
              items="React Tailwind Next.js JavaScript"
 target="_blank"
              rel="noopener noreferrer"
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
              href="https://github.com/arrivaldo"
              items="React Tailwind Next.js JavaScript"
               target="_blank"
              rel="noopener noreferrer"
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
      target="_blank"
      rel="noopener noreferrer"
      onMouseMove={handleMouseMove}
      className="group relative flex items-center justify-between transition-colors duration-500 hover:border-neutral-50 md:py-8"
      style={{ padding: '1rem' }}
    >
      <div>
        <div style={{ marginBottom: '7%' }} className="flex items-center justify-between w-full">
          <div>
            <svg style={{ width: '15%' }} xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="feather feather-folder"><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
          </div>
          <div
            className="flex items-center gap-3"
            onClick={() => window.open(href, '_blank', 'noopener noreferrer')}
            style={{ cursor: 'pointer' }}
          >
            <FiGithub />
          </div>
        </div>
        <motion.span
          className="relative z-10 block text-xl font-bold text-neutral-500 transition-colors duration-500 group-hover:text-neutral-50"
          style={{ color: "#e3e3e3" }}
        >
          {heading}
        </motion.span>
        <span style={{ filter: "brightness(1.3)", color: "#8d93a0" }} className="relative z-10 mt-2 block text-base text-neutral-500 transition-colors duration-500 group-hover:text-neutral-50">
          {subheading}
        </span>
        <span style={{ marginTop: '7%', filter: "brightness(1.3)", color: "#8d93a0" }} className="relative z-10 mt-2 block text-base text-neutral-400 transition-colors duration-500 group-hover:text-neutral-50">
          {items}
        </span>
      </div>
    </motion.a>
  );
};

export default Projects2;
