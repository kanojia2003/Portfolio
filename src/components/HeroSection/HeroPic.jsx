import React from "react";
import { FaRegCircle } from "react-icons/fa6";
import { LuHexagon } from "react-icons/lu";
import { motion } from "framer-motion";
import { fadeIn } from "../../FrammerMotion/Varient.js";
const HeroPic = () => {
  return (
    <motion.div
      variants={fadeIn("left", 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0 }}
      className=" h-full flex items-center justify-center "
    >
      <img
        src="../../public/images/Pics.png"
        alt=""
        className="max-h-[450px] w-auto"
      />

      <div className=" absolute -z-10 flex justify-center items-center animate-pulse ">
        <LuHexagon className=" md:h-[90%] sm:h-[120%] min-h-[600px] w-auto text-cyan blur-md animate-[spin_20s_linear_infinite] " />
      </div>
    </motion.div>
  );
};

export default HeroPic;
