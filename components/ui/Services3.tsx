"use client";

import React, { useEffect, useRef } from "react";
import Modal2 from "./Modal2"; // assuming Modal2 is in the same directory or adjust the path accordingly
import { FaCode, FaDatabase, FaCloud } from "react-icons/fa"; // Example icons, adjust based on your use case
import Spotlight from "../SpotlighBorder";
// import "./Services3.css";


const Services3 = () => {

    const spotlightRef = useRef(null);

    useEffect(() => {
      if (spotlightRef.current) {
        new Spotlight(spotlightRef.current);
      }
    }, []);
  // Define your service data
  const services = [
    {
      title: "Full Stack Developer",
      timeline: [
        { date: "2021 - Present", title: "Frontend Development", description: "Building responsive and dynamic web applications using React, HTML, CSS, and JavaScript." },
        { date: "2019 - 2021", title: "Full-Stack Development", description: "Creating full-stack applications with Node.js, MongoDB, and Express." },
        // Add more items to the timeline as needed
      ],
      icon:  <svg
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#ffffff"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="feather feather-terminal"
    >
      <polyline points="4 17 10 11 4 5"></polyline>
      <line x1="12" y1="19" x2="20" y2="19"></line>
    </svg>
    },
    {
      title: "Quality Analyst",
      timeline: [
        { date: "2020 - Present", title: "Database Design", description: "Designing efficient, scalable databases for a variety of applications." },
        { date: "2018 - 2020", title: "SQL & NoSQL Databases", description: "Working with MySQL, MongoDB, and PostgreSQL for robust backend support." },
      ],
      icon: <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#ffffff"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="feather feather-code"
    >
      <polyline points="16 18 22 12 16 6"></polyline>
      <polyline points="8 6 2 12 8 18"></polyline>
    </svg>
    },
    {
      title: "Business Architect",
      timeline: [
        { date: "2021 - Present", title: "AWS Cloud Architect", description: "Designing cloud architecture and ensuring efficient resource management." },
        { date: "2019 - 2021", title: "Cloud Migrations", description: "Leading migrations to AWS and Azure for multiple enterprise-level clients." },
      ],
      icon: <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#ffffff"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="feather feather-settings"
    >
      <circle cx="12" cy="12" r="3"></circle>
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
    </svg>
    },
    {
        title: "Mechatronic Engineer",
        timeline: [
          { date: "2021 - Present", title: "AWS Cloud Architect", description: "Designing cloud architecture and ensuring efficient resource management." },
          { date: "2019 - 2021", title: "Cloud Migrations", description: "Leading migrations to AWS and Azure for multiple enterprise-level clients." },
        ],
        icon: <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#ffffff"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="feather feather-cloud"
      >
        <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path>
      </svg>
      },
  ];

  

  return (
    <section id="services" className="services-section">
<h1
        className="p-title-services text-xl"
        style={{
          width: "100%",
          color: "#e3e3e3",
          marginBottom: "2%",
          display: "flex",
          justifyContent: "flex-start",
          fontWeight: "600",
          marginTop: "6%",
        }}
      >
        {" "}
        Checkout my Services
      </h1>
            <div ref={spotlightRef} className="services-container">
        
        {services.map((service, index) => (
          
          <Modal2
            key={index}
            title={service.title}
            timeline={service.timeline}
            icon={service.icon}
          />
        ))}
      </div>
    </section>
  );
};

export default Services3;
