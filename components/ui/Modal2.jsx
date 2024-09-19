"use-client";

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import "./Services3.css";

import "./Modal.css";

const Modal2 = ({ title, timeline, icon }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Instead of the button, make the whole div clickable
  return (
    <div  style={{padding: '2px'}} onClick={() => setIsOpen(true)} className="cursor-pointer flex-1 service-box4">
      {/* The entire card will now be clickable */}
      <div className="service-card cardBorder">
        <div style={{display: 'flex', flexDirection: 'row-reverse', justifyContent: 'space-between'}}>
        <div className="icon-container">{icon}</div>
        <h3 className="title-services">{title}</h3>

        </div>
        <div className="w-full arrow-margin flex justify-between flex-row-reverse ">
          <FiArrowRight className="text-2xl transition-transform duration-500 ml-auto group-hover:-rotate-45" />
          <h3 className="read-more">Read More</h3>
        </div>
      </div>

      <SpringModal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        title={title}
        timeline={timeline}
        icon={icon}
      />
    </div>
  );
};

const SpringModal = ({ isOpen, setIsOpen, title, timeline, icon }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsOpen(false)}
          className="bg-slate-900/20 backdrop-blur p-8 fixed inset-0 z-40 grid place-items-center overflow-hidden cursor-pointer"
          style={{ placeItems: "center" }}
        >
          <motion.div
            initial={{ scale: 0, rotate: "12.5deg" }}
            animate={{ scale: 1, rotate: "0deg" }}
            exit={{ scale: 0, rotate: "0deg" }}
            onClick={(e) => e.stopPropagation()} // prevents closing the modal when clicking inside
            className="bg-[#20126d81] modalWidth text-white p-6 rounded-lg max-w-xl shadow-xl cursor-default relative overflow-hidden -z-50"
            style={{
              border: "1px solid #e3e3e3",
              background: "rgb(32 18 109 / 80%)",
              overflowX: "hidden",
            }}
          >
            <div className="relative z-10">
              <div className="flex justify-center mx-auto mb-2 w-full h-16">
                {icon}
              </div>
              <h3 className="item-service font-bold text-center mb-2">
                {title}
              </h3>
              <ol
                style={{
                  padding: "5%",
                  height: "415px",
                  overflowY: "scroll",
                  overflowX: "hidden",
                }}
                className="relative border-s border-gray-200 dark:border-gray-700"
              >
                {timeline.map((item, index) => (
                  <li key={index} className="mb-10 ms-4">
                    <div
                      style={{ marginLeft: "-8%", marginTop: "2%" }}
                      className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5-start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"
                    ></div>
                    <time className="mb-1 item-date font-normal leading-none text-gray-400 dark:text-gray-500">
                      {item.date}
                    </time>
                    <h3 className="item-title font-semibold dark:text-white">
                      {item.title}
                    </h3>
                    <p className="mb-4 item-description font-normal text-gray-300">
                      {item.description}
                    </p>
                  </li>
                ))}
              </ol>
              <div className="flex gap-2 mt-12">
                <button
                  onClick={() => setIsOpen(false)}
                  className="btn-1 bg-transparent hover:bg-white/10 transition-colors text-white font-semibold w-full py-2 rounded"
                >
                  Nah, go back
                </button>
                <button
                  style={{ color: "#000" }}
                  onClick={() => setIsOpen(false)}
                  className="btn-2 bg-white hover:opacity-90 transition-opacity text-indigo-600 font-semibold w-full py-2 rounded"
                >
                  Understood!
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal2;
