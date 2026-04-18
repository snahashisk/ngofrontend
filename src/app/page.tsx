import React from "react";
import Navbar from "@/components/Navbar";
import ContactBar from "@/components/ContactBar";
import HeroSection from "@/components/HeroSection";
import About from "@/components/About";
const page = () => {
  return (
    <div>
      <ContactBar />
      <Navbar />
      <HeroSection />
      <About />
    </div>
  );
};

export default page;
