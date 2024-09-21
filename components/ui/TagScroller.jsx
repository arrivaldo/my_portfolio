"use client";
"use client";
import React, { useEffect, useRef, useState } from "react";
import Spotlight from "../SpotlighBorder";

import './TagScroller.css';

const TagScroller = () => {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const tagScroller = document.querySelector(".tag-scroller");
    const tagList = tagScroller.querySelector(".tag-list");

    const addScrolling = () => {
      tagScroller.classList.add("scrolling");
      const scrollContent = Array.from(tagList.children);
      scrollContent.forEach((listItem) => {
        const clonedItem = listItem.cloneNode(true);
        clonedItem.setAttribute("aria-hidden", true);
        tagList.appendChild(clonedItem);
      });
      tagList.style.setProperty("--duration", (tagList.clientWidth / 10) + "s");
    };

    tagScroller.innerHTML = "";
    tagScroller.appendChild(tagList);
    addScrolling();
  }, []);



  const spotlightRef = useRef(null);

  useEffect(() => {
    if (spotlightRef.current) {
      new Spotlight(spotlightRef.current);
    }
  }, []);

  return (
    <>
    
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
          marginTop: '5%',
          padding: '0 6%'
        }}
      >
        {" "}
        Awesome clients that weve helped
      </h1>



      <div className="tag-scrollers">
      <div className="tag-scroller">
        <ul ref={spotlightRef} className="tag-list">


        <div className="overflow-x-hidden" style={{ padding: "2px",borderRadius: '5px'}}>
              <div
                style={{ background: 'rgb(0 0 69)',borderRadius: '5px' }}
                className="relative h-full overflow-x-hidden "
              >
          <li style={{borderRadius: '5px'}}>Munich RE</li>
          </div>
          </div>
          <div className="overflow-x-hidden" style={{ padding: "2px",borderRadius: '5px'}}>
              <div
                style={{ background: 'rgb(0 0 69)',borderRadius: '5px' }}
                className="relative h-full overflow-x-hidden "
              >
          <li style={{borderRadius: '5px'}}>FEMSA</li>
          </div>
          </div> 


          <div className="overflow-x-hidden" style={{ padding: "2px",borderRadius: '5px'}}>
              <div
                style={{ background: 'rgb(0 0 69)',borderRadius: '5px' }}
                className="relative h-full overflow-x-hidden "
              >
          <li style={{borderRadius: '5px'}}>CLARO 360</li>
          </div>
          </div> 


          <div className="overflow-x-hidden" style={{ padding: "2px",borderRadius: '5px'}}>
              <div
                style={{ background: 'rgb(0 0 69)',borderRadius: '5px' }}
                className="relative h-full overflow-x-hidden "
              >
          <li style={{borderRadius: '5px'}}>MIRA</li>
          </div>
          </div> 
          <div className="overflow-x-hidden" style={{ padding: "2px",borderRadius: '5px'}}>
              <div
                style={{ background: 'rgb(0 0 69)',borderRadius: '5px' }}
                className="relative h-full overflow-x-hidden "
              >
          <li style={{borderRadius: '5px'}}>Popular Bank</li>
          </div>
          </div>           <div className="overflow-x-hidden" style={{ padding: "2px",borderRadius: '5px'}}>
              <div
                style={{ background: 'rgb(0 0 69)',borderRadius: '5px' }}
                className="relative h-full overflow-x-hidden "
              >
          <li style={{borderRadius: '5px'}}>Munich RE</li>
          </div>
          </div>
          <div className="overflow-x-hidden" style={{ padding: "2px",borderRadius: '5px'}}>
              <div
                style={{ background: 'rgb(0 0 69)',borderRadius: '5px' }}
                className="relative h-full overflow-x-hidden "
              >
          <li style={{borderRadius: '5px'}}>FEMSA</li>
          </div>
          </div>           
          <div className="overflow-x-hidden" style={{ padding: "2px",borderRadius: '5px'}}>
              <div
                style={{ background: 'rgb(0 0 69)',borderRadius: '5px' }}
                className="relative h-full overflow-x-hidden "
              >
          <li style={{borderRadius: '5px'}}>CLARO 360</li>
          </div>
          </div>           <div className="overflow-x-hidden" style={{ padding: "2px",borderRadius: '5px'}}>
              <div
                style={{ background: 'rgb(0 0 69)',borderRadius: '5px' }}
                className="relative h-full overflow-x-hidden "
              >
          <li style={{borderRadius: '5px'}}>MIRA</li>
          </div>
          </div>           <div className="overflow-x-hidden" style={{ padding: "2px",borderRadius: '5px'}}>
              <div
                style={{ background: 'rgb(0 0 69)',borderRadius: '5px' }}
                className="relative h-full overflow-x-hidden "
              >
          <li style={{borderRadius: '5px'}}>Popular Bank</li>
          </div>
          </div>           <div className="overflow-x-hidden" style={{ padding: "2px",borderRadius: '5px'}}>
              <div
                style={{ background: 'rgb(0 0 69)',borderRadius: '5px' }}
                className="relative h-full overflow-x-hidden "
              >
          <li style={{borderRadius: '5px'}}>Munich RE</li>
          </div>
          </div>
          <div className="overflow-x-hidden" style={{ padding: "2px",borderRadius: '5px'}}>
              <div
                style={{ background: 'rgb(0 0 69)',borderRadius: '5px' }}
                className="relative h-full overflow-x-hidden "
              >
          <li style={{borderRadius: '5px'}}>FEMSA</li>
          </div>
          </div>           
          <div className="overflow-x-hidden" style={{ padding: "2px",borderRadius: '5px'}}>
              <div
                style={{ background: 'rgb(0 0 69)',borderRadius: '5px' }}
                className="relative h-full overflow-x-hidden "
              >
          <li style={{borderRadius: '5px'}}>CLARO 360</li>
          </div>
          </div>           <div className="overflow-x-hidden" style={{ padding: "2px",borderRadius: '5px'}}>
              <div
                style={{ background: 'rgb(0 0 69)',borderRadius: '5px' }}
                className="relative h-full overflow-x-hidden "
              >
          <li style={{borderRadius: '5px'}}>MIRA</li>
          </div>
          </div>           <div className="overflow-x-hidden" style={{ padding: "2px",borderRadius: '5px'}}>
              <div
                style={{ background: 'rgb(0 0 69)',borderRadius: '5px' }}
                className="relative h-full overflow-x-hidden "
              >
          <li style={{borderRadius: '5px'}}>Popular Bank</li>
          </div>
          </div> 
          <div className="overflow-x-hidden" style={{ padding: "2px",borderRadius: '5px'}}>
              <div
                style={{ background: 'rgb(0 0 69)',borderRadius: '5px' }}
                className="relative h-full overflow-x-hidden "
              >
          <li style={{borderRadius: '5px'}}>Munich RE</li>
          </div>
          </div>         
          <div className="overflow-x-hidden" style={{ padding: "2px",borderRadius: '5px'}}>
              <div
                style={{ background: 'rgb(0 0 69)',borderRadius: '5px' }}
                className="relative h-full overflow-x-hidden "
              >
          <li style={{borderRadius: '5px'}}>FEMSA</li>
          </div>
          </div> 
          <div className="overflow-x-hidden" style={{ padding: "2px",borderRadius: '5px'}}>
              <div
                style={{ background: 'rgb(0 0 69)',borderRadius: '5px' }}
                className="relative h-full overflow-x-hidden "
              >
          <li style={{borderRadius: '5px'}}>CLARO 360</li>
          </div>
          </div>           <div className="overflow-x-hidden" style={{ padding: "2px",borderRadius: '5px'}}>
              <div
                style={{ background: 'rgb(0 0 69)',borderRadius: '5px' }}
                className="relative h-full overflow-x-hidden "
              >
          <li style={{borderRadius: '5px'}}>MIRA</li>
          </div>
          </div>           <div className="overflow-x-hidden" style={{ padding: "2px",borderRadius: '5px'}}>
              <div
                style={{ background: 'rgb(0 0 69)',borderRadius: '5px' }}
                className="relative h-full overflow-x-hidden "
              >
          <li style={{borderRadius: '5px'}}>Popular Bank</li>
          </div>
          </div>           <div className="overflow-x-hidden" style={{ padding: "2px",borderRadius: '5px'}}>
              <div
                style={{ background: 'rgb(0 0 69)',borderRadius: '5px' }}
                className="relative h-full overflow-x-hidden "
              >
          <li style={{borderRadius: '5px'}}>Munich RE</li>
          </div>
          </div>        
          <div className="overflow-x-hidden" style={{ padding: "2px",borderRadius: '5px'}}>
              <div
                style={{ background: 'rgb(0 0 69)',borderRadius: '5px' }}
                className="relative h-full overflow-x-hidden "
              >
          <li style={{borderRadius: '5px'}}>FEMSA</li>
          </div>
          </div>         
          <div className="overflow-x-hidden" style={{ padding: "2px",borderRadius: '5px'}}>
              <div
                style={{ background: 'rgb(0 0 69)',borderRadius: '5px' }}
                className="relative h-full overflow-x-hidden "
              >
          <li style={{borderRadius: '5px'}}>CLARO 360</li>
          </div>
          </div>           <div className="overflow-x-hidden" style={{ padding: "2px",borderRadius: '5px'}}>
              <div
                style={{ background: 'rgb(0 0 69)',borderRadius: '5px' }}
                className="relative h-full overflow-x-hidden "
              >
          <li style={{borderRadius: '5px'}}>MIRA</li>
          </div>
          </div>           <div className="overflow-x-hidden" style={{ padding: "2px",borderRadius: '5px'}}>
              <div
                style={{ background: 'rgb(0 0 69)',borderRadius: '5px' }}
                className="relative h-full overflow-x-hidden "
              >
          <li style={{borderRadius: '5px'}}>Popular Bank</li>
          </div>
          </div>           <div className="overflow-x-hidden" style={{ padding: "2px",borderRadius: '5px'}}>
              <div
                style={{ background: 'rgb(0 0 69)',borderRadius: '5px' }}
                className="relative h-full overflow-x-hidden "
              >
          <li style={{borderRadius: '5px'}}>Munich RE</li>
          </div>
          </div>          
          <div className="overflow-x-hidden" style={{ padding: "2px",borderRadius: '5px'}}>
              <div
                style={{ background: 'rgb(0 0 69)',borderRadius: '5px' }}
                className="relative h-full overflow-x-hidden "
              >
          <li style={{borderRadius: '5px'}}>FEMSA</li>
          </div>
          </div>           
          <div className="overflow-x-hidden" style={{ padding: "2px",borderRadius: '5px'}}>
              <div
                style={{ background: 'rgb(0 0 69)',borderRadius: '5px' }}
                className="relative h-full overflow-x-hidden "
              >
          <li style={{borderRadius: '5px'}}>CLARO 360</li>
          </div>
          </div>           <div className="overflow-x-hidden" style={{ padding: "2px",borderRadius: '5px'}}>
              <div
                style={{ background: 'rgb(0 0 69)',borderRadius: '5px' }}
                className="relative h-full overflow-x-hidden "
              >
          <li style={{borderRadius: '5px'}}>MIRA</li>
          </div>
          </div>           <div className="overflow-x-hidden" style={{ padding: "2px",borderRadius: '5px'}}>
              <div
                style={{ background: 'rgb(0 0 69)',borderRadius: '5px' }}
                className="relative h-full overflow-x-hidden "
              >
          <li style={{borderRadius: '5px'}}>Popular Bank</li>
          </div>
          </div>         </ul>
      </div>
    </div>
    </>
    
  );
};

export default TagScroller;
