import React, { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import { motion } from "framer-motion";
import useMeasure from "react-use-measure";

const Faqs = () => {
  return (
    <div className="py-4 ">
      <div className="mx-auto max-w-3xl">
        <h3 className="mb-4 text-left text-xl tinyMobile:text-[0.9rem] mobile:text-[0.9rem] mobileBig:text-[1.05rem] font-semibold">
          Frequently asked questions
        </h3>
        <Question title="Why is the sky blue?" defaultOpen>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
            laboriosam neque reprehenderit saepe eius dolorum vel consequuntur
            perspiciatis ad vero.
          </span>
        </Question>
        <Question title="Why did the chicken cross the road?">
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
            laboriosam neque reprehenderit saepe eius dolorum vel consequuntur
            perspiciatis ad vero.
          </span>
        </Question>
        <Question title="How many licks does it take to get to the center of a tootsie pop?">
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
            laboriosam neque reprehenderit saepe eius dolorum vel consequuntur
            perspiciatis ad vero.
          </span>
        </Question>
        <Question title="Where's Waldo?">
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
            laboriosam neque reprehenderit saepe eius dolorum vel consequuntur
            perspiciatis ad vero.
          </span>
        </Question>
      </div>
    </div>
  );
};

const Question = ({ title, children, defaultOpen = false }) => {
  const [ref, { height }] = useMeasure();
  const [open, setOpen] = useState(defaultOpen);

  return (
    <motion.div
      animate={open ? "open" : "closed"}
      className="border-b-[1px] border-b-slate-300"
    >
      <button
        onClick={() => setOpen((pv) => !pv)}
        className="flex w-full items-center justify-between gap-4 py-6"
      >
        <motion.span
          variants={{
            //  open: {
            //    color: "rgba(3, 6, 23, 0)=",
            //  },
            //  closed: {
            //    color: "rgb(132 205 235",
            //  },
          }}
          style={{color: 'rgb(132 205 235'}}
          className="text-left text-lg font-medium tinyMobile:text-[0.9rem] mobile:text-[0.9rem] mobileBig:text-[1.05rem]"
        >
          {title}
        </motion.span>
        <motion.span
          variants={{
            open: {
              rotate: "180deg",
              color: "rgb(132, 205, 235)",
            },
            closed: {
              rotate: "0deg",
              color: "rgb(132 205 235)",
            },
          }}
        >
          <FiChevronDown style={{color: 'rgb(132, 205, 235)'}} className="text-2xl" />
        </motion.span>
      </button>
      <motion.div
        initial={false}
        animate={{
          height: open ? height : "0px",
          marginBottom: open ? "24px" : "0px",
        }}
        className="overflow-hidden text-slate-200 tinyMobile:text-[0.7rem] mobile:text-[0.7rem] mobileBig:text-[0.9rem]"
      >
        <p ref={ref}>{children}</p>
      </motion.div>
    </motion.div>
  );
};

export default Faqs;
