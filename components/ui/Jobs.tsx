import React from 'react'
import { FiBookOpen } from "react-icons/fi";
import { FaFilePdf } from "react-icons/fa";
import { PiFilePdf } from "react-icons/pi";
import { PiFilePdfBold } from "react-icons/pi";
import { FaRegEnvelope } from "react-icons/fa";


const Jobs = () => {
  return (
        <>
            

<div className="w-full p-4  rounded-lg shadow sm:p-8">
    <div className="flex items-center justify-between mb-4">
        <h5 className="text-xl tinyMobile:text-[1.05rem] mobile:text-[1.05rem] mobileBig:text-[1.05rem] font-bold leading-none ">Latest Customers</h5>
        {/* <a href="#" className="text-lg font-medium text-blue-600 hover:underline dark:text-blue-500">
            View all
        </a> */}
<svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="h-6 w-6 flex-none"><path d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z" className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"></path><path d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5" className="stroke-zinc-400 dark:stroke-zinc-500"></path></svg>
   </div>
   <div className="flow-root">
        <ul role="list" className="divide-y ">
            <li className="py-3 sm:py-4">
                <div className="flex items-center">
                    <div className="flex-shrink-0">
                        <img className="w-8 h-8 rounded-full" src="/images/rulesCube.jpg" alt="Neil image" />
                    </div>
                    <div className="flex-1 min-w-0 ms-4">
                        <p className="text-xl tinyMobile:text-[0.9rem] mobile:text-[0.9rem] mobileBig:text-[1.05rem] font-medium truncate">
                            Rules Cube
                        </p>
                        <p className="text-lg tinyMobile:text-[0.7rem] mobile:text-[0.7rem] mobileBig:text-[0.9rem] truncate">
                            Consultant
                        </p>
                    </div>
                    <div className="inline-flex text-xl tinyMobile:text-[0.7rem] mobile:text-[0.7rem] mobileBig:text-[1.05rem] items-center font-semibold ">
                      <span>2021-</span>  
                      <span>Present</span>  

                    </div>
                </div>
            </li>
            <li  className="py-3 sm:py-4">
            <div className="flex items-center transition duration-300 ease-in-out transform hover:blur-none blur-sm">
                    <div className="flex-shrink-0">
                        <img style={{objectFit: 'contain'}} className="w-8 h-8 rounded-full" src="/images/global.png" alt="Bonnie image" />
                    </div>
                    <div className="flex-1 min-w-0 ms-4">
                        <p className="text-xl tinyMobile:text-[0.9rem] mobile:text-[0.9rem] mobileBig:text-[1.05rem] font-medium truncate ">
                            Global H.C.
                        </p>
                        <p className="text-lg tinyMobile:text-[0.7rem] mobile:text-[0.7rem] mobileBig:text-[0.9rem]  truncate ">
                            Frontend Developer
                        </p>
                    </div>
                    <div className="inline-flex text-xl tinyMobile:text-[0.7rem] mobile:text-[0.7rem] mobileBig:text-[1.05rem] items-center font-semibold ">
                      <span>2020-</span>  
                      <span>2021</span>  

                    </div>
                </div>
            </li>
            <li className="py-3 sm:py-4">
            <div className="flex items-center transition duration-300 ease-in-out transform hover:blur-none blur-sm">
                    <div className="flex-shrink-0">
                        <img className="w-8 h-8 rounded-full" src="/images/neoris.jpg" alt="Michael image" />
                    </div>
                    <div className="flex-1 min-w-0 ms-4">
                        <p className="text-xl tinyMobile:text-[0.9rem] mobile:text-[0.9rem] mobileBig:text-[1.05rem] font-medium  truncate ">
                            Neoris
                        </p>
                        <p className="text-lg tinyMobile:text-[0.7rem] mobile:text-[0.7rem] mobileBig:text-[0.9rem]  truncate ">
                            Full Stack Developer
                        </p>
                    </div>
                    <div className="inline-flex text-xl tinyMobile:text-[0.7rem] mobile:text-[0.7rem] mobileBig:text-[1.05rem] items-center font-semibold ">
                      <span>2019-</span>  
                      <span>2020</span>  

                    </div>
                </div>
            </li>
            <li className="py-3 sm:py-4">
            <div className="flex items-center transition duration-300 ease-in-out transform hover:blur-none blur-sm">
                    <div className="flex-shrink-0">
                        <img className="w-8 h-8 rounded-full" src="/images/hsbc.jpg" alt="Lana image" />
                    </div>
                    <div className="flex-1 min-w-0 ms-4">
                        <p className="text-xl mobile:text-[0.9rem] tinyMobile:text-[0.9rem] font-medium truncate">
                            HSBC
                        </p>
                        <p className="text-lg mobile:text-[0.7rem] tinyMobile:text-[0.7rem] truncate ">
                            IT Consultant
                        </p>
                    </div>
                    <div className="inline-flex text-xl tinyMobile:text-[0.7rem] mobile:text-[0.7rem] items-center font-semibold ">
                      <span>2018-</span>  
                      <span>2019</span>  

                    </div>
                </div>
            </li>
            {/* 
             */}
        </ul>
        <div style={{marginTop: '5%', padding: '2%'}} className='w-full flex justify-between gap-5'>
        <a className='text-lg tinyMobile:text-[0.9rem] mobile:text-[0.9rem] mobileBig:text-[1.05rem] gap-2' style={{ width: '100%', border: '1px solid #c1c1c159', padding: '2%', display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: 'pointer'}}>
        <PiFilePdfBold />

          <span className='tinyMobile:hidden mobile:hidden mobileBig:hidden tablet:hidden bigTablet:hidden'>Get Resume</span>  
          <span className='hidden tinyMobile:block mobile:block mobileBig:block tablet:block bigTablet:block '>Resume</span>  

        </a>
        <a className='text-lg tinyMobile:text-[0.9rem] mobile:text-[0.9rem] mobileBig:text-[1.05rem] gap-2 ' style={{ width: '100%', border: '1px solid #c1c1c159', padding: '2%', display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: 'pointer'}}>
        <FaRegEnvelope />

        <span className='tinyMobile:hidden mobile:hidden mobileBig:hidden tablet:hidden bigTablet:hidden'>Send Email</span>  
          <span className='hidden tinyMobile:block mobile:block mobileBig:block tablet:block bigTablet:block '>Email</span>             </a>


        </div>





{/* <div class="flex items-start gap-2.5">
   <div class="flex flex-col gap-2.5">
      
      <div class="leading-1.5 flex w-full max-w-[320px] flex-col">
         <div class="flex items-start  rounded-xl p-2">
            <div class="me-2">
               <span class="flex items-center gap-2 text-sm font-medium text-white dark:text-white pb-2">
                  <svg fill="none" aria-hidden="true" class="w-5 h-5 flex-shrink-0" viewBox="0 0 20 21">
                     <g clip-path="url(#clip0_3173_1381)">
                        <path fill="#E2E5E7" d="M5.024.5c-.688 0-1.25.563-1.25 1.25v17.5c0 .688.562 1.25 1.25 1.25h12.5c.687 0 1.25-.563 1.25-1.25V5.5l-5-5h-8.75z"/>
                        <path fill="#B0B7BD" d="M15.024 5.5h3.75l-5-5v3.75c0 .688.562 1.25 1.25 1.25z"/>
                        <path fill="#CAD1D8" d="M18.774 9.25l-3.75-3.75h3.75v3.75z"/>
                        <path fill="#F15642" d="M16.274 16.75a.627.627 0 01-.625.625H1.899a.627.627 0 01-.625-.625V10.5c0-.344.281-.625.625-.625h13.75c.344 0 .625.281.625.625v6.25z"/>
                        <path fill="#fff" d="M3.998 12.342c0-.165.13-.345.34-.345h1.154c.65 0 1.235.435 1.235 1.269 0 .79-.585 1.23-1.235 1.23h-.834v.66c0 .22-.14.344-.32.344a.337.337 0 01-.34-.344v-2.814zm.66.284v1.245h.834c.335 0 .6-.295.6-.605 0-.35-.265-.64-.6-.64h-.834zM7.706 15.5c-.165 0-.345-.09-.345-.31v-2.838c0-.18.18-.31.345-.31H8.85c2.284 0 2.234 3.458.045 3.458h-1.19zm.315-2.848v2.239h.83c1.349 0 1.409-2.24 0-2.24h-.83zM11.894 13.486h1.274c.18 0 .36.18.36.355 0 .165-.18.3-.36.3h-1.274v1.049c0 .175-.124.31-.3.31-.22 0-.354-.135-.354-.31v-2.839c0-.18.135-.31.355-.31h1.754c.22 0 .35.13.35.31 0 .16-.13.34-.35.34h-1.455v.795z"/>
                        <path fill="#CAD1D8" d="M15.649 17.375H3.774V18h11.875a.627.627 0 00.625-.625v-.625a.627.627 0 01-.625.625z"/>
                     </g>
                     <defs>
                        <clipPath id="clip0_3173_1381">
                           <path fill="#fff" d="M0 0h20v20H0z" transform="translate(0 .5)"/>
                        </clipPath>
                     </defs>
                  </svg>
                  Resume
               </span>
               <span class="flex text-xs font-normal text-gray-500 dark:text-gray-400 gap-2">
                  12 Pages 
                  <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="self-center" width="3" height="4" viewBox="0 0 3 4" fill="none">
                     <circle cx="1.5" cy="2" r="1.5" fill="#6B7280"/>
                  </svg>
                  18 MB 
                  <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="self-center" width="3" height="4" viewBox="0 0 3 4" fill="none">
                     <circle cx="1.5" cy="2" r="1.5" fill="#6B7280"/>
                  </svg>
                  PDF
               </span>
            </div>
            <div class="inline-flex self-center items-center">
               <button class="inline-flex self-center items-center p-2 text-sm font-medium text-center focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-600" type="button">
                  <svg fill='white' class="w-4 h-4 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                     <path d="M14.707 7.793a1 1 0 0 0-1.414 0L11 10.086V1.5a1 1 0 0 0-2 0v8.586L6.707 7.793a1 1 0 1 0-1.414 1.414l4 4a1 1 0 0 0 1.416 0l4-4a1 1 0 0 0-.002-1.414Z"/>
                     <path d="M18 12h-2.55l-2.975 2.975a3.5 3.5 0 0 1-4.95 0L4.55 12H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2Zm-3 5a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"/>
                  </svg>
               </button>
            </div>
         </div>
      </div>
   </div>
</div> */}



















   </div>
</div>

        </>
    )
}

export default Jobs