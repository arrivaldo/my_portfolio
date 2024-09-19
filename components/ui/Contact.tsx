"use client";

import React, { useState, useRef, FormEvent } from "react";
import emailjs from '@emailjs/browser';

import './Contact.css';

const Contact: React.FC = () => {

  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [company, setCompany] = useState("");

  const refForm = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!refForm.current) return;  // Ensure the ref is not null

    emailjs
      .sendForm('service_xi36ze8', 'template_6q1ey0i', refForm.current, 'sEq9Zuwfom1VxugjE')
      .then(
        () => {
          alert('SUCCESS! Message sent, Thank you! :)');
          window.location.reload();  // Optional: Consider improving UX instead of reload
        },
        (error) => {
          console.log('Message failed, Please try again :)', error.text);
        }
      );
  };

  return (
    <>
      <section className="p-contact" style={{ marginTop: "5%" }}>
        <h3 className="text-slate-50 text-xl tinyMobile:text-[0.9rem] mobile:text-[0.9rem] mobileBig:text-[1.05rem] font-bold text-left mobile:mb-4 mobile:mt-4">
          Let&apos;s Collaborate!
        </h3>

        <form ref={refForm} onSubmit={sendEmail} style={{ marginTop: "2%" }} className="mx-auto">
          <div className="grid md:grid-cols-2 md:gap-6 flex">
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="text"
                name="name"
                id="floating_first_name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="block py-2.5 px-0 w-full text-lg tinyMobile:text-[0.7rem] mobile:text-[0.7rem] mobileBig:text-[0.9rem] bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                style={{ color: '#fff' }}
                required
              />
              <label
                htmlFor="floating_first_name"
                className="peer-focus:font-medium absolute text-lg tinyMobile:text-[0.7rem] mobile:text-[0.7rem] mobileBig:text-[0.9rem] text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Name
              </label>
            </div>

            <div className="relative z-0 w-full mb-5 group">
              <input
                type="text"
                name="subject"
                id="floating_subject"
                className="block py-2.5 px-0 w-full text-lg tinyMobile:text-[0.7rem] mobile:text-[0.7rem] mobileBig:text-[0.9rem] bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                style={{ color: '#fff' }}
                required
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
              />
              <label
                htmlFor="floating_subject"
                className="peer-focus:font-medium absolute text-lg tinyMobile:text-[0.7rem] mobile:text-[0.7rem] mobileBig:text-[0.9rem] text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Email Subject
              </label>
            </div>
          </div>

          <div className="grid md:grid-cols-2 md:gap-6">
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="email"
                name="email"
                id="floating_email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="block py-2.5 px-0 w-full text-lg tinyMobile:text-[0.7rem] mobile:text-[0.7rem] mobileBig:text-[0.9rem] bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                style={{ color: '#fff' }}
                required
              />
              <label
                htmlFor="floating_email"
                className="peer-focus:font-medium absolute text-lg tinyMobile:text-[0.7rem] mobile:text-[0.7rem] mobileBig:text-[0.9rem] text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Email address
              </label>
            </div>

            <div className="relative z-0 w-full mb-5 group">
              <input
                type="text"
                name="company"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                id="floating_company"
                style={{ color: '#fff' }}
                className="block py-2.5 px-0 w-full text-lg tinyMobile:text-[0.7rem] mobile:text-[0.7rem] mobileBig:text-[0.9rem] bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
              />
              <label
                htmlFor="floating_company"
                className="peer-focus:font-medium absolute text-lg tinyMobile:text-[0.7rem] mobile:text-[0.7rem] mobileBig:text-[0.9rem] text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Company (Optional)
              </label>
            </div>
          </div>

          <textarea
            style={{ marginBottom: '2.5%', color: '#fff', borderBottomWidth: '2px' }}
            id="message"
            rows={4}
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            className="bg-black block p-2.5 w-full text-md tinyMobile:text-[0.7rem] mobile:text-[0.7rem] mobileBig:text-[0.9rem] text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500"
            placeholder="Leave a comment..."
          ></textarea>

          <div className="group">
            <input
              style={{
                background: "rgb(8, 8, 47)",
                border: "1px solid rgba(193, 193, 193, 0.58)",
              }}
              type="submit"
              className="text-white tinyMobile:text-[0.7rem] mobile:text-[0.7rem] mobileBig:text-[0.9rem] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg w-full sm:w-auto px-5 py-2.5 text-center"
              value="Submit"
            />
          </div>
        </form>
      </section>
    </>
  );
};

export default Contact;
