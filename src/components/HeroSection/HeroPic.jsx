import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../FrammerMotion/Varient.js";
import { FaRegCircle } from "react-icons/fa6";
import MyPhoto from "/public/images/Pics.png";
import { PiHexagonThin } from "react-icons/pi";
const HeroPic = () => (
  <motion.div
    variants={fadeIn("left", 0.2)}
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0 }}
    // className="
    //   hidden md:flex
    //   relative
    //   items-end md:items-center justify-center
    //   w-full md:max-w-[40%]
    // "

    className=" h-full flex items-center justify-center "
  >
    <img src={MyPhoto} alt="Neeraj Kanojia" className="max-h-[450px] w-auto" />

    <div
      className="absolute
    md:h-[450px] lg:h-[550px] w-auto     /* never taller than section */
    text-cyan blur-md
    animate-[spin_20s_linear_infinite] "
    >
      <PiHexagonThin className=" md:h-[90%] sm:h-[120%] min-h-[600px] w-auto text-cyan blur-md animate-[spin_20s_linear_infinite] " />
    </div>
  </motion.div>
);

export default HeroPic;
