"use client";


import React, { useState } from 'react';
import './Tabs3.css';
// import Faqs from './Faqs';

// import Certifications2 from './Certifications2';
import Stack2 from './Stack2';
import { GlobeDemo } from './GridGlobe';
import Certifications from './Certifications';
import Faqs from './Faqs';
import Technologies from './Technologies'

const Tabs3 = () => {
  const [activeTab, setActiveTab] = useState('one');

  const handleTabClick = (contentId) => {
    setActiveTab(contentId);
  };

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
        Skills
      </h1>
    <div className="wrap">
      <ul className="tabs group w-full ">
        <li><button href="#one" className={`text-lg tinyMobile:text-[0.9rem] mobile:text-[0.9rem] mobileBig:text-[1.05rem] activeTab === 'one' ? 'active' : ''`} onClick={() => handleTabClick('one')}>Stack</button></li>
        <li><button href="#two" className={`text-lg tinyMobile:text-[0.9rem] mobile:text-[0.9rem] mobileBig:text-[1.05rem] activeTab === 'two' ? 'active' : ''`} onClick={() => handleTabClick('two')}>Certifications</button></li>
        <li><button href="#three" className={`text-lg tinyMobile:text-[0.9rem] mobile:text-[0.9rem] mobileBig:text-[1.05rem] activeTab === 'three' ? 'active' : ''`} onClick={() => handleTabClick('three')}>Faqs</button></li>
      </ul>
      <div id="contentTab">
        <div id="one" className={`tab-content ${activeTab === 'one' ? 'active' : ''} overflow-hidden`}>
          {/* <Stack2 /> */}
          {/* <Stack2 /> */}
          <Technologies />
          {/* <GlobeDemo /> */}
          {/* <Stack2 /> */}
        </div>
        <div id="two" className={`tab-content ${activeTab === 'two' ? 'active' : ''}`}>
            <Certifications />
          </div>
        <div style={{maxHeight: '300px'}} id="three" className={`tab-content overflow-y-scroll overflow-x-hidden ${activeTab === 'three' ? 'active' : ''}`}> 
          <Faqs />
        </div>
      </div>
    </div>
    </>

  );
};

export default Tabs3;
