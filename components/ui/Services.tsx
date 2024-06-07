"use client";


import React, { useEffect, useRef } from "react";
import "./Services.css";
import Spotlight from "../SpotlighBorder";
import Modal from "./Modal";

const Services = () => {

  const spotlightRef = useRef(null);

  useEffect(() => {
    if (spotlightRef.current) {
      new Spotlight(spotlightRef.current);
    }
  }, []);


  return (
    <>
      <section className="relative z-50" id="services" style={{ marginBottom: "6%", marginTop: "6%" }}>
        <h1
          className="text-xl tinyMobile:text-[0.9rem] mobile:text-[0.9rem] bigMobile:text-[1.05rem]"
          style={{
            width: "100%",
            color: "#e3e3e3",
            marginBottom: "2%",
            display: "flex",
            justifyContent: "flex-start",
            fontWeight: "600",
          }}
        >
          {" "}
          Checkout my Services
        </h1>

        <div ref={spotlightRef} className="services-container">
          {/* <div
            style={{ padding: "2px" }}
            className="relative h-full bg-gray-800 rounded-xl before:absolute before:w-80 before:h-80 before:-left-40 before:-top-40 before:bg-gray-400 before:rounded-full before:opacity-0 before:pointer-events-none before:transition-opacity before:duration-500 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:group-hover:opacity-100 before:z-10 before:blur-[100px] after:absolute after:w-96 after:h-96 after:-left-48 after:-top-48 after:bg-indigo-500 after:rounded-full after:opacity-0 after:pointer-events-none after:transition-opacity after:duration-500 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:hover:opacity-10 after:z-30 after:blur-[100px] overflow-hidden"
          >
            <div className="relative h-full bg-gray-900 p-6 pb-8 rounded-[inherit] z-0 overflow-hidden">
              <div
                className="absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-1/2 aspect-square"
                aria-hidden="true"
              >
                <div className="absolute inset-0 translate-z-0 bg-gray-800 rounded-full blur-[80px]"></div>
              </div> */}
          <div style={{ padding: "2px" }}>
            <div
              style={{ background: "rgb(0 0 69)" }}
              className="relative h-full bg-gray-900 rounded-[inherit]  overflow-hidden"
            >
              <div className="service-box4 flex flex-col justify-between h-24">
                <div className="flex items-center  justify-between">
                  <h3 className="text-xl mobile:hidden tinyMobile:text-[1.05rem] mobile:text-[1.05rem] mobileBig:text-[1.05rem]">
                    Full Stack Dev
                  </h3>
                  <h3 className="hidden mobile:block text-xl tinyMobile:text-[0.9rem] mobile:text-[0.9rem] mobileBig:text-[1.05rem]">
                    Full Stack Developer
                  </h3>{" "}
                  {/* <svg
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
                  </svg> */}
                </div>

                {/* <h4 className="text-lg cursor-pointer text-[#84cdeb] ">Read More</h4>  */}
                <div
                  id="readPart"
                  className="flex items-center justify-between"
                >
                  <Modal
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
                        title:
                          "Continuous Integration/Continuous Deployment (CI/CD)",
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
                  />
                                    {/* <p>Read More</p> */}

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
              </div>
            </div>
          </div>

          <div style={{ padding: "2px" }}>
            <div
              style={{ background: "rgb(0 0 69)" }}
              className="relative h-full bg-gray-900 rounded-[inherit]  overflow-hidden"
            >
              <div className="service-box4 flex flex-col justify-between h-24">
                <div className="flex items-center  justify-between">
                  <h3 className="text-xl mobile:hidden tinyMobile:text-[0.9rem] mobile:text-[0.9rem]">
                    QA Analyst
                  </h3>
                  <h3 className="hidden mobile:block text-xl tinyMobile:text-[0.9rem] mobile:text-[0.9rem]">
                    Quality Analyst
                  </h3>
                </div>

                {/* <h4 className="text-lg cursor-pointer text-[#84cdeb] ">Read More</h4>  */}
                <div
                  id="readPart"
                  className="flex items-center justify-between"
                >
                  <Modal
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
                        description: "Certified ISQB Tester.",
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
                  />
                  {/* <p>Read More</p> */}
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
              </div>
            </div>
          </div>

          <div style={{ padding: "2px" }}>
            <div
              style={{ background: "rgb(0 0 69)" }}
              className=" relative h-full bg-gray-900 rounded-[inherit]  overflow-hidden"
            >
              <div className="service-box4 flex flex-col justify-between h-24">
                <div className="flex items-center  justify-between">
                  <h3 className="text-xl mobile:hidden tinyMobile:text-[0.9rem] mobile:text-[0.9rem]">
                    B. Architect
                  </h3>
                  <h3 className="hidden mobile:block text-xl tinyMobile:text-[0.9rem] mobile:text-[0.9rem]">
                    Business Architect
                  </h3>
                </div>

                {/* <h4 className="text-lg cursor-pointer text-[#84cdeb] ">Read More</h4>  */}

                <div
                  id="readPart"
                  className="flex items-center justify-between"
                >
                  <Modal
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
                  />
                                    {/* <p>Read More</p> */}


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
              </div>
            </div>
          </div>

          <div style={{ padding: "2px" }}>
            <div
              style={{ background: "rgb(0 0 69)" }}
              className="relative h-full bg-gray-900 rounded-[inherit]  overflow-hidden"
            >
              <div className="service-box4 flex flex-col justify-between h-24">
                <div className="flex items-center  justify-between">
                  <h3 className="text-xl mobile:hidden tinyMobile:text-[0.9rem] mobile:text-[0.9rem]">
                    M. Engineer
                  </h3>
                  <h3 className="hidden mobile:block text-xl tinyMobile:text-[0.9rem] mobile:text-[0.9rem]">
                    Mechatronich Engineer
                  </h3>
                </div>

                <div
                  id="readPart"
                  className="flex items-center justify-between"
                >
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
                  <Modal 
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
                  />
                                    {/* <p>Read More</p> */}

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
              </div>
            </div>
          </div>
        </div>

        {/* <button className="lineGrad">
                  Hey
        </button> */}
      </section>
    </>
  );
};

export default Services;
