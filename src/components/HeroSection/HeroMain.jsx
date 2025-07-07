import React from "react";
import HeroText from "./HeroText";
import HeroPic from "./HeroPic";

const HeroMain = () => (
  <section
    className="relative min-h-[90vh] overflow-hidden pt-[200px] pb-8" // pt for navbar gap, pb for less gap below
    id="hero"
  >
    <div className="flex flex-col md:flex-row items-center justify-between max-w-[1150px] mx-auto px-4 gap-20">

      <HeroText />

      {/* Hero Picture */}
<div className="p-[25px] mr-0 lg:mr-[10px]"><HeroPic /></div>     
    </div>
  </section>
);

export default HeroMain;