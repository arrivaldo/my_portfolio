"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./MovingCards";

function InfiniteMovingCardsDemo() {
  return (
    <div  className="rounded-md flex flex-col antialiased dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      
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
      
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const testimonials = [
  {
    quote:"CLARO 360",
    name: "Charles Dickens",
    title: "A Tale of Two Cities",
  },
  {
    quote:
"MIRA",   
 name: "William Shakespeare",
    title: "Hamlet",
  },
  {
    quote: "Popular Bank",   
    name: "Edgar Allan Poe",
    title: "A Dream Within a Dream",
  },
  {
    quote:
"Munich RE", 
    name: "Jane Austen",
    title: "Pride and Prejudice",
  },
  {
    quote:
"FEMSA", 
    name: "Herman Melville",
    title: "Moby-Dick",
  },
];


export default InfiniteMovingCardsDemo;