"use client";

import React, { useEffect, useRef, useState } from "react";
import Spotlight from "../SpotlighBorder";


import "./Clients.css";

const Clients = () => {
  useEffect(() => {
    const scrollers = document.querySelectorAll(".scroller");

    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      addAnimation(scrollers);
    }
  }, []); 

  function addAnimation(scrollers: NodeListOf<Element>) {
    scrollers.forEach((scroller) => {
      // add data-animated="true" to every `.scroller` on the page
      scroller.setAttribute("data-animated", "true");
      // Note: Changed the value to a string, as setAttribute expects a string value
      // You can adjust it according to your use case
      const scrollerInner = scroller.querySelector(".scroller__inner");
      if (scrollerInner) {
        const scrollerContent = Array.from(scrollerInner.children);
  
        scrollerContent.forEach((item) => {
          const duplicatedItem = item.cloneNode(true) as HTMLElement; // Explicitly cast item to HTMLElement
          duplicatedItem.setAttribute("aria-hidden", "true");
          scrollerInner.appendChild(duplicatedItem);
        });
      }
    });
  }
  
  

  const spotlightRef = useRef(null);

  useEffect(() => {
    if (spotlightRef.current) {
      new Spotlight(spotlightRef.current);
    }
  }, []);
  return (
    <>
      <div
      className=""
        style={{
          height: "100%",
          // borderLeft: "1px solid #2e2e32",
          // borderRight: "1px solid #2e2e32",
          zIndex: "10",
          position: 'relative'
        }}
      >

      <h1
        className="p-title-clients text-xl tinyMobile:text-[0.9rem] mobile:text-[0.9rem]  mobileBig:text-[1.05rem]"
        style={{
          width: "100%",
          color: "#e3e3e3",

          // marginBottom: "1%",
          display: "flex",
          justifyContent: "flex-start",
          fontWeight: "600",
          marginBottom: '2%',
          marginTop: '5%'
        }}
      >
        {" "}
        Awesome clients that we&apos;ve helped
      </h1>

      <div
        style={{ position: "relative"}}
        className="text-xl tinyMobile:text-[0.9rem] mobile:text-[0.9rem]  mobileBig:text-[0.9rem] font-bold falseBody overflow-x-hidden"
      >
        <div className="scroller overflow-x-hidden" data-speed="slow">
          <ul  className="tag-list scroller__inner overflow-x-hidden mobileBig:text-lg">
            <div className="overflow-x-hidden" style={{ padding: "2px",borderRadius: '5px'}}>
              <div
                style={{ background: 'rgb(0 0 69)',borderRadius: '5px' }}
                className="relative h-full overflow-x-hidden "
              >
                <li className="overflow-x-hidden" style={{borderRadius: '5px'}}>
          
                  Munich RE
                </li>
              </div>
            </div>

            <div style={{ padding: "2px",borderRadius: '5px'}}>
              <div
                style={{ background: 'rgb(0 0 69)',borderRadius: '5px' }}
                className="relative h-full  rounded-[inherit]  overflow-hidden"
              >
                <li style={{borderRadius: '5px'}}>
     
                  FEMSA
                </li>
              </div>
            </div>

            <div style={{ padding: "2px",borderRadius: '5px' }}>
              <div
                style={{ background: 'rgb(0 0 69)',borderRadius: '5px' }}
                className="relative h-ful rounded-[inherit]  overflow-hidden"
              >
                <li style={{borderRadius: '5px'}}>
        
                  CLARO 360
                </li>
              </div>
            </div>

            <div style={{ padding: "2px",borderRadius: '5px' }}>
              <div
                style={{ background: 'rgb(0 0 69)',borderRadius: '5px' }}
                className="relative h-full rounded-[inherit]  overflow-hidden"
              >
                <li style={{borderRadius: '5px'}}>
          
                  MIRA
                </li>
              </div>
            </div>

            <div style={{ padding: "2px",borderRadius: '5px' }}>
              <div
                style={{ background: 'rgb(0 0 69)',borderRadius: '5px' }}
                className="relative h-full rounded-[inherit]  overflow-hidden"
              >
                <li style={{borderRadius: '5px'}}>
         
                  Popular Bank
                </li>
              </div>
            </div>

            {/* <li>animation</li>
          <li>UI/UX</li> */}
          </ul>
        </div>
      </div>
      </div>
    </>
  );
};

export default Clients;
