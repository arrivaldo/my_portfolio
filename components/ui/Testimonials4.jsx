"use client";

import React, { useState } from "react";
import "./Testimonials4.css";
import { ImQuotesLeft } from "react-icons/im";
const Testimonials4 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [position, setPosition] = useState(0);

 

  const testimonials = [
    {
      id: 1,
      img: "https://images.unsplash.com/photo-1627161683077-e34782c24d81?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=703&q=80",
      name: "Sam Gharnagh",
      title: "Vice President",
      info: "Erick performed QA activities for an upgrade project of the Pega platform with smooth successful result. He took initiative to quickly understand the client application, creating test cases and executing them.",
    },
    {
      id: 2,
      img: "https://plus.unsplash.com/premium_photo-1670588776139-da93b47afc6f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      name: "Madhu Chalamaiah",
      title: "Lead Developer",
      info: "I had the pleasure of working alongside Erick on a couple of projects. His meticulous attention to detail, strong analytical skills, and dedication to ensuring product quality were evident in every project. Erick is a valuable asset to any team, and I highly recommend him for his expertise.",
    },
    {
      id: 3,
      img: "https://images.unsplash.com/photo-1595211877493-41a4e5f236b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=715&q=80",
      name: "Darwin Batres",
      title: "Lead Developer",
      info: "Erick has been doing a great job, he got direct exposure to the client and was able to interact with them. The client liked his work and he helped them directly whenever they needed it. i.e providing data, demos, sharing knowledge.",
    },
   
    {
      id: 4,
      img: "https://images.unsplash.com/photo-1629425733761-caae3b5f2e50?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      name: "Luis Cuestas",
      title: "Lead Developer",
      info: "I hired Erick after a really good job interview with him, and I was right in my decision as he proved to be a valuable asset for any project. He took part in every aspect of the project, including frontend and backend development.",
    },
    {
      id: 5,
      img: "https://images.unsplash.com/photo-1614644147798-f8c0fc9da7f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80",
      name: "Company",
      title: "Rules Cube",
      info: "Erick demonstrated not only strong technical skills but also a significant commitment to his responsibilities. His meticulous approach and ability to tackle complex challenges were of great value to the team and contributed significantly to the success of our projects.",
    },
  
    
    // Add other testimonials...
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) =>
    prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
  );
  setPosition((prevPosition) =>
    prevPosition === testimonials.length - 1 ? 0 : prevPosition + 1
  );
};

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
    prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
  );
  setPosition((prevPosition) =>
    prevPosition === 0 ? testimonials.length - 1 : prevPosition - 1
  );
  };


  
  const selectTestimonial = (index) => {
    setCurrentIndex(index);
    setPosition(index);
  };


  const Dots = ({ position, setPosition, totalTestimonials }) => {
    return (
      <div className="mt-4 flex w-full justify-center gap-2">
        {Array.from({ length: totalTestimonials }).map((_, index) => {
          return (
            <button
              key={index}
              onClick={() => selectTestimonial(index)}
              className={`h-1 w-3  transition-colors ${
                position === index ? "bg-neutral-50 w-5" : "bg-neutral-500"
              }`}
            />
          );
        })}
      </div>
    );
  };




  return (
    <div id="testimonials-section" className="text-center ">
      <div className="quotes flex w-full justify-center">
        <span style={{ marginTop: "-15%" }} className="quote text-slate-700">
          <ImQuotesLeft style={{ width: "100%" }} />
        </span>
      </div>

      <div className="container-testimonial">
        <div className="section-title">
          <h2 style={{ color: "#e3e3e3" }} className="testimTitle tinyMobile:text-[0.9rem] mobile:text-[0.9rem] mobileBig:text-[1.05rem]">
            What they said <strong>about me</strong>
          </h2>
          <div className="flex justify-center w-full">
            <hr className="hr" />
          </div>
        </div>

        <div
          style={{  }}
          className="flex justify-center w-full flex-col items-center parraf-container"
        >
          <p
            style={{
              filter: "brightness(1.3)",
              color: "#8d93a0",
            }}
            className="text-xl tinyMobile:text-[0.8rem] mobile:text-[0.8rem] mobileBig:text-[0.9rem]"
          >
            {testimonials[currentIndex].info}
          </p>
          <p style={{ color: "#e3e3e3" }} className="text-xl tinyMobile:text-[0.9rem] mobile:text-[0.9rem] mobileBig:text-[0.9rem] mt-5">
            <strong className="text-lg tinyMobile:text-[0.8rem] mobile:text-[0.8rem] mobileBig:text-[0.9rem]">
              {testimonials[currentIndex].name}
            </strong>
            , {testimonials[currentIndex].title}
          </p>
        </div>


      </div>
      <div className="flex gap-2 flex-col justify-center w-full">
        <Dots
          position={position}
          setPosition={setPosition}
          totalTestimonials={testimonials.length}
        />
        <div className="flex gap-2 justify-center w-full">
          <button onClick={prevTestimonial}>
          <svg
              width="60"
              height="44"
              viewBox="0 0 147 44"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M143.685 22.0708L3.05533 22.1051M3.05533 22.1051L22.1929 3.06646M3.05533 22.1051L22.0939 41.2426"
                stroke="#E3E3E3"
                strokeWidth="5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <button onClick={nextTestimonial}>  
          <svg
              width="60"
              height="44"
              viewBox="0 0 147 44"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.5 21.9931L143.13 21.9928M143.13 21.9928L123.987 41.0268M143.13 21.9928L124.096 2.8507"
                stroke="#E3E3E3"
                strokeWidth="5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg></button>
        </div>
      </div>
    </div>
  );
};

export default Testimonials4;
