import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../FrammerMotion/Varient";

const HeroPic = () => {
  return (
    <motion.div
      variants={fadeIn("left", 0.3)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="mt-0 relative w-[300px] h-[300px] md:w-[350px] md:h-[350px] rounded-full overflow-hidden border-4 border-orange-500 shadow-lg backdrop-blur-sm bg-white/10 dark:bg-white/5"
    >

 


      {/* Profile Image */}
      <img
        src="/images/Pics.png"
        alt="Neeraj Kanojia"
        className="w-full h-full object-cover rounded-full hover:scale-105 transition-transform duration-500 ease-in-out"
      />

      {/* Glowing Gradient (responsive and dark-mode ready) */}
      <div className="absolute -inset-1 rounded-full z-[-1] bg-gradient-to-tr from-orange-400 to-cyan-400 blur-2xl opacity-40 dark:from-orange-500 dark:to-cyan-500" />

    </motion.div>
  );
};

export default HeroPic;
