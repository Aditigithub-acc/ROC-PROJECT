"use client";

import { motion } from "framer-motion";
import { SplitText } from "./SplitText";
import { memo } from "react";

const Hero = memo(() => {
  return (
    <section className="relative min-h-screen flex items-center bg-gray-50 overflow-hidden pt-0 pb-5">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/scrollvideos/hero-video.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 z-0 " />

      {/* Background Decoration */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-50">
        <div className="absolute top-[-10%] left-[-5%] w-[40%] h-[40%] bg-gradient-to-br from-red-100 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[40%] h-[40%] bg-gradient-to-tl from-gray-50 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="max-w-[1400px] mx-auto px-4 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center relative z-10 w-full min-h-[75vh] pt-24 lg:pt-0">
      </div>
    </section>
  );
});

Hero.displayName = "Hero";

export default Hero;
