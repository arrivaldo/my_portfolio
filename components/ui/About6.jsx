"use client";

import React, { useEffect, useRef } from "react";
import Spotlight from "../SpotlighBorder";
import "./About4.css";
import Profile from "./Profile";
import Jobs from "./Jobs";
import CountUpStats from "./CountUpStats";
import { GlobeDemo } from "./GridGlobe";

import Tabs3 from "./Tabs3";

const About6 = () => {
  const spotlightRef = useRef(null);
  const spotlightRef2 = useRef(null);
  const spotlightRef3 = useRef(null);

  useEffect(() => {
    if (spotlightRef.current) {
      new Spotlight(spotlightRef.current);
    }
  }, []);

  useEffect(() => {
    if (spotlightRef2.current) {
      new Spotlight(spotlightRef2.current);
    }
  }, []);

  useEffect(() => {
    if (spotlightRef3.current) {
      new Spotlight(spotlightRef3.current);
    }
  }, []);

  return (
    <>
      <section className="p-about" style={{ marginTop: "6%" }}>
        <div className="layer">
          <div className="upper1">
            <div ref={spotlightRef} className="upper-cont">
              <div className="bg-black" style={{ padding: "2px" }}>
                <div
                  style={{}}
                  className="relative bg-black h-full rounded-[inherit]  overflow-visible"
                >
                  <div className="group upper11">
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
                  className="relative bg-black h-full rounded-[inherit]  overflow-visible"
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
            <div ref={spotlightRef2} className="upper-cont2">
              <div className="" style={{ padding: "2px" }}>
                <div
                  style={{}}
                  className="relative h-full  bg-black  rounded-[inherit]  overflow-visible"
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
                  className="relative h-full  bg-black rounded-[inherit]  overflow-vsible"
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

          <div
            ref={spotlightRef3}
            //  style={{ height: "81%" }}
            className="p-tabs-container h-height relative z-10 flex items-center w-full gap-4 tinyMobile:flex-col-reverse tinyMobile:h-full tinyMobile:gap-7 mobile:flex-col-reverse mobile:h-full mobile:gap-7 mobileBig:flex-col-reverse mobileBig:h-full  mobileBig:gap-7  tinyTablet:flex-col-reverse tinyTablet:h-full  tinyTablet:gap-7 bigTablet:flex-col-reverse bigTablet:h-full bigTablet:gap-7  tablet:flex-col-reverse tablet:h-full tablet:gap-7"
          >
            <div
              className="h-full bg-black w-full overflow-hidden worldContent"
              style={{
                flex: "1.5",
                borderRadius: "0.5rem",
                border: "1px solid #c1c1c159",
                padding: "2px",
              }}
            >
              <div className="relative h-full rounded-[inherit] overflow-hidden  bg-black">
                <GlobeDemo />
              </div>
            </div>
            <div
              className="padding-stats bg-black  w-full h-full flex items-center tinyMobile:p-4 mobile:p-4 mobileBig:p-4 tinyTablet:p-4"
              style={{
                flex: "0.5",
                borderRadius: "0.5rem",
                border: "1px solid #c1c1c159 ",
                padding: "2px",
              }}
            >
              <div className="relative w-full bg-black h-full rounded-[inherit] flex items-center justify-center overflow-visible">
                <CountUpStats />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About6;
