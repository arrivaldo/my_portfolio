"use client";

import React from "react";
import "./FeaturedProjects4.css";
import Image from "next/image";

import { IoIosLink } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";

// Define types for the project data
interface Project {
  cover: string;
  title: string;
  description: string;
  description2: string;
  items: { name: string; icon: JSX.Element; style: React.CSSProperties }[];
}

// Custom hook for responsive design checks
const useMediaQuery = (query: string): boolean => {
  const [matches, setMatches] = React.useState(false);

  React.useEffect(() => {
    const mediaQuery = window.matchMedia(query);
    setMatches(mediaQuery.matches);

    const handler = (event: MediaQueryListEvent) => setMatches(event.matches);
    mediaQuery.addListener(handler);
    return () => mediaQuery.removeListener(handler);
  }, [query]);

  return matches;
};

const FeaturedProjects4: React.FC = () => {
  const portfolio: Project[] = [
    {
      cover: "/images/featured1.png",
      title: "Full Stack Blog App",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elitianiti. Saepe deserunt ipsum rerum sit amet.",
      description2:
        "I've created Code & Toast blog, to share my articles in a way everyone finds it interesting and resourceful.",
      items: [
        { name: "React", icon: <FaReact />, style: { color: "#61DAFB" } },
        { name: "JSX", icon: <FaReact />, style: { color: "#F7DF1E" } },
      ],
    },
    {
      cover: "/images/nedelka.png",
      title: "Real Artist Personal Website",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elitianiti. Saepe deserunt ipsum rerum sit amet.",
      description2:
        "Artist website made for showcasing Nedelka's musical and acting trajectory as she ventures into her projects.",
      items: [
        { name: "React", icon: <FaReact />, style: { color: "#61DAFB" } },
        { name: "JSX", icon: <FaReact />, style: { color: "#F7DF1E" } },
      ],
    },
    {
      cover: "/images/astro-portfolio.png",
      title: "Conference App",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elitianiti. Saepe deserunt ipsum rerum sit amet.",
      description2:
        "This is a real artist website made for showcasing acting as she ventures into her artist projects jobs.",
      items: [
        { name: "React", icon: <FaReact />, style: { color: "#61DAFB" } },
        { name: "JSX", icon: <FaReact />, style: { color: "#F7DF1E" } },
      ],
    },
  ];

  const isMobile = useMediaQuery("(min-width: 320px) and (max-width: 500px)");
  const isTablet = useMediaQuery("(min-width: 501px) and (max-width: 715px)");

  const projects = portfolio.map((project, index) => {
    const isEven = index % 2 === 0;
    let projectClass = isEven ? "flex-row" : "flex-row-reverse";
    let titleClass = isEven ? "text-start" : "text-end";
    let itemsClass = isEven ? "justify-start" : "justify-end";
    let parrafClass = isEven ? "w-[110%]" : "w-[110%] ml-[-10%]";
    const hoverClass = isEven ? "left-0" : "right-0";

    if (isMobile || isTablet) {
      projectClass = isEven ? "" : "flex-row";
      parrafClass = "w-[100%] ml-[0%]";
      titleClass = "";
      itemsClass = "justify-start0";
    }

    return (
      <div key={index} className="projectMain-container">
        <div className={`relative project ${projectClass}`}>
          <div className="project-content">
            <div className={`project-label ${titleClass}`}>
              Featured Project
            </div>
            <h4 className={`project-title ${titleClass}`}>{project.title}</h4>
            <div className="group relative project-details">
              <p
                style={{
               
                }}
                className={` ${parrafClass} mediaPadding featured-parraf`}
              >
                {project.description2}
              </p>
              <button
                className={`absolute left-0 bottom-0 h-3 ${parrafClass} ${hoverClass} p-0 lineGrad hoverGrad`}
              ></button>
            </div>

            <ul
              style={{  }}
              className={`flex ${itemsClass} marginProject tinyMobile:text-[0.7rem] `}
            >
              {project.items.map((item, itemIndex) => (
                <li
                  key={itemIndex}
                  className="flex items-center gap-2 tech-list"
                  style={{ marginRight: "10px" }}
                >
                  <span>{item.icon}</span>
                  <span>{item.name}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="project-img">
            <Image
              src={project.cover}
              fill
              alt={project.title}
              style={{ objectFit: "cover" }}
              sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority
            />
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className="p-featured">
     <h1
        className="block featured-p-title tinyMobile:hidden m-title-p text-xl tinyMobile:text-[0.9rem] mobile:text-[0.9rem] mobileBig:text-[1.05rem]"
        style={{
         
        }}
      >
        Checkout some of my personal projects
      </h1>
      <h1
        className=" featured-p-title2 tinyMobile:block m-title-p text-xl tinyMobile:text-[0.9rem] mobile:text-[0.9rem] mobileBig:text-[1.05rem]"
        style={{
      
        }}
      >
        Checkout my personal projects
      </h1>

      <div className="flex flex-col gap-8 tinyMobile:gap-28 mobile:gap-28 mobileBig:gap-28 tinyTablet:gap-28 tablet:gap-20 items-start mt-3">
        {projects}
      </div>

      <div className="flex flex-col mt-12 justify-center items-center all-view">
      <h2 className="text-xl tinyMobile:text-[0.9rem] mobile:text-[0.9rem] mobileBig:text-[1.05rem] tiny-tablet-view mb-4">
      View all projects
        </h2>
        <svg
          width="30"
          height="30"
          viewBox="0 0 92 50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2.84766 3.3501L45.6742 46.1767L88.5008 3.3501"
            stroke="white"
            strokeWidth="5.71"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
};

export default FeaturedProjects4;
