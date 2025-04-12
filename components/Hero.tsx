"use client";
import { FaLocationArrow } from "react-icons/fa6";
import MagicButton from "./ui/MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TypewriterEffect } from "./ui/TypewriterEffect";

const Hero = () => {
  const words = [
    {
      text: "I",
    },
    {
      text: "Build",
    },
    {
      text: "High-performance",
    },
    {
      text: "Web",
      className: "text-purple dark:text-purple",
    },
    {
      text: "Applications",
      className: "text-purple dark:text-purple",
    },
  ];

  return (
    <div id="home" className="pb-20 pt-36">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight className="top-10 left-full h-[80vh]" fill="purple" />
        <Spotlight
          className="top-28 left-80 h-[80vh] w-[50vw]"
          fill="#87CEEB"
        />
        <Spotlight
          className="absolute -top-20 left-1/2 transform -translate-x-1/2 h-[40vh] w-[30vw]"
          fill="white"
        />
      </div>

      <div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.1] bg-grid-black/[0.2] flex items-center justify-center absolute top-0 left-0">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>

      <div className="flex justify-center relative my-20-z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <img
            src="/dp.jpg"
            alt="profile-pic"
            className="rounded-full w-80 h-80 border-2 border-white-100 mb-5"
          />
          <h2 className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
            Akash Jana
          </h2>
          <TypewriterEffect
            className="text-center md:text-5xl lg:text-6xl my-5"
            words={words}
          />
          <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
            Hi, I&apos;m Akash, a proficient Web Developer and AI Enthusiast.
          </p>

          <a href="https://contra.com/akash_jana" target="_blank" className="cursor-pointer">
            <MagicButton
              title="Hire me on Contra"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
