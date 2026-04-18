import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className=" md:px-20 md:py-16 p-2">
      <div className="md:flex md:gap-10">
        <div className="md:w-1/2 h-auto">
          <Image src="/image-4.jpg" alt="Hero Background" width={600} height={600} className="w-full h-auto" />
        </div>

        <div className="w-full md:w-1/2 h-auto flex flex-col gap-4 justify-evenly">
          <p className="text-xl font-semibold text-gray-700">About Us</p>
          <h1 className="md:text-6xl text-4xl font-bold text-green-900">Be The Hope Of Others And Spread Good Deeds</h1>
          <p className="text-lg font-semibold text-gray-700">
            GoodDeed Foundation is a non-profit organization dedicated to serving humanity through various philanthropic
            activities. Since our inception, we have been committed to making a positive impact on the lives of those in
            need. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque sint perferendis ducimus sed ipsum
            magnam quasi nihil pariatur ex facere.
          </p>
          <p className="text-lg font-light text-gray-600">
            Our work focuses on providing essential services, support, and resources to communities across the region.
            With a team of dedicated volunteers and a strong sense of purpose, we strive to create meaningful change and
            bring hope to many.
          </p>
          <button className="w-fit px-8 py-3 bg-lime-600 hover:bg-lime-700 transition-colors text-white font-semibold rounded-full shadow-lg">
            Read More
          </button>
        </div>
      </div>
      <div className="md:flex justify-around md:gap-10 md:pt-16">
        <div className="md:w-1/4 flex gap-2 bg-lime-100 p-6 mt-2 md:mt-0">
          <h1 className="text-6xl font-bold text-green-900">100+</h1>
          <div className="text-lg">
            <p>Children</p>
            <p>Supported</p>
          </div>
        </div>
        <div className="md:w-1/4 flex gap-2 bg-lime-50 p-6 mt-2 md:mt-0">
          <h1 className="text-6xl font-bold text-green-900">₹5500</h1>
          <div className="text-lg">
            <p>Monthly</p>
            <p>Donated</p>
          </div>
        </div>
        <div className="md:w-1/4 flex gap-2 bg-lime-100 p-6 mt-2 md:mt-0">
          <h1 className="text-6xl font-bold text-green-900">1100+</h1>
          <div className="text-lg">
            <p>Global </p>
            <p>Volunteers</p>
          </div>
        </div>
        <div className="md:w-1/4 flex gap-2 bg-lime-50 p-6 mt-2 md:mt-0">
          <h1 className="text-6xl font-bold text-green-900">7000+</h1>
          <div className="text-lg">
            <p>Fund</p>
            <p>Raised</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
