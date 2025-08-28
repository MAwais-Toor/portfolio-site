import React from "react";
import { ReactTyped } from "react-typed";
import "../../App.css";

const Home = () => {
  return (
    <>
      <div className="main hero flex flex-col-reverse lg:flex-row text-white items-center justify-center px-6 lg:px-16 h-auto sm:h-screen lg:h-screen py-12 lg:py-0">
        {/* Left Section */}
        <div className="left-hero max-w-lg items-center text-center lg:text-left">
          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold">
            Hi, I am Muhammad Awais
          </h1>
          <h2 className="text-xl sm:text-2xl lg:text-3xl mt-4 font-bold">
            I'm a &nbsp;
            <ReactTyped
              className="text-sky-500"
              strings={["Web Developer", "UI/UX Designer", "Tech Enthusiast"]}
              typeSpeed={40}
              backSpeed={50}
              loop
            />
          </h2>
          <p className="mt-4 text-sm sm:text-base lg:text-lg text-gray-400 leading-relaxed">
            I am a passionate web developer with expertise in creating dynamic
            and responsive websites. I love turning ideas into reality using
            code.
          </p>
          <button className="mt-4 px-6 py-2 rounded-xl bg-sky-500 hover:bg-sky-600 transition-all duration-300 transform hover:scale-105">
            Check Resume
          </button>
        </div>
        <div className="right-hero relative max-w-xs sm:max-w-sm lg:max-w-md mb-8 lg:mb-0 flex justify-center">
          <div className="orbit-container">
            <img
              className="relative rounded-full shadow-lg w-full h-auto z-10"
              src="./hero.png"
              alt="Hero"
            />
          </div>
        </div>

      </div>

      {/* Shape Divider */}
      <div className="custom-shape-divider-bottom-1756324466">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
    </>
  );
};

export default Home;
