import Image from "next/image";
import React from "react";

const HeroSection = () => {
  return (
    <div className="relative w-full min-h-[90vh] flex flex-col justify-center items-start px-20">
      {/* Background Image */}
      <Image src="/image-3.jpg" alt="Hero Background" fill className="object-cover -z-20" priority />
      {/* Overlay for better readability */}
      <div className="absolute inset-0 bg-black/40 -z-10"></div>

      <div className="relative z-10 text-white px-4 ">
        <p className="text-2xl mb-4 drop-shadow-md">GoodDeed Foundation : &quot;Do Good. Feel Good&quot;</p>
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight drop-shadow-lg mb-6">
          Empowering Communities <br /> Through Compassion
        </h1>
        <p className="text-xl md:text-xl font-light max-w-2xl drop-shadow-md">
          Join us in making a difference. Every contribution brings hope and creates a lasting impact.
        </p>
        <button className="mt-8 px-8 py-3 bg-lime-600 hover:bg-lime-700 transition-colors text-white font-semibold rounded-full shadow-lg">
          Get Involved
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
