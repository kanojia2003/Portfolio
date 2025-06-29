import React from "react";
import HeroText from "./HeroText";
import HeroPic from "./HeroPic";

const HeroMain = () => (
  <section className="pt-40 pb-16 relative h-screen overflow-hidden">
    {" "}
    {/* ⬅ kill sideways scroll */}
    <div className="flex md:flex-row sm:flex-col  max-w-[1200px] mx-auto justify-between items-center relative px-4">
      <HeroText />
      <HeroPic />
    </div>
  </section>
);

export default HeroMain;
