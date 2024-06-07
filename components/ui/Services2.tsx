"use client";

import React, { useEffect, useRef } from "react";
import "./Services.css";
import Modal from "./Modal";
// import Modal2 from "./Modal2";
import Spotlight from "../SpotlighBorder";
import { FiArrowRight } from "react-icons/fi";

const Services2 = () => {
  const spotlightRef = useRef(null);

  useEffect(() => {
    if (spotlightRef.current) {
      new Spotlight(spotlightRef.current);
    }
  }, []);

  return (
    <>

<h1
          className="p-title-services text-xl"
          style={{
            width: "100%",
            color: "#e3e3e3",
            marginBottom: "2%",
            display: "flex",
            justifyContent: "flex-start",
            fontWeight: "600",
            marginTop: '6%'
          }}
        >
          {" "}
          Checkout my Services
    </h1>
      

      <section
        id="services"
        className="p-services"
        style={{ marginBottom: "6%" }}
      >
     

        <div ref={spotlightRef} className="services-container">
          <div className="group" style={{ padding: "2px" }}>
            <div
              style={{ background: "rgb(8, 8, 47)" }}
              className="relative h-full   rounded-[inherit]  overflow-visible"
            >
              <div className="service-box4 flex flex-col justify-between h-24">
                <div className="flex items-start  justify-between">
                  <h3 style={{ width: "70%" }} className="text-xl">
                    Full Stack Developer
                  </h3>
                  <svg
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
                </div>
                <div className="w-full justify-end flex">
                  <FiArrowRight className="text-2xl transition-transform duration-500 ml-auto group-hover:-rotate-45" />
                </div>

                {/* <h4 className="text-lg cursor-pointer text-[#84cdeb] ">Read More</h4>  */}
                {/* <Modal
                  title="Full Stack Developer"
                  timeline={[
                    {
                      date: "February 2022",
                      title: "MERN Stack Development",
                      description:
                        "Application development using Mongo DB, Express.js, React and Node.js.",
                    },
                    {
                      date: "March 2022",
                      title: "Pega System Architect",
                      description:
                        "Application development through Pega's CRM as a certified CSA.",
                    },
                    {
                      date: "",
                      title: "Continuous Integration/Continuous Deployment (CI/CD)",
                      description:
                        "All of the pages and components are first designed in Figma.",
                    },
                    {
                      date: "March 2022",
                      title: "RESTful API Integration",
                      description:
                        "All of the pages and components are first designed in Figma.",
                    },
                    {
                      date: "March 2022",
                      title: "More technologies i've worked with",
                      description:
                        "TypeScript, C, SQL, Next.js,  Three.js, React Native, Tailwind, Webflow, ES6+",
                    },
                    {
                      date: "March 2022",
                      title: "Other Important Topics",
                      description:
                        "Version Control (Git), Testing (TDD), Performance (Code Splitting, Lazy Loading)",
                    },
                  ]}
                  icon={
                    <svg
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
                  }
                /> */}

                <button
                  style={{}}
                  className="absolute left-0 bottom-0 h-3 w-full p-0 lineGrad hoverGrad"
                ></button>
              </div>
            </div>
          </div>

          <div className="group" style={{ padding: "2px" }}>
            <div
              style={{ background: "rgb(8 8 47)" }}
              className="relative h-full bg-gray-900 rounded-[inherit]  overflow-visible"
            >
              <div className="service-box4 flex flex-col justify-between h-24">
                <div className="flex items-start  justify-between">
                  <h3 style={{ width: "50%" }} className="text-xl">
                    Quality Analyst
                  </h3>
                  <svg
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
                </div>

                {/* <h4 className="text-lg cursor-pointer text-[#84cdeb] ">Read More</h4>  */}
                {/* <Modal
                  title="QA Analyst"
                  timeline={[
                    {
                      
                      description:
                        "I've been the QA leader of a testing team for some international projects.",
                    },
                    {
                      
                      description:
                        "Collaborated with clients, staff members and IT colleagues to define detailed client requirements.",
                    },
                    {
              
                      description:
                        "I've defined the test plan, test aproach, test objectives and test activities for the team project.",
                    },
                    {
                      
                      description:
                        "I've performed Functional Testing Regression, Integration, Acceptance.",
                    },
                   
                    {
                      description:
                        "Certified ISQB Tester.",
                    },
                    {
                      description:
                        "All of the pages and components are first designed in Figma.",
                    },
                  ]}
                  icon={
                    <svg
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
                  }
                /> */}

                <div className="w-full justify-end flex">
                  <FiArrowRight className="text-2xl transition-transform duration-500 ml-auto group-hover:-rotate-45" />
                </div>

                <button
                  style={{}}
                  className="absolute left-0 bottom-0 h-3 w-full p-0 lineGrad   hoverGrad"
                ></button>
              </div>
            </div>
          </div>

          <div className="group" style={{ padding: "2px" }}>
            <div
              style={{ background: "rgb(8 8 47)" }}
              className="relative h-full bg-gray-900 rounded-[inherit]  overflow-visible"
            >
              <div className="service-box4 flex flex-col justify-between h-24">
                <div className="flex items-start  justify-between">
                  <h3 className="text-xl">Business Architect</h3>
                  <svg
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
                </div>

                {/* <h4 className="text-lg cursor-pointer text-[#84cdeb] ">Read More</h4>  */}
                {/* <Modal
                  title="Business Architect"
                  timeline={[
                    {
                     
                      description:
                        "As a certified Business Architect In dept understanding of the project life cycle",
                    },
                    {
                     
                      description:
                        "Identify needs, gaps and bottlenecks, within the DevOps processes.  ",
                    },
                    {
                   
                      description:
                        "Reviewing the new Process Design to confirm alignment with the business needs and outcomes",
                    },
                    {
                   
                      description:
                        "ensure that the Business team understands the solution design and is enabled to provide the right guidance and feedback to keep the solution aligned with the business objectives. At the same time, your goal is to ensure that the Pega developers have an extremely good understanding of the business needs and are enabled to appropriately advise on the best use ",
                    },
                    {
                     
                      description:
                        "Collaborated with Business teams and developers on designing, creating and testing the Pega solution.",
                    },
                  ]}
                  icon={
                    <svg
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
                  }
                /> */}

                <div className="w-full justify-end flex">
                  <FiArrowRight className="text-2xl transition-transform duration-500 ml-auto group-hover:-rotate-45" />
                </div>

                <button
                  style={{}}
                  className="absolute left-0 bottom-0 h-3 w-full p-0 lineGrad   hoverGrad"
                ></button>
              </div>
            </div>
          </div>

          <div className="group" style={{ padding: "2px" }}>
            <div
              style={{ background: "rgb(8 8 47)" }}
              className="relative h-full bg-gray-900 rounded-[inherit]  overflow-visible"
            >
              <div className="service-box4 flex flex-col justify-between h-24">
                <div className="flex items-start  justify-between">
                  <h3 className="text-xl">Mechatronic Engineer</h3>
                  <svg
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
                </div>
                {/* <Modal
                  title="Mechatronic Engineer"
                  timeline={[
                    {
                    
                      description:
                        "Your knowledge will allow you to have an impact on the increase of quality, productivity and competitiveness of companies.",
                    },
                    {
                    
                      description:
                        "propose improvements in processes and products, with emphasis on the quality of manufacturing and automation systems.",
                    },
                    {
                  
                      description:
                        "solve system automation problems, efficiently managing their instrumentation, supervision and control.",
                    },
                    {
                     
                      description:
                        "Apply microprocessor, microcontroller and programmable logic controller (PLC) technologies.",
                    },
                    {
              
                      description:
                        "systems, electronics, mechanics and control, with the combined use of robotics and electronic engineering and computer/systems science.",
                    },
                  ]}
                  icon={
                    <svg
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
                  }
                /> */}

                <div className="w-full justify-end flex">
                  <FiArrowRight className="text-2xl transition-transform duration-500 ml-auto group-hover:-rotate-45" />
                </div>

                <button
                  style={{ bottom: "-10px", height: "12px" }}
                  className="absolute left-0  w-full p-0 lineGrad   hoverGrad"
                ></button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services2;
