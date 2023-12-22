import { Navbar, Footer } from "@/components";
import Hero from "./hero";
import VideoIntro from "./video-intro";
import IconsSection from "./IconsSection";
import MobileConvenience from "./mobile-convenience";
import Testimonials from "./testimonials";
import Faqs from "./faqs";
import { Contact } from "./Contact";
import { MobileTabs } from "./MobileTabs";
import Head from "next/head";

export default function Campaign() {
  return (
    <>
      <Navbar/>
      <Head>
      <div>
  <meta name="title" content="India's No.1 Software for Beauty Business - Tapgro" />
  <meta name="description" content="Boost sales, manage staff, and streamline operations with TapGro's salon software. Grow your business with Tapgro today" />
  <meta name="keywords" content="tapgro, tapgroofficial, what is tapgro, is tapgro good, tapgro linked in, tapgro location, tapgro instagram, tapgro app, tapgro software , tapgro tool, tapgro website" />
  <meta name="robots" content="index, follow" />
  <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
  <meta name="language" content="English" />
  <meta name="revisit-after" content="1 days" />
  <meta property="og:title" content="Simplify management, supercharge marketing with tapgro" />
  <meta property="og:site_name" content="TapGro" />
  <meta property="og:url" content="https://www.tapgro.com/" />
  <meta property="og:description" content="Your key to boosting sales managing staff, and thriving in your industry" />
  <meta property="og:type" content="website" />
  <meta property="og:image" content="https://tapgro.com/images/tapgro_logo.png" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:site" content="@Tapgro" />
  <meta name="twitter:title" content="Simplify Management, Supercharge Marketing with TapGro" />
  <meta name="twitter:description" content="Your key to boosting sales, managing staff, and thriving in your industry" />
  <meta name="twitter:image" content="https://tapgro.com/images/tapgro_logo.png" />
  {/* Google tag (gtag.js) */}
  
</div>


      </Head>
      <Hero/>
      <VideoIntro/>
      <IconsSection/>
      <div className="lg:hidden"> {/* Hide MobileTabs on desktop */}
        <MobileTabs/>
      </div>
      <div className="hidden lg:block"> {/* Hide MobileConvenience on mobile */}
        <MobileConvenience/>
      </div>
      <Testimonials/>
      <Faqs/>
      <Contact/>
      <Footer/>
    </>
  );
}
