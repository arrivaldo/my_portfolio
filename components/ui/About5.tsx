"use client";

import React from "react";
import Profile from "./Profile";
import Jobs from "./Jobs";
import "./About5.css";
import Tabs3 from "./Tabs3";
import CountUpStats from "./CountUpStats";

const About5 = () => {
  return (

    <>
    <div style={{marginTop: '10%'}} className="about5-container relative z-10">
      <div className="a">
        <div className="a1">
          <Profile />
        </div>
        <div className="a2">
          <Jobs />
        </div>
      </div>
      <div className="b">
        <div className="b1">
          <div className="" style={{ padding: "2px" }}>
            <div
              style={{}}
              className="relative h-full rounded-[inherit]  overflow-vsible"
            >
              <div className="group">
                <div className="flex flex-col">
                  <h3 className="text-lg tinyMobile:text-[0.7rem] mobile:text-[0.7rem] mobileBig:text-[0.9rem]">
                    April 5, 2024
                  </h3>
                  <h2 className="text-xl tinyMobile:text-[0.9rem] mobile:text-[0.9rem] mobileBig:text-[1.05rem] font-bold py-2">
                    Crafting a design system for a multiplanetary
                  </h2>
                  <ul className="text-lg tinyMobile:text-[0.7rem] mobile:text-[0.7rem] mobileBig:text-[0.9rem] flex gap-4 pb-2 ">
                    <li>#Arquitecture</li>
                    <li>#Engineering</li>
                  </ul>
                  <p className="text-lg tinyMobile:text-[0.7rem] mobile:text-[0.7rem] mobileBig:text-[0.9rem] pb-2">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Iure eligendi fugiat vitae expedita deserunt aliquam
                    recusandae. Iure eligendi fugiat vitae expedita deserunt.
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
        <div className="b2">
          <div className="" style={{ padding: "2px" }}>
            <div
              style={{}}
              className="relative h-full  rounded-[inherit]  overflow-vsible"
            >
              <div className="group">
                <div className="flex flex-col">
                  <h3 className="text-lg tinyMobile:text-[0.7rem] mobile:text-[0.7rem] mobileBig:text-[0.9rem]">
                    April 5, 2024
                  </h3>
                  <h2 className="text-xl tinyMobile:text-[0.9rem] mobile:text-[0.9rem] mobileBig:text-[1.05rem] font-bold py-2">
                    Crafting a design system for a multiplanetary
                  </h2>
                  <ul className="text-lg tinyMobile:text-[0.7rem] mobile:text-[0.7rem] mobileBig:text-[0.9rem] flex gap-4 pb-2 ">
                    <li>#Arquitecture</li>
                    <li>#Engineering</li>
                  </ul>
                  <p className="text-lg tinyMobile:text-[0.7rem] mobile:text-[0.7rem] mobileBig:text-[0.9rem] pb-2">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Iure eligendi fugiat vitae expedita deserunt aliquam
                    recusandae. Iure eligendi fugiat vitae expedita deserunt.
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


    


<div style={{ marginTop: '25px'}} className="p-tabs-container relative z-10 h-full flex items-center w-full gap-4 tinyMobile:flex-col-reverse tinyMobile:h-full tinyMobile:gap-7 mobile:flex-col-reverse mobile:h-full mobile:gap-7 mobileBig:flex-col-reverse mobileBig:h-full  mobileBig:gap-7  tinyTablet:flex-col-reverse tinyTablet:h-full  tinyTablet:gap-7 bigTablet:flex-col-reverse bigTablet:h-full bigTablet:gap-7  tablet:flex-col-reverse tablet:h-full tablet:gap-7">
<div
  className="h-full w-full overflow-hidden"
  style={{
    flex: "1.5",
    borderRadius: "0.5rem",
    border: "1px solid #c1c1c159",
    minHeight:'400px'
  }}
>
  {/* <Tabs2/> */}
  {/* <Tabs3 /> */}
  <Tabs3 />
</div>
<div
  className="padding-stats w-full h-full flex items-center tinyMobile:p-4 mobile:p-4 mobileBig:p-4 tinyTablet:p-4"
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

</>




  );
};

export default About5;
