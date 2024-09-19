"use client";
import React, { useState, useRef, FormEvent } from "react";
import { Label } from "./label";
import { Input } from "./input";
import { cn } from "@/lib/utils";
import {
  IconBrandGithub,
  IconBrandGoogle,
  IconBrandOnlyfans,
} from "@tabler/icons-react";
import emailjs from "@emailjs/browser";

const SignupFormDemo = () => {
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
          alert("SUCCESS! Message sent, Thank you! :)");
          window.location.reload(); // Optional: Consider improving UX instead of reload
        },
        (error) => {
          console.log("Message failed, Please try again :)", error.text);
        }
      );
  };

  return (
    <div
      style={{ maxWidth: "87%", marginTop: "10%" }}
      className="max-w-md w-full mx-auto rounded-none md:rounded-2xl md:p-8 bg-black dark:bg-black"
    >
      <h2 className="font-bold text-xl text-white dark:text-neutral-200">
        Let's collaborate!
      </h2>
      <p className="text-white-200 text-md max-w-sm mt-2 dark:text-neutral-300">
        Login to aceternity if you can because we don't have a login flow
        yet
      </p>

      <form className="my-8" ref={refForm} onSubmit={sendEmail}>
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
          <LabelInputContainer>
            <Label htmlFor="firstname">Name</Label>
            <Input
              id="firstname"
              placeholder="John"
              type="text"
              name="name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </LabelInputContainer>
          <LabelInputContainer>
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
          </LabelInputContainer>
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
            style={{ marginBottom: "2.5%", color: "#fff" }}
            id="message"
            rows={3}
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            className="bg-black block p-2.5 w-full text-md tinyMobile:text-[0.7rem] mobile:text-[0.7rem] mobileBig:text-[0.9rem] text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500"
            placeholder="Leave a comment..."
          ></textarea>
        </LabelInputContainer>

        <button
          style={{
            background: "black",
            border: "1px solid rgb(227 227 227 / 65%)",
          }}
          className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
          type="submit"
          value="Submit"
        >
          Submit &rarr;
          <BottomGradient />
        </button>

        <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />

        <div className="flex items-center justify-center gap-2 space-y-4">
        <button
            style={{ background: "#27272a" }}
            className=" relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-white rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
            type="submit"
          >
          <IconBrandGithub className="h-4 w-4 text-white dark:text-neutral-300" />
          <span className="text-white dark:text-neutral-300 text-sm">
              Google
            </span>
            <BottomGradient />
          </button>


          <button
            style={{ background: "#27272a" }}
            className=" relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-white rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
            type="submit"
          >
            <IconBrandGoogle className="h-4 w-4 text-white dark:text-neutral-300" />
            <span className="text-white dark:text-neutral-300 text-sm">
              Google
            </span>
            <BottomGradient />
          </button>
          <button
            style={{ background: "#27272a" }}
            className=" relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-white rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
            type="submit"
          >
            <IconBrandOnlyfans className="h-4 w-4 text-white dark:text-neutral-300" />
            <span className="text-white dark:text-neutral-300 text-sm">
              OnlyFans
            </span>
            <BottomGradient />
          </button>
        </div>
      </form>
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
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      style={{ color: "#fff", borderBottom: "1px solid #fff" }}
      className={cn("flex flex-col space-y-2 w-full text-white", className)}
    >
      {children}
    </div>
  );
};

export default SignupFormDemo;
