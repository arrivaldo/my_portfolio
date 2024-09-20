import React from "react";
import ClipPath from "./ClipPath";
import Image from "next/image";
import Feat from "@/public/images/astro3.jpg";

import "./MainProjects.css";

const MainProjects = () => {
  return (
    <>
      <h1
        className="m-title-p text-xl tinyMobile:text-[0.9rem] mobile:text-[0.9rem] mobileBig:text-[1.05rem]"
        style={{
          width: "100%",
          color: "#fff",
          display: "flex",
          justifyContent: "flex-start",
          fontWeight: "600",
          padding: "0 6%",
        }}
      >
        Checkout some of my personal projects
      </h1>
      <div className="featured-container">
        {/* <div className="featured-text1">
          <h3 className="text-sm">Featured 1</h3>
          <h2 className="text-xl text-width mt-4">Full Stack Blog App</h2>

          <p className="mt-4">
            I've created Code & Toast blog, to share my articles in a way
            everyone finds it interesting and resourceful.
          </p>

          <ul className="flex gap-2 text-sm mt-4">
            <li>React</li>
            <li>Node.js</li>
            <li>Express.js</li>
          </ul>

          <button
            style={{ padding: "2% 14%", marginTop: "13%" }}
            className="bg-black text-white-100 mt-4 text-sm"
          >
            View details
          </button>
        </div> */}

        {/* <ClipPath /> */}
        <div className="clipped-div">
          <div className="featured-text1">
            <h3 className="text-sm">Featured 1</h3>
            <h2 className="text-xl text-width mt-4">Full Stack Blog App</h2>

            <p className="mt-4">
              Ive created Code & Toast blog, to share my articles in a way
              everyone finds it interesting and resourceful.
            </p>

            <ul className="flex gap-2 text-sm mt-4">
              <li>React</li>
              <li>Node.js</li>
              <li>Express.js</li>
            </ul>

            <button
              style={{ padding: "2% 14%", marginTop: "13%" }}
              className="bg-black text-white-100 mt-4 text-sm"
            >
              View details
            </button>
          </div>
        </div>

        <div className="featured-image1"></div>
      </div>

      {/* <div style={{}} className="container-b">
        <svg
          className="svg-shape"
          width="300"
          height="300"
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.9,0 H84.4 A7.9,8.3,0,0,1,90.2,2.6 L98.8,12.2 A7.9,8.3,0,0,1,100,17.9 V91.7 C100,96.3,96.5,100,92.1,100 H7.9 C3.5,100,0,96.3,0,91.7 V8.3 C0,3.7,3.5,0,7.9,0 Z"
            fill="rgb(0 0 69)"
            stroke="#c1c1c194" 
            strokeWidth="0.7"
          />
        </svg>
        <div className="content">
          Content of the clipped div
        </div>
      </div> */}
    </>
  );
};

export default MainProjects;
