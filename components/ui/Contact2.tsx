"use client";
import React, { useState, useRef, FormEvent } from "react";
import { Label } from "./label";
import { Input } from "./input";
import { cn } from "@/lib/utils";
import {
  IconBrandGithub,
  IconBrandWhatsapp,
  IconBrandLinkedin,
} from "@tabler/icons-react";
import emailjs from "@emailjs/browser";
import confetti from "canvas-confetti";
import "./Contact2.css";

const Contact2 = () => {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [company, setCompany] = useState("");

  const refForm = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!refForm.current) return; // Ensure the ref is not null

    emailjs
      .sendForm(
        "service_xi36ze8",
        "template_6q1ey0i",
        refForm.current,
        "sEq9Zuwfom1VxugjE"
      )
      .then(
        () => {
          confetti({
            particleCount: 150,
            spread: 60,
            origin: { y: 0.6 }, // Adjust as needed
          });
          // alert("SUCCESS! Message sent, Thank you! :)");
          setFirstName("");
          setEmail("");
          setSubject("");
          setMessage("");
          setCompany("");
        },
        (error) => {
          console.log("Message failed, Please try again :)", error.text);
        }
      );
  };

  return (
    <div
      id="contact" // Add this id
      style={{ maxWidth: "87%", marginTop: "12%" }}
      className="max-w-md contact-class w-full mx-auto rounded-none md:rounded-2xl md:p-8 bg-black dark:bg-black"
    >
      <h2 className="text-xl font-bold tinyScreen:text-[0.9rem] tinyMobile:text-[0.9rem] mobile:text-[0.9rem] mobile:w-[105%] mobileBig:text-[1.05rem]">
        Lets collaborate!
      </h2>
      <p
        style={{ color: "rgb(193 194 211" }}
        className="relative tinyMobile:hidden z-10 mt-4 block text-[1.125rem] tinyMobile:text-[0.8rem] mobile:text-[0.8rem] mobileBig:text-[0.9rem] transition-colors duration-500 group-hover:text-neutral-50"
      >
Looking forward to connect! Feel free to drop me an email or send a quick message. Let's team up!
</p> 

      <form className="my-8" ref={refForm} onSubmit={sendEmail}>
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
          <LabelInputContainer isFirstChild={true}>
            <Label htmlFor="firstname">Name</Label>
            <Input
              id="firstname"
              placeholder="John Doe"
              type="text"
              name="name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </LabelInputContainer>
          {/* <LabelInputContainer>
            <Label htmlFor="lastname">Email Subject</Label>
            <Input
              id="lastname"
              placeholder="Hello Erick..."
              type="text"
              name="subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              required
            />
          </LabelInputContainer> */}
        </div>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Email Address</Label>
          <Input
            id="email"
            placeholder="projectmayhem@fc.com"
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="company">Company (Optional)</Label>
          <Input
            id="company"
            placeholder="Google"
            type="text"
            name="company"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
          />
        </LabelInputContainer>
        <LabelInputContainer className="mb-8">
          <Label htmlFor="message">Message</Label>
          <textarea
            style={{}}
            id="message"
            rows={3}
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            className="bg-black tinyMobile:text-[0.7rem] mobile:text-[0.7rem] mobileBig:text-[0.9rem] block w-full rounded-lg placeholder:text-neutral-400 text-white px-1 py-2 text-sm"
            placeholder="Leave a comment..."
          ></textarea>
        </LabelInputContainer>

        <button
          style={{
            background: "black",
            border: "1px solid rgb(227 227 227 / 24%)",
          }}
          className="bg-gradient-to-br tinyMobile:text-[0.8rem] mobile:text-[0.8rem]  mobileBig:text-[1.05rem] relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset] text-md"
          type="submit"
          value="Submit"
        >
          Submit &rarr;
          <BottomGradient />
        </button>
      </form>

      <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />

      <div className="flex items-center justify-center gap-2 space-y-4">
        <a
          className="flex-1"
          href="https://api.whatsapp.com/send?phone=+5540779049&text=%F0%9F%91%8B%20Hello%20there!%20Thank%20you%20for%20visiting%20my%20portfolio!%20If%20you%20have%20any%20questions,%20feedback,%20or%20just%20want%20to%20connect,%20feel%20free%20to%20drop%20me%20a%20message.%20I%E2%80%99m%20excited%20to%20hear%20from%20you!" // Replace with your GitHub URL
          target="_blank"
          rel="noopener noreferrer"
        >
          <button
            style={{ background: "#27272a" }}
            className=" relative group/btn flex space-x-2 items-center justify-start px-4 
            w-full text-white rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 
            dark:shadow-[0px_0px_1px_1px_var(--neutral-800)] tinyScreen:text-[0.7rem] tinyMobile:text-[0.8rem] mobile:text-[0.8rem] mobileBig:text-[0.9rem]"
            type="submit"
          >
            <IconBrandWhatsapp className="h-4 w-4 text-white dark:text-neutral-300" />
            <span className="text-white dark:text-neutral-300 text-md">
              WhatsApp
            </span>
            <BottomGradient />
          </button>
        </a>

        <a
          className="flex-1"
          style={{ margin: "0" }}
          href="https://www.linkedin.com/in/erickbarcena7/" // Replace with your LinkedIn URL
          target="_blank"
          rel="noopener noreferrer"
        >
          <button
            style={{ background: "#27272a", margin: "0" }}
            className=" relative group/btn flex space-x-2 items-center justify-start px-4 
            w-full text-white rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 
            dark:shadow-[0px_0px_1px_1px_var(--neutral-800)] tinyScreen:text-[0.7rem] tinyMobile:text-[0.8rem] mobile:text-[0.8rem] mobileBig:text-[0.9rem]"
            type="submit"
          >
            <IconBrandLinkedin className="h-4 w-4 text-white dark:text-neutral-300" />
            <span className="text-white dark:text-neutral-300 text-md">
              LinkedIn
            </span>
            <BottomGradient />
          </button>
        </a>

        <a
          className="flex-1"
          style={{ margin: "0" }}
          href="https://github.com/arrivaldo"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button
            style={{ background: "#27272a", margin: "0" }}
            className=" relative group/btn flex space-x-2 items-center justify-start px-4 
            w-full text-white rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 
            dark:shadow-[0px_0px_1px_1px_var(--neutral-800)] tinyScreen:text-[0.7rem] tinyMobile:text-[0.8rem] mobile:text-[0.8rem] mobileBig:text-[0.9rem]"
            type="submit"
          >
            <IconBrandGithub className="h-4 w-4 text-white dark:text-neutral-300" />
            <span className="text-white dark:text-neutral-300 text-md">
              Github
            </span>
            <BottomGradient />
          </button>
        </a>
      </div>
    </div>
  );
};

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
  isFirstChild = false,
}: {
  children: React.ReactNode;
  className?: string;
  isFirstChild?: boolean; // Optional prop, defaults to false
}) => {
  return (
    <div
      style={{
        color: "#fff",
        borderBottom: "1px solid #fff",
        marginTop: isFirstChild ? "0%" : "2%", // Apply margin conditionally
      }}
      className={cn("flex flex-col space-y-2 w-full text-white", className)}
    >
      {children}
    </div>
  );
};

export default Contact2;
