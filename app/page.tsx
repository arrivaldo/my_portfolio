import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
// import { BentoGridThirdDemo } from "@/components/ui/BentoGridThirdDemo";
import { FloatingNav } from "@/components/ui/FloatingNav";
import Image from "next/image";
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
import Clients2 from '@/components/ui/Client2'

import Footer from "@/components/ui/Footer";
import Services2 from "@/components/ui/Services2";
import Services3 from "@/components/ui/Services3";
import FeaturedProjects4 from "@/components/ui/FeaturedProjects4";
import Projects2 from "@/components/ui/Projects2";
import Testimonials4 from "@/components/ui/Testimonials4";
import InfiniteCards from '@/components/ui/InfiniteCards'
import CustomSkills from "@/components/ui/CustomSkills";
import Tabs3 from "@/components/ui/Tabs3";
import StarCard from "@/components/ui/StarCard";
import Stack2 from "@/components/ui/Stack2";
import Stack3 from "@/components/ui/Stack3";
import Technologies from '@/components/ui/Technologies'
import MainProjects from '@/components/ui/MainProjects'
import TagScroller from '@/components/ui/TagScroller'
import StackAnim from '@/components/ui/StackAnim'
import { ProductShowcase } from "@/components/ui/ProductShowcase";
import Chatbot from '@/app/chatbot/page'

export default function Home() {
  return (
    <main className="relative bg-black flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="absolute left-0 top-0 z-[1] h-screen w-screen gradient-bg"></div>

      <div style={{}} className="max-w-5xl w-full z-20 relative b-border">
        <FloatingNav
          navItems={[{ name: "Home", link: "/", icon: <FaHome /> }]}
        />
        {/* <div className="absolute left-0 top-0 z-[-1] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),#000)]"></div> */}

        {/* <div className="absolute left-0 top-0 z-[1] h-screen w-screen gradient-bg"></div> */}
        {/* <TracingBeam> */}
        <PortfolioHome />
        {/* <Clients /> */}
        {/* <Clients /> */}
        <TagScroller />

        {/* <Clients2 /> */}

        {/* <Chatbot /> */}

        <Services />
        {/* <InfiniteCards /> */}
        {/* <Services2 /> */}
        {/* <Services3 /> */}

        {/* <ProductShowcase /> */}

        <MainProjects />
        {/* <FeaturedProjects4 /> */}


        {/* <About4 /> */}
        {/* <GlobeDemo /> */}
        {/* <About4 /> */}
        {/* <About5 /> */}
        {/* <Hero /> */}


        <About6 />
        <Testimonials4 />

        
        {/* <About6 /> */}
        {/* <CustomSkills /> */}


        {/* <Technologies /> */}
        <StackAnim />


        {/* <div style={{padding: '6%'}} className="flex">
<StarCard />
<Stack2 />
</div> */}
     

        {/* <div
          style={{ padding: "6%" }}
          className="flex justify-center items-center"
        >
          <div className="flex-1">
            <StarCard />
          </div>
          <div className="flex-1">
            <Stack3 />
          </div>
        </div> */}
        {/* <Stack3 /> */}

        {/* <Tabs3 />  */}
        {/* <StarCard />

        <Stack2 /> */}

        {/* <CustomKanban /> */}
        <Projects2 />
        {/* <Contact /> */}
        <Contact2 />


        <Footer />

        {/* 
        <Grid />
        <BentoGridThirdDemo /> */}

        {/* </TracingBeam> */}
      </div>
    </main>
  );
}
