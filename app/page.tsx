"use client";
import { useEffect, useState } from "react";

import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { FaHome } from "react-icons/fa";
import PortfolioHome from "@/components/ui/PortfolioHome";
import Services from "@/components/ui/Services";
import "./Page.css";
import About4 from "@/components/ui/About4";
import About5 from "@/components/ui/About5";
import About6 from "@/components/ui/About6";
import { GlobeDemo } from "@/components/ui/GridGlobe";
import Clients from "@/components/ui/Clients";
import { TracingBeam } from "@/components/ui/Beam";
import Contact from "@/components/ui/Contact";
import Contact2 from "@/components/ui/Contact2";
import Clients2 from '@/components/ui/Client2';
import Footer from "@/components/ui/Footer";
import Services2 from "@/components/ui/Services2";
import Services3 from "@/components/ui/Services3";
import FeaturedProjects4 from "@/components/ui/FeaturedProjects4";
import Projects2 from "@/components/ui/Projects2";
import Testimonials4 from "@/components/ui/Testimonials4";
import InfiniteCards from '@/components/ui/InfiniteCards';
import CustomSkills from "@/components/ui/CustomSkills";
import Tabs3 from "@/components/ui/Tabs3";
import StarCard from "@/components/ui/StarCard";
import Stack2 from "@/components/ui/Stack2";
import Stack3 from "@/components/ui/Stack3";
import Technologies from '@/components/ui/Technologies';
import MainProjects from '@/components/ui/MainProjects';
import TagScroller from '@/components/ui/TagScroller';
import StackAnim from '@/components/ui/StackAnim';
import { ProductShowcase } from "@/components/ui/ProductShowcase";
import Chatbot from '@/app/chatbot/page';
import Loader from '@/components/ui/Loader';
import Loader2 from '@/components/ui/Loader2';

import  AnimatedCard2  from "@/components/ui/AnimatedCard2"

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [contentVisible, setContentVisible] = useState(false); // New state to control content visibility


  useEffect(() => {
    // Simulate loading for a specific time
    const timer = setTimeout(() => {
      setLoading(false); // Hide loader
      setTimeout(() => {
        setContentVisible(true); // Show content right after loader animation ends
      }, 100); // Adjust this delay based on your loader's animation length
    }, 2500); // Loader's display time
    return () => clearTimeout(timer);
  }, []);


  useEffect(() => {
    if (!loading) {
      // Apply zoom effect to the rest of the page after the loader finishes
      (document.body.style as any).zoom = '0.9'; // Use type assertion to bypass TypeScript error
    } else {
      // Reset zoom during loading (or for the loader component)
      (document.body.style as any).zoom = '1';
    }
  }, [loading]);
  return (
    <>
      {loading ? (
        <Loader2 />
      ) : (
        <main className={`relative bg-black flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5 ${contentVisible ? 'content-visible' : 'content-hidden'}`}>
<div className="absolute left-0 top-0 z-[1] h-screen w-[115vw] gradient-bg"></div>

          <div className="max-w-5xl w-full z-20 relative b-border">
            <FloatingNav
              navItems={[{ name: "Home", link: "/", icon: <FaHome /> }]}
            />
            {/* <Loader /> */}
            <PortfolioHome />
            <TagScroller />
            <Services />
            <FeaturedProjects4 />

            <About6 />

            <Testimonials4 />

            <Projects2 />
            {/* <StackAnim /> */}


            <Contact2 />
            <Chatbot />
            {/* <AnimatedCard2 /> */}
            <Footer />
          </div>
        </main>
      )}
    </>
  );
}
