"use client";

import React, { useEffect, useRef } from "react";
import Profile from "./Profile";
import Jobs from "./Jobs";
import "./About5.css";
import CountUpStats from "./CountUpStats";
import Tabs3 from "./Tabs3";
import Spotlight from "../SpotlighBorder";
import { GlobeDemo } from './GridGlobe';


const About5 = () => {
  const spotlightRef = useRef(null);

  useEffect(() => {
    if (spotlightRef.current) {
      new Spotlight(spotlightRef.current);
    }
  }, []);
  return (
    <>
      <div  style={{ padding: "7% 6%" }}>
        <div
          style={{ marginTop: "7%" }}
          className="about5-container relative z-10"
        >
          <div ref={spotlightRef} className="a">
            <div className="a1">
              <div className="" style={{ padding: "1%" }}>
                <div
                  style={{ padding: "3%" }}
                  className="relative h-full rounded-[inherit] overflow-visible  bg-black"
                >
                  <Profile />
                </div>
              </div>
            </div>
            <div className="a2">
              <div className="" style={{ padding: "1%" }}>
                <div
                  style={{ padding: "3%" }}
                  className="relative h-full rounded-[inherit] overflow-visible  bg-black"
                >
                  <Jobs />
                </div>
              </div>
            </div>
          </div>
          <div className="b">
            <div className="b1">
              <div className="" style={{ padding: "1%" }}>
                <div
                  style={{ padding: "3%" }}
                  className="relative h-full rounded-[inherit] overflow-visible  bg-black"
                >
                  <div className="group">
                    <div className="flex flex-col">
                      <h3 className="text-lg tinyMobile:text-[0.7rem] mobile:text-[0.7rem] mobileBig:text-[0.9rem]">
                        Sept 12, 2024
                      </h3>
                      <h2 className="text-xl tinyMobile:text-[0.9rem] mobile:text-[0.9rem] mobileBig:text-[1.05rem] font-bold py-2">
                        Understanding the Object-Oriented Programming Paradigm
                      </h2>
                      <ul className="text-lg tinyMobile:text-[0.7rem] mobile:text-[0.7rem] mobileBig:text-[0.9rem] flex gap-4 pb-2 ">
                        <li>#Architecture</li>
                        <li>#Engineering</li>
                      </ul>
                      <p className="text-lg tinyMobile:text-[0.7rem] mobile:text-[0.7rem] mobileBig:text-[0.9rem] pb-2">
                        Master the Object-Oriented Programming paradigm with
                        in-depth coverage of essential concepts. This post
                        delivers technical clarity and practical examples.
                      </p>
                      <a className="text-lg tinyMobile:text-[0.7rem] mobile:text-[0.7rem] mobileBig:text-[0.9rem] text-[#84cdeb]">
                        Read article -
                      </a>
                    </div>
                    <button
                      style={{ bottom: "-10px", height: "12px" }}
                      className="absolute left-0  w-full p-0 linearGrad hoverGrad"
                    ></button>
                  </div>
                </div>
              </div>
            </div>
            <div className="b2">
              <div className="bg-black" style={{ padding: "1%" }}>
                <div
                  style={{ padding: "3%" }}
                  className="relative h-full rounded-[inherit] overflow-visible"
                >
                  <div className="group">
                    <div className="flex flex-col">
                      <h3 className="text-lg tinyMobile:text-[0.7rem] mobile:text-[0.7rem] mobileBig:text-[0.9rem]">
                        Sept 13, 2024
                      </h3>
                      <h2 className="text-xl tinyMobile:text-[0.9rem] mobile:text-[0.9rem] mobileBig:text-[1.05rem] font-bold py-2">
                        REST vs. GraphQL: Which is Right for Your Project?
                      </h2>
                      <ul className="text-lg tinyMobile:text-[0.7rem] mobile:text-[0.7rem] mobileBig:text-[0.9rem] flex gap-4 pb-2 ">
                        <li>#SoftwareDevelopment</li>
                        <li>#Engineering</li>
                      </ul>
                      <p className="text-lg tinyMobile:text-[0.7rem] mobile:text-[0.7rem] mobileBig:text-[0.9rem] pb-2">
                        In this article, we&apos;ll explore the differences
                        between REST and GraphQL, examine their pros and cons,
                        and help you decide which one is best suited for your
                        project.
                      </p>
                      <a className="text-lg tinyMobile:text-[0.7rem] mobile:text-[0.7rem] mobileBig:text-[0.9rem] text-[#84cdeb]">
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
        </div>

        <div
          style={{ marginTop: "25px" }}
          className="p-tabs-container relative z-10 h-full flex items-center w-full gap-4 tinyMobile:flex-col-reverse tinyMobile:h-full tinyMobile:gap-7 mobile:flex-col-reverse mobile:h-full mobile:gap-7 mobileBig:flex-col-reverse mobileBig:h-full  mobileBig:gap-7  tinyTablet:flex-col-reverse tinyTablet:h-full  tinyTablet:gap-7 bigTablet:flex-col-reverse bigTablet:h-full bigTablet:gap-7  tablet:flex-col-reverse tablet:h-full tablet:gap-7"
        >
          <div
            className="h-full w-full overflow-hidden"
            style={{
              flex: "1.5",
              borderRadius: "0.5rem",
              border: "1px solid #c1c1c159",
              minHeight: "400px",
            }}
          >
            <div className="" style={{ padding: "1%" }}>
              <div
                style={{ padding: "0.1%" }}
                className="relative h-full rounded-[inherit] overflow-hidden  bg-black"
              >
                {/* <Tabs2/> */}
                {/* <Tabs3 /> */}
                <Tabs3 />
                {/* <GlobeDemo /> */}

              </div>
            </div>
          </div>
          <div
            className="padding-stats  w-full h-full flex items-center tinyMobile:p-4 mobile:p-4 mobileBig:p-4 tinyTablet:p-4"
            style={{
              flex: "0.5",
              borderRadius: "0.5rem",
              border: "1px solid #c1c1c159 ",
            }}
          >
            {/* <CountUpStats /> */}
            <CountUpStats />
          </div>
        </div>
      </div>
    </>
  );
};

export default About5;
