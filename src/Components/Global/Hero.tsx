"use client";


import { memo } from "react";

const Hero = memo(() => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-0 pb-5">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/scrollvideos/hero-video.mp4" type="video/mp4" />
      </video>

      <div />
    </section>
  );
});

Hero.displayName = "Hero";

export default Hero;
