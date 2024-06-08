import React from 'react';
import Image from 'next/image';
import { PiFilePdfBold } from "react-icons/pi";
import { FaRegEnvelope } from "react-icons/fa";

const Jobs = () => {
  const jobs = [
    {
      image: "/images/rulesCube.jpg",
      alt: "Rules Cube image",
      company: "Rules Cube",
      position: "Consultant",
      startDate: "2021",
      endDate: "Present"
    },
    {
      image: "/images/global.png",
      alt: "Global H.C. image",
      company: "Global H.C.",
      position: "Frontend Developer",
      startDate: "2020",
      endDate: "2021"
    },
    {
      image: "/images/neoris.jpg",
      alt: "Neoris image",
      company: "Neoris",
      position: "Full Stack Developer",
      startDate: "2019",
      endDate: "2020"
    },
    {
      image: "/images/hsbc.jpg",
      alt: "HSBC image",
      company: "HSBC",
      position: "IT Consultant",
      startDate: "2018",
      endDate: "2019"
    }
  ];

  return (
    <div className="w-full p-4 rounded-lg shadow sm:p-8">
      <div className="flex items-center justify-between mb-4">
        <h5 className="text-xl tinyMobile:text-[1.05rem] mobile:text-[1.05rem] mobileBig:text-[1.05rem] font-bold leading-none">
          Latest Customers
        </h5>
        <svg
          viewBox="0 0 24 24"
          fill="none"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
          className="h-6 w-6 flex-none"
        >
          <path
            d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
            className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
          ></path>
          <path
            d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5"
            className="stroke-zinc-400 dark:stroke-zinc-500"
          ></path>
        </svg>
      </div>
      <div className="flow-root">
        <ul role="list" className="divide-y">
          {jobs.map((job, index) => (
            <li key={index} className="py-3 sm:py-4">
              <div className={`flex items-center transition duration-300 ease-in-out transform ${index !== 0 ? 'hover:blur-none blur-sm' : ''}`}>
                <div className="flex-shrink-0">
                  <Image
                    className="w-8 h-8 rounded-full"
                    src={job.image}
                    alt={job.alt}
                    width={32}
                    height={32}
                    objectFit={index !== 0 ? 'contain' : 'cover'}
                  />
                </div>
                <div className="flex-1 min-w-0 ms-4">
                  <p className="text-xl tinyMobile:text-[0.9rem] mobile:text-[0.9rem] mobileBig:text-[1.05rem] font-medium truncate">
                    {job.company}
                  </p>
                  <p className="text-lg tinyMobile:text-[0.7rem] mobile:text-[0.7rem] mobileBig:text-[0.9rem] truncate">
                    {job.position}
                  </p>
                </div>
                <div className="inline-flex text-xl tinyMobile:text-[0.7rem] mobile:text-[0.7rem] mobileBig:text-[1.05rem] items-center font-semibold">
                  <span>{job.startDate}-</span>
                  <span>{job.endDate}</span>
                </div>
              </div>
            </li>
          ))}
        </ul>
        <div className="mt-5 flex justify-between gap-5">
          <a
            className="text-lg tinyMobile:text-[0.9rem] mobile:text-[0.9rem] mobileBig:text-[1.05rem] gap-2"
            style={{ width: '100%', border: '1px solid #c1c1c159', padding: '2%', display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: 'pointer' }}
          >
            <PiFilePdfBold />
            <span className="tinyMobile:hidden mobile:hidden mobileBig:hidden tablet:hidden bigTablet:hidden">Get Resume</span>
            <span className="hidden tinyMobile:block mobile:block mobileBig:block tablet:block bigTablet:block">Resume</span>
          </a>
          <a
            className="text-lg tinyMobile:text-[0.9rem] mobile:text-[0.9rem] mobileBig:text-[1.05rem] gap-2"
            style={{ width: '100%', border: '1px solid #c1c1c159', padding: '2%', display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: 'pointer' }}
          >
            <FaRegEnvelope />
            <span className="tinyMobile:hidden mobile:hidden mobileBig:hidden tablet:hidden bigTablet:hidden">Send Email</span>
            <span className="hidden tinyMobile:block mobile:block mobileBig:block tablet:block bigTablet:block">Email</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Jobs;
