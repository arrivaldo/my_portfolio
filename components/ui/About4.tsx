"use client";

import React, { useEffect, useRef } from "react";
// import Spotlight from "../Spotlight";
import "./About4.css";
import Profile from "./Profile";
import Jobs from "./Jobs";
// import Stack from "./Stack";
import CountUpStats from "./CountUpStats";
import Tabs3 from "./Tabs3";

const About4 = () => {
  const spotlightRef = useRef(null);

  //   useEffect(() => {
  //     if (spotlightRef.current) {
  //       new Spotlight(spotlightRef.current);
  //     }
  //   }, []);

  return (
    <>
      <section className="p-about" style={{ marginTop: "6%" }}>
        <div className="layer">
          <div className="upper1">
            <div
              // ref={spotlightRef}
              className="upper-cont"
            >
              <div className="" style={{ padding: "2px" }}>
                <div
                  style={{}}
                  className="relative bgColor h-full rounded-[inherit]  overflow-visible"
                >
                  <div className="group upper11 h-full">
                    <Profile />
                    <button
                      style={{ bottom: "-10px", height: "12px" }}
                      className="absolute left-0  w-full p-0 linearGrad   hoverGrad"
                    ></button>
                  </div>
                </div>
              </div>

              <div className="" style={{ padding: "2px" }}>
                <div
                  style={{}}
                  className="relative bgColor h-full rounded-[inherit]  overflow-visible"
                >
                  <div className="group upper21">
                    <Jobs />
                    <button
                      style={{ bottom: "-10px", height: "12px" }}
                      className="absolute left-0  w-full p-0 linearGrad   hoverGrad"
                    ></button>
                  </div>
                </div>
              </div>
            </div>
            <div className="upper-cont2">
              <div className="" style={{ padding: "2px" }}>
                <div
                  style={{}}
                  className="relative h-full  bgColor  rounded-[inherit]  overflow-visible"
                >
                  <div className="group upper12">
                    <div className="flex flex-col">
                      <h3 className="text-lg tinyMobile:text-[0.9rem] mobile:text-[0.9rem] mobileBig:text-[0.9rem]">
                        April 5, 2024
                      </h3>
                      <h2 className="text-xl tinyMobile:text-[1.05rem] mobile:text-[1.05rem] mobileBig:text-[1.05rem] font-bold py-2">
                        Crafting a design system for a multiplanetary
                      </h2>
                      <ul className="text-lg tinyMobile:text-[0.9rem] mobile:text-[0.9rem] mobileBig:text-[0.9rem] flex gap-4 pb-2 ">
                        <li>#Arquitecture</li>
                        <li>#Engineering</li>
                      </ul>
                      <p className="text-lg tinyMobile:text-[0.9rem] mobile:text-[0.9rem] mobileBig:text-[0.9rem] pb-2">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Iure eligendi fugiat vitae expedita deserunt
                        aliquam recusandae.
                      </p>
                      <a className="text-lg tinyMobile:text-[0.9rem] mobile:text-[0.9rem] mobileBig:text-[0.9rem] text-[#84cdeb]">
                        Read article -
                      </a>
                    </div>

                    <button
                      style={{ bottom: "-10px", height: "12px" }}
                      className="absolute left-0  w-full p-0 linearGrad   hoverGrad"
                    ></button>
                  </div>
                </div>
              </div>

              <div className="" style={{ padding: "2px" }}>
                <div
                  style={{}}
                  className="relative h-full  bgColor rounded-[inherit]  overflow-vsible"
                >
                  <div className="group upper22">
                    <div className="flex flex-col">
                      <h3 className="text-lg tinyMobile:text-[0.9rem] mobile:text-[0.9rem] mobileBig:text-[0.9rem]">
                        April 5, 2024
                      </h3>
                      <h2 className="text-xl tinyMobile:text-[1.05rem] mobile:text-[1.05rem] mobileBig:text-[1.05rem] font-bold py-2">
                        Crafting a design system for a multiplanetary
                      </h2>
                      <ul className="text-lg tinyMobile:text-[0.9rem] mobile:text-[0.9rem] mobileBig:text-[0.9rem] flex gap-4 pb-2 ">
                        <li>#Arquitecture</li>
                        <li>#Engineering</li>
                      </ul>
                      <p className="text-lg tinyMobile:text-[0.9rem] mobile:text-[0.9rem] mobileBig:text-[0.9rem] pb-2">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Iure eligendi fugiat vitae expedita deserunt
                        aliquam recusandae.
                      </p>
                      <a className="text-lg tinyMobile:text-[0.9rem] mobile:text-[0.9rem] mobileBig:text-[0.9rem] text-[#84cdeb]">
                        Read article -
                      </a>
                    </div>
                    <button
                      style={{ bottom: "-10px", height: "12px" }}
                      className="absolute left-0  w-full p-0 linearGrad   hoverGrad"
                    ></button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <div>
            <div className="bottom1">
              <div className="" style={{ padding: "2px" }}>
                <div
                  style={{}}
                  className="relative bgColor rounded-[inherit] h-full  overflow-visible"
                >
                  <div className="group low1">
                    <Tabs2 />
                  </div>
                </div>
              </div>

              <div className="" style={{ padding: "2px" }}>
                <div
                  style={{
                    border: "1px solid #c1c1c159",
                    borderRadius: "1rem",
                  }}
                  className="flex justify-center items-center relative h-full  bgColor rounded-[inherit]  overflow-visible"
                >
                  <div className="group low2">
                    <CountUpStats />
                    <button
                      style={{ bottom: "-10px", height: "12px" }}
                      className="absolute left-0  w-full p-0 linearGrad   hoverGrad"
                    ></button>
                  </div>
                </div>
              </div>
            </div>
          </div> */}

          <div className=" flex items-center w-full gap-4 tinyMobile:flex-col-reverse tinyMobile:h-full tinyMobile:gap-7  mobile:flex-col-reverse mobile:h-full mobile:gap-7 mobileBig:flex-col-reverse mobileBig:h-full  mobileBig:gap-7  tinyTablet:flex-col-reverse tinyTablet:h-full  tinyTablet:gap-7 ">
            <div
              className="h-full overflow-hidden"
              style={{
                flex: "1.5",
                borderRadius: "0.5rem",
                border: "1px solid #c1c1c159",
              }}
            >
              {/* <Tabs2/> */}
              <Tabs3 />
            </div>
            <div
              className=" h-class flex items-center tinyMobile:p-4 mobile:p-4 mobileBig:p-4 tinyTablet:p-4"
              style={{
                flex: "0.5",
                borderRadius: "0.5rem",
                border: "1px solid #c1c1c159 ",
                
              }}
            >
              <CountUpStats />
            </div>
            </div>
          </div>
      </section>
    </>
  );
};

export default About4;
