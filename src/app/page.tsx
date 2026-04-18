import React from "react";
import Navbar from "@/components/Navbar";
import ContactBar from "@/components/ContactBar";
import HeroSection from "@/components/HeroSection";
import About from "@/components/About";
import Feature from "@/components/Feature";
const page = () => {
  return (
    <div>
      <ContactBar />
      <Navbar />
      <HeroSection />
      <About />
      <Feature />
    </div>
  );
};

export default page;
