import React from "react";
import ClipPath from "./ClipPath";
import Image from "next/image";
import Feat from "@/public/images/astro3.jpg";

import "./MainProjects.css";

const MainProjects = () => {
  return (
    <>
      <h1
        className="block featured-p-title tinyMobile:hidden m-title-p text-xl tinyMobile:text-[0.9rem] mobile:text-[0.9rem] mobileBig:text-[1.05rem]"
        style={{
         
        }}
      >
        Checkout some of my personal projects
      </h1>
      <h1
        className=" featured-p-title2 tinyMobile:block m-title-p text-xl tinyMobile:text-[0.9rem] mobile:text-[0.9rem] mobileBig:text-[1.05rem]"
        style={{
      
        }}
      >
        Checkout my personal projects
      </h1>
      <div className="featured-container1">
  
        <div className="featured-text1">
          <h3 className="text-sm tinyMobile:text-[0.7rem] mobile:text-[0.7rem] mobileBig:text-[0.8rem]">
            Featured 1</h3>
          <h2 className="text-xl text-width mt-4 tinyMobile:text-[1rem] mobile:text-[1rem] mobileBig:text-[1.05rem]">
            Full Stack Blog App
          </h2>

          <p className="mt-4 tinyMobile:text-[0.7rem] mobile:text-[0.7rem] mobileBig:text-[0.9rem] tinyTablet:text-[1.05rem]">
            Ive created Code & Toast blog, to share my articles in a way
            everyone finds it interesting and resourceful.
          </p>

          <ul className="flex gap-2 text-sm mt-4 tinyMobile:text-[0.7rem]  mobile:text-[0.7rem] mobileBig:text-[0.9rem] tinyTablet:text-[1.05rem]">
            <li>React</li>
            <li>Node.js</li>
            <li>Express.js</li>
          </ul>

          <button
            style={{}}
            className="bg-black text-white-100 mt-2 text-sm tinyMobile:text-[0.7rem]  mobile:text-[0.7rem] mobileBig:text-[0.9rem] button-featured"
          >
            View details
          </button>
        </div>
        <div className="featured-image1">
          <Image

            src="/images/featured1.png"
            alt="Featured project"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>

      <div className="featured-container2">
        <div className="featured-image2">
          <Image
          style={{height: '100%'}}
            src="/images/nedelka.png"
            alt="Featured project"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="featured-text2">
        <h3 className="text-sm tinyMobile:text-[0.7rem] mobile:text-[0.7rem] mobileBig:text-[0.8rem]">
        Featured 2</h3>
        <h2 className="text-xl text-width mt-4 tinyMobile:text-[1rem] mobile:text-[1rem] mobileBig:text-[1.05rem]">
        Real Artist Personal Website
          </h2>

          <p className="mt-4 tinyMobile:text-[0.7rem] mobile:text-[0.7rem] mobileBig:text-[0.9rem]">
            Artist website made for showcasing Nedelkas artistic trajectory as
            she ventures into her musical projects.
          </p>

          <ul className="flex gap-2 text-sm mt-4 tinyMobile:text-[0.7rem]  mobile:text-[0.7rem] mobileBig:text-[0.9rem]">
            <li>React</li>
            <li>Node.js</li>
            <li>Express.js</li>
          </ul>

          <button
            style={{}}
            className="bg-black text-white-100 mt-2 text-sm tinyMobile:text-[0.7rem]  mobile:text-[0.7rem] mobileBig:text-[0.9rem] button-featured"
          >
            View details
          </button>
        </div>
      </div>

      <div className="featured-container3">
        <div className="featured-text3">
        <h3 className="text-sm tinyMobile:text-[0.7rem] mobile:text-[0.7rem] mobileBig:text-[0.8rem]">
        Featured 3</h3>
        <h2 className="text-xl text-width mt-4 tinyMobile:text-[1rem] mobile:text-[1rem] mobileBig:text-[1.05rem]">
        Full Stack Blog App
          </h2>

          <p className="mt-4 tinyMobile:text-[0.7rem] mobile:text-[0.7rem] mobileBig:text-[0.9rem]">
            Ive created Code & Toast blog, to share my articles in a way
            everyone finds it interesting and resourceful.
          </p>

          <ul className="flex gap-2 text-sm mt-4 tinyMobile:text-[0.7rem]  mobile:text-[0.7rem] mobileBig:text-[0.9rem]">
            <li>React</li>
            <li>Node.js</li>
            <li>Express.js</li>
          </ul>

          <button
            style={{}}
            className="bg-black text-white-100 mt-2 text-sm tinyMobile:text-[0.7rem]  mobile:text-[0.7rem] mobileBig:text-[0.9rem] button-featured"
          >
            View details
          </button>
        </div>
        <div className="featured-image3">
          <Image
            src="/images/astro-portfolio.png"
            alt="Featured project"
           layout="fill"
            objectFit="cover"
          />
        </div>
      </div>



      <div className="flex flex-col view-all justify-center items-center">
        <h2 className="text-xl tinyMobile:text-[0.9rem] mobile:text-[0.9rem] mobileBig:text-[1.05rem] tiny-tablet-view mb-4">
          View all projects
        </h2>
        <svg
          width="25"
          height="25"
          viewBox="0 0 92 50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2.84766 3.3501L45.6742 46.1767L88.5008 3.3501"
            stroke="white"
            strokeWidth="5.71"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
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
