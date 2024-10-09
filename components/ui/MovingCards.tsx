import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import Spotlight from "../SpotlighBorder";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: {
    quote: string;
    name: string;
    title: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const scrollerRef = useRef<HTMLUListElement | null>(null);
  const spotlightRef = useRef<HTMLUListElement | null>(null); // Correctly typed

  useEffect(() => {
    if (scrollerRef.current) {
      spotlightRef.current = scrollerRef.current; // Safely assign scrollerRef to spotlightRef
    }
  }, []);

  useEffect(() => {
    addAnimation();
  }, [addAnimation]);

  const [start, setStart] = useState(false);
  function addAnimation() {
    if (containerRef.current && scrollerRef.current && scrollerRef.current.children.length === items.length) {
      const scrollerContent = Array.from(scrollerRef.current.children);
      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        scrollerRef.current?.appendChild(duplicatedItem);
      });
  
      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  

  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty("--animation-direction", "forwards");
      } else {
        containerRef.current.style.setProperty("--animation-direction", "reverse");
      }
    }
  };

  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };

  useEffect(() => {
    if (spotlightRef.current) {
      new Spotlight(spotlightRef.current); // Initialize Spotlight with the ref
    }
  }, []);

  return (
    <div
      style={{ padding: "0 6%" }}
      ref={containerRef}
      className={cn(
        "scroller relative z-20 max-w-7xl overflow-hidden overflow-x-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex min-w-full shrink-0 gap-4 w-max flex-nowrap",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item) => (
          <li
            className="max-w-full relative flex-shrink-0 flex justify-center items-center p-4 text-xl"
            style={{ background: "#000045", border: "1px solid #c1c1c194", width: "150px" }}
            key={item.name}
          >
            <blockquote>
              <div
                aria-hidden="true"
                className="user-select-none -z-1 pointer-events-none absolute -left-0.5 -top-0.5 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
              ></div>
              <span className="relative z-20 text-sm leading-[1.6] text-gray-100 font-normal">
                {item.quote}
              </span>
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  );
};
