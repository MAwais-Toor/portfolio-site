import React from "react";
import { Palette, Code2, Lightbulb } from "lucide-react";
import { ReactTyped } from "react-typed";


const Hero = () => {
  return (
    <section className="bg-[#0d1b2a] text-white min-h-screen flex items-center justify-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse lg:flex-row items-center gap-12">
        {/* Left Section */}
        <div className="flex-1 text-center lg:text-left">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold leading-tight">
            Hello, I'm <span className="text-sky-500">Muhammad Awais</span>
          </h1>
          <h2 className="mt-3 sm:mt-4 text-lg sm:text-2xl lg:text-3xl font-semibold text-gray-300">
            Creative{" "}
            <ReactTyped
              className="text-sky-400 font-bold"
              strings={["Affiliate Marketer", "Web Developer", "WordPress Developer", "Freelancer", "Designer"]}
              typeSpeed={50}
              backSpeed={40}
              loop
            />
          </h2>
          <p className="mt-6 text-gray-400 max-w-lg mx-auto lg:mx-0 text-sm sm:text-base lg:text-lg leading-relaxed">
            Motivated Web Developer with 2 years of experience in creating responsive and user-friendly websites. Skilled in front-end and back-end development, with additional expertise in Affiliate Marketing and basic Graphic Design. Passionate about delivering innovative digital solutions, enhancing online presence, and supporting business growth through technology and creativity.
          </p>
          {/* CTA Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a
              href="#work"
              className="px-6 py-3 rounded-md bg-sky-500 hover:bg-sky-600 transition duration-300 text-sm sm:text-base font-semibold shadow-lg"
            >
              My Resume
            </a>

          </div>
        </div>

        {/* Right Section */}
        <div className="flex-1 relative flex justify-center">
          <img
            src="./hero.png"
            alt="Muhammad Awais"
            className="rounded-2xl shadow-2xl w-[280px] sm:w-[350px] lg:w-[420px]"
          />

          {/* Floating Tags with Animation */}
          <span className="absolute top-8 right-0 bg-gray-900/80 px-6 py-3 rounded-md text-sm font-semibold text-gray-200 shadow-lg animate-float-slow flex items-center gap-2">
            <Palette size={18} /> Design
          </span>

          <span className="absolute bottom-1/3 -left-6 bg-gray-900/80 px-6 py-3 rounded-md text-sm font-semibold text-gray-200 shadow-lg animate-float flex items-center gap-2">
            <Code2 size={18} /> Code
          </span>

          <span className="absolute bottom-8 right-4 bg-gray-900/80 px-6 py-3 rounded-md text-sm font-semibold text-gray-200 shadow-lg animate-float-delay flex items-center gap-2">
            <Lightbulb size={18} /> Ideas
          </span>

        </div>
      </div>

    </section>
  );
};

export default Hero;