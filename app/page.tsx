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
import { GlobeDemo } from "@/components/ui/GridGlobe";
import Clients from "@/components/ui/Clients";
import { TracingBeam } from "@/components/ui/Beam";
import About5 from "@/components/ui/About5";
import Contact from "@/components/ui/Contact";
import Footer from "@/components/ui/Footer";
import Services2 from "@/components/ui/Services2";
import FeaturedProjects4 from "@/components/ui/FeaturedProjects4";
import Projects2 from "@/components/ui/Projects2";
import Testimonials4 from "@/components/ui/Testimonials4";

export default function Home() {
  return (
    <main className="relative bg-black flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
              <div className="absolute left-0 top-0 z-[1] h-screen w-screen gradient-bg"></div>

      <div
        style={{ border: "1px solid #c1c1c138",}}
        className="max-w-5xl w-full z-20 relative"
      >
        <FloatingNav
          navItems={[{ name: "Home", link: "/", icon: <FaHome /> }]}
        />
        {/* <div className="absolute left-0 top-0 z-[-1] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),#000)]"></div> */}

        {/* <div className="absolute left-0 top-0 z-[1] h-screen w-screen gradient-bg"></div> */}
        {/* <TracingBeam> */}
        <PortfolioHome />
        <Clients />
        <Services />
        {/* <Services2 /> */}
        <FeaturedProjects4 />
        {/* <About4 /> */}
        {/* <GlobeDemo /> */}
        <About5 />
<Testimonials4 />
<Projects2 />
        <Contact />
        <Footer />
        {/* <Hero /> */}

        {/* 
        <Grid />
        <BentoGridThirdDemo /> */}

        {/* </TracingBeam> */}
      </div>
    </main>
  );
}
