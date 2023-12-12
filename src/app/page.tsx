import { Navbar, Footer } from "@/components";
import Hero from "./hero";
import VideoIntro from "./video-intro";
import IconsSection from "./IconsSection";
import MobileConvenience from "./mobile-convenience";
import Testimonials from "./testimonials";
import Faqs from "./faqs";
import { Contact } from "./Contact";
import { MobileTabs } from "./MobileTabs";

export default function Campaign() {
  return (
    <>
      <Navbar />
      <Hero />
      <VideoIntro />
      <IconsSection />
      <div className="lg:hidden"> {/* Hide MobileTabs on desktop */}
        {/* <MobileTabs /> */}
      </div>
      <div className="hidden lg:block"> {/* Hide MobileConvenience on mobile */}
        <MobileConvenience />
      </div>
      <Testimonials />
      <Faqs />
      <Contact />
      <Footer />
    </>
  );
}
