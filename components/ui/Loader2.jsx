import React, { useEffect } from "react";
import "./Loader2.scss"; // Assuming the CSS is in Loader2.css

const Loader2 = () => {
  useEffect(() => {
    const preloader = document.querySelector(".preloader");
    
    // Add loaded class after a timeout to trigger slide-down animation
    const timer = setTimeout(() => {
      preloader.classList.add("loaded");
    }, 1700); // Adjust this delay according to your requirements

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="preloader">
      <div className="preloader-mask">
        <h1 className="preloader-text animate slide-up">Engineer.</h1>
      </div>
      <div className="preloader-mask">
        <h1 className="preloader-text animate slide-up delay-1">Developer.</h1>
      </div>
      <div className="preloader-mask">
        <h1 className="preloader-text animate slide-up delay-2">Consultant.</h1>
      </div>
    </div>
  );
};

export default Loader2;
