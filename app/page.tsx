import dynamic from "next/dynamic";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";

const FacilitiesSection = dynamic(() => import("@/components/sections/FacilitiesSection"));
const MenuSection = dynamic(() => import("@/components/sections/MenuSection"));
const GallerySection = dynamic(() => import("@/components/sections/GallerySection"));
const DestinationSection = dynamic(() => import("@/components/sections/DestinationSection"));
const TestimonialsSection = dynamic(() => import("@/components/sections/TestimonialsSection"));
const ContactSection = dynamic(() => import("@/components/sections/ContactSection"));

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <FacilitiesSection />
        <MenuSection />
        <GallerySection />
        <DestinationSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
