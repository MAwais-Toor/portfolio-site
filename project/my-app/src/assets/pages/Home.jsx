import React from "react";
import { ReactTyped } from "react-typed";
import "../../App.css";

const Home = () => {
  return (
    <>
      <div className="main hero relative flex flex-col-reverse lg:flex-row items-center justify-center px-6 lg:px-16 min-h-screen text-white py-12 lg:py-0">
        {/* Left Section */}
        <div className="left-hero max-w-lg text-center lg:text-left z-10">
          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold">
            Hi, I am Muhammad Awais
          </h1>

          <h2 className="text-xl sm:text-2xl lg:text-3xl mt-4 font-bold">
            I'm a{" "}
            <ReactTyped
              className="text-sky-500"
              strings={["Programmer", "Web Developer", "MERN Stack Developer"]}
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

          <button className="mt-6 px-6 py-2 rounded-xl bg-sky-500 hover:bg-sky-600 transition duration-300 transform hover:scale-105">
            Check Resume
          </button>
        </div>

        {/* Right Section with Orbit */}
        <div className="right-hero relative max-w-[250px] sm:max-w-sm lg:max-w-md mb-8 lg:mb-0 flex justify-center">
          <div className="orbit-container relative flex items-center justify-center">
            {/* Orbit ring */}
            <div className="absolute w-[120%] h-[120%] rounded-full animate-spin-slow"></div>

            {/* Hero Image */}
            <img
              className="rounded-full shadow-lg w-full h-auto relative z-10"
              src="./hero.png"
              alt="Hero"
            />
          </div>
        </div>

        {/* Shape Divider */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] rotate-180">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className="relative block w-[calc(100%+1.3px)] h-12 sm:h-16 lg:h-20 fill-[#0d1f2c]"
          >
            <path d="M0,0V7.23C0,65.52,268.63,112.77,600,112.77S1200,65.52,1200,7.23V0Z"></path>
          </svg>
        </div>


      </div>
      {/* Skills Section */}

      <section className="bg-[#0d1f2c] text-white py-16 relative">
  {/* Section Title */}
  <div className="text-center mb-10">
    <h2 className="text-3xl font-bold text-sky-400">What I do</h2>
    <p className="max-w-2xl mx-auto text-gray-300 mt-4 text-sm">
      I am from Pakistan and currently living in Karachi. I am doing Bachelors in Software Engineering and will graduate in the year 2027. 
      I am a UI/UX designer and currently working as a freelancer.
    </p>
  </div>
  {/* Skills Grid */}
  <div className="grid items-center justify-center grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 max-w-5xl mx-auto px-6">
    {/* Skill Item */}
    <div className="bg-[#112233] p-6 rounded-xl shadow-lg flex flex-col items-center space-y-2 hover:shadow-2xl hover:-translate-y-1 transition duration-300">
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" className="w-12 h-12" alt="HTML" />
      <span className="text-sm font-medium">HTML</span>
    </div>
    <div className="bg-[#112233] p-6 rounded-xl shadow-lg flex flex-col items-center space-y-2 hover:shadow-2xl hover:-translate-y-1 transition duration-300">
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" className="w-12 h-12" alt="CSS" />
      <span className="text-sm font-medium">CSS</span>
    </div>
    <div className="bg-[#112233] p-6 rounded-xl shadow-lg flex flex-col items-center space-y-2 hover:shadow-2xl hover:-translate-y-1 transition duration-300">
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" className="w-12 h-12" alt="Sass" />
      <span className="text-sm font-medium">Sass</span>
    </div>
    <div className="bg-[#112233] p-6 rounded-xl shadow-lg flex flex-col items-center space-y-2 hover:shadow-2xl hover:-translate-y-1 transition duration-300">
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" className="w-12 h-12" alt="JavaScript" />
      <span className="text-sm font-medium">JavaScript</span>
    </div>
    <div className="bg-[#112233] p-6 rounded-xl shadow-lg flex flex-col items-center space-y-2 hover:shadow-2xl hover:-translate-y-1 transition duration-300">
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" className="w-12 h-12" alt="React" />
      <span className="text-sm font-medium">React</span>
    </div>
    <div className="bg-[#112233] p-6 rounded-xl shadow-lg flex flex-col items-center space-y-2 hover:shadow-2xl hover:-translate-y-1 transition duration-300">
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" className="w-12 h-12" alt="GitHub" />
      <span className="text-sm font-medium">GitHub</span>
    </div>
    <div className="bg-[#112233] p-6 rounded-xl shadow-lg flex flex-col items-center space-y-2 hover:shadow-2xl hover:-translate-y-1 transition duration-300">
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" className="w-12 h-12" alt="Node.js" />
      <span className="text-sm font-medium">Node.js</span>
    </div>
    <div className="bg-[#112233] p-6 rounded-xl shadow-lg flex flex-col items-center space-y-2 hover:shadow-2xl hover:-translate-y-1 transition duration-300">
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" className="w-12 h-12" alt="Firebase" />
      <span className="text-sm font-medium">Firebase</span>
    </div>
    <div className="bg-[#112233] p-6 rounded-xl shadow-lg flex flex-col items-center space-y-2 hover:shadow-2xl hover:-translate-y-1 transition duration-300">
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" className="w-12 h-12" alt="MongoDB" />
      <span className="text-sm font-medium">MongoDB</span>
    </div>
    <div className="bg-[#112233] p-6 rounded-xl shadow-lg flex flex-col items-center space-y-2 hover:shadow-2xl hover:-translate-y-1 transition duration-300">
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" className="w-12 h-12" alt="Docker" />
      <span className="text-sm font-medium">Docker</span>
    </div>
  </div>
  {/* Side Label (Skills) */}
  <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -rotate-90">
    <span className="bg-sky-400 text-white px-4 py-1 font-bold">Skills</span>
  </div>
</section>
{/* End (Skills) */}








    </>
  );
};

export default Home;
