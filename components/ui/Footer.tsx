import React from "react";

const Footer = () => {
  return (
    <>
      <footer
        style={{
          padding: "1% 6%",
          overflow: "hidden",
          border: "1px solid rgba(236, 239, 241, 0.2",
          marginTop: '5%'
        }}
        className=" rounded-lg shadow sm:flex sm:items-center sm:justify-between"
      >
        <p className="mb-4 mt-7 text-lg text-center text-gray-200 sm:mb-0 tinyMobile:text-[0.8rem] mobile:text-[0.8rem] mobileBig:text-[0.9rem]">
          &copy; 2023-2024{" "}
          <a
            href="https://flowbite.com/"
            className="hover:underline"
            target="_blank"
          >
             Erick Rodríguez Bárcena. 
             All rights reserved. ʕ´•ᴥ•`ʔ

          </a>
        </p>

      </footer>
    </>
  );
};

export default Footer;
